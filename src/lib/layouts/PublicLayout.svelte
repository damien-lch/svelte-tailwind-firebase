<script lang="ts">
  import { user } from "$/stores/user";
  import { navigate } from "svelte-navigator";

  user.subscribe(($user) => {
    if ($user) navigate("/protected");
  });
</script>

<div class="w-screen h-screen">
  <div>PUBLIC LAYOUT</div>
  <div>
    <slot />
  </div>
</div>
