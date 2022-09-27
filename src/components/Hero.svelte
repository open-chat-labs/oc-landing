<script lang="ts">
    import { onMount, createEventDispatcher } from "svelte";
    import HeroWrapper from "./HeroWrapper.svelte";
    import Launch from "./Launch.svelte";

    let loaded = false;
    const dispatch = createEventDispatcher();

    onMount(() => {
        setTimeout(() => (loaded = true), 100);
    });
</script>

<HeroWrapper imageUrl={"../underwater.jpg"}>
    <div class="text">
        <span class:loaded class="name">OpenChat</span>
    </div>

    <div on:click={() => dispatch("login")}>
        <Launch />
    </div>
</HeroWrapper>

<style type="text/scss">
    $speed: 500ms;

    .text {
        position: relative;
        width: 100%;
        margin-bottom: toRem(20);
    }

    .name {
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        font-style: italic;
        font-size: toRem(140);
        line-height: 80%;
        color: #fff;
        text-shadow: toRem(16) toRem(16) toRem(16) rgba(0, 0, 0, 0.5);
        transition: left ease-in $speed, right ease-in $speed, opacity ease-in $speed;
        // position: absolute;
        position: relative;
        opacity: 0;

        @include mobile() {
            font-size: toRem(80);
            line-height: 70%;
        }
    }

    .name {
        left: -1000px;
        &.loaded {
            left: 0;
            opacity: 1;
        }
    }
</style>
