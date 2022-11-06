import { writable } from "svelte/store";

export type Route = {
    path: string;
    hash: string;
};

export const currentPath = writable<Route>({
    path: window.location.pathname.slice(1),
    hash: window.location.hash.slice(1),
});

const landingPageRoutes = ["home", "features", "roadmap", "whitepaper", "architecture"];

export function isLandingPageRoute(): boolean {
    return landingPageRoutes.includes(window.location.pathname.slice(1).toLowerCase());
}
