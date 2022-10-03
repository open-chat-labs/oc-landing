<script lang="ts">
    import Logo from "./Logo.svelte";

    export let width: string;
    export let bottom: string;
    export let right: string = "unset";
    export let left: string = "unset";
    export let opacity: string;
    export let viewBox: string = "0 0 361 361";
    export let skew: string = "0deg";

    $: style = `width: ${width}; bottom: ${bottom}; right: ${right}; left: ${left}; opacity: ${opacity}; transform: skewX(${skew})`;

    $: show = true;
    // ($screenWidth === ScreenWidth.ExtraExtraLarge || $screenWidth === ScreenWidth.ExtraLarge);
</script>

{#if show}
    <div class="logo" {style}>
        <Logo {viewBox} />
    </div>
{/if}

<style type="text/scss">
    .logo {
        position: absolute;
        z-index: 0;
        pointer-events: none;
    }
</style>
