--- SproutBridge 源程序分页稿 ---
文件: app/course/[id]/page.tsx
页码: 006
日期: 2025-10-14

```
  1 | 'use client';
  2 | import { useParams, useRouter } from 'next/navigation';
  3 | import { getCourseById } from '@/lib/data';
  4 | 
  5 | export default function CourseDetailPage() {
  6 |   const params = useParams<{id: string}>();
  7 |   const router = useRouter();
  8 |   const course = getCourseById(params.id);
  9 |   if (!course) return <div className="alert">未找到课程。</div>;
 10 | 
 11 |   const openPan = () => {
 12 |     if (course.pan_extract_code) {
 13 |       navigator.clipboard.writeText(course.pan_extract_code).catch(() => {});
 14 |       alert(
 15 |         '已复制提取码：' +
 16 |           course.pan_extract_code +
 17 |           '，即将打开百度网盘链接。'
 18 |       );
 19 |     }
 20 |     if (course.pan_share_url) {
 21 |       window.open(course.pan_share_url, '_blank', 'noreferrer');
 22 |     }
 23 |   };
 24 | 
 25 |   const copyCode = () => {
 26 |     if (!course.pan_extract_code) return;
 27 |     navigator.clipboard
 28 |       .writeText(course.pan_extract_code)
 29 |       .then(() => {
 30 |         alert('已复制提取码：' + course.pan_extract_code);
 31 |       })
 32 |       .catch(() => {
 33 |         alert('复制失败，请手动复制');
 34 |       });
 35 |   };
 36 | 
 37 |   return (
 38 |     <main>
 39 |       <button className="btn" onClick={()=>router.back()}>&larr; 返回</button>
 40 |       <h2 style={{marginTop:8}}>{course.title}</h2>
 41 |       <div style={{display:'flex',gap:12,flexWrap:'wrap',alignItems:'center',margin:'8px 0'}}>
 42 |         <span className="badge">{course.subject}</span>
 43 |         <span className="badge">{course.level}</span>
 44 |         <span style={{color:'#6b7280'}}>约 {course.total_minutes} 分钟</span>
 45 |       </div>
 46 |       {/* eslint-disable-next-line @next/next/no-img-element */}
 47 |       {course.cover_url && <img src={course.cover_url} alt={course.title} style={{width:'100%',maxHeight:360,objectFit:'cover',borderRadius:10}} />}
 48 |       <p style={{marginTop:8}}>{course.description}</p>
 49 |       <h4>本节要点</h4>
 50 |       {course.outline && course.outline.length > 0 ? (
```
