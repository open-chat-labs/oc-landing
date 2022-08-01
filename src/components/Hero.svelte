<script lang="ts">
    import { onMount } from "svelte";
    import HeroWrapper from "./HeroWrapper.svelte";
    import Launch from "./Launch.svelte";

    import Plane from "./Plane.svelte";

    let loaded = false;

    onMount(() => {
        setTimeout(() => (loaded = true), 100);
    });
</script>

<HeroWrapper imageUrl={"../hero.jpg"}>
    <div class="text">
        <span class:loaded class="open">Open</span>
    </div>

    <div class="text">
        <span class:loaded class="chat">Chat</span>
    </div>

    <div class="plane">
        <Plane />
    </div>

    <Launch size="large" />
</HeroWrapper>

<style type="text/scss">
    $speed: 500ms;

    .text {
        position: relative;
        width: 100%;
    }

    .plane {
        position: absolute;
        bottom: toRem(158);
        width: toRem(400);
        height: auto;
        right: 0;

        @include mobile() {
            width: toRem(300);
            top: toRem(30);
            bottom: unset;
        }
    }

    .open,
    .chat {
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        font-style: italic;
        font-size: toRem(140);
        line-height: 80%;
        color: #fff;
        text-shadow: toRem(5) toRem(5) toRem(3) var(--tertiary),
            toRem(16) toRem(16) toRem(16) rgba(0, 0, 0, 0.5);
        transition: left ease-in $speed, right ease-in $speed, opacity ease-in $speed;
        // position: absolute;
        position: relative;
        opacity: 0;

        @include mobile() {
            font-size: toRem(100);
            line-height: 70%;
        }
    }

    .open {
        left: -1000px;
        &.loaded {
            left: -100px;
            opacity: 1;
        }
    }

    .chat {
        right: -1000px;
        &.loaded {
            right: 0px;
            opacity: 1;
        }
    }
</style>
