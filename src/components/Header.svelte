<script lang="ts">
    import MenuItems from "./MenuItems.svelte";
    import { currentPath } from "../stores/route";
    import LogoOrange from "./LogoOrange.svelte";

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
            <LogoOrange size={32} />
            <div class="name">OpenChat</div>
        </div>
        <div class="menu">
            <MenuItems on:login on:logout />
        </div>
    </div>
</div>

<style type="text/scss">
    .wrapper {
        padding: 0;
        margin: 0 auto;
        position: sticky;
        top: 0;
        @include z-index("menu");
        background-color: var(--header-bg);
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
