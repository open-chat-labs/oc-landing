<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { loggingIn, loggedIn } from "../stores/authProviders";

    const dispatch = createEventDispatcher();

    $: txt = $loggingIn ? "Logging in..." : "Launch app";

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
        display: inline-block;
        transition: background-color ease-in-out 200ms;
        color: #fff;
        background-color: var(--primary);
        border: none;
        border-radius: toRem(4);
        cursor: pointer;
        text-decoration: none;
        @include manrope(700, 16, 18);
        padding: toRem(12) toRem(16) toRem(12) toRem(16);
    }
</style>
