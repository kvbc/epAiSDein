// import { createClient } from "@supabase/supabase-js";
// import { json } from "@sveltejs/kit";
// import {
//   SUPABASE_URL,
//   SUPABASE_ANON_KEY
// } from "$env/static/private";

// const supabase = createClient(
//   SUPABASE_URL,
//   SUPABASE_ANON_KEY
// );

// export async function POST({ request }) {
//   const {
//     nickname,
//     total_fs,
//     total_rs,
//     percent_fs,
//     percent_rs,
//     avg_grade,
//     duration_ms,
//     questions_answered
//   } = await request.json();

//   const { error } = await supabase
//     .from("leaderboard_entries")
//     .insert([{
//       nickname,
//       total_fs,
//       total_rs,
//       percent_fs,
//       percent_rs,
//       avg_grade,
//       duration_ms,
//       questions_answered
//     }]);

//   if (error) {
//     return json({ error: error.message }, { status: 500 });
//   }

//   return json({ ok: true });
// }

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

function isBetter(newScore, oldScore) {
  // 1️⃣ avg_grade
  if (newScore.avg_grade > oldScore.avg_grade) return true;
  if (newScore.avg_grade < oldScore.avg_grade) return false;

  // 2️⃣ suma procentów
  const newPercent =
    newScore.percent_fs + newScore.percent_rs;
  const oldPercent =
    oldScore.percent_fs + oldScore.percent_rs;

  if (newPercent > oldPercent) return true;
  if (newPercent < oldPercent) return false;

  // 3️⃣ czas (krócej = lepiej)
  return newScore.duration_ms < oldScore.duration_ms;
}

export async function POST({ request }) {
  const payload = await request.json();
  const {
    nickname,
    total_fs,
    total_rs,
    avg_grade,
    questions_answered
  } = payload;

   if (
    !questions_answered ||
    questions_answered === 0 ||
    (total_fs === 0 && total_rs === 0) ||
    avg_grade === 0
  ) {
    return json({
      ok: true,
      ignored: true,
      reason: "zero-score"
    });
  }


  // 🔍 sprawdź czy już istnieje
  const { data: existing, error: fetchError } =
    await supabase
      .from("leaderboard_entries")
      .select("*")
      .eq("nickname", nickname)
      .single();

  // ❌ błąd inny niż "nie znaleziono"
  if (fetchError && fetchError.code !== "PGRST116") {
    return json(
      { error: fetchError.message },
      { status: 500 }
    );
  }

  // 🆕 NIE ISTNIEJE → INSERT
  if (!existing) {
    const { error } = await supabase
      .from("leaderboard_entries")
      .insert([payload]);

    if (error) {
      return json({ error: error.message }, { status: 500 });
    }

    return json({ ok: true, inserted: true });
  }

  // 🔁 ISTNIEJE → PORÓWNAJ
  if (isBetter(payload, existing)) {
    const { error } = await supabase
      .from("leaderboard_entries")
      .update(payload)
      .eq("nickname", nickname);

    if (error) {
      return json({ error: error.message }, { status: 500 });
    }

    return json({ ok: true, updated: true });
  }

  // 💤 GORSZY → IGNORUJ
  return json({
    ok: true,
    ignored: true,
    reason: "worse_score"
  });
}
