// import { json } from "@sveltejs/kit";
// import { createClient } from "@supabase/supabase-js";
// import OpenAI from "openai";
// import {
//   GROQ_API_KEY,
//   SUPABASE_URL,
//   SUPABASE_ANON_KEY
// } from "$env/static/private";

// /* ======================
//    SUPABASE
// ====================== */
// const supabase = createClient(
//   SUPABASE_URL,
//   SUPABASE_ANON_KEY
// );

// /* ======================
//    GROQ (OpenAI-compatible)
// ====================== */
// const groq = new OpenAI({
//   apiKey: GROQ_API_KEY,
//   baseURL: "https://api.groq.com/openai/v1"
// });

// /* ======================
//    SAFE JSON PARSER
// ====================== */
// function safeParseJSON(text) {
//   if (!text) return null;

//   try {
//     return JSON.parse(text);
//   } catch {
//     // próbujemy wyciągnąć {...}
//     const match = text.match(/\{[\s\S]*\}/);
//     if (!match) return null;

//     try {
//       return JSON.parse(match[0]);
//     } catch {
//       return null;
//     }
//   }
// }

// /* ======================
//    API ENDPOINT
// ====================== */
// export async function POST({ request }) {
//   const { question, answer } = await request.json();

//   /* -------- RAG CONTEXT -------- */
//   const { data } = await supabase
//     .from("documents")
//     .select("content")
//     .limit(3);

//   const context = (data || [])
//     .map(d => d.content)
//     .filter(Boolean)
//     .join("\n---\n");

//   /* -------- MAIN COMPLETION -------- */
//   const completion = await groq.chat.completions.create({
//     model: "llama-3.1-8b-instant",
//     temperature: 0.2,
//     messages: [
//       {
//         role: "system",
//         content: `
// Jesteś „Mentorem Gry” – wymagającym, ale pomocnym mentorem akademickim
// z przedmiotu „Algorytmy i Struktury Danych”
// (kierunek: informatyka stosowana).

// Twoim zadaniem jest OCENIĆ odpowiedź studenta ORAZ UCZYĆ.

// ────────────────────────
// ZASADY OCENIANIA (OBOWIĄZKOWE)
// ────────────────────────

// Skala punktowa:
// - 0–20  → odpowiedź błędna lub nie na temat
// - 21–40 → odpowiedź słaba, brak kluczowych pojęć
// - 41–60 → odpowiedź częściowo poprawna
// - 61–80 → odpowiedź w większości poprawna
// - 81–100 → odpowiedź bardzo dobra / kompletna

// Zasady spójności:
// - jeśli score < 40 → verdict MUSI jasno wskazywać, CZEGO brakuje
// - jeśli score ≥ 60 → verdict MUSI jasno potwierdzać poprawność
// - score i verdict MUSZĄ być logicznie zgodne
// - NIE oceniaj stylistyki ani języka

// ────────────────────────
// FORMAT (ŚCIŚLE)
// ────────────────────────

// Zwróć WYŁĄCZNIE poprawny JSON:

// {
//   "score": number,
//   "verdict": string,
//   "tip": string
// }

// Język: polski.
// `
//       },
//       {
//         role: "user",
//         content: `
// Użyj WYŁĄCZNIE tej wiedzy:
// ${context || "(brak dodatkowego kontekstu)"}

// Pytanie:
// ${question}

// Odpowiedź studenta:
// ${answer}

// Oceń i naucz.
// `
//       }
//     ]
//   });

//   const raw = completion.choices[0].message.content;
//   let result = safeParseJSON(raw);

//   /* -------- REPAIR PROMPT (JEŚLI JSON SIĘ WYWALI) -------- */
//   if (!result) {
//     const repair = await groq.chat.completions.create({
//       model: "llama-3.1-8b-instant",
//       temperature: 0,
//       messages: [
//         {
//           role: "system",
//           content: `
// Zamień poniższą odpowiedź na POPRAWNY JSON.
// Zwróć WYŁĄCZNIE JSON w formacie:

// {
//   "score": number,
//   "verdict": string,
//   "tip": string
// }
// `
//         },
//         {
//           role: "user",
//           content: raw
//         }
//       ]
//     });

//     result = safeParseJSON(repair.choices[0].message.content);
//   }

//   /* -------- FINAL FALLBACK -------- */
//   if (!result) {
//     result = {
//       score: 0,
//       verdict: "Błąd oceny odpowiedzi",
//       tip: "Model nie zwrócił poprawnego formatu. Kliknij „Retry”."
//     };
//   }

//   return json(result);
// }

