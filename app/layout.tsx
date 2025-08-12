import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="container">
          <header className="header">
            <h1><Link href="/">SproutBridge · 课程库</Link></h1>
            <nav>
              <Link className="btn" href="/help">观看帮助</Link>
            </nav>
          </header>
          {children}
          <footer className="footer">© 2025 SproutBridge | 为乡村儿童打造的多元启蒙课程</footer>
        </div>
      </body>
    </html>
  );
}
