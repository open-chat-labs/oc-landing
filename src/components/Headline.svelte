<script lang="ts">
    import { themeNameStore } from "../theme/themes";
</script>

<h2 class:dark={$themeNameStore === "dark"}><slot /></h2>

<style type="text/scss">
    h2 {
        margin: 0;
        @include manrope(500, 50, 68);
        margin-bottom: toRem(60);

        @include mobile() {
            @include manrope(500, 32, 45);
            margin-bottom: toRem(40);
        }
    }
</style>
