<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { currentPath } from "../stores/route";
    import Arrow from "./Arrow.svelte";

    export let path: string | undefined = undefined;
    export let url: string | undefined = undefined;
    export let color: string = "#7E52FF";
    export let target: string | undefined = undefined;

    $: href = path === undefined 
        ? url === undefined 
        ? "#" 
        : url 
        : `/${path}`;

    const dispatch = createEventDispatcher();

    function clickLink(e: MouseEvent) {
        if (path !== undefined) {
            currentPath.set({
                path,
                hash: "",
            });
        }
        
        if (url != undefined) {
            return;
        }

        e.preventDefault();
        dispatch("linkClicked");
    }
</script>

<a class="link" href={href} target={target} on:click={clickLink}>
    <slot />
    <div class="arrow">
        <Arrow {color} />
    </div>
</a>

<style type="text/scss">
    a {
        position: relative;
        @include manrope(700, 16, 18);
        color: inherit;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: $sp3;
        transition: color 250ms ease-in-out;

        .arrow {
            transition: flex 250ms ease-in-out;
            flex: 0 0 toRem(16);
            text-align: end;
        }

        &:hover {
            text-decoration: none;
            color: var(--txt-light);

            .arrow {
                flex: 0 0 toRem(24);
            }
        }
    }
</style>
