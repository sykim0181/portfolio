export type TSkill = {
  name: string;
  src: string;
};

export type Position = {
  x: number;
  y: number;
};

export type Project = {
  id: number;
  name: string;
  period_start: string;
  period_end: string | null;
  skills: string[];
  images: string[];
  short_description: string;
  additional_short_description: string | null;
  deployment: string | null;
  github: string | null;
  video_url: string | null;
  feature: Feature[] | null;
  issue: Issue[] | null;
  etc: Description[] | null;
  what_i_learn: string[] | null;
  created_at: string;
};

export type Description = {
  title: string;
  content?: string[];
};

export type Feature = {
  title: string;
  content: string[];
  images?: string[];
};

export type Issue = {
  title: string;
  problem?: string[];
  approach?: string[];
  solution?: string[] | Description[];
  accomplishment?: string[];
};
