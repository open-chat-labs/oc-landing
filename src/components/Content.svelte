<script lang="ts">
    export let offset: boolean;
</script>

<div class="outer" class:offset>
    <div class="content">
        <slot />
    </div>
</div>

<style type="text/scss">
    .content {
        padding: toRem(30);
        max-width: 1000px;
        margin: 0 auto;

        @include mobile() {
            padding: toRem(20);
        }
    }

    .outer {
        position: relative;
        margin: 0 toRem(40);
        background-color: #fff;
        margin-top: toRem(40);
        margin-bottom: toRem(40);

        &.offset {
            margin-top: toRem(-80);
        }

        @include mobile() {
            margin: 0;
            top: 0;
        }
    }
</style>
