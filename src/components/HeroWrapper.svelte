<script lang="ts">
    import { themeNameStore } from "../theme/themes";
    export let imageUrl: string;
    $: end = $themeNameStore === "dark" ? "rgba(0,0,0,0.8)" : "transparent";
</script>

<div class="hero" style={`background: linear-gradient(rgba(0,0,0,0), ${end}), url("${imageUrl}")`}>
    <slot />
</div>

<style type="text/scss">
    .hero {
        padding: $sp6;
        @include fullScreenImg();
        background-position: center !important;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: $sp7;

        @include mobile() {
            gap: $sp6;
        }
    }
</style>
