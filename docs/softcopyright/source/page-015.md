--- SproutBridge 源程序分页稿 ---
文件: app/layout.tsx
页码: 015
日期: 2025-10-14

```
  1 | import './globals.css';
  2 | import Link from 'next/link';
  3 | import type { ReactNode } from 'react';
  4 | 
  5 | export default function RootLayout({ children }: { children: ReactNode }) {
  6 |   return (
  7 |     <html lang="zh-CN">
  8 |       <body>
  9 |         <div className="container">
 10 |           <header className="header">
 11 |             <h1><Link href="/">SproutBridge · 课程库</Link></h1>
 12 |             <nav style={{ display: 'flex', gap: '15px' }}>
 13 |               <Link className="btn" href="/changelog">更新日志</Link>
 14 |               <Link className="btn" href="/help">观看帮助</Link>
 15 |             </nav>
 16 |           </header>
 17 |           {children}
 18 |           <footer className="footer">© 2025 SproutBridge | 为乡村儿童打造的多元启蒙课程</footer>
 19 |         </div>
 20 |       </body>
 21 |     </html>
 22 |   );
 23 | }
 24 | 
```
