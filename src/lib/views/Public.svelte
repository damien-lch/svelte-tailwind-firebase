<script>
  import { googleSignin } from "$plugins/firebase/auth.firebase";
</script>

<div class="text-center">
  <h2 class="text-xl font-medium mb-6">Public View</h2>
  <button
    class="bg-almost-black font-lg text-white rounded-md h-9 px-4 py-2.5 text-sm inline-flex items-center"
    on:click={googleSignin}
  >
    <span>Google Sign In</span>
  </button>
</div>
