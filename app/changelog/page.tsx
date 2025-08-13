'use client';

import { useState, useEffect } from 'react';

interface ChangelogItem {
  type: string;
  description: string;
}

interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  type: 'major' | 'minor' | 'patch';
  changes: ChangelogItem[];
}

interface ChangelogData {
  changelog: ChangelogEntry[];
}

export default function ChangelogPage() {
  const [changelog, setChangelog] = useState<ChangelogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/data/changelog.json')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: ChangelogData) => {
        if (data && data.changelog && Array.isArray(data.changelog)) {
          setChangelog(data.changelog);
        } else {
          throw new Error('Invalid changelog data format');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load changelog:', err);
        setError(err.message || 'Failed to load changelog');
        setLoading(false);
      });
  }, []);

  const getVersionBadgeColor = (type: string) => {
    switch (type) {
      case 'major': return '#ef4444'; // 红色
      case 'minor': return '#3b82f6'; // 蓝色
      case 'patch': return '#10b981'; // 绿色
      default: return '#6b7280'; // 灰色
    }
  };

  const getChangeTypeColor = (type: string) => {
    switch (type) {
      case '新增': return '#10b981';
      case '优化': return '#3b82f6';
      case '修复': return '#f59e0b';
      case '删除': return '#ef4444';
      default: return '#6b7280';
    }
  };

  if (loading) {
    return (
      <main style={{ padding: '60px 100px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>更新日志</h2>
        <p>加载中...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main style={{ padding: '60px 100px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>更新日志</h2>
        <div style={{
          padding: '20px',
          backgroundColor: '#fef2f2',
          borderRadius: '8px',
          border: '1px solid #fecaca'
        }}>
          <p style={{ color: '#dc2626', margin: 0 }}>❌ 加载更新日志失败: {error}</p>
          <p style={{ color: '#6b7280', fontSize: '14px', marginTop: '10px' }}>
            请确保 /public/data/changelog.json 文件存在且格式正确
          </p>
        </div>
      </main>
    );
  }

  return (
    <main style={{ padding: '60px 100px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '28px', 
          fontWeight: 'bold', 
          color: '#1f2937',
          marginBottom: '10px'
        }}>
          📋 更新日志
        </h2>
        <p style={{ color: '#6b7280', fontSize: '16px' }}>
          记录 SproutBridge 的版本更新历史和功能变化
        </p>
      </div>

      <div style={{ maxWidth: '800px' }}>
        {changelog.length === 0 ? (
          <div style={{
            padding: '40px',
            textAlign: 'center',
            backgroundColor: '#f9fafb',
            borderRadius: '8px'
          }}>
            <p style={{ color: '#6b7280' }}>暂无更新日志</p>
          </div>
        ) : (
          changelog.map((entry, index) => (
            <div 
              key={entry.version}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '30px',
                marginBottom: '30px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb'
              }}
            >
              {/* 版本头部 */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '20px',
                paddingBottom: '15px',
                borderBottom: '2px solid #f3f4f6'
              }}>
                <span style={{
                  backgroundColor: getVersionBadgeColor(entry.type),
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginRight: '15px'
                }}>
                  {entry.version}
                </span>
                <div>
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontWeight: 'bold', 
                    color: '#1f2937',
                    margin: '0 0 5px 0'
                  }}>
                    {entry.title}
                  </h3>
                  <p style={{ 
                    color: '#6b7280', 
                    fontSize: '14px',
                    margin: 0
                  }}>
                    发布日期：{entry.date}
                  </p>
                </div>
              </div>

              {/* 更新内容 */}
              <div>
                {entry.changes && entry.changes.map((change, changeIndex) => (
                  <div 
                    key={changeIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '12px',
                      padding: '10px',
                      backgroundColor: '#f9fafb',
                      borderRadius: '8px',
                      borderLeft: `4px solid ${getChangeTypeColor(change.type)}`
                    }}
                  >
                    <span style={{
                      backgroundColor: getChangeTypeColor(change.type),
                      color: 'white',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      marginRight: '12px',
                      minWidth: '40px',
                      textAlign: 'center'
                    }}>
                      {change.type}
                    </span>
                    <p style={{ 
                      margin: 0, 
                      color: '#374151',
                      lineHeight: '1.5'
                    }}>
                      {change.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* 底部说明 */}
      <div style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#f0f9ff',
        borderRadius: '8px',
        border: '1px solid #0ea5e9'
      }}>
        <p style={{ 
          margin: 0, 
          color: '#0369a1',
          fontSize: '14px',
          textAlign: 'center'
        }}>
          💡 如有问题或建议，欢迎通过帮助页面联系我们
        </p>
      </div>
    </main>
  );
}