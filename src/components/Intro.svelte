<script lang="ts">
    import Section from "./Section.svelte";
    import { mobileWidth } from "../stores/screenDimensions";
    import Separator from "./Separator.svelte";
</script>

<Section zoom="none" id={"intro"}>
    <h2>Welcome to OpenChat</h2>

    <div class="grid">
        {#if !$mobileWidth}
            <img
                loading="lazy"
                class="img"
                alt="Open chat list"
                src="../screenshots/chatlist.png" />
        {/if}

        <div class="right">
            <p>
                OpenChat (OC) is a fully featured chat application running on the Internet Computer
                (IC) similar to Signal and Telegram, and will soon be getting a major new capability
                called “communities” which are like Slack workspaces or Discord servers. It is a
                responsive, progressive web application (PWA) and as such scales to take advantage
                of any screen size and integrates with devices in a similar way to native apps, with
                notifications on desktop and Android devices, and on iOS from next year. You can
                find the full development roadmap below.
            </p>

            {#if $mobileWidth}
                <img
                    loading="lazy"
                    class="img desktop"
                    alt="Open chat desktop"
                    src="../screenshots/chatbot.png" />
            {/if}

            <p>
                The IC is a decentralized global compute platform which uses novel block-chain
                technology to achieve consensus within subnets. It is tamperproof, globally
                distributed in numerous independent data centers, and aims to be truly unstoppable
                by any centralized authority. By running on the IC, OC has certain in-built security
                guarantees.
            </p>

            <Separator />

            <p>
                The app is open source, uses repeatable builds, and runs as a collection of
                canisters. It is possible for anyone to see the version of the source code that is
                running on any canister at any given time with a link back to the particular commit
                on github, and for them to prove this is true. Each user is given their own canister
                which holds their direct chat data, links to the groups they are members of, and
                also serves as a wallet allowing OC users to hold and manage tokens. For details of
                the architecture <a href="/architecture">please see here.</a>
            </p>

            <Separator />

            <p>
                OC users can send messages to each other containing tokens such as ICP and BTC and
                so can be used for global remittance.
            </p>

            <p>
                However, the ground-breaking difference between OpenChat and other similar apps, is
                that it will soon become a decentralized app (dapp), itself governed as a DAO. It
                will have its own governance token called CHAT, analogous to ICP, and be controlled
                by a system called the SNS (Service Nervous System) which is analogous to the NNS
                (Network Nervous System) on the IC.
            </p>
        </div>
    </div>
</Section>

<style type="text/scss">
    .grid {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: $sp5;

        @include mobile() {
            grid-template-columns: 1fr;
        }
    }

    .img {
        width: 100%;
    }

    .desktop {
        margin-bottom: $sp5;
    }
</style>
