<script lang="ts">
    import Headline from "./Headline.svelte";
    import Section from "./Section.svelte";
    import Separator from "./Separator.svelte";
</script>

<Section lazy={false} id={"sns"}>
    <div class="roadmap-header">
        <div class="date">
            <div class="quarter">Q4</div>
            <div class="year">2022</div>
        </div>

        <Headline>
            <div class="title">SNS launch</div>
        </Headline>
    </div>
    <div class="blurb">
        <p>
            When the OpenChat SNS is created control of OpenChat will be handed from the core dev
            team to the SNS. A <em>decentralization sale</em> will be initiated by NNS proposal which
            will decentralize the governance of OpenChat by distributing the CHAT utility token to the
            wider community. It will also raise an endowment to fund the ongoing development and growth
            of OpenChat.
        </p>

        <p>
            This is a crucial step in the decentralisation journey. With this in place the system
            will not be under any centralised control. We, the developement team, will be here to
            provide direction and to implement the roadmap but we will only be able to make changes
            to the system via an approved SNS proposal voted upon by those who have demonstrated
            their commitment to the long term future of OpenChat by staking their CHAT tokens.
        </p>

        <p>
            Those users will be invested in the future of the system through the voting rewards they
            receive. This way, we enlist an army of powerful advocates and we can be confident that
            the proposals the community approves will be in the long term interest of OpenChat as a
            whole.
        </p>
    </div>
</Section>

<Separator />

<Section lazy={true} id={"user-rewards"}>
    <div class="roadmap-header">
        <div class="date">
            <div class="quarter">Q4</div>
            <div class="year">2022</div>
        </div>

        <Headline>
            <div class="title">User rewards</div>
        </Headline>
    </div>
    <div class="blurb">
        <p>
            The SNS launch will unlock the potential to reward users with CHAT tokens. This will
            allow community leaders to shape the character of the system, to help build <em
                >great</em> communities and to supercharge adoption.
        </p>

        <p>
            It will become really important to empower community leaders to build, promote and
            maintain their communities through tokenisation. User rewards can facilitate the
            building of powerful community based moderation systems; adoption can be driven by
            rewarding users for creating great content and sharing it with friends and family.
        </p>

        <p>
            Rewards can and will be used in all sorts of creative ways only made possible by the
            unique way that OpenChat is governed.
        </p>
    </div>
</Section>

<Separator />

<Section lazy={true} id={"integrations"}>
    <div class="roadmap-header">
        <div class="date">
            <div class="quarter">Q1</div>
            <div class="year">2023</div>
        </div>

        <Headline>
            <div class="title">Integrations</div>
        </Headline>
    </div>
    <div class="blurb">
        <p>
            With communities we can also unlock the potential of third party integrations. One
            obvious application is to provide chat functionality as a service to other dApps in the
            Internet Computer ecosystem.
        </p>
        <p>
            We are currently consulting with many builders in the community to find out how they
            would like to integrate OpenChat functionality in the future. The appetite is certainly
            there! Whether it is the simplest direct chat functionality that is integrated or full
            blown access to the dApp's community remains to be seen.
        </p>
        <p>
            The OpenChat team will build the apis, libraries and UI components required to make chat
            integration as seamless as possible.
        </p>
    </div>
</Section>

<Separator />

<Section lazy={true} id={"communities"}>
    <div class="roadmap-header">
        <div class="date">
            <div class="quarter">Q2</div>
            <div class="year">2023</div>
        </div>

        <Headline>
            <div class="title">Communities</div>
        </Headline>
    </div>
    <div class="blurb">
        <p>
            Currently OpenChat is open to all. Any user or public group can be found by simply
            searching. For many scenarios this is perfectly fine. But in the near term we will
            deliver a new feature which will remove some limitations of this model.
        </p>

        <p>
            Sometimes it would be nice to collect a number of groups together where they have
            something in common. That commonality or <em>community</em> could be anything: perhaps
            they all use the same language, or they all relate to a particular area of interest, or
            they all relate to a particular <em>project</em>. In this sense, communities are a bit
            like Discord servers.
        </p>

        <p>
            Furthermore, a community may wish to restict and control its membership creating <em
                >private</em>
            communities. We see this as an important step for the future monetization of OpenChat as
            it enables us to easily support its use as an internal communication tool
            <em>within a corporate setting.</em> In that sense, communities can also be thought of like
            Slack workspaces.
        </p>
    </div>
</Section>

<Separator />

