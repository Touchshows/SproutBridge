'use client';

import Link from 'next/link';
import { getAllCourseCategories } from '@/lib/data';

export default function Page() {
  const courseData = getAllCourseCategories();

  // 添加数据检查
  if (!courseData || courseData.length === 0) {
    return (
      <div style={{padding: '60px 100px'}}>
        <p>暂无课程数据</p>
      </div>
    );
  }

  return (
    <div style={{padding: '60px 100px'}}>
      {courseData.map((category) => (
        <div key={category.category_id} style={{marginBottom: '60px'}}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '30px',
            borderBottom: '3px solid #10b981',
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
                href={`/course/${course.id}`} 
                key={course.id} 
                style={{
                  display: 'block',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  padding: '20px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  textDecoration: 'none',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.2s ease'
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
                  <span>时长: {course.total_minutes}分钟</span>
                  <span style={{
                    backgroundColor: '#dbeafe',
                    color: '#1e40af',
                    padding: '4px 8px',
                    borderRadius: '4px'
                  }}>百度网盘</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
