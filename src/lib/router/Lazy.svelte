<script lang="ts">
  import { onMount } from "svelte";

  export let component;
  let loadedComponent;

  onMount(() => {
    component().then((module) => {
      loadedComponent = module.default;
    });
  });
</script>

{#if loadedComponent}
  <svelte:component this={loadedComponent} />
{/if}
