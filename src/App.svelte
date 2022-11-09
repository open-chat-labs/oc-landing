<script lang="ts">
    import Header from "./components/Header.svelte";
    import Router from "./components/Router.svelte";
    import { onMount } from "svelte";
    import { AuthClient, IdbStorage } from "@dfinity/auth-client";
    import type { Identity } from "@dfinity/agent";
    import { AuthProvider } from "./authProvider";
    import { selectedAuthProviderStore, loggingIn, loggedIn } from "./stores/authProviders";
    import "./theme/themes";
    import { themeStore, toggleTheme } from "./theme/themes";
    import { currentPath, isLandingPageRoute } from "./stores/route";
    import ZoomedImage from "./components/ZoomedImage.svelte";

    let zooming: { url: string; alt: string } | undefined = undefined;

    let debug = localStorage.getItem("openchat_theme_toggle") === "true";
    let authClient = AuthClient.create({
        idleOptions: { disableIdle: true },
        storage: new IdbStorage(),
    });
    const SESSION_TIMEOUT_NANOS = BigInt(30 * 24 * 60 * 60 * 1000 * 1000 * 1000); // 30 days

    function scrollToTop() {
        window.scrollTo({
            behavior: "auto",
            top: 0,
        });
    }

    let isFirefox = navigator.userAgent.indexOf("Firefox") >= 0;

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
                window.location.reload();
            })
        );
    }

    function zoomImage(ev: CustomEvent<{ url: string; alt: string }>) {
        zooming = ev.detail;
    }

    function login(): void {
        if ($loggingIn) return;
        doLogin($selectedAuthProviderStore)
            .then((_id) => {
                console.log("App.svelte - successfully logged in we should ideally reload now");
                if (isLandingPageRoute()) {
                    window.location.replace("/");
                } else {
                    window.location.reload();
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

    $: burstPath = $themeStore.name === "light" ? "../burst_light" : "../burst_dark";
    $: burstUrl = isFirefox ? `${burstPath}.png` : `${burstPath}.svg`;
</script>

{#if $loggingIn}
    <div class="block">
        <img alt="logo" src="../spinner.svg" />
    </div>
{/if}

<Header on:login={login} on:logout={logout} />

{#if zooming !== undefined}
    <ZoomedImage on:collapse={() => (zooming = undefined)} url={zooming.url} alt={zooming.alt} />
{/if}

<div
    class="burst-wrapper"
    class:fixed={$currentPath.path === "features"}
    class:dark={$themeStore.name === "dark"}
    class:light={$themeStore.name === "light"}
    style={`background-image: url(${burstUrl})`}>
    <!-- <div
        class:fixed={$currentPath.path === "features"}
        class="burst"
        class:dark={$themeStore.name === "dark"}
        class:light={$themeStore.name === "light"} /> -->
</div>

<main id="main" class="main">
    <Router on:zoom={zoomImage} on:login={login} on:scrollToTop={scrollToTop} />
</main>

{#if debug}
    <div on:click={toggleTheme} class="theme" />
{/if}

<style type="text/scss">
    .theme {
        cursor: pointer;
        position: fixed;
        width: 20px;
        height: 20px;
        bottom: 10px;
        left: 10px;
        border-radius: 50%;
        background-color: var(--primary);
    }

    :global {
        html,
        body {
            position: relative;
            width: 100%;
            // height: 100%;
        }

        :root {
            --txt: #242834;
            --font-size: 16px;
            --primary: #22a7f2;
            --primary-shadow: #053d5c;
            --primary-darker: #0d8cd5;
            --secondary: #ff9505;
            --tertiary: #5f2583;
            --accent: hotpink;
            --gradient: linear-gradient(var(--primary), #5f2583);
            --hgradient: linear-gradient(0.25turn, var(--primary), hotpink);
            --bg-gradient: linear-gradient(var(--primary), hotpink);
        }

        html {
            box-sizing: border-box;
            font-size: var(--font-size);
            -webkit-text-size-adjust: none;
            scroll-behavior: auto;
        }
        *,
        *:before,
        *:after {
            box-sizing: inherit;
        }

        body {
            color: var(--txt);
            background: var(--bg);
            margin: 0 auto;
            padding: 0;

            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,
                Cantarell, "Helvetica Neue", sans-serif;
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.75rem;
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
            text-decoration: none;
            text-underline-offset: 2px;
            color: var(--primary);
            cursor: pointer;
            white-space: nowrap;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .block {
        top: 0;
        left: 0;
        position: fixed;
        height: 100vh;
        width: 100%;
        pointer-events: all;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        pointer-events: all;

        img {
            opacity: 0.6;
            width: toRem(120);
            height: toRem(120);
            @include spin();
        }
    }
    .main {
        position: relative;
        overflow-y: auto;
        overflow-x: hidden;
        margin: 0 auto;
        margin-top: toRem(80);
    }
    .fab {
        position: fixed;
        bottom: toRem(40);
        right: toRem(40);
    }

    .burst-wrapper {
        overflow: hidden;
        max-width: 100%;
        width: 100%;
        position: absolute;
        height: 100vh;
        min-height: 100%;

        background-repeat: no-repeat;
        background-size: 1400px;
        background-origin: 50% 50%;
        background-position: right 20% top toRem(150);

        &.fixed {
            position: fixed;
        }

        @include mobile() {
            background-size: 800px;
            background-position: left 0 top 0;
        }
    }
</style>
