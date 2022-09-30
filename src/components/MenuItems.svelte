<script lang="ts">
    import { toggleTheme } from "../theme/themes";
    import { currentPath } from "../stores/route";
    import Link from "./Link.svelte";

    export let context = false;
    let debug = true;

    function close() {
        context = false;
    }
</script>

<div class="menu-items" class:context>
    <div class="menu-item" class:selected={$currentPath === "home" || $currentPath === ""}>
        <Link on:linkClicked={close} mode={"menu"} path="home">Home</Link>
    </div>
    <div class="menu-item" class:selected={$currentPath === "features"}>
        <Link on:linkClicked={close} mode={"menu"} path="features">Features</Link>
    </div>
    <div class="menu-item" class:selected={$currentPath === "roadmap"}>
        <Link on:linkClicked={close} mode={"menu"} path="roadmap">Roadmap</Link>
    </div>
    <div class="menu-item" class:selected={$currentPath === "tokenomics"}>
        <Link on:linkClicked={close} mode={"menu"} path="tokenomics">Tokenomics</Link>
    </div>
    <div class="menu-item" class:selected={$currentPath === "architecture"}>
        <Link on:linkClicked={close} mode={"menu"} path="architecture">Architecture</Link>
    </div>
    {#if debug}
        <div class="menu-item" on:click={toggleTheme}>theme</div>
    {/if}
</div>

<style type="text/scss">
    :global(.menu-items.context a) {
        font-weight: 600;
        font-size: toRem(20);
    }

    .menu-items {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        gap: $sp5;

        &.context {
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.4);
            color: var(--txt);
            padding: $sp4 $sp4 $sp6 $sp4;
            position: absolute;
            align-items: flex-end;
            right: 0;
            top: toRem(60);
            flex-direction: column;
        }
    }
</style>