import { json } from "@sveltejs/kit";
import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";
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
   GROQ (OpenAI-compatible)
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
    // próbujemy wyciągnąć {...}
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
  const { question, answer } = await request.json();

  /* -------- RAG CONTEXT -------- */
  const { data } = await supabase
    .from("documents")
    .select("content")
    .limit(3);

  const context = (data || [])
    .map(d => d.content)
    .filter(Boolean)
    .join("\n---\n");

  /* -------- MAIN COMPLETION -------- */
  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    temperature: 0.2,
    messages: [
      {
        role: "system",
        content: `
Jesteś „Mentorem Gry” – wymagającym, ale pomocnym mentorem akademickim
z przedmiotu „Algorytmy i Struktury Danych”
(kierunek: informatyka stosowana).

Twoim zadaniem jest OCENIĆ odpowiedź studenta ORAZ UCZYĆ.

────────────────────────
ZASADY OCENIANIA (OBOWIĄZKOWE)
────────────────────────

Skala punktowa:
- 0–20  → odpowiedź błędna lub nie na temat
- 21–40 → odpowiedź słaba, brak kluczowych pojęć
- 41–60 → odpowiedź częściowo poprawna
- 61–80 → odpowiedź w większości poprawna
- 81–100 → odpowiedź bardzo dobra / kompletna

Dla pytań definicyjnych:
- poprawna definicja = 90–100
- definicja niepełna = 60–80
- odpowiedź błędna = <40

Zasady spójności:
- jeśli score < 40 → verdict MUSI jasno wskazywać, CZEGO brakuje
- jeśli score ≥ 60 → verdict MUSI jasno potwierdzać poprawność
- score i verdict MUSZĄ być logicznie zgodne
- nie wolno „czepiać się” stylistyki ani języka

Jeśli odpowiedź spełnia definicję pojęcia:
- verdict NIE MOŻE zawierać słów:
  "częściowo", "niepełna", "brakuje"
- score NIE MOŻE być < 85

KLUCZOWA ZASADA OCENY DEFINICJI:
- Jeśli odpowiedź zawiera poprawną, klasyczną definicję akademicką,
  obejmującą istotę pojęcia (co to jest + do czego służy),
  należy przyznać 81–100 punktów.
- Brak przykładów, wzorów, tablic, szczegółów implementacyjnych
  NIE OBNIŻA OCENY, jeśli pytanie o nie nie prosi.
- „Można by dodać więcej szczegółów” NIE JEST powodem do obniżenia punktów.

────────────────────────
ZAKAZ OCENY STYLISTYCZNEJ
────────────────────────

- Zwięzła, poprawna definicja = PEŁNA ODPOWIEDŹ.
- Nie wolno obniżać punktów za brak „szerszego opisu”,
  jeśli odpowiedź spełnia definicję akademicką.
- Nie wolno oczekiwać elementów, których pytanie nie wymaga.
- Krótka odpowiedź ≠ odpowiedź niepełna.

────────────────────────
ZASADY MERYTORYCZNE (KLUCZOWE)
────────────────────────

- Oceniaj WYŁĄCZNIE na podstawie podanych kryteriów.
- Uznawaj synonimy i parafrazy.
- Klasyczna definicja akademicka spełniająca wszystkie kryteria = 100 punktów.
- Dodatkowe cechy (np. deterministyczność, efektywność) są MILE WIDZIANE,
  ale NIEOBOWIĄZKOWE, chyba że pytanie tego wymaga.
- NIE WOLNO wymyślać brakujących elementów.

────────────────────────
ZASADY UCZENIA (TEACHING)
────────────────────────

Jeśli odpowiedź jest niepełna lub błędna:
1. Powiedz KONKRETNIE, czego brakuje lub co jest niepoprawne.
2. Wyjaśnij, DLACZEGO ten element jest ważny w algorytmice.
3. Podaj WSKAZÓWKĘ MYŚLOWĄ (nie gotową odpowiedź).

Jeśli odpowiedź jest dobra:
1. Powiedz, CO zostało zrobione poprawnie.
2. Powiedz, JAK można by ją jeszcze ulepszyć (akademicko).

────────────────────────
DEFINICJA ODPOWIEDZI WYSTARCZAJĄCEJ
────────────────────────

Jeżeli odpowiedź:
- poprawnie definiuje pojęcie na poziomie wykładowym
- zawiera kluczową ideę (czym jest, do czego służy)
- nie zawiera błędów merytorycznych

to jest to odpowiedź KOMPLETNA i powinna otrzymać
CO NAJMNIEJ 85 punktów.

Nie wolno obniżać punktów za:
- brak formalizmów
- brak pojęć wykraczających poza pytanie
- brak przykładów, jeśli nie są wymagane

────────────────────────
FORMAT ODPOWIEDZI (ŚCIŚLE)
────────────────────────

Odpowiadasz WYŁĄCZNIE w poprawnym JSON:

{
  "score": number,
  "verdict": string,
  "tip": string
}

Język: polski.
Ton: spokojny, mentorski, konstruktywny.
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

Oceń i naucz.
`
      }
    ]
  });

  const raw = completion.choices[0].message.content;
  let result = safeParseJSON(raw);

  /* -------- REPAIR PROMPT (JEŚLI JSON SIĘ WYWALI) -------- */
  if (!result) {
    const repair = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      temperature: 0,
      messages: [
        {
          role: "system",
          content: `
Zamień poniższą odpowiedź na POPRAWNY JSON.
Zwróć WYŁĄCZNIE JSON w formacie:

{
  "score": number,
  "verdict": string,
  "tip": string
}
`
        },
        {
          role: "user",
          content: raw
        }
      ]
    });

    result = safeParseJSON(repair.choices[0].message.content);
  }

  /* -------- FINAL FALLBACK -------- */
  if (!result) {
    result = {
      score: 0,
      verdict: "Błąd oceny odpowiedzi",
      tip: "Model nie zwrócił poprawnego formatu. Kliknij „Retry”."
    };
  }

  return json(result);
}
