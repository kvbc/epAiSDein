import { json } from "@sveltejs/kit";
import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";
import { groqChatWithFallback } from "$lib/groqWithFallback.js";
import {
  GROQ_API_KEY,
  SUPABASE_URL,
  SUPABASE_ANON_KEY
} from "$env/static/private";

/* ======================
   SUPABASE
====================== */
const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

/* ======================
   GROQ
====================== */
const groq = new OpenAI({
  apiKey: GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1"
});

/* ======================
   SAFE JSON PARSER
====================== */
function safeParseJSON(text) {
  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return null;

    try {
      return JSON.parse(match[0]);
    } catch {
      return null;
    }
  }
}

/* ======================
   API ENDPOINT
====================== */
export async function POST({ request }) {
  try {
    const { question, answer, mentor } = await request.json();

    /* -------- RAG -------- */
    const { data } = await supabase.rpc("search_documents", {
      query: question
    });

    const context = (data || [])
      .map(d => d.content)
      .filter(Boolean)
      .join("\n---\n");

    /* -------- MAIN COMPLETION -------- */
    const completion = await groqChatWithFallback(groq, {
      temperature: 0.2,
      max_tokens: 700,
      messages: [
        {
          role: "system",
          content: `
Jesteś mentorem gry edukacyjnej.
Odpowiadasz WYŁĄCZNIE w JSON:
{
  "score": number,
  "verdict": string,
  "tip": string,
  "sources": [
    { "origin": string, "excerpt": string }
  ]
}
`
        },
        {
          role: "user",
          content: `
Użyj WYŁĄCZNIE tej wiedzy:
${context || "(brak dodatkowego kontekstu)"}

Pytanie:
${question}

Odpowiedź studenta:
${answer}
`
        }
      ]
    });

    const raw = completion.choices[0].message.content;
    let result = safeParseJSON(raw);

    /* -------- JSON REPAIR -------- */
    if (!result) {
      const repair = await groqChatWithFallback(groq, {
        temperature: 0,
        max_tokens: 400,
        messages: [
          {
            role: "system",
            content: `
Zamień poniższą odpowiedź na POPRAWNY JSON:
{
  "score": number,
  "verdict": string,
  "tip": string,
  "sources": [
    { "origin": string, "excerpt": string }
  ]
}
`
          },
          { role: "user", content: raw }
        ]
      });

      result = safeParseJSON(repair.choices[0].message.content);
    }

    if (!result) {
      result = {
        score: 0,
        verdict: "Błąd systemu oceniania",
        tip: "Spróbuj ponownie za chwilę.",
        sources: []
      };
    }

    return json(result);

  } catch (err) {
    /* ===== 🚨 RATE LIMIT FALLBACK ===== */
    if (err?.code === 429) {
      console.warn("[Groq] ALL MODELS RATE LIMITED");

      return json(
        {
          score: null,
          verdict: "System chwilowo przeciążony",
          tip: "Automatyczna ocena zostanie wykonana za chwilę. Spróbuj ponownie.",
          sources: [],
          retryAfter: Math.ceil(err.retryAfter)
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil(err.retryAfter))
          }
        }
      );
    }

    // 🔥 inny błąd
    console.error(err);
    throw err;
  }
}