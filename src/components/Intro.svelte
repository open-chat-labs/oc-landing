<script lang="ts">
    import Launch from "./Launch.svelte";
    import { themeStore } from "../theme/themes";
    import LogoOrange from "./LogoOrange.svelte";
    import OnChain from "./OnChain.svelte";
    import { mobileWidth } from "../stores/screenDimensions";
    import OnChainAlt from "./OnChainAlt.svelte";

    $: imgUrl = $themeStore.name === "light" ? "../intro_light.png" : "../intro_dark.png";
    $: logoSize = $mobileWidth ? 40 : 56;
</script>

<div class="intro">
    <div class="name">
        <LogoOrange size={logoSize} />
        <h1>OpenChat</h1>
    </div>
    <h2 class="title">A decentralized chat app governed by the people for the people</h2>
    <p class="blurb">
        OpenChat is a fully featured chat application running end-to-end on the <a
            href="https://internetcomputer.org/"
            target="_blank">
            Internet Computer
        </a> blockchain.
    </p>
    <div class="launch">
        <Launch on:login />
    </div>
    <div class="powered-by">
        {#if $mobileWidth}
            <OnChainAlt />
        {:else}
            <OnChain />
        {/if}
    </div>
    <div class="image-wrapper">
        <img class="img" alt="Open chat list" src={imgUrl} />
    </div>
</div>

<style type="text/scss">
    .intro {
        position: relative;
        margin-bottom: toRem(160);
        display: grid;
        grid-template-columns: 3fr 2fr;
        justify-content: center;
        align-items: center;
        column-gap: toRem(100);

        grid-template-areas:
            ". image"
            "name image"
            "title image"
            "blurb image"
            "launch image"
            ". image"
            "powered-by image";

        @include mobile() {
            width: 125%;
            margin-top: toRem(100);
            margin-bottom: toRem(100);
            grid-template-columns: 6fr 1fr 3fr;
            column-gap: toRem(20);

            grid-template-areas:
                "name name name"
                "title title ."
                "blurb image image"
                "launch image image"
                ". image image"
                "powered-by . .";
        }
    }

    .name {
        grid-area: name;
        display: flex;
        align-items: center;
        gap: toRem(8);
        h1 {
            @include manrope(700, 37, 43);
            margin: 0;
        }
    }
    .title {
        grid-area: title;
        @include manrope(500, 28, 32);
        margin-bottom: toRem(10);
    }

    .blurb {
        grid-area: blurb;
        @include roboto(400, 16, 28);
        color: var(--txt-light);
    }

    .powered-by {
        grid-area: powered-by;
        position: absolute;
        bottom: 0;
        height: toRem(30);
    }

    .launch {
        grid-area: launch;
    }

    .image-wrapper {
        grid-area: image;
        padding: toRem(40);

        @include mobile() {
            padding: 0;
        }
    }

    .img {
        box-shadow: 8px 4px 16px 0px #00000066;
        width: 100%;
    }
</style>
