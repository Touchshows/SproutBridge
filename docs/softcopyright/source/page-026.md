--- SproutBridge 源程序分页稿 ---
文件: docs/softcopyright/软件说明书-SproutBridge.md
页码: 026
日期: 2025-10-14

```
  1 | # 软件说明书 · SproutBridge（课程库平台）
  2 | 
  3 | ## 1. 软件概述
  4 | - 软件名称：SproutBridge（幼少课程库平台）
  5 | - 版本：v2.1.0（或以实际发布版本为准）
  6 | - 著作权人：［填写个人/公司全称］
  7 | - 开发完成日期：［填写］
  8 | - 首次发表日期：［填写或无］
  9 | - 权利取得方式：原始取得
 10 | - 软件类型：应用软件（Web 应用，教育内容库）
 11 | - 简介：SproutBridge 是基于 Next.js 14 + TypeScript 的课程展示与导航平台，提供课程分类、详情查看、资源链接与观看指导等功能，适配桌面与移动端。
 12 | 
 13 | ## 2. 功能模块说明
 14 | - 首页（`app/page.tsx`）：超级分类导航与课程入口，卡片式布局，支持响应式展示。
 15 | - 课程列表（数据源：`public/data/courses.json`）：分为语言训练、兴趣与素养、情感与心理、安全与生活、数据与激励等模块。
 16 | - 课程详情（`app/course/[id]/`）：展示课程标题、简介、总时长、提取码、百度网盘链接等。
 17 | - 更新日志（`app/changelog/page.tsx` + `public/data/changelog.json`）：记录版本变更历史。
 18 | - 帮助页面（`app/help/page.tsx`）：观看与操作指导，提供常见问题解答。
 19 | 
 20 | ## 3. 系统架构与设计
 21 | - 前端框架：Next.js 14（App Router） + React 18 + TypeScript。
 22 | - 样式：Tailwind CSS（`app/globals.css`、`tailwind.config.js`）。
 23 | - 数据：静态 JSON（`public/data/*.json`），通过组件读取与渲染。
 24 | - 图表：`recharts`（后续数据与激励模块使用）。
 25 | - 目录结构：
 26 |   - `app/`：页面与布局，采用文件路由。
 27 |   - `lib/`：数据访问辅助（`lib/data.ts`）。
 28 |   - `public/`：静态资源与数据文件。
 29 |   - `types.ts`：共享类型定义。
 30 | - 路径别名：`@/*` 指向项目根目录（`tsconfig.json` 与 `README.md` 已说明）。
 31 | 
 32 | ## 4. 数据结构设计
 33 | - 课程数据（简化示例）：
 34 | ```json
 35 | {
 36 |   "super_category_id": "language-training",
 37 |   "super_category_title": "B. 语言训练",
 38 |   "categories": [
 39 |     {
 40 |       "category_id": "chinese-foundation",
 41 |       "category_title": "汉语基础",
 42 |       "courses": [
 43 |         {
 44 |           "id": "chinese-101",
 45 |           "title": "识字认字",
 46 |           "description": "通过图文并茂的方式，认识常见汉字",
 47 |           "subject": "语文",
 48 |           "level": "幼儿",
 49 |           "total_minutes": 15,
 50 |           "cover_url": "/images/covers/chinese-101.png",
```
