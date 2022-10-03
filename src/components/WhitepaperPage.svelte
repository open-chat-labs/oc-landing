<script lang="ts">
    import TableOfContents from "./TableOfContents.svelte";
    import Content from "./Content.svelte";
    import Headline from "./Headline.svelte";
    import Separator from "./Separator.svelte";
    import Link from "./Link.svelte";
    import WhitepaperInternalLink from "./WhitepaperInternalLink.svelte";
</script>

<Content offset={false}>
    <div class="whitepaper">
        <Headline>OpenChat SNS Whitepaper</Headline>

        <TableOfContents />

        <div class="body">
            <h2 id="product-service-overview">1) Product / Service Overview</h2>

            <p class="blurb">
                OpenChat is a fully featured chat application running on the <WhitepaperInternalLink
                    id={"internet-computer-overview"}>Internet Computer</WhitepaperInternalLink>
                blockchain similar to WhatsApp, Signal and Telegram, and will soon be getting a major
                new capability called “communities” which are like Slack workspaces or Discord servers.
            </p>

            <p class="blurb">
                It is a responsive, progressive web application (PWA) and as such scales to take
                advantage of any screen size and integrates with devices in a similar way to native
                apps, with notifications on desktop and Android devices, and on <a
                    href="https://www.apple.com/ios/ios-16/features/"
                    target="_blank">iOS from next year</a
                >. You can find the full development roadmap <Link path={"roadmap"}>here</Link> .
            </p>
            <p class="blurb">
                The app is <a href="https://github.com/dfinity-lab/open-chat" target="_blank"
                    >open source</a>
                and runs as a collection of
                <WhitepaperInternalLink id={"canister-smart-contracts"}
                    >canister smart-contracts</WhitepaperInternalLink
                >. It is possible to see the code running on any canister at any time with a link
                back to the particular version in source control and to independently verify this is
                true.
            </p>
            <p class="blurb">
                A canister is created for each user which holds their direct chat data, links to the
                groups they are members of, and also serves as a wallet allowing OpenChat users to
                hold and manage tokens. Each group (and soon “community”) is also implemented as its
                own canister. This architecture will allow OpenChat to scale to every person on the
                planet. For details of the architecture please <Link path={"architecture"}
                    >see here</Link
                >.
            </p>
            <p class="blurb">
                OpenChat users can send messages to each other containing tokens such as ICP and BTC
                and so can be used for global remittance.
            </p>
            <p class="blurb">
                However, the ground-breaking difference between OpenChat and other similar apps, is
                that it will soon be governed as a DAO with its own token called CHAT, analogous to
                ICP. The DAO will be realized by a system called the <a
                    href="https://internetcomputer.org/docs/current/tokenomics/"
                    target="_blank">SNS</a>
                (Service Nervous System) analogous to the <WhitepaperInternalLink
                    id="network-nervous-system">NNS</WhitepaperInternalLink> (Network Nervous System)
                on the Internet Computer.
            </p>
            <p class="blurb">
                The focus of the founding dev team has been first and foremost on building a rich,
                fully featured chat app on par with its web2 counterparts. Only by first building an
                app that people are happy to use will the rocket fuel of tokenization enable
                OpenChat to grow and challenge monopolistic big tech incumbents.
            </p>

            <div class="sep">
                <Separator />
            </div>

            <h2 id="internet-computer-overview">2) Internet Computer Overview</h2>

            <p class="blurb">
                The <a
                    href="https://medium.com/dfinity/the-internet-computer-for-geeks-a-new-dfinity-white-paper-ecb075b2d525"
                    target="_blank">Internet Computer</a> (IC) is a decentralized global compute platform
                which uses ground-breaking blockchain technology to achieve consensus within subnets.
                It is globally distributed in numerous independent data centers, is tamper proof and
                unstoppable.
            </p>
            <p class="blurb">
                It can serve applications fully on-chain without needing any centralized frontend
                layer. It is extremely efficient and is several orders of magnitude cheaper to run
                and store data than most other blockchains. It uses a reverse-gas model so
                computation and storage costs are paid by the app/service providers rather than
                users.
            </p>

            <h3 id="canister-smart-contracts">Canister smart-contracts</h3>

            <p class="blurb">
                Applications on the IC are composed of canister smart-contracts organized into
                subnets. A subnet can contain 100,000s of canisters and is composed of (typically
                13) node machines each of which runs in a different independent data center around
                the globe such that the nodes within each subnet are as geographically and
                jurisdictionally diverse as possible. Canisters can communicate securely with
                canisters on other subnets allowing the IC to scale horizontally.
            </p>
            <p class="blurb">
                A canister runs on a virtual machine (as a WASM) that is replicated across a subnet.
                It implements the actor model, and so is single threaded, processing a queue of
                input messages one at a time, optionally sending messages to other canisters, and
                adding a response message to an output queue.
            </p>
            <p class="blurb">
                It can be called by clients (or other canisters) using queries or updates. A query
                can be served immediately from any node but cannot change state. An update can
                change state and goes through a process of consensus for the nodes to agree on the
                same result before responding to the caller. Achieving consensus is where the
                blockchain comes into play but is beyond the scope of this document.
            </p>
            <p class="blurb">
                Canisters have the property of <a
                    href="https://en.wikipedia.org/wiki/Persistence_(computer_science)"
                    target="_blank">orthogonal persistence</a> which means as a programmer you just write
                data objects to memory and they are automatically persisted by the system. This removes
                the need for a database and is one of the reasons writing and running applications on
                the IC is simplified compared to traditional IT stacks.
            </p>

            <h3 id="network-nervous-system">Network Nervous System (NNS)</h3>

            <p class="blurb">
                A key feature of the Internet Computer blockchain is the Network Nervous System
                (NNS), an open algorithmic governance system that oversees the network and the token
                economics.
            </p>
            <p class="blurb">
                Holders of the Internet Computer’s ICP utility tokens can lock their tokens in
                neurons to participate in governance and contribute to decision-making, such as
                voting to determine whether or not a new subnet should be added to the network. By
                participating in governance, voters earn rewards which can be converted to ICP. In
                turn they can burn ICP to fuel the computation of their canisters.
            </p>

            <p class="blurb">
                <a
                    href="https://medium.com/dfinity/the-network-nervous-system-governing-the-internet-computer-1d176605d66a"
                    target="_blank">Read here</a>
                and
                <a href="https://internetcomputer.org/docs/current/tokenomics/" target="_blank"
                    >here</a> for more information on the NNS.
            </p>

            <div class="sep">
                <Separator />
            </div>
        </div>
    </div>
</Content>

<style type="text/scss">
    .whitepaper .body {
        text-align: left;
    }

    h2,
    h3,
    h4 {
        font-family: "Roboto", sans-serif;
    }

    h3 {
        margin-top: $sp6;
    }

    :global(.whitepaper .body .whitepaper-link) {
        text-decoration: underline;
        text-underline-offset: 2px;
        color: inherit;
        cursor: pointer;
        font-style: italic;

        &:hover {
            text-decoration: underline;
        }
    }

    a {
        text-decoration: underline;
        text-underline-offset: 2px;
        color: inherit;
        cursor: pointer;
        font-style: italic;

        &:hover {
            text-decoration: underline;
        }
    }

    .sep {
        text-align: center;
    }
</style>
