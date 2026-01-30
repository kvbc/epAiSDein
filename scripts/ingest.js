import fs from "fs";
import { createClient } from "@supabase/supabase-js";
import { execSync } from "child_process";
import dotenv from "dotenv";
import { spawnSync } from "child_process";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// function embed(text) {
//   const output = execSync(
//     `ollama run nomic-embed-text "${text.replace(/"/g, "")}"`
//   ).toString();

//   return JSON.parse(output).embedding;
// }
function embed(text) {
  const p = spawnSync(
    "ollama",
    ["run", "nomic-embed-text"],
    {
      input: text,
      encoding: "utf-8",
      maxBuffer: 10 * 1024 * 1024,
    }
  );

  if (p.error) throw p.error;
  if (p.status !== 0) throw new Error(p.stderr);

  return JSON.parse(p.stdout);
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
