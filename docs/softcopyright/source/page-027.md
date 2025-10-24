--- SproutBridge 源程序分页稿 ---
文件: docs/softcopyright/软件说明书-SproutBridge.md
页码: 027
日期: 2025-10-14

```
  1 |           "outline": ["认识日月水火", "汉字游戏"],
  2 |           "pan_share_url": "https://pan.baidu.com/s/xxxx",
  3 |           "pan_extract_code": "1234"
  4 |         }
  5 |       ]
  6 |     }
  7 |   ]
  8 | }
  9 | ```
 10 | 
 11 | ## 5. 关键技术说明
 12 | - 路由与渲染：Next.js App Router；页面组件采用函数式组件与 hooks。
 13 | - 类型与校验：TypeScript 严格模式（`strict: true`）。
 14 | - 样式系统：Tailwind 原子化样式；全局样式位于 `app/globals.css`。
 15 | - 打包与构建：`next build`；开发模式 `next dev`。
 16 | - 依赖与版本：`package.json` 中记录，锁定在稳定版本（Next.js 14.2.5、React 18.2 等）。
 17 | 
 18 | ## 6. 部署与运行
 19 | - 开发环境：Node.js 18+，npm 9+。
 20 | - 本地：
 21 | ```
 22 | npm install
 23 | npm run dev
 24 | # 访问 http://localhost:3000/
 25 | ```
 26 | - 生产：
 27 | ```
 28 | npm run build
 29 | npm run start
 30 | ```
 31 | 
 32 | ## 7. 安全与权限
 33 | - 本项目为公开展示型课程库，不涉及登录与鉴权；百度网盘链接为外部资源，建议仅展示公开可访问资源。
 34 | - 后续若引入账户体系，应在说明书增补身份认证方案（如 OAuth2、JWT）。
 35 | 
 36 | ## 8. 运行环境与软硬件配置
 37 | - 操作系统：Windows / macOS / Linux（开发与部署皆可）。
 38 | - 运行环境：Node.js 18+；浏览器要求：Chromium/Firefox/Safari 最新版。
 39 | - 服务器：如使用 Vercel 或自建 Node 主机均可。
 40 | 
 41 | ## 9. 质量与测试
 42 | - 单元与集成：以页面渲染与数据加载为主，见《测试报告模板》用例列表。
 43 | - 响应式与兼容性：移动端断点与桌面端样式验证。
 44 | 
 45 | ## 10. 版本与变更记录
 46 | - 见 `public/data/changelog.json`，记录版本号、日期、变更类型与描述。
 47 | 
 48 | ## 11. 维护与扩展
 49 | - 模块扩展：支持增补新课程分类与数据文件。
 50 | - 性能优化：列表虚拟化、代码拆分、图像优化（后续）。
```
