<script lang="ts">
    import WhitepaperInternalLink from "./WhitepaperInternalLink.svelte";
</script>

<div class="wrapper">
    <ol class="toc">
        <li>
            <WhitepaperInternalLink id={"product-service-overview"}
                >Product / Service Overiew</WhitepaperInternalLink>
        </li>
        <li>
            <WhitepaperInternalLink id={"internet-computer-overview"}
                >Internet Computer Overview</WhitepaperInternalLink>
        </li>
        <ul>
            <li>
                <WhitepaperInternalLink id={"canister-smart-contracts"}
                    >Canister smart-contracts</WhitepaperInternalLink>
            </li>
            <li>
                <WhitepaperInternalLink id={"network-nervous-system"}
                    >Network Nervous System (NNS)</WhitepaperInternalLink>
            </li>
        </ul>
    </ol>
</div>

<style type="text/scss">
    .wrapper {
        padding: $sp5;
        border-radius: $sp3;
        background-color: rgba(255, 255, 255, 0.1);
    }

    .toc {
        font-family: "Roboto", sans-serif;
        text-align: left;
        font-style: normal;
        padding: 0 0 0 1rem;
        margin: 0;

        ul {
            padding-left: $sp5;

            li {
                list-style: none;
            }
        }

        li {
            margin-bottom: $sp3;
        }
    }

    :global(.toc .whitepaper-link) {
        text-decoration: none;
        text-underline-offset: 2px;
        color: inherit;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
</style>
