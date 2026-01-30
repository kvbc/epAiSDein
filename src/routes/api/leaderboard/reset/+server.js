import { createClient } from "@supabase/supabase-js";
import { json } from "@sveltejs/kit";
import {
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  ADMIN_SECRET
} from "$env/static/private";

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY // 🔥 TU MUSI BYĆ SERVICE ROLE
);

export async function POST({ request }) {
  const { password } = await request.json();

  if (password !== ADMIN_SECRET) {
    return json({ error: "Unauthorized" }, { status: 401 });
  }

//   await supabase.from("leaderboard_entries").delete().neq("id", 0);
//   await supabase.from("leaderboard_entries").delete().gt("created_at", "1970-01-01");
await supabase.from("leaderboard_entries").delete().not("id", "is", null);

  return json({ ok: true });
}
