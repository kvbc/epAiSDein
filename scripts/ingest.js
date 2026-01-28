import fs from "fs";
import { createClient } from "@supabase/supabase-js";
import { execSync } from "child_process";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

function embed(text) {
  const output = execSync(
    `ollama run nomic-embed-text "${text.replace(/"/g, "")}"`
  ).toString();

  return JSON.parse(output).embedding;
}

// 1️⃣ wczytaj notatki
const text = fs.readFileSync("knowledge/notes.txt", "utf8");

// 2️⃣ chunkuj (500 znaków)
const chunks = text.match(/(.|[\r\n]){1,500}/g);

console.log(`📄 Chunków: ${chunks.length}`);

for (const chunk of chunks) {
  const embedding = embed(chunk);

  const { error } = await supabase.from("documents").insert({
    content: chunk,
    embedding
  });

  if (error) {
    console.error("❌ DB error:", error);
  } else {
    console.log("✅ Inserted chunk");
  }
}

console.log("🎉 INGEST DONE");
