<script lang="ts">
    export let backgroundColor: string;
    export let color: string = "var(--txt)";

    export let title: string;
    export let height: number;
</script>

<div
    style={`height: ${height}px; background-color: ${backgroundColor}; color: ${color};`}
    class="feature">
    <div class="title">
        {title}
    </div>
    <div class="blurb" class:light={backgroundColor === "transparent"}>
        <slot />
    </div>
</div>

<style type="text/scss">
    .title {
        margin: 0;
        @include manrope(500, 50, 68);
        margin-bottom: $sp5;

        @include mobile() {
            @include manrope(500, 28, 38);
        }
    }
    .blurb {
        @include roboto(300, 16, 28);

        &.light {
            color: var(--txt-light);
        }
    }
    .feature {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 0 50% 0 toRem(160);

        @include mobile() {
            // padding: toRem(50) toRem(24);

            padding: toRem(50) 50% toRem(50) toRem(24);
        }
    }
</style>
