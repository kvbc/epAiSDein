import OpenAI from "openai";

const GROQ_MODELS = [
  "llama-3.1-8b-instant",
  "openai/gpt-oss-20b",
  "llama-3.3-70b-versatile",
  "openai/gpt-oss-120b"
];

export async function groqChatWithFallback(groq, params) {
  let lastError = null;
  let rateLimitHits = 0;

  for (const model of GROQ_MODELS) {
    try {
      const res = await groq.chat.completions.create({
        ...params,
        model
      });

      console.log(`[Groq] model used: ${model}`);
      return res;

    } catch (err) {
      if (err?.status === 429) {
        rateLimitHits++;
        lastError = err;
        console.warn(`[Groq] 429 on ${model}, switching model...`);
        continue;
      }

      // inny błąd = nie retry
      throw err;
    }
  }

  // 🚨 wszystkie modele poległy na 429
  if (rateLimitHits === GROQ_MODELS.length) {
    const error = new Error("GROQ_ALL_MODELS_RATE_LIMITED");
    error.code = 429;
    error.retryAfter =
      lastError?.error?.message?.match(/try again in ([\d.]+)s/)?.[1] ??
      60;

    throw error;
  }

  throw lastError;
}
