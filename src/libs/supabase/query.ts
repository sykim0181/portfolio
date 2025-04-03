import { createClient } from "./server";

export async function getProjectById(id: number) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("Project").select().eq("id", id);

  if (error) throw new Error(error.message);
  if (!data || data.length === 0) throw new Error("No project found.");

  return data[0];
}
