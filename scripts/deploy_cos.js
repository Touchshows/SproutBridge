/*
 * Local one-click deploy to Tencent COS
 * Requires env vars:
 *   TENCENT_SECRET_ID, TENCENT_SECRET_KEY, COS_BUCKET, COS_REGION
 * Optional:
 *   COS_PREFIX (upload to this prefix path, e.g. "sproutbridge/")
 */

const fs = require('fs');
const path = require('path');
const COS = require('cos-nodejs-sdk-v5');
const mime = require('mime-types');

const SecretId = process.env.TENCENT_SECRET_ID;
const SecretKey = process.env.TENCENT_SECRET_KEY;
const Bucket = process.env.COS_BUCKET; // e.g. yourbucket-1234567890
const Region = process.env.COS_REGION; // e.g. ap-guangzhou
const Prefix = (process.env.COS_PREFIX || '').replace(/^\/+|\/+$/g, ''); // trim slashes

function fail(msg) {
  console.error(`\n[deploy:cos] ERROR: ${msg}`);
  process.exit(1);
}

if (!SecretId || !SecretKey || !Bucket || !Region) {
  fail('Missing env vars. Please set TENCENT_SECRET_ID, TENCENT_SECRET_KEY, COS_BUCKET, COS_REGION');
}

const cos = new COS({ SecretId, SecretKey });

const outDir = path.resolve(__dirname, '..', 'out');
if (!fs.existsSync(outDir)) {
  fail(`Output directory not found: ${outDir}. Run 'npm run build' first.`);
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

function toKey(fileAbs) {
  const rel = path.relative(outDir, fileAbs).split(path.sep).join('/');
  const base = Prefix ? `${Prefix}/${rel}` : rel;
  return base;
}

function uploadFile(fileAbs) {
  const Body = fs.readFileSync(fileAbs);
  const Key = toKey(fileAbs);
  const ContentType = mime.lookup(fileAbs) || 'application/octet-stream';
  return new Promise((resolve, reject) => {
    cos.putObject({ Bucket, Region, Key, Body, ContentType }, (err, data) => {
      if (err) return reject(err);
      resolve({ Key, size: Body.length });
    });
  });
}

async function main() {
  const allFiles = walk(outDir);
  console.log(`[deploy:cos] Uploading ${allFiles.length} files to cos://${Bucket}/${Prefix || ''}`);

  // simple concurrency control
  const concurrency = 8;
  let index = 0;
  let uploaded = 0;
  const errors = [];

  async function worker() {
    while (index < allFiles.length) {
      const i = index++;
      const file = allFiles[i];
      try {
        const res = await uploadFile(file);
        uploaded++;
        if (uploaded % 50 === 0) {
          console.log(`[deploy:cos] Uploaded ${uploaded}/${allFiles.length}...`);
        }
      } catch (e) {
        console.error(`[deploy:cos] Failed: ${file} → ${e.message || e}`);
        errors.push({ file, error: e });
      }
    }
  }

  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);

  console.log(`[deploy:cos] Done. Success: ${uploaded}, Failures: ${errors.length}`);
  if (errors.length) {
    console.log('[deploy:cos] First error sample:', errors[0]);
    process.exitCode = 1;
  }
}

main().catch((e) => fail(e.message || e));