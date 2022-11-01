<div class="outer">
    <div class="content">
        <slot />
    </div>
</div>

<style type="text/scss">
    .content {
        max-width: 1000px;
        margin: 0 auto;
        @include constrain(0, 0);
    }

    .outer {
        position: relative;
        background-color: var(--content-bg);

        @include mobile() {
            margin: 0;
            top: 0;
        }
    }
</style>
