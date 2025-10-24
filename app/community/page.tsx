'use client';

import { useState } from 'react';

function saveFeedback(name: string, content: string) {
  if (typeof window === 'undefined') return;
  try {
    const key = 'sb_feedbacks_v1';
    const list = JSON.parse(window.localStorage.getItem(key) || '[]');
    list.push({ name, content, time: Date.now() });
    window.localStorage.setItem(key, JSON.stringify(list));
  } catch {}
}

export default function CommunityPage() {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const submit = () => {
    if (!content.trim()) { alert('请填写反馈内容'); return; }
    saveFeedback(name.trim(), content.trim());
    setContent('');
    alert('已提交反馈，感谢你的建议！');
  };

  return (
    <main style={{ padding: '60px 100px' }}>
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: 28, fontWeight: 'bold', color: '#1f2937', marginBottom: 8 }}>互动板块</h2>
        <p style={{ color: '#6b7280' }}>反馈建议、学习讨论与投票（占位），后续接入评论系统。</p>
      </div>

      {/* 反馈建议 */}
      <section style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: 20, marginBottom: 24 }}>
        <h3 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>意见反馈</h3>
        <div style={{ display: 'grid', gap: 10, maxWidth: 600 }}>
          <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="称呼（选填）" style={{ padding: 10, border: '1px solid #e5e7eb', borderRadius: 8 }} />
          <textarea value={content} onChange={(e)=>setContent(e.target.value)} placeholder="你的建议/遇到的问题" rows={4} style={{ padding: 10, border: '1px solid #e5e7eb', borderRadius: 8 }} />
          <button className="btn" onClick={submit} style={{ backgroundColor: '#10b981', color: 'white' }}>提交反馈</button>
        </div>
      </section>

      {/* 学习讨论占位 */}
      <section style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: 20, marginBottom: 24 }}>
        <h3 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>学习讨论（占位）</h3>
        <p style={{ color: '#6b7280' }}>这里将展示课程下的讨论与问答。暂未接入后端，后续支持评论、置顶与敏感词过滤。</p>
      </section>

      {/* 建议投票占位 */}
      <section style={{ backgroundColor: '#f9fafb', border: '1px dashed #d1d5db', borderRadius: 12, padding: 20 }}>
        <h3 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>建议投票（占位）</h3>
        <p style={{ color: '#6b7280' }}>计划支持对新功能的投票，帮助确定优先级。</p>
      </section>
    </main>
  );
}