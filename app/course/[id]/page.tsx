'use client';
import { useParams, useRouter } from 'next/navigation';
import { getCourseById } from '@/lib/data';

export default function CourseDetailPage() {
  const params = useParams<{id: string}>();
  const router = useRouter();
  const course = getCourseById(params.id);
  if (!course) return <div className="alert">未找到课程。</div>;

  const openPan = () => {
    if (course.pan_extract_code) {
      navigator.clipboard.writeText(course.pan_extract_code).catch(() => {});
      alert(
        '已复制提取码：' +
          course.pan_extract_code +
          '，即将打开百度网盘链接。'
      );
    }
    if (course.pan_share_url) {
      window.open(course.pan_share_url, '_blank', 'noreferrer');
    }
  };

  const copyCode = () => {
    if (!course.pan_extract_code) return;
    navigator.clipboard
      .writeText(course.pan_extract_code)
      .then(() => {
        alert('已复制提取码：' + course.pan_extract_code);
      })
      .catch(() => {
        alert('复制失败，请手动复制');
      });
  };

  return (
    <main>
      <button className="btn" onClick={()=>router.back()}>&larr; 返回</button>
      <h2 style={{marginTop:8}}>{course.title}</h2>
      <div style={{display:'flex',gap:12,flexWrap:'wrap',alignItems:'center',margin:'8px 0'}}>
        <span className="badge">{course.subject}</span>
        <span className="badge">{course.level}</span>
        <span style={{color:'#6b7280'}}>约 {course.total_minutes} 分钟</span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {course.cover_url && <img src={course.cover_url} alt={course.title} style={{width:'100%',maxHeight:360,objectFit:'cover',borderRadius:10}} />}
      <p style={{marginTop:8}}>{course.description}</p>
      <h4>本节要点</h4>
      {course.outline && course.outline.length > 0 ? (
        <ul>
          {course.outline.map((o, i) => (
            <li key={i}>{o}</li>
          ))}
        </ul>
      ) : (
        <p>暂无本节要点信息。</p>
      )}

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
        {course.pan_share_url && (
          <button className="btn primary" onClick={openPan}>
            去百度网盘观看
          </button>
        )}
        {course.pan_extract_code && (
          <button className="btn" onClick={copyCode}>
            复制提取码
          </button>
        )}
      </div>

      {course.pan_share_url && (
        <div className="alert" style={{ marginTop: 16, lineHeight: 1.8 }}>
          <p>
            分享链接:{' '}
            <a href={course.pan_share_url} target="_blank" rel="noreferrer">
              {course.pan_share_url}
            </a>
          </p>
          {course.pan_extract_code && (
            <p>
              提取码: <strong>{course.pan_extract_code}</strong>
            </p>
          )}
        </div>
      )}

      {course.attachments && course.attachments.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <h4>讲义/附件</h4>
          <ul>
            {course.attachments.map((a,i)=>(<li key={i}><a className="btn" href={a.url} target="_blank" rel="noreferrer">{a.name}</a></li>))}
          </ul>
        </div>
      )}

      <div className="alert" style={{marginTop:16}}>
        若网络较差，建议先在百度网盘中“保存到网盘”并离线下载后再观看。
      </div>
    </main>
  );
}
