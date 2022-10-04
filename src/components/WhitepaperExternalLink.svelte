<script lang="ts">
    import OpenInNew from "svelte-material-icons/OpenInNew.svelte";

    export let href: string;
    let viewBox = "0 -3 26 26";
</script>

<a class="whitepaper-link" {href} target="_blank">
    <slot />

    <div class="icon">
        <OpenInNew {viewBox} size={"1em"} color={"#fff"} />
    </div>
</a>

<style type="text/scss">
    .icon {
        position: relative;
        top: 3px;
        display: inline;
    }

    a {
        position: relative;
    }
    :global(.whitepaper .highlight) {
        color: var(--accent);
    }
</style>
