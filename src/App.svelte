<script lang="ts">
    import { fade } from "svelte/transition";
    import Header from "./components/Header.svelte";
    import Router from "./components/Router.svelte";
    import BackgroundLogo from "./components/BackgroundLogo.svelte";
    import { dimensions } from "./stores/screenDimensions";
    import Fab from "./components/Fab.svelte";
    import ArrowUp from "svelte-material-icons/ArrowUp.svelte";

    let route = "home";
    let mainEl: HTMLElement | undefined;
    let scrollTop = 0;

    $: bigLogo = $dimensions.width / 3;
    $: smallLogo = $dimensions.width / 5;
    $: show = $dimensions.width > 1800;
    $: backToTop = scrollTop > 400;

    function onScroll() {
        scrollTop = mainEl?.scrollTop ?? 0;
    }
</script>

<main class="main" bind:this={mainEl} on:scroll={onScroll}>
    <Header {route} />

    <Router bind:route />

    {#if show}
        <BackgroundLogo
            width={`${bigLogo}px`}
            bottom={"0"}
            left={"0"}
            opacity={"0.05"}
            skew={"5deg"} />
        <BackgroundLogo width={`${smallLogo}px`} bottom={"0"} right={"100px"} opacity={"0.1"} />
    {/if}

    {#if backToTop}
        <div
            transition:fade|local
            class="fab"
            on:click={() =>
                mainEl?.scrollTo({
                    behavior: "smooth",
                    top: 0,
                })}>
            <Fab>
                <ArrowUp size={"1.4em"} color={"#fff"} />
            </Fab>
        </div>
    {/if}
</main>

<style type="text/scss">
    .main {
        text-align: center;
        display: flex;
        flex-direction: column;
        background: var(--bg-gradient);
        overflow-y: auto;
        overflow-x: hidden;
        height: 100%;
        min-height: 100%;
    }
    .fab {
        position: absolute;
        bottom: toRem(40);
        right: toRem(40);
    }
</style>
