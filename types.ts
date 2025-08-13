export type Course = {
  id: string;
  title: string;
  subject: string;
  level: string;
  cover_url: string;
  description: string;
  outline: string[];
  total_minutes: number;
  pan_share_url: string;
  pan_extract_code: string;
  attachments: {
    name: string;
    url: string;
  }[];
  tags: string[];
  is_category?: boolean; // 新增：标识是否为分类入口
};

export type CourseCategory = {
  category_id: string;
  category_title: string;
  courses: Course[];
};
