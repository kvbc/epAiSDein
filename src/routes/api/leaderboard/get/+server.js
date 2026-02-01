import { createClient } from "@supabase/supabase-js";
import { json } from "@sveltejs/kit";
import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
} from "$env/static/private";

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// export async function GET() {
//   const { data, error } = await supabase
//     .from("leaderboard_entries")
//     .select("*");

//   if (error) {
//     return json({ error: error.message }, { status: 500 });
//   }

//   return json(data);
// }

export async function GET() {
  const { data, error } = await supabase
    .from("leaderboard_entries")
    .select("*")
    .order("avg_grade", { ascending: false })
    .order("percent_fs", { ascending: false })
    .order("percent_rs", { ascending: false })
    .order("duration_ms", { ascending: true })
    .limit(100);

  if (error) {
    return json({ error: error.message }, { status: 500 });
  }

  return json(data);
}