<Section lazy={true} id={"video"}>
    <Headline>
        <div class="title">Voice & video</div>
    </Headline>
    <div class="blurb">
        <p>
            Many (web2) apps in this space offer voice and video calling and we aim to do the same.
            There are certainly challenges in doing this in a way that is both reliable and
            meaningfully decentralised. This is why this function is so often delegated to a
            centralised web2 partner. It is likely to require an incremental approach and a fair
            amount of R&D.
        </p>
    </div>
</Section>

<Separator />

<Section lazy={true} id={"apps"}>
    <Headline>
        <div class="title">Native apps</div>
    </Headline>
    <div class="blurb">
        <p>
            Currently OpenChat is delivered as a responsive progressive web app. This means that it
            performs well on <em>any</em> device via the platform's browser. It can also be saved or
            "installed" to your device's home screen for an even more app-like experience. There are
            great advantages to this approach. We can deliver for all platforms using a single codebase
            which allows us to deliver features faster and without preference to any one particular platform.
        </p>
        <p>
            However, the native web apis available to us are a work in progress and not all
            platforms develop at the same speed. For example, we are currently unable to provide
            push notifications to users of iOS. Some people also simply prefer to get their apps in
            the chosen app store.
        </p>
        <p>
            In the medium term, the team will explore options to preserve the single codebase
            benefits and combine it with a platform specific native app shell which will provide
            full access to the native platform apis that we need.
        </p>
        <p>
            In the longer term, it may be possible to develop fully native mobile apps for each
            platform.
        </p>
    </div>
</Section>

<Separator />

<Section lazy={true} id={"e2e"}>
    <Headline>
        <div class="title">End to end encryption</div>
    </Headline>
    <div class="blurb">
        <p>
            Currently, while the Internet Computer does provide very strong security guarantees,
            there is still a hypothetical risk that a rogue node provider could gain access to
            ingress messages and node memory.
        </p>
        <p>
            As such we will develop opt-in end-to-end encryption which will of course come with some
            restrictions such as not being able to search your message history.
        </p>
    </div>
</Section>

<Separator />

<Section lazy={true} id={"other"}>
    <Headline>
        <div class="title">Other features</div>
    </Headline>
    <div class="blurb">
        <p>
            As we will be governed by the SNS, we will be obliged to listen to our users along the
            way as we develop the larger features described above and so our roadmap will always be
            fluid.
        </p>

        <p>
            We will continuously dedicate ourselves to performance and usability and there are many
            other smaller features that we would like to work on.
        </p>

        <p>Some smaller feature ideas:</p>
        <ul class="list">
            <li>Send additional tokens as messages, such as BTC, ETH, etc</li>
            <li>Tag groups and search/filter by tag</li>
            <li>Optionally sync with phone contacts and invite contacts</li>
            <li>Link previews</li>
            <li>Profile badges for reputation and achievements</li>
            <li>Tag messages (eg star) and search/filter by tag</li>
            <li>Verified NFT avatars</li>
            <li>NFT gated groups and communities</li>
            <li>Disappearing messages</li>
            <li>Organise events with calendar</li>
            <li>Custom emojis, stickers</li>
            <li>
                Broadcast groups
                <ul>
                    <li>stream video 1-many</li>
                    <li>broadcast group roles (owner, admin, participant, viewer)</li>
                    <li>viewers can tip using cycles</li>
                </ul>
            </li>
        </ul>
    </div>
</Section>

<style type="text/scss">
    :global(.roadmap-header h2) {
        margin-bottom: 0 !important;
    }

    .title {
        text-align: left;
    }
    .blurb {
        font-size: toRem(20);
    }
    .list {
        text-align: left;
        list-style: none;
        margin: 0 0 0 toRem(22);
        padding: 0;
        position: relative;

        > li {
            margin-bottom: $sp2;
        }

        > li {
            &:before {
                position: absolute;
                content: "✓";
                left: toRem(-25);
                color: darkseagreen;
            }
        }
    }

    .roadmap-header {
        display: flex;
        align-items: center;
        gap: $sp4;
        margin-bottom: $sp4;
    }

    .date {
        padding: $sp2 $sp4;
        font-weight: 900;
        color: var(--roadmap-status-txt);
        background-color: var(--roadmap-date-bg);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .quarter {
            font-size: toRem(30);
            text-transform: uppercase;
        }

        .year {
            font-size: toRem(15);
            text-transform: uppercase;
        }
    }
</style>
