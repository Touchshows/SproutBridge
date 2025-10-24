--- SproutBridge 源程序分页稿 ---
文件: docs/softcopyright/运行环境与第三方组件说明.md
页码: 029
日期: 2025-10-14

```
  1 | # 运行环境与第三方组件说明
  2 | 
  3 | ## 运行环境
  4 | - 操作系统：Windows / macOS / Linux
  5 | - Node.js：18+
  6 | - npm：9+
  7 | - 浏览器：Chrome/Firefox/Safari 最新稳定版
  8 | 
  9 | ## 项目依赖（`package.json`）
 10 | - 生产依赖：
 11 |   - `next@14.2.5`
 12 |   - `react@18.2.0`
 13 |   - `react-dom@18.2.0`
 14 |   - `recharts@^3.1.2`
 15 |   - `@tailwindcss/postcss@^4.1.11`
 16 | - 开发依赖：
 17 |   - `typescript@5.4.5`
 18 |   - `eslint@8.57.0`、`eslint-config-next@14.2.5`
 19 |   - `tailwindcss@^4.1.11`、`postcss@^8.5.6`、`autoprefixer@^10.4.21`
 20 |   - `@types/node@20.5.9`、`@types/react@18.2.46`、`@types/react-dom@18.2.18`
 21 | 
 22 | ## 许可证与合规
 23 | - Next.js（MIT）
 24 | - React（MIT）
 25 | - Recharts（MIT）
 26 | - Tailwind CSS（MIT）
 27 | - TypeScript（Apache-2.0）
 28 | - 说明：以上为常见开源许可，具体以各组件仓库 LICENSE 为准；使用时遵循版权声明与许可条款。
 29 | 
 30 | ## 构建与启动
 31 | ```
 32 | npm install
 33 | npm run dev
 34 | npm run build
 35 | npm run start
 36 | ```
 37 | 
 38 | ## 部署建议
 39 | - 使用 Vercel 托管 Next.js 应用，或在 Node 服务器上运行 `next start`。
 40 | - 配置环境变量与静态资源路径，确保 `public/` 下资源可访问。
```
