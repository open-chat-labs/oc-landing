<script lang="ts">
    import { fade } from "svelte/transition";
    import { inview } from "svelte-inview";

    let inView = false;
    let options = {
        rootMargin: "50px",
        unobserveOnEnter: true,
    };

    export let id: string;
    export let zoom: "left" | "right" | "none";
</script>

<section
    {id}
    use:inview={options}
    on:change={({ detail }) => {
        inView = detail.inView;
    }}>
    <div
        class:left={zoom === "left"}
        class:right={zoom === "right"}
        class:visible={inView || zoom === "none"}
        in:fade
        class="box">
        <slot />
    </div>
</section>

<style type="text/scss">
    $speed: 400ms;

    section {
        margin-bottom: toRem(40);

        @include mobile() {
            margin-bottom: toRem(20);
        }
    }

    .box {
        opacity: 0;
        transform: scale(0.8);
        transition: opacity ease-in-out $speed, transform ease-in-out $speed,
            right ease-in-out $speed, left ease-in-out $speed;
        position: relative;

        &.right {
            right: -500px;
        }

        &.left {
            left: -500px;
        }

        &.visible {
            opacity: 1;
            transform: scale(1);
            &.right {
                right: 0;
            }

            &.left {
                left: 0;
            }
        }
    }
</style>
