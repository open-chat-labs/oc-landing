<div class="fab" on:click role="button">
    <slot />
</div>

<style type="text/scss">
    $color: var(--primary);

    .fab {
        @include z-index("fab");
        transition: background-color ease-in-out 200ms;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $color;
        cursor: pointer;
        &:hover {
            background-color: darken(#22a7f2, 10%);
        }
    }
</style>
