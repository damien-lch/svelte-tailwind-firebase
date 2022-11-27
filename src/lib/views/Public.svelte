<script>
  import { googleSignin } from "$plugins/firebase/auth.firebase";
</script>

<div>Public View</div>

<button on:click={googleSignin}> Google Sign In </button>
