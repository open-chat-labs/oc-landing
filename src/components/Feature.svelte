<script lang="ts">
    export let backgroundColor: string;
    export let color: string = "var(--txt)";

    export let title: string;
</script>

<div style={`background-color: ${backgroundColor}; color: ${color};`} class="feature">
    <div class="title">
        {title}
    </div>
    <div class="blurb">
        <slot />
    </div>
</div>

<style type="text/scss">
    .title {
        margin: 0;
        @include manrope(500, 50, 68);
        margin-bottom: $sp5;
    }
    .blurb {
        @include roboto(400, 16, 28);
    }
    .feature {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        min-height: 1000px;
        padding: 0 50% 0 toRem(160);

        @include mobile() {
            padding: toRem(50) toRem(24);
            min-height: unset;
            height: calc(100vh - toRem(80));
        }
    }
</style>
