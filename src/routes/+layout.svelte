<script>
  import favicon from "$lib/assets/favicon.png";
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>epstein AiSDland</title>
</svelte:head>

{@render children()}
