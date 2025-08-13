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
};

export type CourseCategory = {
  category_id: string;
  category_title: string;
  courses: Course[];
};
