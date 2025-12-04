import { Tables } from "@/types/supabase";
import { Description, Feature, Issue, Project } from "@/types/common";
import { createClient } from "@supabase/supabase-js";

export function createSupabaseClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export async function getProjectById(id: number): Promise<Project> {
  const supabase = createSupabaseClient();
  const { data, error } = await supabase.from("Project").select().eq("id", id);

  if (error) throw new Error(error.message);
  if (!data || data.length === 0) throw new Error("No project found.");

  const project = data[0] as Tables<"Project">;
  return {
    id: project.id,
    name: project.name,
    period_start: project.period_start,
    period_end: project.period_end,
    skills: project.skills,
    images: project.images,
    short_description: project.short_description,
    additional_short_description: project.additional_short_description,
    deployment: project.deployment,
    github: project.github,
    video_url: project.video_url,
    feature: project.feature ? (project.feature as Feature[]) : null,
    issue: project.issue ? (project.issue as Issue[]) : null,
    etc: project.etc ? (project.etc as Description[]) : null,
    what_i_learn: project.what_i_learn,
    created_at: project.created_at,
  };
}
