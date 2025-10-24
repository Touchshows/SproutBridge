/*
 * SproutBridge 源程序分页生成脚本
 * 用法：在项目根目录执行 `node scripts/generate_source_pages.js`
 */

const fs = require('fs');
const path = require('path');

const PROJECT_NAME = 'SproutBridge';
const OUTPUT_DIR = path.join(process.cwd(), 'docs', 'softcopyright', 'source');
const INDEX_FILE = path.join(OUTPUT_DIR, 'index.json');
const LINES_PER_PAGE = 50; // 每页行数

const INCLUDE_EXTS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.json', '.css', '.md', '.mjs', '.cjs']);
const EXCLUDE_DIRS = new Set(['node_modules', '.next', 'out', 'build', '.git', 'public/images', 'docs/softcopyright/source', 'c%3A']);

function isExcludedDir(rel) {
  // 标准化路径分隔符，检查是否以排除目录开头
  const normalized = rel.replace(/\\/g, '/');
  for (const ex of EXCLUDE_DIRS) {
    if (normalized === ex || normalized.startsWith(ex + '/')) return true;
  }
  return false;
}

function walk(dir, base) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    const rel = path.relative(base, full);
    if (entry.isDirectory()) {
      if (isExcludedDir(rel)) continue;
      files.push(...walk(full, base));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (INCLUDE_EXTS.has(ext)) {
        files.push(full);
      }
    }
  }
  return files;
}

function ensureOutput() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function pad(num, width = 3) {
  return String(num).padStart(width, '0');
}

function makeHeader(relPath, pageNo) {
  const date = new Date().toISOString().split('T')[0];
  return `--- ${PROJECT_NAME} 源程序分页稿 ---\n文件: ${relPath}\n页码: ${pad(pageNo)}\n日期: ${date}\n\n`;
}

function formatLines(lines) {
  return lines.map((l, i) => `${String(i + 1).padStart(3, ' ')} | ${l}`).join('\n');
}

function generate() {
  const base = process.cwd();
  ensureOutput();
  const files = walk(base, base);
  let pageCounter = 0;
  const index = [];

  for (const file of files) {
    const rel = path.relative(base, file).replace(/\\/g, '/');
    let content = fs.readFileSync(file, 'utf8');
    const lines = content.split(/\r?\n/);
    const totalPagesForFile = Math.max(1, Math.ceil(lines.length / LINES_PER_PAGE));

    for (let p = 0; p < totalPagesForFile; p++) {
      const start = p * LINES_PER_PAGE;
      const chunk = lines.slice(start, start + LINES_PER_PAGE);
      pageCounter += 1;
      const header = makeHeader(rel, pageCounter);
      const body = formatLines(chunk);
      const outName = `page-${pad(pageCounter)}.md`;
      fs.writeFileSync(path.join(OUTPUT_DIR, outName), header + '```\n' + body + '\n```\n');
      index.push({ page: pageCounter, file: rel, start_line: start + 1, end_line: Math.min(lines.length, start + LINES_PER_PAGE) });
    }
  }

  fs.writeFileSync(INDEX_FILE, JSON.stringify({ project: PROJECT_NAME, lines_per_page: LINES_PER_PAGE, total_pages: pageCounter, items: index }, null, 2));
  console.log(`Generated ${pageCounter} pages to ${OUTPUT_DIR}`);
}

generate();