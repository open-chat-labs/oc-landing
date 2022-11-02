<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { currentPath } from "../stores/route";

    export let path: string | undefined = undefined;
    export let mode: "menu" | "link" = "link";
    export let selected = false;

    const dispatch = createEventDispatcher();

    function clickLink(e: MouseEvent) {
        if (path !== undefined) {
            currentPath.set({
                path,
                hash: "",
            });
        }
        e.preventDefault();
        dispatch("linkClicked");
    }
</script>

<a
    class="link"
    class:menu={mode === "menu"}
    href={path === undefined ? "#" : `/${path}`}
    class:selected
    on:click={clickLink}><slot /></a>

<style type="text/scss">
    a {
        @include manrope(700, 16, 22);
        color: inherit;

        &:hover {
            text-decoration: underline;
        }

        &.menu {
            text-decoration: none;
            font-style: normal;
        }

        &.selected {
            text-decoration: underline;
            text-underline-offset: $sp1;
            text-decoration-thickness: 2px;
        }
    }
</style>
