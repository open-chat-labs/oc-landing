<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { showAuthProviders, loggingIn, loggedIn } from "../stores/authProviders";

    const dispatch = createEventDispatcher();

    $: txt = $loggingIn
        ? "Signing in ..."
        : $loggedIn
        ? "Launch app"
        : $showAuthProviders
        ? "Sign in or register"
        : "Sign in";

    function launch() {
        if ($loggedIn) {
            window.location.href = "/";
        } else {
            dispatch("login");
        }
    }
</script>

<div on:click={launch} class="launch">{txt}</div>

<style type="text/scss">
    .launch {
        @include box-shadow(3);
        transition: background-color ease-in-out 200ms;
        color: #fff;
        background-color: var(--primary);
        border: none;
        cursor: pointer;
        text-decoration: none;
        font-weight: 500;
        padding: toRem(15) toRem(30);
        font-size: toRem(30);
    }
</style>
