import coursesData from '@/public/data/courses.json';
import type { Course } from '@/types';

export function getAllCourses(): Course[] {
  return coursesData as unknown as Course[];
}

export function getCourseById(id: string): Course | undefined {
  return getAllCourses().find(c => c.id === id);
}

export function listSubjects(): string[] {
  const s = new Set(getAllCourses().map(c => c.subject));
  return Array.from(s);
}

export function listLevels(): string[] {
  const s = new Set(getAllCourses().map(c => c.level));
  return Array.from(s);
}
