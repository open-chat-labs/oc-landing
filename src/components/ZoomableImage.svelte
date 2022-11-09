<script lang="ts">
    import ArrowExpand from "svelte-material-icons/ArrowExpand.svelte";
    import ArrowCollapse from "svelte-material-icons/ArrowCollapse.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let zoom = false;

    export let url: string;
    export let alt: string;

    function zoomin() {
        dispatch("zoom", { url, alt });
        zoom = !zoom;
    }
</script>

{#if zoom}
    <div class="zoomed" style={`background-image: url(${url})`} />
{/if}

<div class="wrapper">
    <img class="zoomable" src={url} {alt} />
    <div class="expand" class:zoomed={zoom} on:click={zoomin}>
        <ArrowExpand size={"1em"} color={"#000"} />
    </div>
</div>

<style type="text/scss">
    .expand {
        position: absolute;
        bottom: toRem(10);
        left: toRem(10);
        cursor: pointer;
    }

    .wrapper {
        position: relative;
    }

    .zoomable {
        width: 100%;
    }
</style>
