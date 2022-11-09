<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let url: string;
    export let alt: string;

    const dispatch = createEventDispatcher();
</script>

<div class="zoomed" on:click={() => dispatch("collapse")}>
    <img src={url} {alt} />
</div>

<style type="text/scss">
    .zoomed {
        padding: toRem(80);
        position: fixed;
        width: 100%;
        height: 100vh;
        min-height: 100%;
        top: 0;
        left: 0;
        @include z-index("zoom");
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        backdrop-filter: blur(20px);
        background-color: rgba(0, 0, 0, 0.5);

        img {
            height: 100%;
        }
    }
</style>
