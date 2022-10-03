<script lang="ts">
    import HomePage from "./HomePage.svelte";
    import ArchitecturePage from "./ArchitecturePage.svelte";
    import WhitepaperPage from "./WhitepaperPage.svelte";
    import FeaturesPage from "./FeaturesPage.svelte";
    import RoadmapPage from "./RoadmapPage.svelte";
    import { createEventDispatcher, onMount, tick } from "svelte";
    import { currentPath } from "../stores/route";

    const dispatch = createEventDispatcher();

    let popping = false;

    onMount(() => {
        window.addEventListener("popstate", () => {
            popping = true;
            changeRoute(window.location.pathname.slice(1));
            tick().then(() => (popping = false));
        });
    });

    let selected = HomePage;

    $: {
        changeRoute($currentPath);
    }

    function pathToComponent(path: string): [any, string] {
        if (path === "architecture") {
            return [ArchitecturePage, "architecture"];
        }
        if (path === "whitepaper") {
            return [WhitepaperPage, "whitepaper"];
        }
        if (path === "features") {
            return [FeaturesPage, "features"];
        }
        if (path === "roadmap") {
            return [RoadmapPage, "roadmap"];
        }
        return [HomePage, "home"];
    }

    function changeRoute(path: string): void {
        const [c, r] = pathToComponent(path);
        selected = c;
        currentPath.set(r);
        if (!popping) {
            window.history.pushState({}, "", `/${path === "home" ? "" : path}`); // Update URL as well as browser history.
        }
        dispatch("scrollToTop");
    }
</script>

<div class="body">
    <svelte:component this={selected} on:login />
</div>

<style type="text/scss">
    .body {
        flex: auto;
        position: relative;
        @include constrain();
    }
</style>
