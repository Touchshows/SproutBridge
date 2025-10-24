--- SproutBridge 源程序分页稿 ---
文件: app/changelog/page.tsx
页码: 004
日期: 2025-10-14

```
  1 |                   marginRight: '15px'
  2 |                 }}>
  3 |                   {entry.version}
  4 |                 </span>
  5 |                 <div>
  6 |                   <h3 style={{ 
  7 |                     fontSize: '20px', 
  8 |                     fontWeight: 'bold', 
  9 |                     color: '#1f2937',
 10 |                     margin: '0 0 5px 0'
 11 |                   }}>
 12 |                     {entry.title}
 13 |                   </h3>
 14 |                   <p style={{ 
 15 |                     color: '#6b7280', 
 16 |                     fontSize: '14px',
 17 |                     margin: 0
 18 |                   }}>
 19 |                     发布日期：{entry.date}
 20 |                   </p>
 21 |                 </div>
 22 |               </div>
 23 | 
 24 |               {/* 更新内容 */}
 25 |               <div>
 26 |                 {entry.changes && entry.changes.map((change, changeIndex) => (
 27 |                   <div 
 28 |                     key={changeIndex}
 29 |                     style={{
 30 |                       display: 'flex',
 31 |                       alignItems: 'flex-start',
 32 |                       marginBottom: '12px',
 33 |                       padding: '10px',
 34 |                       backgroundColor: '#f9fafb',
 35 |                       borderRadius: '8px',
 36 |                       borderLeft: `4px solid ${getChangeTypeColor(change.type)}`
 37 |                     }}
 38 |                   >
 39 |                     <span style={{
 40 |                       backgroundColor: getChangeTypeColor(change.type),
 41 |                       color: 'white',
 42 |                       padding: '2px 8px',
 43 |                       borderRadius: '12px',
 44 |                       fontSize: '12px',
 45 |                       fontWeight: 'bold',
 46 |                       marginRight: '12px',
 47 |                       minWidth: '40px',
 48 |                       textAlign: 'center'
 49 |                     }}>
 50 |                       {change.type}
```
