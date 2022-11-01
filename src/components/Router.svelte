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

    function scrollToHash(hash: string) {
        if (hash === "") return;

        const main = document.getElementById("main");
        const target = document.getElementById(hash);
        const rect = target.getBoundingClientRect();
        const top = rect.top + main.scrollTop - 70;
        main.scrollTo({
            top,
        });
        target.classList.add("highlight");
        window.setTimeout(() => {
            target.classList.remove("highlight");
        }, 1000);
    }

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
        setTimeout(() => scrollToHash(route.hash), 0);

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
        @include constrain();
    }
</style>
