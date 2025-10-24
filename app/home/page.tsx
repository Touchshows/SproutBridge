'use client';

import Link from 'next/link';
import { useMemo, useEffect, useState } from 'react';
import { getAllSuperCategories, getAllCourses, listSubjects, listLevels } from '@/lib/data';
import newsData from '@/public/data/news.json';
import bannersData from '@/public/data/banners.json';

export default function HomePage() {
  const superCategories = getAllSuperCategories();
  const allCourses = getAllCourses();
  const subjects = listSubjects();
  const levels = listLevels();

  const stats = useMemo(() => ({
    superCount: superCategories.length,
    courseCount: allCourses.length,
    subjectCount: subjects.length,
    levelCount: levels.length,
  }), [superCategories, allCourses, subjects, levels]);

  // 轮播图：使用固定海报数据（5张）
  const slides = useMemo(() => {
    return bannersData.slice(0, 5).map(b => ({
      src: b.src,
      title: b.title,
      link: b.link || '#',
    }));
  }, []);

  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % Math.max(1, slides.length));
    }, 3500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goto = (idx: number) => setActive(idx % Math.max(1, slides.length));

  return (
    <main style={{ padding: '40px 80px' }}>
      {/* 焦点图轮播 */}
      <section style={{ marginBottom: 24 }}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '2 / 1', maxHeight: 380, borderRadius: 16, overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', backgroundColor: '#0b1020' }}>
          {slides.length > 0 ? (
            <Link href={slides[active].link} style={{ display: 'block', width: '100%', height: '100%', position: 'relative' }}>
              {/* 背景填充：模糊并覆盖以避免留白 */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slides[active].src} alt={slides[active].title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(12px) brightness(0.9)', transform: 'scale(1.08)' }} />
              {/* 前景图片：完整显示 */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slides[active].src} alt={slides[active].title} style={{ position: 'relative', display: 'block', margin: 'auto', maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%', objectFit: 'contain' }} />
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.45))', color: 'white', padding: '16px 24px' }}>
                <h3 style={{ margin: 0, fontSize: 20 }}>{slides[active].title}</h3>
              </div>
            </Link>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#6b7280' }}>暂无图片</div>
          )}

          {/* 左右切换按钮 */}
          <button onClick={() => goto((active - 1 + slides.length) % Math.max(1, slides.length))} aria-label="上一张" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.35)', color: 'white', border: 'none', borderRadius: 9999, width: 32, height: 32, cursor: 'pointer' }}>‹</button>
          <button onClick={() => goto((active + 1) % Math.max(1, slides.length))} aria-label="下一张" style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.35)', color: 'white', border: 'none', borderRadius: 9999, width: 32, height: 32, cursor: 'pointer' }}>›</button>

          {/* 导航圆点 */}
          <div style={{ position: 'absolute', bottom: 12, right: 16, display: 'flex', gap: 6 }}>
            {slides.map((_, i) => (
              <button key={i} onClick={() => goto(i)} aria-label={`第 ${i+1} 张`} style={{ width: 10, height: 10, borderRadius: '50%', border: '1px solid white', backgroundColor: active === i ? 'white' : 'transparent', opacity: 0.9 }} />
            ))}
          </div>
        </div>
      </section>

      {/* 快速入口 */}
      <section style={{
        background: 'linear-gradient(90deg,#10b981,#34d399)',
        color: 'white',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px'
      }}>
        <h2 style={{ fontSize: 28, fontWeight: 'bold', margin: 0 }}>SproutBridge · 儿童启蒙学习平台</h2>
        <p style={{ marginTop: 8, fontSize: 15 }}>聚合多学科课程资源，提供学习激励与成长评估。</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
          <Link className="btn" href="/learn" style={{ backgroundColor: 'white', color: '#065f46' }}>进入课程学习</Link>
          <Link className="btn" href="/community" style={{ backgroundColor: 'white', color: '#065f46' }}>进入互动板块</Link>
          <Link className="btn" href="/assessment" style={{ backgroundColor: 'white', color: '#065f46' }}>能力评估</Link>
          <Link className="btn" href="/changelog" style={{ backgroundColor: 'white', color: '#065f46' }}>更新日志</Link>
        </div>
      </section>

      {/* 统计卡片 */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16, marginBottom: 24 }}>
        {[
          { label: '总课程', value: stats.courseCount },
          { label: '顶级模块', value: stats.superCount },
          { label: '学科数量', value: stats.subjectCount },
          { label: '年级层次', value: stats.levelCount },
        ].map((s, i) => (
          <div key={i} style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div style={{ color: '#6b7280', fontSize: 14 }}>{s.label}</div>
            <div style={{ fontWeight: 'bold', fontSize: 24, color: '#111827' }}>{s.value}</div>
          </div>
        ))}
      </section>

      {/* 新闻列表 */}
      <section>
        <h3 style={{ fontSize: 22, fontWeight: 'bold', color: '#111827', marginBottom: 12 }}>最新新闻</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
          {newsData.map(n => (
            <Link key={n.id} href={n.link} style={{ display: 'block', backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: 16, textDecoration: 'none' }}>
              <div style={{ color: '#6b7280', fontSize: 12 }}>{n.date}</div>
              <h4 style={{ margin: '6px 0 6px 0', fontSize: 16, color: '#1f2937' }}>{n.title}</h4>
              <p style={{ margin: 0, color: '#6b7280', fontSize: 14 }}>{n.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}