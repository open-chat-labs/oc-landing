<script lang="ts">
    import HomePage from "./HomePage.svelte";
    import ArchitecturePage from "./ArchitecturePage.svelte";
    import WhitepaperPage from "./WhitepaperPage.svelte";
    import FeaturesPage from "./FeaturesPage.svelte";
    import RoadmapPage from "./RoadmapPage.svelte";
    import { createEventDispatcher, onMount, tick } from "svelte";
    import { currentPath, Route } from "../stores/route";

    const dispatch = createEventDispatcher();

    let popping = false;

    onMount(() => {
        window.addEventListener("popstate", (ev: PopStateEvent) => {
            popping = true;
            currentPath.set({
                path: window.location.pathname.slice(1),
                hash: window.location.hash.slice(1),
            });
            tick().then(() => {
                popping = false;
            });
        });
    });

    let selected = HomePage;

    $: {
        changeRoute($currentPath);
    }

    function pathToComponent(path: string): [any, string] {
        if (path === "architecture") {
            return [ArchitecturePage, path];
        }
        if (path === "whitepaper") {
            return [WhitepaperPage, path];
        }
        if (path === "features") {
            return [FeaturesPage, path];
        }
        if (path === "roadmap") {
            return [RoadmapPage, path];
        }
        return [HomePage, "home"];
    }

    function changeRoute(route: Route): void {
        const [c, r] = pathToComponent(route.path);
        selected = c;

        if (route.path !== $currentPath.path || route.hash !== window.location.hash) {
            currentPath.update((p) => ({
                ...p,
                path: r,
            }));
        }

        if (!popping) {
            console.log("Setting path to ", route.path, route.hash);
            window.history.pushState(
                {},
                "",
                `${route.path}${route.hash === "" ? "" : "#" + route.hash}`
            ); // Update URL as well as browser history.
        }

        if (route.hash === "") {
            dispatch("scrollToTop");
        }
    }
</script>

<div class="body">
    <svelte:component this={selected} on:login />
</div>

<style type="text/scss">
    .body {
        flex: auto;
        position: relative;
    }
</style>
