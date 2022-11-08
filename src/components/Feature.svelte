<script lang="ts">
    export let backgroundColor: string;
    export let color: string = "var(--txt)";

    export let title: string;
    export let height: number;
</script>

<div
    style={`height: ${height}px; color: ${color}; background: linear-gradient(78.53deg, rgba(0, 0, 0, 0.1) 5.34%, rgba(0, 0, 0, 0) 70.2%), ${backgroundColor};`}
    class="feature">
    <div class="inner">
        <div class="desc">
            <div class="title">
                {title}
            </div>
            <div class="blurb" class:light={backgroundColor === "transparent"}>
                <slot />
            </div>
        </div>
        <div class="phone" />
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

    .inner {
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        height: 100%;
        align-items: flex-start;
        justify-content: center;
        padding: 0 toRem(160);
        @include mobile() {
            padding: 0 toRem(24);
        }

        .desc {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            height: 100%;
            flex: 1;
        }

        .phone {
            flex: 1;
        }
    }
</style>
