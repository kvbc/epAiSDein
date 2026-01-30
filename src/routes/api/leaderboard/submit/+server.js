import { createClient } from "@supabase/supabase-js";
import { json } from "@sveltejs/kit";
import {
  SUPABASE_URL,
  SUPABASE_ANON_KEY
} from "$env/static/private";

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

export async function POST({ request }) {
  const {
    nickname,
    total_fs,
    total_rs,
    percent_fs,
    percent_rs,
    avg_grade,
    duration_ms,
    questions_answered
  } = await request.json();

  const { error } = await supabase
    .from("leaderboard_entries")
    .insert([{
      nickname,
      total_fs,
      total_rs,
      percent_fs,
      percent_rs,
      avg_grade,
      duration_ms,
      questions_answered
    }]);

  if (error) {
    return json({ error: error.message }, { status: 500 });
  }

  return json({ ok: true });
}

