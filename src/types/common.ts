import { Tables } from "./supabase";

export type TSkill = {
  name: string;
  src: string;
};

export type Position = {
  x: number;
  y: number;
};

export type Project = Tables<"Project">;

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
