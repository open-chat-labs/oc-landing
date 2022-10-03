<script lang="ts">
    import { toggleTheme } from "../theme/themes";
    import AuthSelector from "./AuthSelector.svelte";
    import { currentPath } from "../stores/route";
    import Link from "./Link.svelte";

    export let context = false;
    let debug = true;

    function close() {
        context = false;
    }
</script>

<div class="menu-items" class:context>
    <div class="nav">
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
            <div class="menu-item link" on:click={toggleTheme}>theme</div>
        {/if}
    </div>
    <div class="menu-item end">
        <AuthSelector on:authSelected={close} {context} />
    </div>
</div>

<style type="text/scss">
    :global(.menu-items.context .link) {
        font-weight: 600 !important;
        font-size: toRem(20);
    }

    .menu-items {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: $sp5;

        .nav {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: $sp5;
        }

        &.context {
            height: 100vh;
            background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
            color: var(--txt);
            padding: $sp4 $sp4 $sp6 $sp4;
            position: absolute;
            align-items: flex-end;
            justify-content: flex-start;
            right: 0;
            top: toRem(60);
            flex-direction: column;

            .nav {
                flex-direction: column;
                align-items: flex-end;
            }
        }

        .end {
            align-self: flex-end;
        }
    }
</style>
