<script lang="ts">
    import { onMount, createEventDispatcher } from "svelte";
    import HeroWrapper from "./HeroWrapper.svelte";
    import Launch from "./Launch.svelte";
    import { mobileWidth } from "../stores/screenDimensions";

    let loaded = false;
    let debug = false;
    const dispatch = createEventDispatcher();

    let idx = $mobileWidth ? "12-sm" : "12-md";

    onMount(() => {
        setTimeout(() => (loaded = true), 100);
    });
</script>

<HeroWrapper imageUrl={`../network${idx}.jpg`}>
    <div class="text">
        <span class:loaded class="open">
            <div class="logo" class:loaded>
                <img alt="logo" src="../spinner.svg" />
            </div>
            <span>Open</span>
        </span>
        <span class:loaded class="chat">Chat</span>
    </div>

    <Launch on:login />
</HeroWrapper>

{#if debug}
    <div class="images">
        <div class="image" class:selected={idx === ""} on:click={() => (idx = "")}>1</div>
        <div class="image" class:selected={idx === "1"} on:click={() => (idx = "1")}>2</div>
        <div class="image" class:selected={idx === "2"} on:click={() => (idx = "2")}>3</div>
        <div class="image" class:selected={idx === "3"} on:click={() => (idx = "3")}>4</div>
        <div class="image" class:selected={idx === "4"} on:click={() => (idx = "4")}>5</div>
        <div class="image" class:selected={idx === "5"} on:click={() => (idx = "5")}>6</div>
        <div class="image" class:selected={idx === "6"} on:click={() => (idx = "6")}>7</div>
        <div class="image" class:selected={idx === "7"} on:click={() => (idx = "7")}>8</div>
        <div class="image" class:selected={idx === "8"} on:click={() => (idx = "8")}>9</div>
        <div class="image" class:selected={idx === "9"} on:click={() => (idx = "9")}>10</div>
        <div class="image" class:selected={idx === "10"} on:click={() => (idx = "10")}>11</div>
        <div class="image" class:selected={idx === "11"} on:click={() => (idx = "11")}>12</div>
        <div class="image" class:selected={idx === "12-md"} on:click={() => (idx = "12-md")}>
            13
        </div>
    </div>
{/if}

<style type="text/scss">
    $speed: 500ms;

    .images {
        display: flex;
        gap: 5px;
        justify-content: center;
    }

    .image {
        width: 30px;
        background-color: rgba(255, 255, 255, 0.1);
        cursor: pointer;
        padding: 5px;

        &.selected {
            background-color: rgba(255, 255, 255, 0.3);
        }
    }

    .text {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .open,
    .chat {
        font-weight: 900;
        display: inline-flex;
        align-items: center;
        // font-style: italic;
        font-size: toRem(120);
        line-height: 80%;
        color: #fff;
        text-shadow: toRem(10) toRem(10) toRem(15) rgba(0, 0, 0, 0.5);
        transition: left ease-in $speed, right ease-in $speed, opacity ease-in $speed;
        position: relative;
        opacity: 0;

        @include mobile() {
            font-size: toRem(70);
            line-height: 70%;
        }
    }

    .logo {
        width: toRem(120);
        height: toRem(120);
        display: inline-block;
        transition: transform ease-out ($speed * 2) $speed;
        transform: rotate(270deg);
        position: relative;
        margin-right: toRem(10);

        &.loaded {
            transform: rotate(0);
        }

        @include mobile() {
            width: toRem(70);
            height: toRem(70);
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
