<script lang="ts" context="module">
    let current: HTMLDivElement | undefined;
</script>

<script lang="ts">
    let box: HTMLDivElement;

    function toggle() {
        if (current && current !== box) {
            current.classList.remove("flipped");
        }
        box.classList.add("flipped");
        current = box;
    }
</script>

<div bind:this={box} class="flip-box">
    <div class="inner" on:click={toggle}>
        <div class="front">
            <slot name="front" />
        </div>
        <div class="back">
            <slot name="back" />
        </div>
    </div>
</div>

<style type="text/scss">
    @include mobile() {
        :global(.flipped .inner) {
            transform: rotateY(180deg);
        }
    }

    .flip-box {
        min-height: toRem(200);
        background-color: transparent;
        perspective: 1000px;
        cursor: pointer;
    }

    .inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform ease-in-out 0.5s;
        transition-delay: 150ms;
        transform-style: preserve-3d;
    }

    @include size-above(sm) {
        .flip-box:hover .inner {
            transform: rotateY(180deg);
        }
    }

    .front,
    .back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
    }

    .back {
        transform: rotateY(180deg);
    }
</style>
