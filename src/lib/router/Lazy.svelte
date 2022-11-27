<script lang="ts">
  import { onMount } from "svelte";

  export let component;
  export let params;
  let loadedComponent;

  onMount(() => {
    component().then((module) => {
      loadedComponent = module.default;
    });
  });
</script>

{#if loadedComponent}
  <svelte:component this={loadedComponent} {params} />
{/if}
