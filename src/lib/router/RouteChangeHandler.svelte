<script lang="ts">
  import { useLocation, navigate } from "svelte-navigator";
  import { currentRoute, routes } from "./router";
  const location = useLocation();

  const handleRouteChange = (location: string) => {
    const newCurrentRoute = routes.find((r) => r.path === location);

    if (newCurrentRoute) {
      currentRoute.update(($currentRoute) => ($currentRoute = newCurrentRoute));
    } else {
      navigate("/404");
    }
  };

  $: $location, handleRouteChange($location.pathname);
</script>
