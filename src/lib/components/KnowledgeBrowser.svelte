<script lang="ts">
  import { knowledgeSources } from "$lib/knowledgeSources";
</script>

<div class="bg-zinc-900 border border-zinc-700 rounded-xl p-4 space-y-4">
  <h3 class="text-lg font-bold text-white">
    📚 Źródła wiedzy używane przez mentora
  </h3>

  <p class="text-sm text-zinc-400">
    Poniższe materiały stanowią bazę wiedzy (RAG), na podstawie której mentor
    ocenia odpowiedzi. AI nie korzysta z wiedzy zewnętrznej.
  </p>

  {#each knowledgeSources as section}
    <div>
      <div class="font-semibold text-zinc-200 mb-2">
        {section.section}
      </div>

      <ul class="space-y-1">
        {#each section.files as f}
          <li>
            <a
              href={f.path}
              target="_blank"
              class="flex items-center gap-2 px-3 py-2 rounded
                     bg-zinc-800 hover:bg-zinc-700 transition
                     text-sm text-zinc-100"
            >
              <span class="opacity-70">
                {f.type === "pdf" ? "📄" : f.type === "img" ? "🖼️" : "📝"}
              </span>
              <span class="underline underline-offset-2">
                {f.label}
              </span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/each}
</div>
