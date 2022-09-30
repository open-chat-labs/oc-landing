import { writable } from "svelte/store";

export const currentPath = writable(window.location.pathname.slice(1));
