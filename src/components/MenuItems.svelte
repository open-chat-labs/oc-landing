<script lang="ts">
    import { toggleTheme } from "../theme/themes";
    import AuthSelector from "./AuthSelector.svelte";
    import { currentPath } from "../stores/route";
    import Link from "./Link.svelte";
    import Launch from "./Launch.svelte";

    export let context = false;
    let debug = true;

    $: path = $currentPath.path;

    function close() {
        context = false;
    }
</script>

<div class="menu-items" class:context>
    <div class="nav">
        <div class="menu-item">
            <Link
                selected={path === "features"}
                on:linkClicked={close}
                mode={"menu"}
                path="features">Features</Link>
        </div>
        <div class="menu-item">
            <Link selected={path === "roadmap"} on:linkClicked={close} mode={"menu"} path="roadmap"
                >Roadmap</Link>
        </div>
        <div class="menu-item">
            <Link
                selected={path === "whitepaper"}
                on:linkClicked={close}
                mode={"menu"}
                path="whitepaper">Whitepaper</Link>
        </div>
        <div class="menu-item">
            <Link
                selected={path === "architecture"}
                on:linkClicked={close}
                mode={"menu"}
                path="architecture">Architecture</Link>
        </div>
        <div class="menu-item">
            <Launch on:login />
        </div>
        {#if debug}
            <div class="menu-item link" on:click={toggleTheme}>theme</div>
        {/if}
    </div>
    <!-- <div class="menu-item end">
        <AuthSelector on:authSelected={close} on:logout {context} />
    </div> -->
</div>

<style type="text/scss">
    :global(.menu-items.context .link) {
        font-weight: 700 !important;
        font-size: toRem(16);
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
