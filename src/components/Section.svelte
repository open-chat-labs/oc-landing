<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { inview } from "svelte-inview";

    export let lazy = true;

    let visible = false;

    let options = {
        rootMargin: "50px",
        unobserveOnEnter: true,
        threshold: [0.5],
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
    {:else if visible}
        <div transition:fly={{ y: 200, duration: 500 }} class="container">
            <slot />
        </div>
    {/if}
</section>

<style type="text/scss">
    section {
        min-height: 300px;
        margin-bottom: toRem(40);

        @include mobile() {
            margin-bottom: toRem(20);
        }
    }

    .container {
        position: relative;
    }
</style>
