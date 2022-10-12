import { writable } from "svelte/store";

export type Route = {
    path: string;
    hash: string;
};

export const currentPath = writable<Route>({
    path: window.location.pathname.slice(1),
    hash: window.location.hash.slice(1),
});
