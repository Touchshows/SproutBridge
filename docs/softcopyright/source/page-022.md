--- SproutBridge 源程序分页稿 ---
文件: docs/softcopyright/源程序选取与分页说明.md
页码: 022
日期: 2025-10-14

```
  1 | # 源程序选取与分页说明
  2 | 
  3 | ## 选取原则
  4 | - 覆盖核心功能与关键模块：页面、组件、样式、数据访问与类型定义。
  5 | - 体现工程完整性：配置文件（`package.json`、`tsconfig.json`、`next.config.mjs` 等）。
  6 | - 排除体积大且非源代码的资源：如图片、二进制文件。
  7 | 
  8 | ## 包含范围（示例）
  9 | - `app/**/*`（页面与样式，含 `app/globals.css`）
 10 | - `lib/**/*`（数据访问）
 11 | - `types.ts`（类型定义）
 12 | - `public/data/*.json`（数据结构与样例）
 13 | - 根目录配置：`package.json`、`tsconfig.json`、`tailwind.config.js`、`postcss.config.js`、`next.config.mjs`
 14 | 
 15 | ## 排除范围
 16 | - `node_modules/`、`.next/`、`out/`、`build/`、`.git/`
 17 | - 大型静态资源目录：`public/images/`
 18 | - 生成目录：`docs/softcopyright/source/`
 19 | - 异常路径：`c%3A/`（非项目正常源路径）
 20 | 
 21 | ## 分页规则
 22 | - 每页固定行数：50 行（建议值，打印一致）
 23 | - 页眉信息：软件名称、文件路径、页码、日期
 24 | - 行号：左侧显示，便于核验
 25 | - 输出目录：`docs/softcopyright/source/`
 26 | 
 27 | ## 生成方法
 28 | 在项目根目录执行：
 29 | ```
 30 | node scripts/generate_source_pages.js
 31 | ```
 32 | 执行后生成 `page-001.md` 起的分页文件与 `index.json` 清单。
```
