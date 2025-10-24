--- SproutBridge 源程序分页稿 ---
文件: lib/data.ts
页码: 030
日期: 2025-10-14

```
  1 | import coursesData from '@/public/data/courses.json';
  2 | import type { Course, CourseCategory, SuperCategory } from '@/types';
  3 | 
  4 | /**
  5 |  * 获取所有顶级课程分类及以下所有数据
  6 |  */
  7 | export function getAllSuperCategories(): SuperCategory[] {
  8 |   return coursesData as unknown as SuperCategory[];
  9 | }
 10 | 
 11 | /**
 12 |  * 获取所有课程分类及每个分类下的课程
 13 |  */
 14 | export function getAllCourseCategories(): CourseCategory[] {
 15 |   return getAllSuperCategories().flatMap(superCat => superCat.categories);
 16 | }
 17 | 
 18 | /**
 19 |  * 获取所有课程，并将它们从分类中提取出来，平铺成一个列表
 20 |  */
 21 | export function getAllCourses(): Course[] {
 22 |   return getAllCourseCategories().flatMap(category => category.courses);
 23 | }
 24 | 
 25 | /**
 26 |  * 根据课程ID查找特定课程
 27 |  * @param id 课程的唯一ID
 28 |  */
 29 | export function getCourseById(id: string): Course | undefined {
 30 |   return getAllCourses().find(c => c.id === id);
 31 | }
 32 | 
 33 | /**
 34 |  * 获取所有课程分类的标题
 35 |  */
 36 | export function listCourseCategoryTitles(): string[] {
 37 |   return getAllCourseCategories().map(c => c.category_title);
 38 | }
 39 | 
 40 | /**
 41 |  * 获取所有课程的学科列表（去重）
 42 |  */
 43 | export function listSubjects(): string[] {
 44 |   const subjects = new Set(getAllCourses().map(c => c.subject));
 45 |   return Array.from(subjects);
 46 | }
 47 | 
 48 | /**
 49 |  * 获取所有课程的年级列表（去重）
 50 |  */
```
