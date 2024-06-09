export type JobItem = {
  id: number;
  badgeLetters: string;
  title: string;
  company: string;
  daysAgo: number;
  relevanceScore: number;
};

export type JobItemExpanded = JobItem & {
  companyURL: string;
  coverImgURL: string;
  description: string;
  duration: string;
  location: string;
  qualifications: string[];
  relevanceScore: number;
  reviews: string[];
  salary: string;
};

export type SortBy = 'relevant' | 'recent';
export type PageDirection = 'next' | 'previous';
