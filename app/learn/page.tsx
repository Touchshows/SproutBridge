'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { getAllSuperCategories } from '@/lib/data';
import type { SuperCategory } from '@/types';

export default function LearnPage() {
  const superCategories: SuperCategory[] = getAllSuperCategories();
  const [selectedSuperCategoryId, setSelectedSuperCategoryId] = useState<string | null>(
    superCategories.length > 0 ? superCategories[0].super_category_id : null
  );

  const selectedSuperCategory = useMemo(() => {
    return superCategories.find(sc => sc.super_category_id === selectedSuperCategoryId) || null;
  }, [superCategories, selectedSuperCategoryId]);

  if (!superCategories || superCategories.length === 0) {
    return (
      <div style={{ padding: '60px 100px' }}>
        <p>暂无课程数据</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 120px)' }}>
      {/* Left Sidebar */}
      <div style={{
        width: '280px',
        padding: '40px 20px',
        backgroundColor: '#f9fafb',
        borderRight: '1px solid #e5e7eb'
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '30px',
          color: '#111827'
        }}>课程分类</h2>
        <ul>
          {superCategories.map((sc) => (
            <li key={sc.super_category_id}
              onClick={() => setSelectedSuperCategoryId(sc.super_category_id)}
              style={{
                listStyle: 'none',
                padding: '15px 20px',
                marginBottom: '10px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: selectedSuperCategoryId === sc.super_category_id ? 'bold' : 'normal',
                backgroundColor: selectedSuperCategoryId === sc.super_category_id ? '#10b981' : 'transparent',
                color: selectedSuperCategoryId === sc.super_category_id ? 'white' : '#374151',
                transition: 'all 0.2s ease'
              }}
            >
              {sc.super_category_title}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '40px 60px', overflowY: 'auto' }}>
        {selectedSuperCategory ? (
          <div>
            <h1 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '40px',
              borderBottom: '4px solid #10b981',
              paddingBottom: '15px'
            }}>
              {selectedSuperCategory.super_category_title}
            </h1>
            {selectedSuperCategory.categories.map((category) => (
              <div key={category.category_id} style={{ marginBottom: '60px' }}>
                <h2 style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '30px',
                  borderBottom: '3px solid #6ee7b7',
                  paddingBottom: '10px'
                }}>
                  {category.category_title}
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '20px'
                }}>
                  {category.courses && category.courses.map((course) => (
                    <Link
                      href={course.id.startsWith('data-') ? '#' : `/course/${course.id}`}
                      key={course.id}
                      style={{
                        display: 'block',
                        backgroundColor: course.id.startsWith('data-') ? '#f3f4f6' : 'white',
                        borderRadius: '8px',
                        padding: '20px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        textDecoration: 'none',
                        border: '1px solid #e5e7eb',
                        transition: 'all 0.2s ease',
                        cursor: course.id.startsWith('data-') ? 'not-allowed' : 'pointer'
                      }}
                      onClick={(e) => {
                        if (course.id.startsWith('data-')) {
                          e.preventDefault();
                        }
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <h3 style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: '#1f2937',
                        margin: '0 0 10px 0'
                      }}>{course.title}</h3>
                      <p style={{
                        fontSize: '14px',
                        color: '#6b7280',
                        margin: '0 0 15px 0',
                        lineHeight: '1.5'
                      }}>{course.description}</p>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '12px',
                        color: '#9ca3af'
                      }}>
                        <span>时长: {course.total_minutes > 0 ? `${course.total_minutes}分钟` : 'N/A'}</span>
                        <span style={{
                          backgroundColor: '#dbeafe',
                          color: '#1e40af',
                          padding: '4px 8px',
                          borderRadius: '4px'
                        }}>
                          {course.id.startsWith('data-') ? '待开发' : '百度网盘'}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>请在左侧选择一个课程分类</p>
        )}
      </div>
    </div>
  );
}