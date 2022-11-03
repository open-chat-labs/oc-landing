<script lang="ts">
    import { mobileWidth } from "../stores/screenDimensions";
    import MenuItems from "./MenuItems.svelte";
    import { currentPath } from "../stores/route";
    import LogoOrange from "./LogoOrange.svelte";
    import Menu from "svelte-material-icons/Menu.svelte";
    import Close from "svelte-material-icons/Close.svelte";

    let showMenu = false;
    $: logoSize = $mobileWidth ? 24 : 32;

    function home() {
        currentPath.set({
            path: "/",
            hash: "",
        });
    }
</script>

<div class="wrapper">
    <div class="header">
        <div class="logo" on:click={home}>
            <LogoOrange size={logoSize} />
            <div class="name">OpenChat</div>
        </div>
        {#if $mobileWidth}
            <div class="menu-toggle" on:click={() => (showMenu = !showMenu)}>
                {#if showMenu}
                    <Close size={"1.6em"} color={"var(--txt)"} />
                {:else}
                    <Menu size={"1.6em"} color={"var(--txt)"} />
                {/if}
            </div>
        {:else}
            <div class="menu">
                <MenuItems on:login on:logout />
            </div>
        {/if}
    </div>
</div>

<style type="text/scss">
    .wrapper {
        width: 100%;
        padding: 0;
        margin: 0 auto;
        position: fixed;
        top: 0;
        @include z-index("menu");
        background-color: var(--header-bg);
    }

    .menu-toggle {
        cursor: pointer;
    }

    .logo {
        display: flex;
        cursor: pointer;
        gap: $sp2;
        align-items: center;

        .name {
            @include manrope(700, 21, 29);
        }
    }

    .header {
        max-width: 1440px;
        padding: 0 toRem(160);

        @include mobile() {
            width: 100%;
            padding: 0 toRem(24);
        }

        margin: 0 auto;
        width: 100%;
        flex: 0 0 toRem(80);
        color: var(--txt);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: $sp5;
        height: toRem(80);
    }
</style>
