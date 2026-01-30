<script>
  export let solution = {};

  let lightboxOpen = false;
  let lightboxSrc = null;

  function open(src) {
    lightboxSrc = src;
    lightboxOpen = true;
    document.body.style.overflow = "hidden";
  }

  function close() {
    lightboxOpen = false;
    lightboxSrc = null;
    document.body.style.overflow = "";
  }
</script>

<div class="mt-6 space-y-8">
  <div class="bg-zinc-950 border border-zinc-700 rounded-xl p-4">
    <div class="text-sm text-zinc-400 mb-2">📘 Wzorcowa odpowiedź</div>

    <p class="text-zinc-100 leading-relaxed mb-4">
      {solution.modelAnswer}
    </p>

    {#if solution.images?.length}
      <div class="space-y-6">
        {#each solution.images as img}
          <div class="space-y-2">
            <img
              src={img.src}
              alt="Rozwiązanie"
              class="w-full rounded-lg border border-zinc-700 cursor-zoom-in"
              on:click={() => open(img.src)}
            />

            {#if img.note}
              <div class="text-sm text-zinc-400">
                📝 {img.note}
              </div>
            {/if}

            {#if img.link}
              <a
                href={img.link}
                target="_blank"
                rel="noopener"
                class="text-sm text-blue-400 underline hover:text-blue-300"
              >
                📎 Materiał źródłowy
              </a>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>

{#if lightboxOpen}
  <div
    class="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center"
    on:click={close}
  >
    <img src={lightboxSrc} class="max-w-[95vw] max-h-[95vh] rounded-lg" />
  </div>
{/if}
