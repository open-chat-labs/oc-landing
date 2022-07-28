<script lang="ts">
    import { onMount, tick } from "svelte";
    import HomePage from "./HomePage.svelte";
    import ArchitecturePage from "./ArchitecturePage.svelte";
    import TokenomicsPage from "./TokenomicsPage.svelte";
    import FeaturesPage from "./FeaturesPage.svelte";
    import Fab from "./Fab.svelte";
    import ArrowUp from "svelte-material-icons/ArrowUp.svelte";

    onMount(() => {
        parseLocation();
        tick().then(() => {
            document.querySelectorAll("a").forEach((link) => {
                link.addEventListener("click", goToPage);
            });
        });

        window.addEventListener("popstate", parseLocation);
    });

    export let route = "home";

    let selected = HomePage;
    let bodyEl: HTMLDivElement | undefined;
    let scrollTop = 0;

    $: backToTop = scrollTop > 400;

    function parseLocation() {
        const [c, r] = pathToComponent(window.location.pathname.slice(1));
        selected = c;
        route = r;
    }

    function onScroll() {
        scrollTop = bodyEl?.scrollTop ?? 0;
    }

    function pathToComponent(path: string): [any, string] {
        if (path === "architecture") {
            return [ArchitecturePage, "architecture"];
        }
        if (path === "tokenomics") {
            return [TokenomicsPage, "tokenomics"];
        }
        if (path === "features") {
            return [FeaturesPage, "features"];
        }
        return [HomePage, "home"];
    }

    function goToPage(event: MouseEvent) {
        if (event.target) {
            const anchor = event.target as HTMLAnchorElement;
            const url = anchor.getAttribute("href") || "/";
            if (url) {
                if (url.indexOf("oc.app") >= 0) {
                    return;
                }
                const path = url.slice(1); // remove the leading slash
                const [c, r] = pathToComponent(path);
                selected = c;
                route = r;
                window.history.pushState({}, "", url); // Update URL as well as browser history.
                event.preventDefault(); // stop the browser from navigating to the destination URL.
            }
        }
    }

    // Enable client-side routing for all links on the page
</script>

<div bind:this={bodyEl} class="body" on:scroll={onScroll}>
    <svelte:component this={selected} />
    {#if backToTop}
        <div
            class="fab"
            on:click={() =>
                bodyEl?.scrollTo({
                    behavior: "smooth",
                    top: 0,
                })}>
            <Fab>
                <ArrowUp size={"1.5em"} color={"#fff"} />
            </Fab>
        </div>
    {/if}
</div>

<style type="text/scss">
    .body {
        flex: auto;
        overflow: auto;
        scroll-behavior: smooth;
        position: relative;
        background: var(--gradient);
        @include constrain();
    }
    .fab {
        position: fixed;
        bottom: 60px;
        right: 60px;
    }
</style>
