<script lang="ts">
    export let imageUrl: string;
</script>

<div
    class="hero"
    style={`background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4)), url("${imageUrl}")`}>
    <slot />
</div>

<style type="text/scss">
    .hero {
        @include fullScreenImg();
        height: toRem(500);
        padding-top: toRem(25);
        position: relative;
        margin-bottom: toRem(20);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: toRem(30);

        @include mobile() {
            height: toRem(400);
        }
    }
</style>
