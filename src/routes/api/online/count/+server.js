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
  const { count } = await supabase
    .from('online_users')
    .select('*', { count: 'exact', head: true })
    .gte('last_seen', new Date(Date.now() - 30000).toISOString());

  return new Response(JSON.stringify({ online: count ?? 0 }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
