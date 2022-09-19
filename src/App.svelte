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
    import { selectedAuthProviderStore } from "./stores/authProviders";
    import "./theme/themes";

    let route = "home";
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
            behavior: "smooth",
            top: 0,
        });
    }

    onMount(() => {
        authClient.then((c) => {
            const id = c.getIdentity();
            const principal = id.getPrincipal();
            const anon = principal.isAnonymous();
            if (!anon) {
                console.log(
                    "App.svelte: we are signed in so ... we should not be here? ",
                    principal.toString()
                );
            } else {
                // so we are not logged in
                console.log("not logged in so we will stay put");
            }
        });
    });

    function doLogin(authProvider: AuthProvider): Promise<Identity> {
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
        doLogin($selectedAuthProviderStore)
            .then((id) => {
                console.log("App.svelte - successfully logged in we should ideally reload now");
                window.location.reload();
            })
            .catch((err) => {
                console.log("error logging in: ", err);
            });
    }

    function buildAuthProviderUrl(authProvider: AuthProvider): string | undefined {
        return process.env.INTERNET_IDENTITY_URL;
        // if (authProvider === AuthProvider.II) {
        //     return process.env.INTERNET_IDENTITY_URL;
        // } else {
        //     return (
        //         process.env.NFID_URL +
        //         "&applicationLogo=" +
        //         encodeURIComponent("https://oc.app/apple-touch-icon.png") +
        //         "#authorize"
        //     );
        // }
    }
</script>

<main class="main" bind:this={mainEl} on:scroll={onScroll}>
    <Header on:login={login} {route} />

    <Router on:login={login} bind:route on:scrollToTop={scrollToTop} />

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
    .main {
        display: grid;
        grid-template-columns: 1f;
        grid-template-rows: repeat(2, auto);
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
