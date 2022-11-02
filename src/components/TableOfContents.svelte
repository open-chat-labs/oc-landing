<script lang="ts">
    import WhitepaperInternalLink from "./WhitepaperInternalLink.svelte";
</script>

<div class="wrapper">
    <ol class="toc">
        <li>
            <WhitepaperInternalLink id={"1"}>Product / Service Overiew</WhitepaperInternalLink>
        </li>
        <li>
            <WhitepaperInternalLink id={"2"}>Internet Computer Overview</WhitepaperInternalLink>
            <ul>
                <li>
                    <WhitepaperInternalLink id={"2-1"}
                        >Canister smart-contracts</WhitepaperInternalLink>
                </li>
                <li>
                    <WhitepaperInternalLink id={"2-2"}
                        >Network Nervous System (NNS)</WhitepaperInternalLink>
                </li>
            </ul>
        </li>
        <li>
            <WhitepaperInternalLink id={"3"}>OpenChat DAO</WhitepaperInternalLink>
            <ul>
                <li>
                    <WhitepaperInternalLink id={"3-1"}>Summary</WhitepaperInternalLink>
                </li>
                <li>
                    <WhitepaperInternalLink id={"3-2"}>Creation of the DAO</WhitepaperInternalLink>
                </li>
                <li>
                    <WhitepaperInternalLink id={"3-3"}>Control of the DAO</WhitepaperInternalLink>
                </li>
                <li>
                    <WhitepaperInternalLink id={"3-4"}
                        >Governance of the DAO</WhitepaperInternalLink>
                    <ul>
                        <li>
                            <WhitepaperInternalLink id={"3-4-1"}>Proposals</WhitepaperInternalLink>
                        </li>
                        <li>
                            <WhitepaperInternalLink id={"3-4-2"}
                                >Voting and voting rewards</WhitepaperInternalLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <WhitepaperInternalLink id={"3-5"}>The power of the DAO</WhitepaperInternalLink>
                </li>
            </ul>
        </li>
        <li>
            <WhitepaperInternalLink id={"4"}
                >Purpose of the CHAT utility token</WhitepaperInternalLink>
            <ul>
                <li>
                    <WhitepaperInternalLink id={"4-1"}>Premium features</WhitepaperInternalLink>
                    <ul>
                        <li>
                            <WhitepaperInternalLink id={"4-1-1"}
                                >Current premium features</WhitepaperInternalLink>
                        </li>
                        <li>
                            <WhitepaperInternalLink id={"4-1-2"}
                                >Communities</WhitepaperInternalLink>
                        </li>
                        <li>
                            <WhitepaperInternalLink id={"4-1-3"}
                                >Other possible future premium features</WhitepaperInternalLink>
                        </li>
                        <li>
                            <WhitepaperInternalLink id={"4-1-4"}
                                >Additional potential revenue</WhitepaperInternalLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <WhitepaperInternalLink id={"4-2"}>User rewards</WhitepaperInternalLink>
                    <ul>
                        <li>
                            <WhitepaperInternalLink id={"4-2-1"}
                                >User reputation</WhitepaperInternalLink>
                        </li>
                        <li>
                            <WhitepaperInternalLink id={"4-2-2"}>Rewards</WhitepaperInternalLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <WhitepaperInternalLink id={"5"}
                >Token allocation at SNS genesis</WhitepaperInternalLink>
            <ul>
                <li>
                    <WhitepaperInternalLink id={"5-1"}
                        >Initial token allocation</WhitepaperInternalLink>
                    <ul>
                        <li>
                            <WhitepaperInternalLink id={"5-1-1"}
                                >NNS controller (yellow)</WhitepaperInternalLink>
                        </li>
                        <li>
                            <WhitepaperInternalLink id={"5-1-2"}
                                >Founders and funders (pink)</WhitepaperInternalLink>
                        </li>
                        <li>
                            <WhitepaperInternalLink id={"5-1-3"}
                                >SNS treasury (blue)</WhitepaperInternalLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <WhitepaperInternalLink id={"5-2"}
                        >Initial SNS configuration</WhitepaperInternalLink>
                </li>
                <li>
                    <WhitepaperInternalLink id={"5-3"}
                        >SNS decentralization sale configuration</WhitepaperInternalLink>
                    <ul>
                        <li>
                            <WhitepaperInternalLink id={"5-3-1"}
                                >Valuation range</WhitepaperInternalLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <WhitepaperInternalLink id={"6"}>OpenChat SNS treasury</WhitepaperInternalLink>
            <ul>
                <li>
                    <WhitepaperInternalLink id={"6-1"}
                        >ICP for cycles to fund hosting</WhitepaperInternalLink>
                </li>
                <li>
                    <WhitepaperInternalLink id={"6-2"}>3rd party services</WhitepaperInternalLink>
                </li>
                <li>
                    <WhitepaperInternalLink id={"6-3"}
                        >Pay the development team</WhitepaperInternalLink>
                </li>
            </ul>
        </li>
        <li>
            <WhitepaperInternalLink id={"7"}>Tokenomics</WhitepaperInternalLink>
            <ul>
                <li>
                    <WhitepaperInternalLink id={"7-1"}>Total supply levers</WhitepaperInternalLink>
                </li>
                <li>
                    <WhitepaperInternalLink id={"7-2"}>Income and outgoings</WhitepaperInternalLink>
                </li>
                <li>
                    <WhitepaperInternalLink id={"7-3"}>Token price</WhitepaperInternalLink>
                </li>
                <li>
                    <WhitepaperInternalLink id={"7-4"}
                        >Voting power over time</WhitepaperInternalLink>
                </li>
            </ul>
        </li>
        <!-- <li>
            <WhitepaperInternalLink id={"8"}
                >Current user growth and activity</WhitepaperInternalLink>
        </li> -->
    </ol>
</div>

<style type="text/scss">
    .wrapper {
        padding: $sp5;
        border-radius: $sp3;
        background-color: rgba(255, 255, 255, 0.1);
    }

    .toc {
        text-align: left;
        font-style: normal;
        padding: 0 0 0 1rem;
        margin: 0;

        > li {
            font-weight: 500;
        }

        ul {
            padding-left: $sp5;
            margin-top: $sp3;

            li {
                list-style: none;
                font-weight: 300;
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
