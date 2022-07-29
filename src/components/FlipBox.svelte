<div class="flip-box">
    <div class="inner">
        <div class="front">
            <slot name="front" />
        </div>
        <div class="back">
            <slot name="back" />
        </div>
    </div>
</div>

<style type="text/scss">
    .flip-box {
        min-height: toRem(200);
        background-color: transparent;
        perspective: 1000px;
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

    .flip-box:hover .inner {
        transform: rotateY(180deg);
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
