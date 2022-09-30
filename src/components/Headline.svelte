<script lang="ts">
    import { themeNameStore } from "../theme/themes";
</script>

<h2 class:dark={$themeNameStore === "dark"}><slot /></h2>

<style type="text/scss">
    h2 {
        margin: 0;
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;

        &.dark {
            color: var(--accent);
        }

        &:not(.dark) {
            text-shadow: 1px 1px #191919;
        }
    }
</style>
