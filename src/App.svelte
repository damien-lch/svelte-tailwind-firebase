<script lang="ts">
  import { Router } from "svelte-navigator";
  import PublicLayout from "./lib/layouts/PublicLayout.svelte";
  import LazyRoute from "./lib/router/LazyRoute.svelte";
  import ProtectedLayout from "./lib/layouts/ProtectedLayout.svelte";
  import RouteChangeHandler from "$/router/RouteChangeHandler.svelte";
  import { currentRoute, routes } from "$/router/router";
  import type { Layout } from "$/router/router";

  let currentLayout: Layout;
  currentRoute.subscribe(($currentRoute) => {
    if (!$currentRoute) return;
    currentLayout = $currentRoute.layout;
  });
</script>

<main>
  Layout: {currentLayout}
  <Router>
    <RouteChangeHandler />
    {#if currentLayout === "public"}
      <PublicLayout>
        {#each routes.filter((r) => r.layout === "public") as route}
          <LazyRoute component={route.component} path={route.path} />
        {/each}
      </PublicLayout>
    {:else if currentLayout === "protected"}
      <ProtectedLayout>
        {#each routes.filter((r) => r.layout === "protected") as route}
          <LazyRoute component={route.component} path={route.path} />
        {/each}
      </ProtectedLayout>
    {/if}
  </Router>
</main>
