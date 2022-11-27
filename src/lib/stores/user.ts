import type { User } from "firebase/auth";
import { writable, type Writable } from "svelte/store";

export const user: Writable<User> = writable();
