<script lang="ts">
    import Header from "./components/Header.svelte";
    import Router from "./components/Router.svelte";
    import { onMount } from "svelte";
    import { AuthClient, IdbStorage } from "@dfinity/auth-client";
    import type { Identity } from "@dfinity/agent";
    import { AuthProvider } from "./authProvider";
    import { selectedAuthProviderStore, loggingIn, loggedIn } from "./stores/authProviders";
    import "./theme/themes";
    import { currentPath } from "./stores/route";
    import Content from "./components/Content.svelte";
    import { themeStore, toggleTheme } from "./theme/themes";

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
                window.location.replace("/");
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

<Header on:login={login} on:logout={logout} />

<div class="burst-wrapper">
    <div
        class:fixed={$currentPath.path === "features"}
        class="burst"
        class:dark={$themeStore.name === "dark"}
        class:light={$themeStore.name === "light"} />
</div>

<main id="main" class="main">
    <Content>
        <Router on:login={login} on:scrollToTop={scrollToTop} />
    </Content>
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
        background-color: #22a7f2;
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
            --gradient: linear-gradient(#22a7f2, #5f2583);
            --hgradient: linear-gradient(0.25turn, #22a7f2, hotpink);
            --bg-gradient: linear-gradient(#22a7f2, hotpink);
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
    }

    .burst {
        position: absolute;

        &.fixed {
            position: fixed;
        }

        &.dark {
            $size: toRem(1003);
            width: $size;
            height: $size;
            left: toRem(718);
            top: toRem(367);
            background: linear-gradient(180deg, #23a2ee 0%, #5b2b88 100%);
            opacity: 0.4;
            filter: blur(toRem(300));

            @include mobile() {
                $size: toRem(461);
                width: $size;
                height: $size;
                left: 82px;
                top: 251px;
                filter: blur(toRem(200));
            }
        }

        &.light {
            $size: toRem(863);
            width: $size;
            height: $size;
            left: toRem(788);
            top: toRem(437);
            background: linear-gradient(269.91deg, #23a2ee 0.07%, #5b2b88 99.92%);
            mix-blend-mode: normal;
            opacity: 0.3;
            filter: blur(toRem(250));

            @include mobile() {
                $size: toRem(400);
                width: $size;
                height: $size;
                left: 195px;
                top: 251px;
                filter: blur(toRem(150));
            }
        }
    }
</style>
