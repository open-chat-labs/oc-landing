<script lang="ts">
    import { fade } from "svelte/transition";
    import { inview } from "svelte-inview";

    export let lazyLoad = true;

    let options = {
        rootMargin: "50px",
        unobserveOnEnter: true,
    };

    export let id: string;
</script>

<section
    {id}
    use:inview={options}
    on:change={({ detail }) => {
        lazyLoad = !detail.inView;
    }}>
    {#if !lazyLoad}
        <div in:fade={{ duration: 500 }} class="container">
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
