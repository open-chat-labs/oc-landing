<script lang="ts">
    import { currentPath } from "../stores/route";
    import { WhitepaperLinkId } from "../whitepaperLinks";
    export let id: WhitepaperLinkId;

    function setHash() {
        currentPath.update((p) => ({
            ...p,
            hash: id,
        }));
    }
</script>

<a class="whitepaper-link" href="/" on:click|preventDefault={setHash}><slot /></a>
