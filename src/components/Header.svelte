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

<div class="header">
    <div class="logo" on:click={home}>
        <LogoOrange size={32} />
        <div class="name">OpenChat</div>
    </div>
    <div class="menu">
        <MenuItems on:login on:logout />
    </div>
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
        padding: 0 toRem(160);
        font-family: "Ubuntu", sans-serif;
        background-color: pink;
        // max-width: 1120px;
        margin: 0 auto;
        width: 100%;
        font-weight: 700;
        flex: 0 0 toRem(80);
        @include z-index("menu");
        background-color: var(--bg);
        color: var(--txt);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: $sp5;
        position: sticky;
        top: 0;
        height: toRem(80);
    }
</style>
