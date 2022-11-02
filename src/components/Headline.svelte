<script lang="ts">
    import { themeNameStore } from "../theme/themes";
</script>

<h2 class:dark={$themeNameStore === "dark"}><slot /></h2>

<style type="text/scss">
    h2 {
        margin: 0;
        @include manrope(700, 48, 55);
        margin-bottom: 1.5rem;

        &.dark {
            color: var(--accent);
        }
    }
</style>
