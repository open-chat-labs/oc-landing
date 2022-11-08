<script lang="ts">
    import { currentPath } from "../stores/route";
    import Link from "./Link.svelte";
    import Launch from "./Launch.svelte";
    import { loggedIn } from "../stores/authProviders";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    $: path = $currentPath.path;
</script>

<div class="menu-items">
    <div class="nav">
        <div class="menu-item">
            <Link selected={path === "features"} mode={"menu"} path="features">Features</Link>
        </div>
        <div class="menu-item">
            <Link selected={path === "roadmap"} mode={"menu"} path="roadmap">Roadmap</Link>
        </div>
        <div class="menu-item">
            <Link selected={path === "whitepaper"} mode={"menu"} path="whitepaper">Whitepaper</Link>
        </div>
        <div class="menu-item">
            <Link selected={path === "architecture"} mode={"menu"} path="architecture"
                >Architecture</Link>
        </div>
        {#if $loggedIn}
            <Link on:linkClicked={() => dispatch("logout")} mode={"menu"}>Logout</Link>
        {/if}
        <div class="menu-item">
            <Launch on:login />
        </div>
    </div>
</div>

<style type="text/scss">
    .menu-items {
        @include manrope(700, 16, 22);
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
    }
</style>
