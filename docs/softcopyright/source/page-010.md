--- SproutBridge 源程序分页稿 ---
文件: app/help/page.tsx
页码: 010
日期: 2025-10-14

```
  1 | export default function HelpPage(){
  2 |   return (
  3 |     <main style={{ padding: '60px 100px' }}>
  4 |       <div style={{ marginBottom: '40px' }}>
  5 |         <h2 style={{ 
  6 |           fontSize: '28px', 
  7 |           fontWeight: 'bold', 
  8 |           color: '#1f2937',
  9 |           marginBottom: '10px'
 10 |         }}>
 11 |           📖 观看帮助
 12 |         </h2>
 13 |         <p style={{ color: '#6b7280', fontSize: '16px' }}>
 14 |           如何使用 SproutBridge 观看课程资源
 15 |         </p>
 16 |       </div>
 17 | 
 18 |       {/* 观看步骤 */}
 19 |       <div style={{
 20 |         backgroundColor: 'white',
 21 |         borderRadius: '12px',
 22 |         padding: '30px',
 23 |         marginBottom: '30px',
 24 |         boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
 25 |         border: '1px solid #e5e7eb'
 26 |       }}>
 27 |         <h3 style={{ 
 28 |           fontSize: '20px', 
 29 |           fontWeight: 'bold', 
 30 |           color: '#1f2937',
 31 |           marginBottom: '20px',
 32 |           display: 'flex',
 33 |           alignItems: 'center'
 34 |         }}>
 35 |           🎯 观看步骤
 36 |         </h3>
 37 |         <ol style={{ 
 38 |           paddingLeft: '20px',
 39 |           lineHeight: '1.8',
 40 |           color: '#374151'
 41 |         }}>
 42 |           <li style={{ marginBottom: '10px' }}>
 43 |             <strong>点击课程页的"去百度网盘观看"</strong>按钮
 44 |           </li>
 45 |           <li style={{ marginBottom: '10px' }}>
 46 |             若弹出提取码提示，<strong>提取码已自动复制</strong>；在打开的页面/网盘App中粘贴即可
 47 |           </li>
 48 |           <li style={{ marginBottom: '10px' }}>
 49 |             弱网情况下，建议先在网盘中<strong>"保存到网盘/离线下载"</strong>，再回看更流畅
 50 |           </li>
```
