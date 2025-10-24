--- SproutBridge 源程序分页稿 ---
文件: app/changelog/page.tsx
页码: 002
日期: 2025-10-14

```
  1 |     switch (type) {
  2 |       case 'major': return '#ef4444'; // 红色
  3 |       case 'minor': return '#3b82f6'; // 蓝色
  4 |       case 'patch': return '#10b981'; // 绿色
  5 |       default: return '#6b7280'; // 灰色
  6 |     }
  7 |   };
  8 | 
  9 |   const getChangeTypeColor = (type: string) => {
 10 |     switch (type) {
 11 |       case '新增': return '#10b981';
 12 |       case '优化': return '#3b82f6';
 13 |       case '修复': return '#f59e0b';
 14 |       case '删除': return '#ef4444';
 15 |       default: return '#6b7280';
 16 |     }
 17 |   };
 18 | 
 19 |   if (loading) {
 20 |     return (
 21 |       <main style={{ padding: '60px 100px' }}>
 22 |         <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>更新日志</h2>
 23 |         <p>加载中...</p>
 24 |       </main>
 25 |     );
 26 |   }
 27 | 
 28 |   if (error) {
 29 |     return (
 30 |       <main style={{ padding: '60px 100px' }}>
 31 |         <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>更新日志</h2>
 32 |         <div style={{
 33 |           padding: '20px',
 34 |           backgroundColor: '#fef2f2',
 35 |           borderRadius: '8px',
 36 |           border: '1px solid #fecaca'
 37 |         }}>
 38 |           <p style={{ color: '#dc2626', margin: 0 }}>❌ 加载更新日志失败: {error}</p>
 39 |           <p style={{ color: '#6b7280', fontSize: '14px', marginTop: '10px' }}>
 40 |             请确保 /public/data/changelog.json 文件存在且格式正确
 41 |           </p>
 42 |         </div>
 43 |       </main>
 44 |     );
 45 |   }
 46 | 
 47 |   return (
 48 |     <main style={{ padding: '60px 100px' }}>
 49 |       <div style={{ marginBottom: '40px' }}>
 50 |         <h2 style={{ 
```
