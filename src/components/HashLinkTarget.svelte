<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { mobileWidth } from "../stores/screenDimensions";
    import Copy from "svelte-material-icons/ContentCopy.svelte";
    const dispatch = createEventDispatcher();

    export let id: string;

    $: size = $mobileWidth ? "14px" : "16px";
</script>

<div class="wrapper">
    {#if id.length === 3}
        <h3 class="link-target" {id}><slot /></h3>
    {:else if id.length === 5}
        <h4 class="link-target" {id}><slot /></h4>
    {/if}
    <div class="copy" on:click={() => dispatch("copyUrl", id)}>
        <Copy {size} color={"var(--txt)"} />
    </div>
</div>

<style type="text/scss">
    :global(.link-target) {
        transition: color ease-in-out 300ms;
    }

    :global(.link-target.highlight) {
        color: var(--accent);
    }

    h3,
    h4 {
        margin: 0;
    }

    h3 {
        @include manrope(700, 20, 22);
    }

    h4 {
        @include manrope(700, 16, 22);
    }

    .wrapper {
        margin-top: $sp6;
        margin-bottom: $sp3;
        display: flex;
        align-items: center;
        gap: $sp3;

        .copy {
            cursor: pointer;
        }

        @include mobile() {
            margin-top: $sp4;
        }
    }
</style>
