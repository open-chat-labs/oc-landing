<script lang="ts">
    import Launch from "./Launch.svelte";
    import { themeStore } from "../theme/themes";
    import LogoOrange from "./LogoOrange.svelte";
    import OnChain from "./OnChain.svelte";

    $: imgUrl = $themeStore.name === "light" ? "../intro_light.png" : "../intro_dark.png";
</script>

<div class="intro">
    <div class="left">
        <div class="name">
            <LogoOrange size={56} />
            <h1>OpenChat</h1>
        </div>
        <h2>A decentralized chat app governed by the people for the people</h2>
        <p>
            OpenChat is a fully featured chat application running end-to-end on the <a
                href="https://internetcomputer.org/"
                target="_blank">
                Internet Computer
            </a> blockchain.
        </p>
        <Launch on:login />
        <div class="powered-by">
            <OnChain />
        </div>
    </div>
    <div class="right">
        <div class="image-wrapper">
            <img class="img" alt="Open chat list" src={imgUrl} />
        </div>
    </div>
</div>

<style type="text/scss">
    .intro {
        position: relative;
        margin-bottom: toRem(160);
        display: grid;
        grid-template-columns: 3fr 2fr;
        gap: toRem(100);
        justify-content: center;
        align-items: center;

        @include mobile() {
            grid-template-columns: 1fr;
        }
    }

    .left {
        text-align: left;

        .name {
            display: flex;
            align-items: center;
            gap: toRem(8);
            h1 {
                @include manrope(700, 37, 43);
                margin: 0;
            }
        }
        h2 {
            @include manrope(500, 28, 32);
            margin-bottom: toRem(10);
        }

        p {
            @include roboto(400, 16, 28);
            color: var(--txt-light);
        }

        .powered-by {
            position: absolute;
            bottom: 0;
            height: toRem(30);
        }
    }

    .right {
        padding: toRem(100) toRem(20) 0 toRem(50);
    }

    .img {
        box-shadow: 8px 4px 16px 0px #00000066;
        width: 100%;
    }
</style>
