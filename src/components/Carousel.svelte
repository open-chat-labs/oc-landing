<script lang="ts">
    import Siema from "siema";
    import { onMount } from "svelte";

    export let perPage: number;
    export let loop = true;
    export let items: number;

    let root: HTMLDivElement;
    let siema: Siema | undefined;
    let current = 0;
    $: pips = Array.from(Array(items).keys());

    onMount(() => {
        siema = new Siema({
            selector: root,
            perPage,
            loop,
            onChange: () => {
                current = siema?.currentSlide ?? 0;
            },
        });
    });
</script>

<div class="slides" bind:this={root}>
    <slot />
</div>
<div class="pips">
    {#each pips as pip}
        <div class:selected={pip === current} class="pip" on:click={() => siema?.goTo(pip)} />
    {/each}
</div>

<style type="text/scss">
    .slides {
        margin-bottom: $sp4;
    }
    .pips {
        display: flex;
        gap: $sp4;
        justify-content: center;
    }
    .pip {
        flex: 0 0 toRem(20);
        width: toRem(20);
        height: toRem(20);
        background-color: #efefef;
        border-radius: 50%;
        cursor: pointer;

        &.selected {
            background-color: var(--accent);
        }
    }
</style>
