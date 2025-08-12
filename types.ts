export type Attachment = { name: string; url: string };
export type Course = {
  id: string;
  title: string;
  subject: '数学' | '英语' | '常识' | '本土文化';
  level: '低年级' | '中年级' | '高年级';
  cover_url: string;
  description: string;
  outline: string[];
  total_minutes: number;
  pan_share_url: string;
  pan_extract_code?: string;
  attachments: Attachment[];
  tags: string[];
};
