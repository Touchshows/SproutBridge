--- SproutBridge 源程序分页稿 ---
文件: app/page.tsx
页码: 018
日期: 2025-10-14

```
  1 |                         backgroundColor: course.id.startsWith('data-') ? '#f3f4f6' : 'white',
  2 |                         borderRadius: '8px',
  3 |                         padding: '20px',
  4 |                         boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  5 |                         textDecoration: 'none',
  6 |                         border: '1px solid #e5e7eb',
  7 |                         transition: 'all 0.2s ease',
  8 |                         cursor: course.id.startsWith('data-') ? 'not-allowed' : 'pointer'
  9 |                       }}
 10 |                       onClick={(e) => {
 11 |                         if (course.id.startsWith('data-')) {
 12 |                           e.preventDefault();
 13 |                         }
 14 |                       }}
 15 |                       onMouseEnter={(e) => {
 16 |                         e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
 17 |                         e.currentTarget.style.transform = 'translateY(-2px)';
 18 |                       }}
 19 |                       onMouseLeave={(e) => {
 20 |                         e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
 21 |                         e.currentTarget.style.transform = 'translateY(0)';
 22 |                       }}
 23 |                     >
 24 |                       <h3 style={{
 25 |                         fontSize: '18px',
 26 |                         fontWeight: '600',
 27 |                         color: '#1f2937',
 28 |                         margin: '0 0 10px 0'
 29 |                       }}>{course.title}</h3>
 30 |                       <p style={{
 31 |                         fontSize: '14px',
 32 |                         color: '#6b7280',
 33 |                         margin: '0 0 15px 0',
 34 |                         lineHeight: '1.5'
 35 |                       }}>{course.description}</p>
 36 |                       <div style={{
 37 |                         display: 'flex',
 38 |                         justifyContent: 'space-between',
 39 |                         alignItems: 'center',
 40 |                         fontSize: '12px',
 41 |                         color: '#9ca3af'
 42 |                       }}>
 43 |                         <span>时长: {course.total_minutes > 0 ? `${course.total_minutes}分钟` : 'N/A'}</span>
 44 |                         <span style={{
 45 |                           backgroundColor: '#dbeafe',
 46 |                           color: '#1e40af',
 47 |                           padding: '4px 8px',
 48 |                           borderRadius: '4px'
 49 |                         }}>
 50 |                           {course.id.startsWith('data-') ? '待开发' : '百度网盘'}
```
