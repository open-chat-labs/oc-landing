<script lang="ts">
    import { mobileWidth } from "../stores/screenDimensions";
    import Home from "svelte-material-icons/Home.svelte";
    import LaunchIcon from "svelte-material-icons/Launch.svelte";
    import Launch from "./Launch.svelte";

    export let route = "home";

    // TODO - this needs to collapse down into a popout menu on mobile
</script>

<div class="menu">
    {#if !$mobileWidth}
        <a class="home" href="/">
            <div class="logo" />
        </a>
    {/if}
    <div class="menu-items">
        <div class="menu-item" class:selected={route === "home"}>
            <a href="/">
                {#if $mobileWidth}
                    <Home size={"1.6em"} color={"#fff"} />
                {:else}
                    Home
                {/if}
            </a>
        </div>
        <div class="menu-item" class:selected={route === "features"}>
            <a href="/features">Features</a>
        </div>
        <div class="menu-item" class:selected={route === "tokenomics"}>
            <a href="/tokenomics">Tokenomics</a>
        </div>
        <div class="menu-item" class:selected={route === "architecture"}>
            <a href="/architecture">Architecture</a>
        </div>
    </div>
    <div title="Launch" class="launch">
        {#if $mobileWidth}
            <LaunchIcon size={"1.6em"} color={"#fff"} />
        {:else}
            <Launch size="small" />
        {/if}
    </div>
</div>

<style type="text/scss">
    .logo {
        background-image: url("../spinner.svg");
        width: toRem(45);
        height: toRem(45);
    }
    .menu {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        flex: 0 0 toRem(60);
        @include z-index("menu");
        padding: $sp4;
        background-color: var(--primary);
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: $sp5;
        @include box-shadow(1);
        @include constrain();
        position: sticky;
        top: 0;
    }

    .launch {
        flex: 0 0 150px;

        @include mobile() {
            flex: 0 0 40px;
            text-align: right;
        }
    }

    .menu-items {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        gap: $sp5;
    }

    .home {
        flex: 0 0 toRem(70);
    }

    .menu-item {
        a {
            font-size: toRem(16);
            // font-weight: bold;
            color: rgba(255, 255, 255, 0.9);
        }

        &.selected a {
            text-decoration: underline;
            text-decoration-color: var(--accent);
            text-underline-offset: $sp1;
            text-decoration-thickness: 2px;
        }
    }
</style>
