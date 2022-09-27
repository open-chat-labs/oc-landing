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
        padding: $sp6;
        @include fullScreenImg();
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: toRem(30);
    }
</style>
