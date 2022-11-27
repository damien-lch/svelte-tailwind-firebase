<script lang="ts">
  import { user } from "$/stores/user";
  import { navigate } from "svelte-navigator";

  user.subscribe(($user) => {
    if (!$user) navigate("/");
  });
</script>

<div class="w-screen h-screen flex flex-col gap-4 items-center justify-center">
  <div class="text-6xl font-black text-center">PROTECTED LAYOUT</div>
  <div class="w-[150px] h-1 bg-black block" />
  <slot />
</div>
