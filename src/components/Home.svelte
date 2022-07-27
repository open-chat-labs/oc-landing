<script lang="ts">
    import ArrowUp from "svelte-material-icons/ArrowUp.svelte";
    import Roadmap from "./Roadmap.svelte";
    import Hero from "./Hero.svelte";
    import Intro from "./Intro.svelte";
    import Features from "./Features.svelte";
    import Tokenomics from "./Tokenomics.svelte";
    import Architecture from "./Architecture.svelte";
    import Video from "./Video.svelte";
    import Team from "./Team.svelte";
    import Fab from "./Fab.svelte";

    let bodyEl: HTMLDivElement | undefined;
    let scrollTop = 0;

    $: backToTop = scrollTop > 400;

    function onScroll() {
        scrollTop = bodyEl?.scrollTop ?? 0;
    }
</script>

<div bind:this={bodyEl} class="body" on:scroll={onScroll}>
    <Hero />

    <div class="outer">
        <div class="content">
            <Intro />

            <Features />

            <Tokenomics />

            <Architecture />

            <Roadmap />

            <Video />

            <Team />
        </div>
    </div>

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
    }
    .content {
        padding: 30px;
        max-width: 1000px;
        margin: 0 auto;
    }

    .outer {
        position: relative;
        top: -70px;
        margin: 0 40px;
        background-color: #fff;
    }

    .fab {
        position: fixed;
        bottom: 60px;
        right: 60px;
    }
</style>
