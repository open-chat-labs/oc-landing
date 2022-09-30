<script lang="ts">
    import { inview } from "svelte-inview";

    export let lazy = true;
    export let visible = false;

    let options = {
        rootMargin: "50px",
        unobserveOnEnter: true,
        threshold: [0.2],
    };

    export let id: string;
</script>

<section
    {id}
    use:inview={options}
    on:change={({ detail }) => {
        visible = detail.inView;
    }}>
    {#if !lazy}
        <div class="container">
            <slot />
        </div>
    {:else}
        <div class="container lazy" class:visible>
            <slot />
        </div>
    {/if}
</section>

<style type="text/scss">
    section {
        margin-bottom: toRem(40);

        @include mobile() {
            margin-bottom: toRem(20);
        }
    }

    .container {
        position: relative;

        &.lazy {
            transition: top ease-in-out 300ms;
            visibility: hidden;
            top: 200px;

            &.visible {
                visibility: visible;
                top: 0;
            }
        }
    }
</style>
