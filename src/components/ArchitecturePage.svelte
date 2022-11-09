<script lang="ts">
    import Headline from "./Headline.svelte";
    import CollapsibleCard from "./CollapsibleCard.svelte";
    import HashLinkTarget from "./HashLinkTarget.svelte";
    import { copyUrl } from "../utils/linking";
    import ZoomableImage from "./ZoomableImage.svelte";

    let linked: number | undefined = undefined;
</script>

<div class="architecture">
    <Headline>Architecture</Headline>

    <CollapsibleCard on:copyUrl={copyUrl} open={linked === 1} id={"1"} title={"Overview"}>
        <span slot="subtitle">1</span>
        <div class="body" slot="body">
            <p>
                The OpenChat system is composed of canister smart contracts running on the Internet
                Computer which provides chat functionality. The canisters provide an API and serve
                the assets for the OpenChat web app, and going forwards, will allow 3rd-party
                services to integrate chat. The following diagram shows the OpenChat system in
                orange with its various external dependencies. The blue boxes are services running
                on the Internet Computer and the gray boxes are off-chain.
            </p>

            <ZoomableImage
                on:zoom
                url={"../architecture/simple.png"}
                alt="High level architecture" />
        </div>
    </CollapsibleCard>

    <CollapsibleCard on:copyUrl={copyUrl} open={linked === 2} id={"2"} title={"OpenChat system"}>
        <span slot="subtitle">2</span>
        <div class="body" slot="body">
            <p>
                The OpenChat system architecture has been driven by both the requirements and by the
                current and anticipated future characteristics of the Internet Computer.
            </p>

            <HashLinkTarget on:copyUrl={copyUrl} id="2-1"
                >OpenChat system components</HashLinkTarget>

            <p>
                The diagram below shows the complete OpenChat system decomposed into the various
                deployable units. The solid links represent IC updates which go through blockchain
                consensus. The brown boxes are all canisters and the light gray boxes are services
                hosted on AWS.
            </p>

            <ZoomableImage
                on:zoom
                url={"../architecture/complex.png"}
                alt="Complete architecture" />

            <p>The OpenChat system comprises the following</p>
            <ul class="list">
                <li>
                    <strong>Web app</strong> - a svelte/typescript progressive web app plus a set of
                    crawlable landing pages
                </li>
                <li>
                    Assets canister - a canister which serves the static assets (.js, .css etc) for
                    the web app
                </li>
                <li>
                    Landing page assets - an AWS s3 bucket serving the static assets for the landing
                    pages (.html, .css etc) and the service worker
                </li>
                <li>
                    Users - a canister for each user which holds the user’s direct messages,
                    references to the groups they are a member of, and serves as a wallet
                </li>
                <li>
                    User Index - a canister which holds the registry of users and creates and
                    upgrades user canisters
                </li>
                <li>
                    Groups - a canister for each chat group which holds the group members and the
                    messages/events
                </li>
                <li>
                    Group Index - a canister which holds the registry of groups and creates and
                    upgrades group canisters
                </li>
                <li>
                    Notifications - a canister which holds a queue of notifications and a map of
                    device subscriptions for each user
                </li>
                <li>
                    Proposals bot - a canister which can create OC proposals groups for the NNS and
                    SNSs and syncs proposals from NNS/SNS governance canisters
                </li>
                <li>
                    Online user aggregator - a canister which records the online status of OC users
                    and periodically syncs them with the user index
                </li>
                <li>
                    Cycles dispenser - a canister which is responsible for topping up the other
                    canisters with cycles
                </li>
                <li>
                    Notifications relay - an oracle hosted on an AWS ec2 instance which polls the
                    Notifications canister and sends web push notifications
                </li>
                <li>
                    SMS relay - an oracle hosted on an AWS ec2 instance which polls the user index
                    canister for user verification requests and sends SMSs containing verification
                    codes
                </li>
            </ul>
        </div>
    </CollapsibleCard>

    <div class="footnote">
        Full details of the OpenChat architecture will be available here soon. In the meantime
        please feel free to <a href="https://github.com/open-ic/open-chat" target="_blank"
            >check out the source code</a
        >.
    </div>
</div>

<style type="text/scss">
    .architecture {
        text-align: left;
        @include content-padding();
        margin-top: toRem(80);

        @include mobile() {
            margin-top: 0;
        }
    }

    .footnote,
    .body p,
    .body li {
        @include roboto(400, 16, 28);
    }

    .footnote {
        margin-top: toRem(80);
    }

    .arch {
        margin-bottom: $sp4;
        position: relative;
        text-align: center;

        img {
            width: 100%;
        }
    }

    .list {
        text-align: left;
        list-style: none;
        margin: 0 0 toRem(12) toRem(22);
        padding: 0;
        position: relative;

        > li {
            &:before {
                position: absolute;
                content: "\25AA";
                left: toRem(-25);
                color: #23a2ee;
            }
        }
    }

    .draft {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-25deg);
        opacity: 0.3;
        color: var(--secondary);
        text-transform: uppercase;
        margin: 0;

        font-size: toRem(200);

        @include mobile() {
            font-size: toRem(100);
        }
    }
</style>
