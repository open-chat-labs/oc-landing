<script lang="ts">
    import Section from "./Section.svelte";
    import { mobileWidth } from "../stores/screenDimensions";
    import Separator from "./Separator.svelte";
    import Headline from "./Headline.svelte";
    import Launch from "./Launch.svelte";
</script>

<div class="intro">
    <div class="left">
        <h1>OpenChat</h1>
        <h2>A decentralized chat app governed by the people for the people</h2>
        <p>
            OpenChat is a fully featured chat application running end-to-end on the Internet
            Computer blockchain.
        </p>
        <Launch />
        <div class="powered-by">
            <img src="../ic-badge-powered-by_label-stripe-white-text.svg" alt="powered by the IC" />
        </div>
    </div>
    <div class="right">
        <div class="image-wrapper">
            <img class="img" alt="Open chat list" src="../screenshots/chatlist.png" />
        </div>
    </div>
</div>

<!-- <Section lazy={false} id={"intro"}>
    <Headline>Welcome to OpenChat</Headline>
    <div class="grid">
        {#if !$mobileWidth}
            <div class="image-wrapper">
                <img class="img" alt="Open chat list" src="../screenshots/chatlist.png" />
            </div>
        {/if}
        <div class="right">
            <p>
                OpenChat is a fully featured chat application running end-to-end on the Internet
                Computer blockchain.
            </p>
            {#if $mobileWidth}
                <img
                    loading="lazy"
                    class="img desktop"
                    alt="Open chat desktop"
                    src="../screenshots/chatbot.png" />
            {/if}
            <p>
                Each user is given a canister which holds their data, serves as a wallet so they can
                send tokens as chat messages, and allows OpenChat to scale to the whole planet!
            </p>
            <Separator />
            <p>
                OpenChat will bring chat to the wider Internet Computer ecosystem through
                integrations with other projects and will seek to play a role in the metaverse. The
                planned communities capability will allow OpenChat to become a decentralized
                alternative to Slack in the workplace.
            </p>
            <Separator />
            <p>
                Soon OpenChat will be governed by its community as a DAO with its own CHAT token. A
                large proportion of CHAT will be given as rewards to users for positive
                contributions and to turbo-charge growth, making a team of millions of advocates,
                and allowing OpenChat to become a viable challenger to centralized big tech
                competitors!
            </p>
        </div>
    </div>
</Section> -->
<style type="text/scss">
    .intro {
        padding: toRem(100) toRem(160) 0 toRem(160);
        margin-bottom: toRem(160);
        display: grid;
        grid-template-columns: 3fr 2fr;
        gap: $sp5;
        justify-content: center;
        align-items: center;

        @include mobile() {
            grid-template-columns: 1fr;
        }
    }

    .left {
        text-align: left;
        h1 {
            font-family: "Ubuntu", sans-serif;
            font-weight: 700;
            font-size: toRem(48);
            line-height: toRem(55);
            margin-bottom: toRem(16);
            text-transform: uppercase;
        }

        h2 {
            font-family: "Ubuntu", sans-serif;
            font-weight: 500;
            font-size: toRem(31);
            line-height: toRem(35);
            margin-bottom: toRem(10);
        }

        p {
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: toRem(16);
            line-height: toRem(19);
        }

        .powered-by {
            position: absolute;
            bottom: 0;
            height: toRem(30);
        }
    }

    .right {
        padding: 0 toRem(50);
    }

    .img {
        width: 100%;
    }

    // .image-wrapper {
    //     perspective: 1000px;

    //     .img {
    //         transform: skewX(6deg) rotateY(20deg);
    //     }
    // }

    .desktop {
        margin-bottom: $sp5;
    }
</style>
