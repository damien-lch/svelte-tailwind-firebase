<script>
  import { user } from "$/stores/user";
  import { logout } from "$plugins/firebase/auth.firebase";
  import { Link } from "svelte-navigator";
</script>

<div class="text-center">
  <h2 class="text-xl font-medium">Protected View</h2>
  <span class="block mb-6">{$user.email}</span>

  <Link
    to="/signout"
    class="bg-almost-black font-lg text-white rounded-md h-9 px-4 py-2.5 text-sm inline-flex items-center"
  >
    Sign Out
  </Link>
</div>
