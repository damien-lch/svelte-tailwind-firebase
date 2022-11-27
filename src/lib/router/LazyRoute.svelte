<script lang="ts">
  import { Route } from "svelte-navigator";
  import Lazy from "./Lazy.svelte";

  export let component;
  export let path;
</script>

<Route {path} let:params>
  <Lazy {component} {params} />
</Route>
