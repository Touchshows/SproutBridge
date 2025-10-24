--- SproutBridge 源程序分页稿 ---
文件: next.config.mjs
页码: 033
日期: 2025-10-14

```
  1 | /** @type {import('next').NextConfig} */
  2 | const nextConfig = {
  3 |   images: {
  4 |     remotePatterns: [
  5 |       { protocol: 'https', hostname: '**' },
  6 |       { protocol: 'http', hostname: '**' }
  7 |     ]
  8 |   }
  9 | };
 10 | export default nextConfig;
 11 | 
```
