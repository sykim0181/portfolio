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
