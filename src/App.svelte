<script lang="ts">
    import { fade } from "svelte/transition";
    import Header from "./components/Header.svelte";
    import Router from "./components/Router.svelte";
    import BackgroundLogo from "./components/BackgroundLogo.svelte";
    import { dimensions } from "./stores/screenDimensions";
    import Fab from "./components/Fab.svelte";
    import ArrowUp from "svelte-material-icons/ArrowUp.svelte";
    import { onMount } from "svelte";
    import { AuthClient, IdbStorage } from "@dfinity/auth-client";
    import type { Identity } from "@dfinity/agent";
    import { AuthProvider } from "./authProvider";
    import { selectedAuthProviderStore, loggingIn } from "./stores/authProviders";
    import "./theme/themes";

    let mainEl: HTMLElement | undefined;
    let scrollTop = 0;
    let authClient = AuthClient.create({
        idleOptions: { disableIdle: true },
        storage: new IdbStorage(),
    });
    const SESSION_TIMEOUT_NANOS = BigInt(30 * 24 * 60 * 60 * 1000 * 1000 * 1000); // 30 days

    $: bigLogo = $dimensions.width / 3;
    $: smallLogo = $dimensions.width / 5;
    $: show = $dimensions.width > 1800;
    $: backToTop = scrollTop > 400;

    function onScroll() {
        scrollTop = mainEl?.scrollTop ?? 0;
    }

    function scrollToTop() {
        mainEl?.scrollTo({
            behavior: "auto",
            top: 0,
        });
    }

    onMount(async () => {
        authClient.then((c) => {
            const id = c.getIdentity();
            const principal = id.getPrincipal();
            const anon = principal.isAnonymous();
            if (!anon) {
                console.log(
                    "App.svelte: we are signed in so ... we should not be here? ",
                    principal.toString()
                );
            }
        });
    });

    function doLogin(authProvider: AuthProvider): Promise<Identity> {
        loggingIn.set(true);
        return authClient.then((c) => {
            return new Promise((resolve, reject) => {
                c.login({
                    identityProvider: buildAuthProviderUrl(authProvider),
                    maxTimeToLive: SESSION_TIMEOUT_NANOS,
                    derivationOrigin: process.env.II_DERIVATION_ORIGIN,
                    onSuccess: () => resolve(c.getIdentity()),
                    onError: (err) => reject(err),
                });
            });
        });
    }
    function login(): void {
        if ($loggingIn) return;
        doLogin($selectedAuthProviderStore)
            .then((_id) => {
                console.log("App.svelte - successfully logged in we should ideally reload now");
                window.location.reload();
            })
            .catch((err) => {
                loggingIn.set(false);
                console.log("error logging in: ", err);
            });
    }

    function buildAuthProviderUrl(authProvider: AuthProvider): string | undefined {
        if (authProvider === AuthProvider.II) {
            return process.env.INTERNET_IDENTITY_URL;
        } else {
            return (
                process.env.NFID_URL +
                "&applicationLogo=" +
                encodeURIComponent("https://oc.app/apple-touch-icon.png") +
                "#authorize"
            );
        }
    }
</script>

{#if $loggingIn}
    <div class="block">
        <img alt="logo" src="../spinner.svg" />
    </div>
{/if}

<main id="main" class="main" bind:this={mainEl} on:scroll={onScroll}>
    <Header on:login={login} />

    <Router on:login={login} on:scrollToTop={scrollToTop} />

    {#if show}
        <BackgroundLogo
            width={`${bigLogo}px`}
            bottom={"0"}
            left={"0"}
            opacity={"0.05"}
            skew={"5deg"} />
        <BackgroundLogo width={`${smallLogo}px`} bottom={"0"} right={"100px"} opacity={"0.1"} />
    {/if}

    {#if backToTop}
        <div transition:fade|local class="fab" on:click={scrollToTop}>
            <Fab>
                <ArrowUp size={"1.4em"} color={"rgba(255,255,255,0.8)"} />
            </Fab>
        </div>
    {/if}
</main>

<style type="text/scss">
    .block {
        top: 0;
        left: 0;
        position: absolute;
        height: 100vh;
        width: 100%;
        pointer-events: all;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;

        img {
            width: toRem(150);
            height: toRem(150);
            @include spin();
        }
    }
    .main {
        display: grid;
        grid-template-columns: 1f;
        // grid-template-rows: repeat(2, auto);
        grid-template-rows: toRem(60) auto;
        text-align: center;

        // display: flex;
        // flex-direction: column;
        background: var(--gradient);
        overflow-y: auto;
        overflow-x: hidden;
        height: 100%;
        min-height: 100%;
    }
    .fab {
        position: absolute;
        bottom: toRem(40);
        right: toRem(40);
    }
</style>
