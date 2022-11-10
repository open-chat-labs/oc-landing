<script lang="ts">
    import { slide } from "svelte/transition";
    import { expoInOut } from "svelte/easing";
    import Arrow from "./Arrow.svelte";
    import { mobileWidth } from "../stores/screenDimensions";
    import Copy from "svelte-material-icons/ContentCopy.svelte";

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let id: string | undefined = undefined;
    export let title: string;
    export let open = false;
    export let last = false;
    export let gutter: "small" | "large" = "small";

    function toggle() {
        open = !open;
        dispatch(open ? "opened" : "closed");
        dispatch("toggle");
    }

    $: size = $mobileWidth ? "14px" : "16px";
    $: arrowSize = $mobileWidth ? 16 : 20;
</script>

<div class="card" class:last>
    <div class="header" class:open on:click={toggle}>
        <div class={`subtitle ${gutter}`}>
            <slot name="subtitle" />
        </div>
        <div class="title">
            <span>{title}</span>
            {#if id !== undefined}
                <div class="copy" on:click|stopPropagation={() => dispatch("copyUrl", id)}>
                    <Copy {size} color={"var(--txt)"} />
                </div>
            {/if}
        </div>
        <div class="icon">
            <Arrow
                size={arrowSize}
                rotate={open ? -45 : 45}
                color={open ? "var(--primary)" : "var(--txt)"} />
        </div>
    </div>

    {#if open}
        <div
            class={`body ${gutter}`}
            transition:slide|local={{ duration: 200, easing: expoInOut }}
            class:open>
            <slot name="body" />
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

        .title {
            flex: auto;
            display: flex;
            align-items: center;
            gap: $sp3;
        }

        .copy {
            cursor: pointer;
        }

        .subtitle {
            @include manrope(700, 28, 38);
            flex: 0 0 toRem(80);

            &.large {
                flex: 0 0 toRem(160);
            }

            @include mobile() {
                flex: 0 0 toRem(30);
                @include manrope(700, 18, 38);

                &.large {
                    flex: 0 0 toRem(80);
                }
            }
        }
    }

    .icon {
        flex: 0 0 toRem(40);
        justify-self: flex-end;
        text-align: right;
    }

    .body {
        padding: 0 0 toRem(30) toRem(80);
        max-width: 75%;

        &.large {
            padding: 0 0 toRem(30) toRem(160);
        }

        @include mobile() {
            padding: 0 0 toRem(24) 0;
            max-width: 100%;
            &.large {
                padding: 0 0 toRem(24) 0;
            }
        }
    }
</style>
