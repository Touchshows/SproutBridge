import coursesData from '@/public/data/courses.json';
import type { Course, CourseCategory, SuperCategory } from '@/types';

/**
 * 获取所有顶级课程分类及以下所有数据
 */
export function getAllSuperCategories(): SuperCategory[] {
  return coursesData as unknown as SuperCategory[];
}

/**
 * 获取所有课程分类及每个分类下的课程
 */
export function getAllCourseCategories(): CourseCategory[] {
  return getAllSuperCategories().flatMap(superCat => superCat.categories);
}

/**
 * 获取所有课程，并将它们从分类中提取出来，平铺成一个列表
 */
export function getAllCourses(): Course[] {
  return getAllCourseCategories().flatMap(category => category.courses);
}

/**
 * 根据课程ID查找特定课程
 * @param id 课程的唯一ID
 */
export function getCourseById(id: string): Course | undefined {
  return getAllCourses().find(c => c.id === id);
}

/**
 * 获取所有课程分类的标题
 */
export function listCourseCategoryTitles(): string[] {
  return getAllCourseCategories().map(c => c.category_title);
}

/**
 * 获取所有课程的学科列表（去重）
 */
export function listSubjects(): string[] {
  const subjects = new Set(getAllCourses().map(c => c.subject));
  return Array.from(subjects);
}

/**
 * 获取所有课程的年级列表（去重）
 */
export function listLevels(): string[] {
  const levels = new Set(getAllCourses().map(c => c.level));
  return Array.from(levels);
}
