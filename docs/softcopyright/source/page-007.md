--- SproutBridge 源程序分页稿 ---
文件: app/course/[id]/page.tsx
页码: 007
日期: 2025-10-14

```
  1 |         <ul>
  2 |           {course.outline.map((o, i) => (
  3 |             <li key={i}>{o}</li>
  4 |           ))}
  5 |         </ul>
  6 |       ) : (
  7 |         <p>暂无本节要点信息。</p>
  8 |       )}
  9 | 
 10 |       <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
 11 |         {course.pan_share_url && (
 12 |           <button className="btn primary" onClick={openPan}>
 13 |             去百度网盘观看
 14 |           </button>
 15 |         )}
 16 |         {course.pan_extract_code && (
 17 |           <button className="btn" onClick={copyCode}>
 18 |             复制提取码
 19 |           </button>
 20 |         )}
 21 |       </div>
 22 | 
 23 |       {course.pan_share_url && (
 24 |         <div className="alert" style={{ marginTop: 16, lineHeight: 1.8 }}>
 25 |           <p>
 26 |             分享链接:{' '}
 27 |             <a href={course.pan_share_url} target="_blank" rel="noreferrer">
 28 |               {course.pan_share_url}
 29 |             </a>
 30 |           </p>
 31 |           {course.pan_extract_code && (
 32 |             <p>
 33 |               提取码: <strong>{course.pan_extract_code}</strong>
 34 |             </p>
 35 |           )}
 36 |         </div>
 37 |       )}
 38 | 
 39 |       {course.attachments && course.attachments.length > 0 && (
 40 |         <div style={{ marginTop: 16 }}>
 41 |           <h4>讲义/附件</h4>
 42 |           <ul>
 43 |             {course.attachments.map((a,i)=>(<li key={i}><a className="btn" href={a.url} target="_blank" rel="noreferrer">{a.name}</a></li>))}
 44 |           </ul>
 45 |         </div>
 46 |       )}
 47 | 
 48 |       <div className="alert" style={{marginTop:16}}>
 49 |         若网络较差，建议先在百度网盘中“保存到网盘”并离线下载后再观看。
 50 |       </div>
```
