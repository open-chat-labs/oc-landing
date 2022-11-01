<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { currentPath } from "../stores/route";
    import Arrow from "./Arrow.svelte";

    export let path: string | undefined = undefined;
    export let color: string = "#7E52FF";

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

<a class="link" href={path === undefined ? "#" : `/${path}`} on:click={clickLink}>
    <slot />
    <Arrow {color} />
</a>

<style type="text/scss">
    a {
        @include ubuntu(700, 16, 18);
        color: inherit;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: $sp3;
    }
</style>
