--- SproutBridge 源程序分页稿 ---
文件: app/changelog/page.tsx
页码: 003
日期: 2025-10-14

```
  1 |           fontSize: '28px', 
  2 |           fontWeight: 'bold', 
  3 |           color: '#1f2937',
  4 |           marginBottom: '10px'
  5 |         }}>
  6 |           📋 更新日志
  7 |         </h2>
  8 |         <p style={{ color: '#6b7280', fontSize: '16px' }}>
  9 |           记录 SproutBridge 的版本更新历史和功能变化
 10 |         </p>
 11 |       </div>
 12 | 
 13 |       <div style={{ maxWidth: '800px' }}>
 14 |         {changelog.length === 0 ? (
 15 |           <div style={{
 16 |             padding: '40px',
 17 |             textAlign: 'center',
 18 |             backgroundColor: '#f9fafb',
 19 |             borderRadius: '8px'
 20 |           }}>
 21 |             <p style={{ color: '#6b7280' }}>暂无更新日志</p>
 22 |           </div>
 23 |         ) : (
 24 |           changelog.map((entry, index) => (
 25 |             <div 
 26 |               key={entry.version}
 27 |               style={{
 28 |                 backgroundColor: 'white',
 29 |                 borderRadius: '12px',
 30 |                 padding: '30px',
 31 |                 marginBottom: '30px',
 32 |                 boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
 33 |                 border: '1px solid #e5e7eb'
 34 |               }}
 35 |             >
 36 |               {/* 版本头部 */}
 37 |               <div style={{ 
 38 |                 display: 'flex', 
 39 |                 alignItems: 'center', 
 40 |                 marginBottom: '20px',
 41 |                 paddingBottom: '15px',
 42 |                 borderBottom: '2px solid #f3f4f6'
 43 |               }}>
 44 |                 <span style={{
 45 |                   backgroundColor: getVersionBadgeColor(entry.type),
 46 |                   color: 'white',
 47 |                   padding: '6px 12px',
 48 |                   borderRadius: '20px',
 49 |                   fontSize: '14px',
 50 |                   fontWeight: 'bold',
```
