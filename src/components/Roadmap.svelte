<script lang="ts">
    import Section from "./Section.svelte";
</script>

<Section zoom={"right"} id={"roadmap"}>
    <h2>Roadmap</h2>

    <div class="grid">
        <div class="left">
            <ul class="list">
                <li class="done">Remove SMS or payment requirement for registration</li>
                <li class="done">Support multiple languages (with help from the community)</li>
                <li class="done">Pinned messages</li>
                <li class="done">Create polls</li>
                <li class="done">Group permissions including read-only groups</li>
                <li class="done">Double-click to show images full-screen</li>
                <li class="done">
                    Deposit ICP into your OpenChat account, send ICP as messages, withdraw ICP
                </li>
                <li class="done">Share messages and receive shares from other apps</li>
                <li class="done">Edit sent messages</li>
                <li class="done">Message forwarding</li>
                <li class="done">Pin chats</li>
                <li class="done">Threaded replies</li>
                <li class="done">
                    Special groups for viewing/discussing/voting on NNS and SNS proposals
                </li>
                <li>Send additional tokens as messages, such as BTC, ETH, Cycles, etc</li>
                <li>Tag messages (eg star) and search/filter by tag</li>
                <li>Performance enhancements (asset caching with etags, WebRTC improvements)</li>
                <li>Streamlined sign-in</li>
                <li>Communities (think Slack workspaces or Discord servers)</li>
                <li>2-way voice calls</li>
                <li>2-way video calls</li>
                <li>E2E encryption of messages</li>
                <li>Native iOS app</li>
                <li>Disappearing messages</li>
            </ul>
        </div>

        <div class="right">
            <ul class="list">
                <li>Tag groups and search/filter by tag</li>
                <li>Optionally sync with phone contacts and invite contacts</li>
                <li>Custom emojis, stickers</li>
                <li>Send "red-letters" containing tokens</li>
                <li>Link previews</li>
                <li>Organise events with calendar</li>
                <li>Report inappropriate content</li>
                <li>Incorporate token swap to allow other tokens to be sent</li>
                <li>Native Android app</li>
                <li>Group video calls (up to some limited number of participants)</li>
                <li>
                    Broadcast groups
                    <ul>
                        <li>stream video 1-many</li>
                        <li>broadcast group roles (owner, admin, participant, viewer)</li>
                        <li>viewers can tip using cycles</li>
                    </ul>
                </li>
                <li>Squash bugs and improve general usability</li>
                <li>
                    When it becomes available, incorporate the <a
                        target="_blank"
                        href="https://forum.dfinity.org/t/open-governance-canister-for-sns-design-proposal/10224"
                        >SNS</a>
                    <ul>
                        <li>Open source</li>
                        <li>Establish an OpenChat token</li>
                        <li>Auction OpenChat tokens</li>
                        <li>Airdrop tokens on active users, early adopters, and for referrals</li>
                        <li>Cede control of OpenChat to the SNS</li>
                        <li><strong>Future roadmap now determined by the community!</strong></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</Section>

<style type="text/scss">
    .list {
        text-align: left;
        list-style: none;
        margin: 0 0 0 toRem(22);
        padding: 0;
        position: relative;

        > li.done {
            font-style: italic;
            &:before {
                position: absolute;
                content: "✓";
                left: toRem(-22);
                color: darkseagreen;
            }
        }

        > li:not(.done) {
            &:before {
                position: absolute;
                content: "x";
                left: toRem(-22);
                color: var(--secondary);
            }
        }
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: $sp4;

        @include mobile() {
            grid-template-columns: 1fr;
        }
    }
</style>
