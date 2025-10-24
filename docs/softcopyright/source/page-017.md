--- SproutBridge 源程序分页稿 ---
文件: app/page.tsx
页码: 017
日期: 2025-10-14

```
  1 |                 cursor: 'pointer',
  2 |                 fontWeight: selectedSuperCategoryId === sc.super_category_id ? 'bold' : 'normal',
  3 |                 backgroundColor: selectedSuperCategoryId === sc.super_category_id ? '#10b981' : 'transparent',
  4 |                 color: selectedSuperCategoryId === sc.super_category_id ? 'white' : '#374151',
  5 |                 transition: 'all 0.2s ease'
  6 |               }}
  7 |             >
  8 |               {sc.super_category_title}
  9 |             </li>
 10 |           ))}
 11 |         </ul>
 12 |       </div>
 13 | 
 14 |       {/* Main Content */}
 15 |       <div style={{ flex: 1, padding: '40px 60px', overflowY: 'auto' }}>
 16 |         {selectedSuperCategory ? (
 17 |           <div>
 18 |             <h1 style={{
 19 |               fontSize: '36px',
 20 |               fontWeight: 'bold',
 21 |               color: '#111827',
 22 |               marginBottom: '40px',
 23 |               borderBottom: '4px solid #10b981',
 24 |               paddingBottom: '15px'
 25 |             }}>
 26 |               {selectedSuperCategory.super_category_title}
 27 |             </h1>
 28 |             {selectedSuperCategory.categories.map((category) => (
 29 |               <div key={category.category_id} style={{ marginBottom: '60px' }}>
 30 |                 <h2 style={{
 31 |                   fontSize: '24px',
 32 |                   fontWeight: 'bold',
 33 |                   color: '#1f2937',
 34 |                   marginBottom: '30px',
 35 |                   borderBottom: '3px solid #6ee7b7',
 36 |                   paddingBottom: '10px'
 37 |                 }}>
 38 |                   {category.category_title}
 39 |                 </h2>
 40 |                 <div style={{
 41 |                   display: 'grid',
 42 |                   gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
 43 |                   gap: '20px'
 44 |                 }}>
 45 |                   {category.courses && category.courses.map((course) => (
 46 |                     <Link
 47 |                       href={course.id.startsWith('data-') ? '#' : `/course/${course.id}`}
 48 |                       key={course.id}
 49 |                       style={{
 50 |                         display: 'block',
```
