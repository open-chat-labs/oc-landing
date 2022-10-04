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
            <h2 id="1">1) Product / Service Overview</h2>

            <p class="blurb">
                OpenChat is a fully featured chat application running on the <WhitepaperInternalLink
                    id={"2"}>Internet Computer</WhitepaperInternalLink>
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
                <WhitepaperInternalLink id={"2-1"}>canister smart-contracts</WhitepaperInternalLink
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
                (Service Nervous System) analogous to the <WhitepaperInternalLink id="2-2"
                    >NNS</WhitepaperInternalLink> (Network Nervous System) on the Internet Computer.
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

            <h2 id="2">2) Internet Computer Overview</h2>

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

            <h3 id="2-1">Canister smart-contracts</h3>

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

            <h3 id="2-2">Network Nervous System (NNS)</h3>

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

            <h2 id="3">3) OpenChat DAO</h2>

            <h3 id="3-1">Summary</h3>

            <ul class="blurb">
                <li>
                    The OpenChat DAO is being formed to operate and steer the direction of OpenChat
                    which should be considered a public good, thus owned by no-one.
                </li>
                <li>
                    The OpenChat DAO and the OpenChat service are fully on-chain with no direct
                    dependencies on off-chain services.
                </li>
                <li>
                    The OpenChat DAO is operated using NNS blessed SNS canisters and SNS subnet.
                </li>
                <li>
                    A proposal to the NNS will be made to ask for the approval necessary to create
                    this DAO and associated public good.
                </li>
            </ul>

            <h3 id="3-2">Creation of the DAO</h3>

            <p class="blurb">
                The OpenChat SNS will be created from the latest NNS blessed SNS canisters by the
                founding dev team. Its <WhitepaperInternalLink id="5-2"
                    >initial configuration</WhitepaperInternalLink> will be held permanently by the SNS
                and be publicly inspectable. At this point control of the existing OpenChat operating
                canisters will be transferred from the founding dev team to the SNS, such that, henceforth,
                only the SNS may change OpenChat.
            </p>

            <p class="blurb">
                To initiate creation of the OpenChat DAO an NNS proposal will be submitted
                specifying the parameters of the decentralization sale and an initial token
                allocation. If the proposal is accepted the NNS will immediately start a
                decentralization sale of CHAT tokens based on this proposal, to decentralize
                governance control to the public and raise an endowment for ongoing development and
                growth.
            </p>

            <p class="blurb">
                Anyone can take part in the sale by depositing ICP into the SNS using the NNS
                launchpad. Once the sale has completed each investor will receive the same
                proportion of CHAT tokens as their share of the ICP deposited and the proceeds of
                the sale will be held in an ICP ledger account owned by the SNS governance canister.
            </p>

            <p class="blurb">
                At this point the DAO creation is completed and the running OpenChat service should
                be considered a public good.
            </p>

            <h3 id="3-3">Control of the DAO</h3>

            <p class="blurb">
                After the decentralization sale the SNS will be in control of the dapp including its
                treasury of CHAT and ICP. In other words, only the SNS will be able to upgrade the
                OpenChat canisters and only the SNS will have access to its treasury.
            </p>

            <p class="blurb">
                The SNS is itself controlled by the action of proposals. Anyone can submit a
                proposal to the SNS and then CHAT neuron holders can vote on these proposals.
            </p>

            <p class="blurb">
                In exceptional circumstances an NNS proposal could theoretically be used to sanction
                an SNS by stopping an SNS canister(s). One example could be if an IC app were to
                copy the open source code of another IC app, breaking its licensing terms.
            </p>

            <h3 id="3-4">Governance of the DAO</h3>

            <h4 id="3-4-1">Proposals</h4>

            <p class="blurb">SNS proposals have the following types.</p>

            <ul class="blurb">
                <li>
                    <strong>Motions</strong> are statements of intent but do not have any actual action
                    that is automatically taken if they succeed. They could be used, for example, to
                    propose new features or capabilities for development or to set the dev team’s priorities.
                </li>
                <li>
                    <strong>Canister upgrade</strong> proposals contain a canister Id and a wasm module
                    and instruct the SNS to upgrade the specified canister’s code to the wasm module.
                    This can be used to upgrade dapp canisters controlled by the SNS and the SNS canisters
                    themselves.
                </li>
                <li>
                    <strong>SNS config change</strong> proposals allow various SNS parameters to be
                    changed. Part of the boot-strapping process for the SNS is to provide <WhitepaperInternalLink
                        id="5-2">initial values for all of these parameters</WhitepaperInternalLink>
                    which will be covered later.
                </li>
                <li>
                    <strong>Token transfer</strong> proposals allow tokens to be transferred to/from
                    the specified SNS owned account. The SNS “treasury” can potentially include any IC
                    native token such as ICP, not just CHAT, and so this proposal can be used to transfer
                    any IC native token.
                </li>
                <li>
                    <strong>Burn token</strong> proposals will allow CHAT to be burned to reduce the
                    total supply.
                </li>
                <li>
                    <strong>Custom function</strong> proposals allow for an arbitrary function to be
                    called on a given canister by the SNS governance canister. In practice this
                    allows for arbitrarily complex behavior to be controlled by the OpenChat
                    community DAO. Some examples of custom functions:

                    <ul>
                        <li>
                            <strong>Buy cycles</strong>. By calling an API on the NNS cycles minting
                            canister a proposal can burn ICP for cycles to pay for the running of
                            the dapp.
                        </li>
                        <li>
                            <strong>Rolling upgrade</strong>. By calling an upgrade method on an
                            OpenChat canister the proposal can provide a canister WASM + version
                            number and initiate a rolling upgrade of say the User canisters.
                        </li>
                    </ul>
                </li>
            </ul>

            <p class="blurb">
                There will be some proposals to look out for soon after the decentralization sale
                including…
            </p>

            <ul class="blurb">
                <li>
                    One or more proposals to transfer some ICP and CHAT to one or more <a
                        href="https://docs.google.com/document/d/1V4CLsujL9HeZt3eP-LSr3hBS5iGcmNfa17d7ZaVKmLc/edit#heading=h.bn2twif6p6wt"
                        target="_blank">DEXes</a> to create initial liquidity pools to enable trading
                    of CHAT
                </li>
                <li>
                    The core dev team will engage with the community and then use a motion proposal
                    with a development roadmap for the following quarter which will likely include
                    designing and building the <WhitepaperInternalLink id="4-1-2"
                        >communities
                    </WhitepaperInternalLink> feature and/or a <WhitepaperInternalLink id="4-2"
                        >user reward system</WhitepaperInternalLink
                    >.
                </li>
            </ul>

            <h4 id="3-4-2">Voting and voting rewards</h4>

            <p class="blurb">
                Proposals are used to govern all aspects of the OpenChat dapp. Token holders are
                rewarded for participating in votes on proposals so that decisions are decentralized
                and reflect the will of the community.
            </p>

            <p class="blurb">
                Neurons have a property called dissolve delay which is the length of time it would
                take to dissolve the neuron into liquid tokens. Voting rewards increase with longer
                dissolve delay which aligns voters with the long term interests of OpenChat.
            </p>

            <p class="blurb">
                If CHAT is staked in a neuron with a dissolve delay set to at least 1 month then
                this neuron can be used to vote on proposals.
            </p>

            <p class="blurb">
                You can either vote on a proposal with a neuron(s) explicitly using the NNS Dapp
                (which will soon have a section for SNS’s) or the “OpenChat Proposals” group within
                the OpenChat dapp, or you can configure your neuron to follow another neuron(s) per
                proposal type, in which case your vote will be implicitly cast when it votes. By
                default, newly created neurons will have no followees so this would need to be
                manually configured. There will be at least one neuron pre-configured as a named
                followee which itself will follow the neurons of the founding dev team. Anyone is
                able to propose additional named neurons to be added to the SNS.
            </p>

            <p class="blurb">
                Each neuron has “voting power” which is calculated as the token value multiplied by
                the dissolve delay bonus multiplied by the age bonus. The dissolve delay bonus
                starts at 1x with zero dissolve delay and linearly increases up to 2x for neurons
                with the maximum 1 year dissolve delay. The age bonus starts at 1x at zero age and
                linearly increases up to 1.25x for the maximum 6 months age. This means for neurons
                with the same value, those that have spent 6 months with a dissolve delay of 1 year
                will have a voting power 2.5x those with a newly set 1 month dissolve delay.
            </p>

            <p class="blurb">
                For a proposal to be adopted the sum of the voting power of the “adopt” votes must
                exceed the sum of the voting power of the “reject” votes after 4 days or after a
                period of quiet. Also the “adopt” votes must have at least 3% of the total voting
                power. The vote will end immediately if either the “adopt” or “reject” votes exceed
                50% of available voting power. It is possible to participate in a vote for a
                proposal if still within the 4 day period even if it has already been resolved. This
                is so the neuron can still be a beneficiary of voting rewards.
            </p>

            <p class="blurb">
                Voting rewards are minted by the SNS ledger and accumulate in neurons that have
                participated in voting. Voting rewards can either be compounded back into the neuron
                or disbursed into liquid CHAT tokens. For a given proposal vote, the voting reward
                earned by a given neuron is in proportion to its voting power compared to the
                overall voting power of participating neurons. The voting rewards are distributed
                daily and take into account all of the votes that ended on that day. If there are no
                proposals on a given day the rewards are carried over to the next day. The
                proportion of total token supply that is minted annually for voting rewards is 5%.
                In practice, given that much of the supply will not be in voting neurons, a neuron
                with a 1 year dissolve delay would expect a voting reward significantly higher than
                this figure.
            </p>

            <p class="blurb">
                Please refer to <a
                    href="https://docs.google.com/document/d/1Ty25xNbXKIs8YiXlmpT8vuPApVzjp1aTJL1WXySOUto/edit#heading=h.rrc8s7i3mbk6"
                    target="_blank">this document</a> for a full description of SNS voting and rewards.
            </p>

            <h3 id="3-5">The power of the DAO</h3>

            <p class="blurb">
                The Internet Computer has been building towards this moment. It provides an
                unstoppable, tamperproof decentralized computing platform with trustless governance
                using the NNS. It now supports decentralized apps with trustless governance using an
                SNS. Even the process of decentralizing an app is achieved trustlessly, with a
                decentralization sale automatically configured and started by an executable NNS
                proposal so there is no danger of the dev team rug-pulling.
            </p>

            <p class="blurb">
                Only once all these conditions are in place is it really possible to unleash the
                power of tokenization into dapps. If there is a single weak link in the chain then
                tokenization is vulnerable.
            </p>

            <p class="blurb">
                A major problem in today’s tech landscape is that centralized big tech companies
                monopolize services and can use their position of power to exploit users and their
                data. It is very hard for new services to compete with these powerful incumbents but
                tokenization holds that promise. By using tokens to reward positive behavior, apps
                like OpenChat can take advantage of powerful virtuous cycles to help improve user
                experience and drive growth.
            </p>

            <div class="sep">
                <Separator />
            </div>

            <h2 id="4">Purpose of the CHAT utility token</h2>

            <ul class="blurb">
                <li>
                    It can be staked as neurons (very similar to ICP neurons) allowing token holders
                    to participate in the governance of OpenChat by <WhitepaperInternalLink
                        id="3-4-2">voting</WhitepaperInternalLink> on SNS proposals, and by doing so,
                    earn voting rewards. These rewards increase the longer the tokens are staked and
                    so token holders are incentivised to act in the long term interests of OpenChat.
                </li>
                <li>
                    It can be used by OpenChat users to pay for <WhitepaperInternalLink id={"4-1"}
                        >premium features</WhitepaperInternalLink
                    >.
                </li>
                <li>
                    It can be used to reward contributions to the evolution or growth of the
                    OpenChat service either through automated <WhitepaperInternalLink id="4-2"
                        >user rewards</WhitepaperInternalLink> or by SNS proposal.
                </li>
            </ul>

            <h3 id="4-1">Premium features</h3>

            <p class="blurb">
                There are many ways OpenChat could evolve to allow users to spend their CHAT tokens
                to pay for premium features within the dapp. It is likely the underlying price for
                premium features will be in CYCLES because these have a stable value (relative to
                <a href="https://en.wikipedia.org/wiki/Special_drawing_rights" target="_blank"
                    >XDR</a
                >) and then based on the exchange rate of CHAT->ICP (which we can request from
                DEXes) and the exchange rate of ICP->CYCLES (obtained by calling the cycles minting
                canister on the NNS subnet) we will provide a dynamic price for features in CHAT
                tokens.
            </p>

            <p class="blurb">
                To pay for a feature a user would need to have first deposited CHAT tokens to their
                OpenChat user canister which acts as a wallet. OpenChat will transfer the payment
                from the user’s canister to the SNS treasury account and then grant the feature.
            </p>

            <h4 id="4-1-1">Current premium features</h4>

            <p class="blurb">
                There are already some premium features that OpenChat offers which for the time
                being can be obtained either by paying with ICP or verifying a phone number.
            </p>

            <ul class="blurb">
                <li>
                    Storage for uploading/sending/storing “file” messages such as images and videos
                </li>
                <li>On demand message translation</li>
                <li>Increased group creation limit from 10 to 25</li>
            </ul>

            <h4 id="4-1-2">Communities</h4>

            <p class="blurb">
                A key feature we are planning to build soon is called “communities”. These will be
                like Slack workspaces or Discord servers and consist of a set of users, groups, and
                configuration. We will aim to provide a way to import existing Slack workspaces and
                Discord servers into OpenChat communities. Initially we will focus on encouraging IC
                communities to migrate to OpenChat, following that, the wider crypto space, before
                ultimately everyone else. There are various ways communities could be monetised, the
                most simple being to charge per user. Community owners themselves could potentially
                monetise their communities and revenue share with OpenChat by, for example, charging
                for admittance to a community.
            </p>

            <h4 id="4-1-3">Other possible future premium features</h4>

            <p class="blurb">
                Here are some more features that OpenChat could offer and charge for in the future.
            </p>

            <ul class="blurb">
                <li>Custom reactions, themes, stickers etc</li>
                <li>OpenChat NFTs</li>
                <li>Short usernames</li>
                <li>Voice and video chat</li>
                <li>‘Featured’ public groups / communities</li>
                <li>
                    Custom bots (e.g. a bot controlled chat could support token swaps using
                    messages)
                </li>
            </ul>

            <h4 id="4-1-4">Additional potential revenue</h4>

            <ul class="blurb">
                <li>Provide chat functionality to other IC apps with an OpenChat integration</li>
                <li>Transaction charge on sending tokens as messages</li>
                <li>Transaction charge to use an integrated token swap service</li>
            </ul>

            <h3 id="4-2">User rewards</h3>

            <p class="blurb">
                The design of the user reward system has not been confirmed yet and we will consult
                with the OpenChat community before finalizing the design and making a proposal to
                carry it out. This system can of course evolve over time with further proposals.
                Once it is ready, a proposal will be made to transfer the <WhitepaperInternalLink
                    id="5-1-3">reserved 38% of the CHAT</WhitepaperInternalLink>
                from the SNS governance canister to the OpenChat root canister where it will be available
                to OpenChat to algorithmically reward dapp users.
            </p>

            <p class="blurb">
                There are challenges to creating an effective reward system. The aim is to
                incentivise usage and growth of OpenChat, and ultimately the value of the CHAT
                token, by rewarding users who further that goal. One significant hurdle is that with
                a financial reward there is an incentive for unscrupulous users to try to game the
                system and “farm” CHAT tokens by creating multiple accounts with spam content. This
                challenge is made harder still because any system designed to reward users will,
                like all OpenChat code, be open source and visible to anyone.
            </p>

            <h4 id="4-2-1">User reputation</h4>

            <p class="blurb">
                We think a reward system should be based on reputation. Each user would have a
                reputation score taking into account positive and negative activity on the dapp.
                Positive signals could include inviting other users (if they themselves go on to
                gain a sufficiently high reputation), owner/admin of popular groups, sending
                messages and reactions, moderating content and users, etc. Negative signals could
                include cross-posting, sending spam messages, creating multiple accounts etc. We
                expect to add a feature to allow users to mark messages as spam (or more generally
                unwanted content).
            </p>

            <p class="blurb">
                We can also derive a positive signal for a user if they hold tokens (ICP, CHAT, BTC)
                in their OpenChat account, or even better, neurons.
            </p>

            <h4 id="4-2-2">Rewards</h4>

            <p class="blurb">
                The reward algorithm can use reputation to determine which users are rewarded and
                the value of the reward. We could either give a small reward to lots of users or
                larger rewards to a smaller group perhaps where you get entered into a lottery if
                your reputation is high enough, or a combination of both. The advantage to having
                larger rewards is that those users are more likely to become strong advocates for
                the long term success of OpenChat whereas a small reward might not provide
                sufficient incentive.
            </p>

            <p class="blurb">
                If a user qualifies for a reward, CHAT tokens will be transferred from the OpenChat
                root canister to their OpenChat user canister. Using the dapp the user can then
                access their CHAT tokens and send some to other users, withdraw them to sell on an
                exchange, or buy premium features. Using the SNS UI users will also be able to stake
                their CHAT as neurons, take part in OpenChat governance and earn voting rewards.
            </p>
        </div>
    </div>
</Content>

<style type="text/scss">
    .whitepaper .body {
        text-align: left;
        font-family: "Roboto", sans-serif;
    }

    h2,
    h3,
    h4 {
        font-family: "Roboto", sans-serif;
        margin-bottom: $sp3;
    }

    h3 {
        margin-top: $sp6;
    }

    .blurb {
        font-size: toRem(16);
        font-weight: 300;
        line-height: toRem(22);

        li {
            margin-bottom: $sp3;
        }
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
        margin-top: $sp6;
        text-align: center;
    }
</style>
