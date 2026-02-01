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

export async function POST({ request }) {
  const { id } = await request.json();

  if (!id) {
    return new Response('no id', { status: 400 });
  }

  await supabase
    .from('online_users')
    .upsert(
      { id, last_seen: new Date().toISOString() },
      { onConflict: 'id' }
    );

  return new Response(null, { status: 204 });
}
