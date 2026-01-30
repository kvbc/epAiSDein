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

export async function GET() {
  const { data, error } = await supabase
    .from("leaderboard_entries")
    .select("*");

  if (error) {
    return json({ error: error.message }, { status: 500 });
  }

  return json(data);
}
