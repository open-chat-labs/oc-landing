<script lang="ts">
    import { WhitepaperLinkId } from "../whitepaperLinks";
    export let id: WhitepaperLinkId;
</script>

<a class="whitepaper-link" href={`/whitepaper#${id}`}><slot /></a>
