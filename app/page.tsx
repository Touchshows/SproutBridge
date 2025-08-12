'use client';
import Link from 'next/link';
import { getAllCourses, listSubjects, listLevels } from '@/lib/data';
import { useMemo, useState } from 'react';
import type { Course } from '@/types';

const data: Course[] = getAllCourses();

export default function HomePage() {
  const [q, setQ] = useState('');
  const [subject, setSubject] = useState<string>('全部');
  const [level, setLevel] = useState<string>('全部');

  const subjects = ['全部', ...listSubjects()];
  const levels = ['全部', ...listLevels()];

  const filtered = useMemo(() => {
    return data.filter(c => {
      const okQ = !q || (c.title + c.description + c.tags.join(',')).includes(q);
      const okS = subject === '全部' || c.subject === subject;
      const okL = level === '全部' || c.level === level;
      return okQ && okS && okL;
    });
  }, [q, subject, level]);

  return (
    <main>
      <div style={{display:'flex', gap:8, margin:'8px 0', flexWrap:'wrap'}}>
        <input placeholder="搜索课程/标签…" value={q} onChange={e=>setQ(e.target.value)} />
        <select value={subject} onChange={e=>setSubject(e.target.value)}>
          {subjects.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <select value={level} onChange={e=>setLevel(e.target.value)}>
          {levels.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <section className="grid">
        {filtered.map(c => (
          <Link href={`/course/${c.id}`} key={c.id} className="card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.cover_url} alt={c.title} />
            <div className="card-body">
              <h3 style={{margin:'4px 0'}}>{c.title}</h3>
              <div className="badge">{c.subject}</div>
              <div className="badge">{c.level}</div>
              <div style={{color:'#6b7280', fontSize:12, marginTop:6}}>约 {c.total_minutes} 分钟</div>
            </div>
          </Link>
        ))}
      </section>
      {filtered.length===0 && <div className="alert">没有匹配的课程。</div>}
    </main>
  );
}
