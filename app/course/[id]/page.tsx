import { getAllCourses, getCourseById } from '@/lib/data';
import CourseDetailClient from './CourseDetailClient';

export async function generateStaticParams() {
  return getAllCourses().map(c => ({ id: c.id }));
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = getCourseById(params.id);
  if (!course) return <div className="alert">未找到课程。</div>;
  return <CourseDetailClient course={course} />;
}
