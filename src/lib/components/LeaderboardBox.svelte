<script>
  export let title;
</script>

<div class="bg-zinc-900 border border-zinc-700 rounded-xl p-4 flex flex-col">
  <h3 class="font-semibold mb-3 text-zinc-100">
    {title}
  </h3>

  <!-- SCROLL -->
  <div class="overflow-y-auto max-h-[320px] pr-1 space-y-1">
    <slot />
  </div>
</div>
