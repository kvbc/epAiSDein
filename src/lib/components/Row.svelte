<script>
  export let e;
  export let fastest;
  export let value;

  function formatDateTime(ts) {
    const d = new Date(ts);
    return d.toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }

  function timeAgo(ts) {
    const diff = Math.floor((Date.now() - new Date(ts)) / 1000);

    if (diff < 60) return "przed chwilą";

    const min = Math.floor(diff / 60);
    if (min < 60) return `${min} min temu`;

    const h = Math.floor(min / 60);
    if (h < 24) return `${h} h temu`;

    const d = Math.floor(h / 24);
    if (d < 7) return `${d} dni temu`;

    const w = Math.floor(d / 7);
    if (w < 5) return `${w} tyg. temu`;

    return formatDate(ts);
  }

  function formatDuration(ms) {
    if (!ms || ms <= 0) return "0:00";

    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;

    if (h > 0) {
      return `${h}:${m.toString().padStart(2, "0")}:${s
        .toString()
        .padStart(2, "0")}`;
    }

    return `${m}:${s.toString().padStart(2, "0")}`;
  }
</script>

<div class="flex justify-between items-center gap-3">
  <!-- LEWA -->
  <div class="flex flex-col">
    <span class="font-semibold text-zinc-100">
      {e.nickname}
    </span>

    <div class="text-xs text-zinc-400 leading-tight">
      {#if e.created_at}
        <span title={new Date(e.created_at).toISOString()}>
          {formatDateTime(e.created_at)}
          <span class="opacity-60">
            ({timeAgo(e.created_at)})
          </span>
        </span>
      {/if}

      {#if e.duration_ms}
        <span class="block">
          ⏱ {formatDuration(e.duration_ms)}
          {#if e.questions_answered}
            <span class="opacity-60">
              ({Math.round(e.duration_ms / e.questions_answered / 1000)}s /
              pyt.)
            </span>
          {/if}
        </span>
      {/if}
    </div>
  </div>

  <!-- PRAWA -->
  <span class="text-sm font-bold text-zinc-200">
    {#if fastest}
      {Math.round(e.duration_ms / e.questions_answered / 1000)}s / pyt.
    {:else}
      {value}
    {/if}
  </span>
</div>
