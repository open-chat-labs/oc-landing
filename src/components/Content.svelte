<div class="outer">
    <div class="content">
        <slot />
    </div>
</div>

<style type="text/scss">
    .content {
        max-width: 1440px;
        padding: 0;
        margin: 0 auto;
    }

    .outer {
        position: relative;

        @include mobile() {
            margin: 0;
            top: 0;
        }
    }
</style>
