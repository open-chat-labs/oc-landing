<script lang="ts">
    import Header from "./components/Header.svelte";
    import Router from "./components/Router.svelte";
    import BackgroundLogo from "./components/BackgroundLogo.svelte";
    import { dimensions } from "./stores/screenDimensions";

    let route = "home";

    $: bigLogo = $dimensions.width / 3;
    $: smallLogo = $dimensions.width / 5;
    $: show = $dimensions.width > 1800;
</script>

<main>
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
</main>

<style type="text/scss">
    main {
        text-align: center;
        display: flex;
        flex-direction: column;
        background: var(--bg-gradient);
        min-height: 100%;
    }
</style>
