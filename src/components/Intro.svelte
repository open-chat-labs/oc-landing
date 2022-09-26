<script lang="ts">
    import Section from "./Section.svelte";
    import { mobileWidth } from "../stores/screenDimensions";
    import Separator from "./Separator.svelte";
</script>

<Section lazy={false} id={"intro"}>
    <div class="grid">
        {#if !$mobileWidth}
            <img class="img" alt="Open chat list" src="../screenshots/chatlist.png" />
        {/if}

        <div class="right">
            <p>
                OpenChat (OC) is a fully featured chat application running on the Internet Computer
                (IC). It is a responsive, progressive web application (PWA) taking advantage of any
                screen size and integrating with devices just like a native app, with notifications
                on desktop and Android, and on iOS from next year.
            </p>

            {#if $mobileWidth}
                <img
                    loading="lazy"
                    class="img desktop"
                    alt="Open chat desktop"
                    src="../screenshots/chatbot.png" />
            {/if}

            <p>
                The IC is a decentralized global compute platform using novel block-chain technology
                to achieve consensus within subnets. It is tamperproof, globally distributed, and
                unstoppable.
            </p>

            <Separator />

            <p>
                The app is open source, uses repeatable builds, and runs as a collection of
                canisters. Anyone can see the guaranteed source code commit that is running on any
                canister at any time. Each user is given their own canister which holds their direct
                chat data, links to the groups they are members of, and also serves as a wallet
                allowing OC users to hold and manage tokens. For details of the architecture <a
                    href="/architecture">please see here.</a>
            </p>

            <Separator />

            <p>
                What <em>really</em> differentiates OpenChat, is that it will soon become a decentralized
                app (dapp), itself governed as a DAO. It will have its own governance token called CHAT,
                analogous to ICP, and will be controlled by a system called the SNS (Service Nervous
                System) which is similar to the NNS (Network Nervous System) on the IC.
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
