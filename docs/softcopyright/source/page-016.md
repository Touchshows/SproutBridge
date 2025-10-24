--- SproutBridge 源程序分页稿 ---
文件: app/page.tsx
页码: 016
日期: 2025-10-14

```
  1 | 'use client';
  2 | 
  3 | import Link from 'next/link';
  4 | import { useState, useMemo } from 'react';
  5 | import { getAllSuperCategories } from '@/lib/data';
  6 | import type { SuperCategory } from '@/types';
  7 | 
  8 | export default function Page() {
  9 |   const superCategories: SuperCategory[] = getAllSuperCategories();
 10 |   
 11 |   const [selectedSuperCategoryId, setSelectedSuperCategoryId] = useState<string | null>(
 12 |     superCategories.length > 0 ? superCategories[0].super_category_id : null
 13 |   );
 14 | 
 15 |   const selectedSuperCategory = useMemo(() => {
 16 |     return superCategories.find(sc => sc.super_category_id === selectedSuperCategoryId) || null;
 17 |   }, [superCategories, selectedSuperCategoryId]);
 18 | 
 19 |   if (!superCategories || superCategories.length === 0) {
 20 |     return (
 21 |       <div style={{ padding: '60px 100px' }}>
 22 |         <p>暂无课程数据</p>
 23 |       </div>
 24 |     );
 25 |   }
 26 | 
 27 |   return (
 28 |     <div style={{ display: 'flex', minHeight: 'calc(100vh - 120px)' }}>
 29 |       {/* Left Sidebar */}
 30 |       <div style={{
 31 |         width: '280px',
 32 |         padding: '40px 20px',
 33 |         backgroundColor: '#f9fafb',
 34 |         borderRight: '1px solid #e5e7eb'
 35 |       }}>
 36 |         <h2 style={{
 37 |           fontSize: '24px',
 38 |           fontWeight: 'bold',
 39 |           marginBottom: '30px',
 40 |           color: '#111827'
 41 |         }}>课程分类</h2>
 42 |         <ul>
 43 |           {superCategories.map((sc) => (
 44 |             <li key={sc.super_category_id}
 45 |               onClick={() => setSelectedSuperCategoryId(sc.super_category_id)}
 46 |               style={{
 47 |                 listStyle: 'none',
 48 |                 padding: '15px 20px',
 49 |                 marginBottom: '10px',
 50 |                 borderRadius: '8px',
```
