import { writable, type Writable } from "svelte/store";

export type Layout = "public" | "protected";

export type Route = {
  path: string;
  component: any; //TODO: Find this type.
  layout: Layout;
};

export const currentRoute: Writable<Route> = writable();

export const routes: Route[] = [
  {
    path: "/public",
    component: () => import("$views/Public.svelte"),
    layout: "public",
  },
  {
    path: "/404",
    component: () => import("$views/404.svelte"),
    layout: "public",
  },
  {
    path: "/protected",
    component: () => import("$views/Protected.svelte"),
    layout: "protected",
  },
];
