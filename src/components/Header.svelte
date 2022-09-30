<script lang="ts">
    import { mobileWidth } from "../stores/screenDimensions";
    import Home from "svelte-material-icons/Home.svelte";
    import Menu from "svelte-material-icons/Menu.svelte";
    import Close from "svelte-material-icons/Close.svelte";
    import MenuItems from "./MenuItems.svelte";
    import Link from "./Link.svelte";

    let showMenu = false;
</script>

<div class="menu">
    {#if !$mobileWidth}
        <Link path="home">
            <div class="logo" />
        </Link>
    {/if}

    {#if !$mobileWidth}
        <MenuItems />
    {:else}
        <Link path="home">
            <Home size={"1.6em"} color={"#fff"} />
        </Link>
        <div on:click={() => (showMenu = !showMenu)}>
            {#if showMenu}
                <Close size={"1.6em"} color={"#fff"} />
            {:else}
                <Menu size={"1.6em"} color={"#fff"} />
            {/if}
        </div>

        {#if showMenu}
            <MenuItems bind:context={showMenu} />
        {/if}
    {/if}
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
        background-color: var(--header-bg);
        color: var(--header-txt);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: $sp5;
        // @include box-shadow(1);
        @include constrain();
        position: sticky;
        top: 0;
        height: toRem(60);
        backdrop-filter: blur(20px);
    }
</style>
