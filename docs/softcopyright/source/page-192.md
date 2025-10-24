--- SproutBridge 源程序分页稿 ---
文件: types.ts
页码: 192
日期: 2025-10-14

```
  1 | export type Course = {
  2 |   id: string;
  3 |   title: string;
  4 |   subject: string;
  5 |   level: string;
  6 |   cover_url: string;
  7 |   description: string;
  8 |   outline: string[];
  9 |   total_minutes: number;
 10 |   pan_share_url: string;
 11 |   pan_extract_code: string;
 12 |   attachments: {
 13 |     name: string;
 14 |     url: string;
 15 |   }[];
 16 |   tags: string[];
 17 |   is_category?: boolean; // 新增：标识是否为分类入口
 18 | };
 19 | 
 20 | export type CourseCategory = {
 21 |   category_id: string;
 22 |   category_title: string;
 23 |   courses: Course[];
 24 | };
 25 | 
 26 | export type SuperCategory = {
 27 |   super_category_id: string;
 28 |   super_category_title: string;
 29 |   categories: CourseCategory[];
 30 | };
 31 | 
```
