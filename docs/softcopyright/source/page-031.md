--- SproutBridge 源程序分页稿 ---
文件: lib/data.ts
页码: 031
日期: 2025-10-14

```
  1 | export function listLevels(): string[] {
  2 |   const levels = new Set(getAllCourses().map(c => c.level));
  3 |   return Array.from(levels);
  4 | }
  5 | 
```
