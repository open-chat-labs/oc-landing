<script lang="ts">
    import { showAuthProviders, loggingIn } from "../stores/authProviders";

    $: txt = $loggingIn ? "Signing in ..." : $showAuthProviders ? "Sign in or register" : "Sign in";
</script>

<div class="launch">{txt}</div>

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
