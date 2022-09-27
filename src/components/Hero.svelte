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
        <span class:loaded class="open">Open</span>
        <span class:loaded class="chat">Chat</span>
    </div>

    <div on:click={() => dispatch("login")}>
        <Launch />
    </div>
</HeroWrapper>

<style type="text/scss">
    $speed: 400ms;

    .text {
        position: relative;
        width: 100%;
        margin-bottom: toRem(20);
    }

    .open,
    .chat {
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        font-style: italic;
        font-size: toRem(140);
        line-height: 80%;
        color: rgba(255, 255, 255, 0.9);
        text-shadow: toRem(10) toRem(10) toRem(10) rgba(0, 0, 0, 0.5);
        transition: left ease-in $speed, right ease-in $speed, opacity ease-in $speed;
        // position: absolute;
        position: relative;
        opacity: 0;

        @include mobile() {
            font-size: toRem(80);
            line-height: 70%;
        }
    }

    .open {
        left: -1000px;
        &.loaded {
            left: 0;
            opacity: 1;
        }
    }
    .chat {
        right: -1000px;
        &.loaded {
            right: 0;
            opacity: 1;
        }
    }
</style>
