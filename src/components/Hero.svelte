<script lang="ts">
    import { onMount } from "svelte";

    import Plane from "./Plane.svelte";

    let loaded = false;

    onMount(() => {
        setTimeout(() => (loaded = true), 100);
    });
</script>

<div class="hero">
    <span class:loaded class="open">Open</span>
    <span class:loaded class="chat">Chat</span>
    <div class="plane">
        <Plane />
    </div>
</div>

<style type="text/scss">
    .hero {
        background: var(--gradient);
        @include fullScreenImg("../hero.jpg");
        height: 600px;
        position: relative;
        padding-top: 80px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .plane {
        position: absolute;
        bottom: 158px;
        width: 500px;
        height: auto;
        right: 0;
    }

    .open,
    .chat {
        font-family: "Yantramanav", sans-serif;
        font-style: italic;
        // @include font(bold, italic, fs-260);
        font-size: toRem(160);
        color: #fff;
        text-shadow: 8px 8px 8px rgba(0, 0, 0, 0.5);
        transition: left ease-in 600ms, right ease-in 600ms;
        position: absolute;
    }

    .open {
        left: -1000px;
        top: 100px;
        &.loaded {
            left: 350px;
        }
    }

    .chat {
        top: 220px;
        right: -1000px;
        &.loaded {
            right: 350px;
        }
    }
</style>
