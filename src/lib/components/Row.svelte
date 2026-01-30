<script>
  export let e;
  export let value;
</script>

<div class="flex justify-between items-center gap-3">
  <!-- LEWA: nick + meta -->
  <div class="flex flex-col">
    <span class="font-semibold text-zinc-100">
      {e.nickname}
    </span>

    {#if e.duration_ms && e.questions_answered}
      <span class="text-xs text-zinc-400">
        {Math.round(e.duration_ms / e.questions_answered / 1000)}s / pyt.
      </span>
    {/if}
  </div>

  <!-- PRAWA: wartość leaderboardu -->
  <span class="text-sm font-bold text-zinc-200">
    {value}
  </span>
</div>
