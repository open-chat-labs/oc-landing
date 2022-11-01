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
    import { selectedAuthProviderStore, loggingIn, loggedIn } from "./stores/authProviders";
    import "./theme/themes";
    import { currentPath, isLandingPagePath } from "./stores/route";

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
                loggedIn.set(true);
            }
        });
        captureReferralCode();
    });

    function captureReferralCode() {
        const qs = new URLSearchParams(window.location.search);
        const referredBy = qs.get("ref") ?? undefined;
        if (referredBy) {
            localStorage.setItem("openchat_referredby", referredBy);
        }
    }

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

    function logout() {
        authClient.then((c) =>
            c.logout().then(() => {
                loggingIn.set(false);
                loggedIn.set(false);
            })
        );
    }

    function login(): void {
        if ($loggingIn) return;
        doLogin($selectedAuthProviderStore)
            .then((_id) => {
                console.log("App.svelte - successfully logged in we should ideally reload now");
                if (window.location.hash !== "") {
                    window.location.reload();
                } else {
                    window.location.replace("/");
                }
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

    function clearHash() {
        currentPath.update((p) => ({
            ...p,
            hash: "",
        }));
    }
</script>

{#if $loggingIn}
    <div class="block">
        <img alt="logo" src="../spinner.svg" />
    </div>
{/if}

<main id="main" class="main" bind:this={mainEl} on:scroll={onScroll}>
    <Header on:login={login} on:logout={logout} />

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
        <div transition:fade|local class="fab" on:click={clearHash}>
            <Fab>
                <ArrowUp size={"1.4em"} color={"rgba(255,255,255,0.8)"} />
            </Fab>
        </div>
    {/if}
</main>

<style type="text/scss">
    :global {
        html,
        body {
            position: relative;
            width: 100%;
            height: 100%;
        }

        :root {
            --txt: #191919;
            --font-size: 16px;
            --primary: #22a7f2;
            --primary-shadow: #053d5c;
            --primary-darker: #0d8cd5;
            --secondary: #ff9505;
            --tertiary: #5f2583;
            --accent: hotpink;
            --gradient: linear-gradient(#22a7f2, #5f2583);
            --hgradient: linear-gradient(0.25turn, #22a7f2, hotpink);
            --bg-gradient: linear-gradient(#22a7f2, hotpink);
        }

        html {
            box-sizing: border-box;
            font-size: var(--font-size);
            -webkit-text-size-adjust: none;
            scroll-behavior: smooth;
        }
        *,
        *:before,
        *:after {
            box-sizing: inherit;
        }

        body {
            color: var(--txt);
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,
                Cantarell, "Helvetica Neue", sans-serif;
            font-family: "Roboto", sans-serif;
            font-weight: 300;
        }

        label {
            display: block;
        }

        input,
        button,
        select,
        textarea {
            font-family: inherit;
            font-size: inherit;
            -webkit-padding: 0.4em 0;
            padding: 0.4em;
            margin: 0 0 0.5em 0;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 2px;
        }

        input:disabled {
            color: #ccc;
        }

        button {
            color: #333;
            background-color: #f4f4f4;
            outline: none;
        }

        button:disabled {
            color: #999;
        }

        button:not(:disabled):active {
            background-color: #ddd;
        }

        button:focus {
            border-color: #666;
        }

        p {
            font-size: 1.25rem;
            margin-top: 0;
            margin-bottom: 1.5rem;
            text-align: left;
        }

        a {
            text-decoration: underline;
            text-underline-offset: 2px;
            color: inherit;
            cursor: pointer;
            white-space: nowrap;
        }
    }

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
