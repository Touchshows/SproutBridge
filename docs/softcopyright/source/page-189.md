--- SproutBridge 源程序分页稿 ---
文件: scripts/generate_source_pages.js
页码: 189
日期: 2025-10-14

```
  1 | }
  2 | 
  3 | function makeHeader(relPath, pageNo) {
  4 |   const date = new Date().toISOString().split('T')[0];
  5 |   return `--- ${PROJECT_NAME} 源程序分页稿 ---\n文件: ${relPath}\n页码: ${pad(pageNo)}\n日期: ${date}\n\n`;
  6 | }
  7 | 
  8 | function formatLines(lines) {
  9 |   return lines.map((l, i) => `${String(i + 1).padStart(3, ' ')} | ${l}`).join('\n');
 10 | }
 11 | 
 12 | function generate() {
 13 |   const base = process.cwd();
 14 |   ensureOutput();
 15 |   const files = walk(base, base);
 16 |   let pageCounter = 0;
 17 |   const index = [];
 18 | 
 19 |   for (const file of files) {
 20 |     const rel = path.relative(base, file).replace(/\\/g, '/');
 21 |     let content = fs.readFileSync(file, 'utf8');
 22 |     const lines = content.split(/\r?\n/);
 23 |     const totalPagesForFile = Math.max(1, Math.ceil(lines.length / LINES_PER_PAGE));
 24 | 
 25 |     for (let p = 0; p < totalPagesForFile; p++) {
 26 |       const start = p * LINES_PER_PAGE;
 27 |       const chunk = lines.slice(start, start + LINES_PER_PAGE);
 28 |       pageCounter += 1;
 29 |       const header = makeHeader(rel, pageCounter);
 30 |       const body = formatLines(chunk);
 31 |       const outName = `page-${pad(pageCounter)}.md`;
 32 |       fs.writeFileSync(path.join(OUTPUT_DIR, outName), header + '```\n' + body + '\n```\n');
 33 |       index.push({ page: pageCounter, file: rel, start_line: start + 1, end_line: Math.min(lines.length, start + LINES_PER_PAGE) });
 34 |     }
 35 |   }
 36 | 
 37 |   fs.writeFileSync(INDEX_FILE, JSON.stringify({ project: PROJECT_NAME, lines_per_page: LINES_PER_PAGE, total_pages: pageCounter, items: index }, null, 2));
 38 |   console.log(`Generated ${pageCounter} pages to ${OUTPUT_DIR}`);
 39 | }
 40 | 
 41 | generate();
```
