<script lang="ts">
    import { slide } from "svelte/transition";
    import { expoInOut } from "svelte/easing";
    import Arrow from "./Arrow.svelte";

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let number: number;
    export let headerText: string;
    export let open = false;
    export let last = false;

    function toggle() {
        open = !open;
        dispatch(open ? "opened" : "closed");
        dispatch("toggle");
    }
</script>

<div class="card" class:last>
    <div class="header" class:open on:click={toggle}>
        <div class="number">{number}</div>
        <div class="words">{headerText}</div>
        <div class="icon">
            <Arrow rotate={open ? -45 : 45} color={open ? "var(--primary)" : "var(--txt)"} />
        </div>
    </div>

    {#if open}
        <div
            class="words body"
            transition:slide|local={{ duration: 200, easing: expoInOut }}
            class:open>
            <slot />
        </div>
    {/if}
</div>

<style type="text/scss">
    .card {
        border-top: solid 1px var(--roadmap-bd);

        &.last {
            border-bottom: solid 1px var(--roadmap-bd);
        }
    }

    .header {
        padding: toRem(24) 0;
        display: flex;
        cursor: pointer;
        justify-content: space-between;
        align-items: center;
        @include manrope(500, 28, 38);

        @include mobile() {
            padding: toRem(18) 0;
            @include manrope(500, 18, 24);
        }
    }

    .words {
        flex: auto;
    }

    .number {
        @include manrope(700, 28, 38);
        flex: 0 0 toRem(80);

        @include mobile() {
            flex: 0 0 toRem(40);
            @include manrope(700, 18, 38);
        }
    }

    .icon {
        flex: 0 0 toRem(40);
        justify-self: flex-end;
    }

    .body {
        padding: 0 0 toRem(40) toRem(80);
        max-width: 75%;

        @include mobile() {
            padding: 0 0 toRem(24) 0;
            max-width: 100%;
        }
    }
</style>
