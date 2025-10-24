# 软件说明书 · SproutBridge（课程库平台）

## 1. 软件概述
- 软件名称：SproutBridge（幼少课程库平台）
- 版本：v2.1.0（或以实际发布版本为准）
- 著作权人：［填写个人/公司全称］
- 开发完成日期：［填写］
- 首次发表日期：［填写或无］
- 权利取得方式：原始取得
- 软件类型：应用软件（Web 应用，教育内容库）
- 简介：SproutBridge 是基于 Next.js 14 + TypeScript 的课程展示与导航平台，提供课程分类、详情查看、资源链接与观看指导等功能，适配桌面与移动端。

## 2. 功能模块说明
- 首页（`app/page.tsx`）：超级分类导航与课程入口，卡片式布局，支持响应式展示。
- 课程列表（数据源：`public/data/courses.json`）：分为语言训练、兴趣与素养、情感与心理、安全与生活、数据与激励等模块。
- 课程详情（`app/course/[id]/`）：展示课程标题、简介、总时长、提取码、百度网盘链接等。
- 更新日志（`app/changelog/page.tsx` + `public/data/changelog.json`）：记录版本变更历史。
- 帮助页面（`app/help/page.tsx`）：观看与操作指导，提供常见问题解答。

## 3. 系统架构与设计
- 前端框架：Next.js 14（App Router） + React 18 + TypeScript。
- 样式：Tailwind CSS（`app/globals.css`、`tailwind.config.js`）。
- 数据：静态 JSON（`public/data/*.json`），通过组件读取与渲染。
- 图表：`recharts`（后续数据与激励模块使用）。
- 目录结构：
  - `app/`：页面与布局，采用文件路由。
  - `lib/`：数据访问辅助（`lib/data.ts`）。
  - `public/`：静态资源与数据文件。
  - `types.ts`：共享类型定义。
- 路径别名：`@/*` 指向项目根目录（`tsconfig.json` 与 `README.md` 已说明）。

## 4. 数据结构设计
- 课程数据（简化示例）：
```json
{
  "super_category_id": "language-training",
  "super_category_title": "B. 语言训练",
  "categories": [
    {
      "category_id": "chinese-foundation",
      "category_title": "汉语基础",
      "courses": [
        {
          "id": "chinese-101",
          "title": "识字认字",
          "description": "通过图文并茂的方式，认识常见汉字",
          "subject": "语文",
          "level": "幼儿",
          "total_minutes": 15,
          "cover_url": "/images/covers/chinese-101.png",
          "outline": ["认识日月水火", "汉字游戏"],
          "pan_share_url": "https://pan.baidu.com/s/xxxx",
          "pan_extract_code": "1234"
        }
      ]
    }
  ]
}
```

## 5. 关键技术说明
- 路由与渲染：Next.js App Router；页面组件采用函数式组件与 hooks。
- 类型与校验：TypeScript 严格模式（`strict: true`）。
- 样式系统：Tailwind 原子化样式；全局样式位于 `app/globals.css`。
- 打包与构建：`next build`；开发模式 `next dev`。
- 依赖与版本：`package.json` 中记录，锁定在稳定版本（Next.js 14.2.5、React 18.2 等）。

## 6. 部署与运行
- 开发环境：Node.js 18+，npm 9+。
- 本地：
```
npm install
npm run dev
# 访问 http://localhost:3000/
```
- 生产：
```
npm run build
npm run start
```

## 7. 安全与权限
- 本项目为公开展示型课程库，不涉及登录与鉴权；百度网盘链接为外部资源，建议仅展示公开可访问资源。
- 后续若引入账户体系，应在说明书增补身份认证方案（如 OAuth2、JWT）。

## 8. 运行环境与软硬件配置
- 操作系统：Windows / macOS / Linux（开发与部署皆可）。
- 运行环境：Node.js 18+；浏览器要求：Chromium/Firefox/Safari 最新版。
- 服务器：如使用 Vercel 或自建 Node 主机均可。

## 9. 质量与测试
- 单元与集成：以页面渲染与数据加载为主，见《测试报告模板》用例列表。
- 响应式与兼容性：移动端断点与桌面端样式验证。

## 10. 版本与变更记录
- 见 `public/data/changelog.json`，记录版本号、日期、变更类型与描述。

## 11. 维护与扩展
- 模块扩展：支持增补新课程分类与数据文件。
- 性能优化：列表虚拟化、代码拆分、图像优化（后续）。
- 国际化支持：可引入 i18n 框架实现多语言界面。

## 12. 版权与许可
- 著作权：［填写个人/公司］拥有对源代码与文档的著作权。
- 第三方组件：遵循各组件开源许可（详见《运行环境与第三方组件说明》）。

## 13. 结论
SproutBridge 以简洁的数据与页面架构实现教育课程的结构化展示，易于维护与扩展，具备良好的工程化基础，可作为长期维护的课程资源平台。