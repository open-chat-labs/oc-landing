<script lang="ts">
    import { WhitepaperLinkId } from "../whitepaperLinks";

    const offset = 70;
    export let id: WhitepaperLinkId;

    function scrollToElement(selector: string) {
        const el = document.getElementById(selector);
        const main = document.getElementById("main");
        const rect = el.getBoundingClientRect();
        const top = rect.top + main.scrollTop - offset;
        main.scrollTo({
            behavior: "smooth",
            top,
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
