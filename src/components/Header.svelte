<script lang="ts">
    import { mobileWidth } from "../stores/screenDimensions";
    import Home from "svelte-material-icons/Home.svelte";
    import Menu from "svelte-material-icons/Menu.svelte";
    import Close from "svelte-material-icons/Close.svelte";
    import MenuItems from "./MenuItems.svelte";
    import Link from "./Link.svelte";
    import { loggedIn } from "../stores/authProviders";
    import { createEventDispatcher } from "svelte";
    import LogoPurple from "./LogoPurple.svelte";
    import { currentPath } from "../stores/route";

    const dispatch = createEventDispatcher();

    let showMenu = false;

    function launch() {
        if ($loggedIn) {
            window.location.href = "/";
        } else {
            dispatch("login");
        }
    }

    function home() {
        currentPath.set({
            path: "/",
            hash: "",
        });
    }
</script>

<div class="header">
    <div class="logo" on:click={home}>
        <LogoPurple />
        <div class="name">OpenChat</div>
    </div>
    <div class="menu">
        <MenuItems on:login on:logout />
    </div>
    <!-- {#if !$mobileWidth}
        <Link path="home">
            <img class="logo" src="../spinner.svg" alt="Logo" />
        </Link>
    {/if}

    {#if !$mobileWidth}
        <Link on:linkClicked={launch} mode={"menu"}>Go to chat</Link>
        <MenuItems on:login on:logout />
    {:else}
        <Link path="home">
            <Home size={"1.6em"} color={"#fff"} />
        </Link>
        <Link on:linkClicked={launch} mode={"menu"}>Go to chat</Link>
        <div on:click={() => (showMenu = !showMenu)}>
            {#if showMenu}
                <Close size={"1.6em"} color={"#fff"} />
            {:else}
                <Menu size={"1.6em"} color={"#fff"} />
            {/if}
        </div>

        {#if showMenu}
            <MenuItems bind:context={showMenu} on:logout />
        {/if}
    {/if} -->
</div>

<style type="text/scss">
    .logo {
        display: flex;
        cursor: pointer;
        gap: $sp2;
        align-items: center;

        .name {
            font-size: toRem(21);
        }
    }

    .header {
        font-family: "Ubuntu", sans-serif;
        background-color: pink;
        // max-width: 1120px;
        margin: 0 auto;
        width: 100%;
        font-weight: 700;
        flex: 0 0 toRem(80);
        @include z-index("menu");
        background-color: var(--header-bg);
        color: var(--header-txt);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: $sp5;
        position: sticky;
        top: 0;
        height: toRem(80);
        @include constrain(toRem(160));
    }
</style>
