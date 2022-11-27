<script lang="ts">
  import { Route, Router } from "svelte-navigator";
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
  import Links from "$/components/Links.svelte";
  import Signout from "$/views/Signout.svelte";

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
      } else {
        user.set(null);
      }
      ready = true;
    });
  };

  onMount(async () => {
    authSubscriber();
  });
</script>

{#if ready}
  <main class="min-h-screen w-screen bg-white">
    <div class="fixed top-2 right-2">
      <Links />
    </div>
    <Router>
      <RouteChangeHandler />
      <Route path="signout">
        <Signout />
      </Route>
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
  <footer class="fixed bottom-2 left-1/2 -translate-x-1/2">
    Created by <a href="http://github.com/neiwad" class="font-bold">NEIWAD</a>
  </footer>
{/if}
