import { json } from "@sveltejs/kit";
import OpenAI from "openai";
import { GROQ_API_KEY } from "$env/static/private";

const groq = new OpenAI({
  apiKey: GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1"
});

export async function POST({ request }) {
  const { question, mentor } = await request.json();

  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    temperature: 0.3,
    messages: [
      {
        role: "system",
        content: `
Jesteś mentorem akademickim z Algorytmów i Struktur Danych.

Zasady:
- Odpowiedz TYLKO RAZ
- Bez ocen, bez punktów
- Bez dopytywania
- Zachowuj się jak ${mentor.realLabel}
- Styl: ${mentor?.personality ?? "akademicki"}
- Krótko, jasno, merytorycznie
- Czysty tekst, nie markdown ani nic
`
      },
      {
        role: "user",
        content: question
      }
    ]
  });

  return json({
    answer: completion.choices[0].message.content
  });
}
