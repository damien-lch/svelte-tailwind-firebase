<script lang="ts">
  import { user } from "$/stores/user";
  import { navigate } from "svelte-navigator";

  user.subscribe(($user) => {
    if (!$user) navigate("/public");
  });
</script>

<div class="w-screen h-screen">
  <div>PROTECTED LAYOUT</div>
  <div>
    <slot />
  </div>
</div>
