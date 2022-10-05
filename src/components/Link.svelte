<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { currentPath } from "../stores/route";

    export let path: string | undefined = undefined;
    export let mode: "menu" | "link" = "link";

    const dispatch = createEventDispatcher();

    function clickLink(e: MouseEvent) {
        if (path !== undefined) {
            currentPath.set(path);
        }
        e.preventDefault();
        dispatch("linkClicked");
    }
</script>

<a
    class="link"
    class:menu={mode === "menu"}
    href={path === undefined ? "#" : `/${path}`}
    class:selected={$currentPath === path}
    on:click={clickLink}><slot /></a>

<style type="text/scss">
    a {
        text-decoration: underline;
        text-underline-offset: 2px;
        color: inherit;
        cursor: pointer;
        font-style: italic;

        &:hover {
            text-decoration: underline;
        }

        &.menu {
            text-decoration: none;
            color: rgba(255, 255, 255, 0.9);
            font-style: normal;
            text-transform: lowercase;
        }

        &.selected {
            text-decoration: underline;
            text-decoration-color: var(--accent);
            text-underline-offset: $sp1;
            text-decoration-thickness: 2px;
        }
    }
</style>
