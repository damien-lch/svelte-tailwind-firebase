<script lang="ts">
  import { Router } from "svelte-navigator";
  import PublicLayout from "./lib/layouts/PublicLayout.svelte";
  import LazyRoute from "./lib/router/LazyRoute.svelte";
  import ProtectedLayout from "./lib/layouts/ProtectedLayout.svelte";
  import RouteChangeHandler from "$/router/RouteChangeHandler.svelte";
  import { currentRoute, routes } from "$/router/router";
  import type { Layout } from "$/router/router";
  import { onMount } from "svelte";
  import { auth } from "$plugins/firebase/firebase";
  import { onAuthStateChanged } from "firebase/auth";
  import { user } from "$/stores/user";

  let ready: boolean = false;

  /* LAYOUT MANAGEMENT */
  let currentLayout: Layout;
  currentRoute.subscribe(($currentRoute) => {
    if (!$currentRoute) return;
    currentLayout = $currentRoute.layout;
  });

  /* AUTH MANAGEMENT */
  const authSubscriber = () => {
    onAuthStateChanged(auth, async (userAuthData) => {
      if (userAuthData) {
        user.set(userAuthData);
      }
      ready = true;
    });
  };

  onMount(async () => {
    authSubscriber();
  });
</script>

{#if ready}
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
{/if}
