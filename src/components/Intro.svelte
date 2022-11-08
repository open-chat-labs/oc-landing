<script lang="ts">
    import Launch from "./Launch.svelte";
    import { themeStore } from "../theme/themes";
    import { showAuthProviders, selectedAuthProviderStore } from "../stores/authProviders";
    import LogoOrange from "./LogoOrange.svelte";
    import OnChain from "./OnChain.svelte";
    import { availableHeight, mobileWidth } from "../stores/screenDimensions";
    import OnChainAlt from "./OnChainAlt.svelte";
    import { AuthProvider } from "../authProvider";
    import InternetIdentityLogo from "./InternetIdentityLogo.svelte";

    $: imgUrl =
        $themeStore.name === "light"
            ? "../screenshots/intro_light.png"
            : "../screenshots/intro_dark.png";
    $: logoSize = $mobileWidth ? 40 : 56;

    $: introStyle = $mobileWidth ? "" : `height: ${$availableHeight}px`;
</script>

<div class="wrapper" style={introStyle}>
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
            {#if $showAuthProviders && !$mobileWidth}
                <div class="auth-providers">
                    <div
                        class="provider"
                        class:selected={$selectedAuthProviderStore === AuthProvider.II}
                        on:click={() => selectedAuthProviderStore.set(AuthProvider.II)}>
                        <div class="ii-img">
                            <InternetIdentityLogo />
                        </div>
                        {AuthProvider.II}
                    </div>
                    <div
                        class="provider"
                        class:selected={$selectedAuthProviderStore === AuthProvider.NFID}
                        on:click={() => selectedAuthProviderStore.set(AuthProvider.NFID)}>
                        <img class="nfid-img" src="../nfid.svg" alt="" />
                        {AuthProvider.NFID}
                    </div>
                </div>
            {/if}
        </div>
        <div class="powered-by">
            {#if $mobileWidth}
                <OnChainAlt />
            {:else}
                <OnChain />
            {/if}
        </div>
        <div class="image-wrapper-wrapper">
            <div class="image-wrapper">
                <img class="img" alt="Open chat list" src={imgUrl} />
                {#if $mobileWidth}
                    <div
                        class:light={$themeStore.name === "light"}
                        class:dark={$themeStore.name === "dark"}
                        class="overlay" />
                {/if}
            </div>
        </div>
    </div>
</div>

<style type="text/scss">
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .intro {
        position: relative;
        display: grid;
        grid-template-columns: 3fr 2fr;
        justify-content: center;
        align-items: center;
        column-gap: toRem(100);
        row-gap: toRem(20);

        grid-template-areas:
            "name image"
            "title image"
            "blurb image"
            "launch image"
            "powered-by image";

        @include mobile() {
            margin-top: toRem(80);
            margin-bottom: 0;
            grid-template-columns: 6fr 1fr;
            column-gap: 0;

            grid-template-areas:
                "name name"
                "title title"
                "blurb ."
                "launch launch"
                "image image"
                "powered-by .";
        }
    }

    .name {
        grid-area: name;
        display: flex;
        align-items: center;
        gap: toRem(8);
        h1 {
            @include manrope(700, 37, 50);
            margin: 0;

            @include mobile() {
                @include manrope(700, 28, 38);
            }
        }
    }
    .title {
        grid-area: title;
        @include manrope(500, 50, 68);
        margin-top: 0;
        margin-bottom: toRem(10);

        @include mobile() {
            @include manrope(500, 32, 42);
        }
    }

    .blurb {
        grid-area: blurb;
        color: var(--txt-light);
        margin-bottom: toRem(24);

        @include mobile() {
            margin-bottom: toRem(16);
        }
    }

    .powered-by {
        grid-area: powered-by;
        position: absolute;
        bottom: 0;
        height: toRem(30);
        z-index: 1;

        @include mobile() {
            bottom: toRem(50);
        }
    }

    .launch {
        grid-area: launch;
        display: flex;
        gap: toRem(24);
        align-items: center;
        @include mobile() {
            margin-bottom: toRem(16);
        }
    }

    .image-wrapper-wrapper {
        grid-area: image;
        @include mobile() {
            border-radius: toRem(18);
            height: toRem(420);
            overflow: hidden;
        }
    }

    .image-wrapper {
        padding: toRem(40);
        position: relative;

        @include mobile() {
            padding: 0;
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            &.dark {
                background: linear-gradient(
                    180deg,
                    rgba(27, 28, 33, 0) 0%,
                    #1b1c21 42.19%,
                    #1b1c21 100%
                );
            }

            &.light {
                background: linear-gradient(
                    180deg,
                    rgba(231, 238, 247, 0) 0%,
                    #ffffff 39.74%,
                    #ffffff 100%
                );
            }
        }
    }

    .img {
        box-shadow: 8px 4px 16px 0px #00000066;
        width: 100%;
        border: toRem(5) solid var(--phone-bd);
        border-radius: toRem(18);

        @include mobile() {
            border: toRem(3) solid var(--phone-bd);
        }
    }

    .auth-providers {
        grid-area: auth-providers;
        @include roboto(300, 12, 25);
        display: flex;
        gap: toRem(8);

        .provider {
            cursor: pointer;
            padding: toRem(2);

            &.selected {
                border-bottom: 3px solid var(--accent);
            }

            .ii-img,
            .nfid-img {
                display: inline-block;
                width: 20px;
                margin-right: $sp3;
            }
        }
    }
</style>
