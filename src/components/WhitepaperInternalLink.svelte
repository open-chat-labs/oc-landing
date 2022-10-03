<script lang="ts">
    import { onMount } from "svelte";
    import { WhitepaperLinkId } from "../whitepaperLinks";

    const offset = 70;
    export let id: WhitepaperLinkId;

    let main: HTMLElement;
    onMount(() => {
        main = document.getElementById("main");
    });

    function scrollToElement(selector: string) {
        const el = document.getElementById(selector);
        main.scrollTo({
            behavior: "smooth",
            top: el.getBoundingClientRect().top - offset,
        });
        el.classList.add("highlight");
        window.setTimeout(() => {
            el.classList.remove("highlight");
        }, 1500);
    }
</script>

<a class="whitepaper-link" href="/" on:click|preventDefault={() => scrollToElement(id)}><slot /></a>

<style type="text/scss">
    :global(.whitepaper .highlight) {
        color: var(--accent);
    }
</style>
