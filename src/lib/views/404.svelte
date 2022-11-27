<script>
  import { Link } from "svelte-navigator";
  import { user } from "$stores/user";
</script>

<div class="text-center">
  <h2 class="text-xl font-medium mb-6">404</h2>
  <Link
    class="bg-almost-black font-lg text-white rounded-md h-9 px-4 py-2.5 text-sm inline-flex items-center"
    to={$user ? "/protected" : "/public"}
  >
    <span>Go back to a {$user ? "protected" : "public"} route!</span>
  </Link>
</div>
