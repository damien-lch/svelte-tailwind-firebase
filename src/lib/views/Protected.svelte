<script>
  import { logout } from "$plugins/firebase/auth.firebase";
</script>

Protected View
<button on:click={logout}>Log out</button>
