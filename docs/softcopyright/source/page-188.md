--- SproutBridge 源程序分页稿 ---
文件: scripts/generate_source_pages.js
页码: 188
日期: 2025-10-14

```
  1 | /*
  2 |  * SproutBridge 源程序分页生成脚本
  3 |  * 用法：在项目根目录执行 `node scripts/generate_source_pages.js`
  4 |  */
  5 | 
  6 | const fs = require('fs');
  7 | const path = require('path');
  8 | 
  9 | const PROJECT_NAME = 'SproutBridge';
 10 | const OUTPUT_DIR = path.join(process.cwd(), 'docs', 'softcopyright', 'source');
 11 | const INDEX_FILE = path.join(OUTPUT_DIR, 'index.json');
 12 | const LINES_PER_PAGE = 50; // 每页行数
 13 | 
 14 | const INCLUDE_EXTS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.json', '.css', '.md', '.mjs', '.cjs']);
 15 | const EXCLUDE_DIRS = new Set(['node_modules', '.next', 'out', 'build', '.git', 'public/images', 'docs/softcopyright/source', 'c%3A']);
 16 | 
 17 | function isExcludedDir(rel) {
 18 |   // 标准化路径分隔符，检查是否以排除目录开头
 19 |   const normalized = rel.replace(/\\/g, '/');
 20 |   for (const ex of EXCLUDE_DIRS) {
 21 |     if (normalized === ex || normalized.startsWith(ex + '/')) return true;
 22 |   }
 23 |   return false;
 24 | }
 25 | 
 26 | function walk(dir, base) {
 27 |   const entries = fs.readdirSync(dir, { withFileTypes: true });
 28 |   const files = [];
 29 |   for (const entry of entries) {
 30 |     const full = path.join(dir, entry.name);
 31 |     const rel = path.relative(base, full);
 32 |     if (entry.isDirectory()) {
 33 |       if (isExcludedDir(rel)) continue;
 34 |       files.push(...walk(full, base));
 35 |     } else if (entry.isFile()) {
 36 |       const ext = path.extname(entry.name).toLowerCase();
 37 |       if (INCLUDE_EXTS.has(ext)) {
 38 |         files.push(full);
 39 |       }
 40 |     }
 41 |   }
 42 |   return files;
 43 | }
 44 | 
 45 | function ensureOutput() {
 46 |   fs.mkdirSync(OUTPUT_DIR, { recursive: true });
 47 | }
 48 | 
 49 | function pad(num, width = 3) {
 50 |   return String(num).padStart(width, '0');
```
