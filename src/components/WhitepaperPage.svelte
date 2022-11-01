<script lang="ts">
    import TableOfContents from "./TableOfContents.svelte";
    import Content from "./Content.svelte";
    import Headline from "./Headline.svelte";
    import Separator from "./Separator.svelte";
    import Link from "./Link.svelte";
    import WhitepaperInternalLink from "./WhitepaperInternalLink.svelte";
    import WhitepaperExternalLink from "./WhitepaperExternalLink.svelte";
    import GoogleChart from "./GoogleChart.svelte";

    let width = 0;
</script>

<Content>
    <div class="whitepaper" bind:clientWidth={width}>
        <Headline>OpenChat SNS Whitepaper</Headline>

        <TableOfContents />

        <div class="body">
            <h2 class="link-target" id="1">1) Product / Service Overview</h2>

            <p class="blurb">
                OpenChat is a fully featured chat application running on the <WhitepaperInternalLink
                    id={"2"}>Internet Computer</WhitepaperInternalLink>
                blockchain similar to WhatsApp, Signal and Telegram, and will soon be getting a major
                new capability called “communities” which are like Slack workspaces or Discord servers.
            </p>

            <p class="blurb">
                It is a responsive, progressive web application (PWA) and as such scales to take
                advantage of any screen size and integrates with devices in a similar way to native
                apps, with notifications on desktop and Android devices, and on <WhitepaperExternalLink
                    href="https://www.apple.com/ios/ios-16/features/"
                    >iOS from next year</WhitepaperExternalLink
                >. You can find the full development roadmap <Link path={"roadmap"}>here</Link> .
            </p>
            <p class="blurb">
                The app is <WhitepaperExternalLink href="https://github.com/dfinity-lab/open-chat"
                    >open source</WhitepaperExternalLink>
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
                ICP. The DAO will be realized by a system called the <WhitepaperExternalLink
                    href="https://internetcomputer.org/docs/current/tokenomics/sns/sns-intro-tokens"
                    >SNS</WhitepaperExternalLink>
                (Service Nervous System) analogous to the <WhitepaperExternalLink
                    href="https://internetcomputer.org/docs/current/tokenomics/nns/nns-intro"
                    >NNS</WhitepaperExternalLink> (Network Nervous System) on the Internet Computer.
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

            <h2 class="link-target" id="2">2) Internet Computer Overview</h2>

            <p class="blurb">
                The <WhitepaperExternalLink
                    href="https://medium.com/dfinity/the-internet-computer-for-geeks-a-new-dfinity-white-paper-ecb075b2d525"
                    >Internet Computer</WhitepaperExternalLink> (IC) is a decentralized global compute
                platform which uses ground-breaking blockchain technology to achieve consensus within
                subnets. It is globally distributed in numerous independent data centers, is tamper proof
                and unstoppable.
            </p>
            <p class="blurb">
                It can serve applications fully on-chain without needing any centralized frontend
                layer. It is extremely efficient and is several orders of magnitude cheaper to run
                and store data than most other blockchains. It uses a reverse-gas model so
                computation and storage costs are paid by the app/service providers rather than
                users.
            </p>

            <h3 class="link-target" id="2-1">Canister smart-contracts</h3>

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
                Canisters have the property of <WhitepaperExternalLink
                    href="https://en.wikipedia.org/wiki/Persistence_(computer_science)"
                    >orthogonal persistence</WhitepaperExternalLink> which means as a programmer you
                just write data objects to memory and they are automatically persisted by the system.
                This removes the need for a database and is one of the reasons writing and running applications
                on the IC is simplified compared to traditional IT stacks.
            </p>

            <h3 class="link-target" id="2-2">Network Nervous System (NNS)</h3>

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
                <WhitepaperExternalLink href="https://internetcomputer.org/nns/"
                    >Read here</WhitepaperExternalLink> for more information on the NNS.
            </p>

            <div class="sep">
                <Separator />
            </div>

            <h2 class="link-target" id="3">3) OpenChat DAO</h2>

            <h3 class="link-target" id="3-1">Summary</h3>

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

            <h3 class="link-target" id="3-2">Creation of the DAO</h3>

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

            <h3 class="link-target" id="3-3">Control of the DAO</h3>

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
                copy the source code of another IC app, breaking its licensing terms.
            </p>

            <h3 class="link-target" id="3-4">Governance of the DAO</h3>

            <h4 class="link-target" id="3-4-1">Proposals</h4>

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
                    One or more proposals to transfer some ICP and CHAT to one or more <WhitepaperExternalLink
                        href="https://docs.google.com/document/d/1V4CLsujL9HeZt3eP-LSr3hBS5iGcmNfa17d7ZaVKmLc/edit#heading=h.bn2twif6p6wt"
                        >DEXes</WhitepaperExternalLink> to create initial liquidity pools to enable trading
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

            <h4 class="link-target" id="3-4-2">Voting and voting rewards</h4>

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
                Voting rewards are generated by the SNS and accumulate in neurons that have
                participated in voting as maturity. Maturity can be disbursed to an account
                according to
                <WhitepaperExternalLink
                    href="https://wiki.internetcomputer.org/wiki/Maturity_modulation"
                    >maturity modulation</WhitepaperExternalLink> Alternatively it can be staked or auto-staked.
                For a given proposal vote, the voting reward earned by a given neuron is in proportion
                to its voting power compared to the overall voting power of participating neurons. The
                voting rewards are distributed daily and take into account all of the votes that ended
                on that day. If there are no proposals on a given day the rewards are carried over to
                the next day. The proportion of total token supply that is generated annually for voting
                rewards is 5%. In practice, given that much of the supply will not be in voting neurons,
                a neuron with a 1 year dissolve delay would expect a voting reward significantly higher
                than this figure.
            </p>

            <p class="blurb">
                Please refer to <WhitepaperExternalLink
                    href="https://docs.google.com/document/d/1Ty25xNbXKIs8YiXlmpT8vuPApVzjp1aTJL1WXySOUto/edit#heading=h.rrc8s7i3mbk6"
                    >this document</WhitepaperExternalLink> for a full description of SNS voting and
                rewards.
            </p>

            <h3 class="link-target" id="3-5">The power of the DAO</h3>

            <p class="blurb">
                There are many factors which will influence the success of OpenChat. It must have a
                great development team building an app with a great user experience. It must have
                the standard features expected of a chat app and new capabilities and properties
                which set it apart from the competition. But even when getting all this right it is
                hard to break into a market with such established players. A crucial ingredient
                available to OpenChat to help it succeed is <em>tokenization</em>.
            </p>

            <h4 class="link-target" id="3-5-1">Growth</h4>

            <p class="blurb">
                The OpenChat system will automatically reward users with CHAT tokens for using the
                app positively and for inviting friends and family to join if they also go on to use
                the app positively. This improves the user experience by encouraging positive
                behavior and also builds an exponential viral growth loop. Users rewarded with CHAT
                tokens are invested in the future success of OpenChat and so a powerful team of
                100,000s of advocates is created helping drive growth further.
            </p>

            <h4 class="link-target" id="3-5-2">Trust</h4>

            <p class="blurb">
                An essential condition for tokenization to be viable in the first place is <em
                    >trust</em
                >. OpenChat runs on the Internet Computer, a decentralized, unstoppable software
                platform with decentralized governance using the NNS. OpenChat will itself be
                controlled by a DAO which is aligned to its long-term success. Even the process of
                creating the DAO, with a <em>decentralization sale</em>
                proposed to the NNS and then started automatically by the NNS, ensures there is no foul
                play. All this means that token holders can trust their investment is secure.
            </p>

            <div class="sep">
                <Separator />
            </div>

            <h2 class="link-target" id="4">4) Purpose of the CHAT utility token</h2>

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

            <h3 class="link-target" id="4-1">Premium features</h3>

            <p class="blurb">
                There are many ways OpenChat could evolve to allow users to spend their CHAT tokens
                to pay for premium features within the dapp. It is likely the underlying price for
                premium features will be in CYCLES because these have a stable value (relative to
                <WhitepaperExternalLink href="https://en.wikipedia.org/wiki/Special_drawing_rights"
                    >XDR</WhitepaperExternalLink
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

            <h4 class="link-target" id="4-1-1">Current premium features</h4>

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

            <h4 class="link-target" id="4-1-2">Communities</h4>

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

            <h4 class="link-target" id="4-1-3">Other possible future premium features</h4>

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

            <h4 class="link-target" id="4-1-4">Additional potential revenue</h4>

            <ul class="blurb">
                <li>Provide chat functionality to other IC apps with an OpenChat integration</li>
                <li>Transaction charge on sending tokens as messages</li>
                <li>Transaction charge to use an integrated token swap service</li>
            </ul>

            <h3 class="link-target" id="4-2">User rewards</h3>

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

            <h4 class="link-target" id="4-2-1">User reputation</h4>

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

            <h4 class="link-target" id="4-2-2">Rewards</h4>

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

            <div class="sep">
                <Separator />
            </div>

            <h2 class="link-target" id="5">5) Token allocation at SNS genesis</h2>

            <h3 class="link-target" id="5-1">Initial token allocation</h3>

            <p class="blurb">
                The SNS will be initialized with 1 billion CHAT tokens allocated in the following
                proportions.
            </p>

            <GoogleChart
                totalWidth={width}
                title="Initial token allocation"
                originalWidth={730}
                originalHeight={380}
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTR-Snm-_Eq_UcQ5ClcdjGTLg4UOyvUl04rZXpY1W0n_yLuKJkANs-umrNS4F469qZoI17w1Nci08Sf/pubchart?oid=368502713&amp;format=interactive&amp;w=1000px" />

            <h4 class="link-target" id="5-1-1">NNS controlled (yellow)</h4>

            <p class="blurb">
                The NNS will initially be allocated 29% of the total supply of CHAT tokens. 20% will
                be immediately put up for sale to decentralize the governance and raise funds. The
                remaining 9% will be held in reserve until some future time when there would be a
                subsequent NNS proposal to either sell the reserve or burn it.
            </p>

            <p class="blurb">
                Investors in the decentralization sale will deposit ICP into the SNS and once the
                sale has completed they will receive the same proportion of CHAT tokens as their
                share of the ICP deposited. Each investor will receive their CHAT as a basket of 13
                equal value neurons. The first neuron will have a zero dissolve delay and so be
                immediately disbursable to liquid CHAT tokens. Each subsequent neuron will have a
                dissolve delay one month greater than the previous, so from 1-12 months.
            </p>

            <h4 class="link-target" id="5-1-2">Founders and funders (pink)</h4>

            <p class="blurb">
                OpenChat has been built by a team of 3 developers since January 2021 and has
                received seed funding from the <WhitepaperExternalLink href="https://dfinity.org/"
                    >DFINITY foundation</WhitepaperExternalLink
                >. Each of the 3 founding developers will be allocated a share of 4% of the CHAT
                tokens and the DFINITY foundation will be allocated a share of 6%. As above each
                party will receive their share as a basket of 13 equal value neurons, the first
                liquid and the rest with dissolve delays increasing from 1-12 months. However there
                are two special properties unique to these “founding dev team and seed funder”
                neurons.
            </p>

            <p class="blurb">
                Firstly, they are configured so that their voting power is reduced as a proportion
                of the CHAT sold out of the total reserve for sale. In the case of OpenChat we are
                selling 20% out of a total sale reserve of 29% so each founding dev team & seed
                funder neuron will have its voting power reduced by a factor of 20/29 (about 69%).
                If there was a future sale for a further 5% of the reserve then the voting power of
                these neurons would increase to 25/29 of the standard value. This is so that the
                <strong>
                    voting power of the founding dev team and seed funders is less than the voting
                    power held by the rest of the community
                </strong>. It also means the voting rewards of these neurons are reduced in the same
                proportion, and furthermore, if they are disbursed before all of the reserve has
                been sold, only that same proportion of liquid CHAT will be given.
            </p>

            <GoogleChart
                totalWidth={width}
                title="Voting power at genesis"
                originalWidth={684}
                originalHeight={380}
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTR-Snm-_Eq_UcQ5ClcdjGTLg4UOyvUl04rZXpY1W0n_yLuKJkANs-umrNS4F469qZoI17w1Nci08Sf/pubchart?oid=479343896&amp;format=interactive" />

            <p class="blurb">
                Secondly, these neurons will have an additional lockup (or vesting) period before
                they can even start to dissolve (this doesn’t affect the 1st neuron because it is
                already dissolved). The DFINITY foundation neurons will have a vesting period of 1
                year and the dev team neurons will have a vesting period of 3 years. This is to
                ensure that the founding team remains committed to the project in the long term and
                cannot “rug-pull” investors.
            </p>

            <h4 class="link-target" id="5-1-3">SNS treasury (blue)</h4>

            <p class="blurb">
                After the decentralization sale the SNS will be left with a treasury of the
                remaining 53% of CHAT tokens.
            </p>

            <p class="blurb">
                The bulk, 38% percent, will be used over time to automatically <WhitepaperInternalLink
                    id="4-2">reward users</WhitepaperInternalLink> who positively contribute and help
                OpenChat grow.
            </p>

            <p class="blurb">
                13% will be reserved to pay community bounties, by SNS proposal, to compensate
                people who contribute to OpenChat more generally. This could be used for instance to
                reward 3rd party developers for code contributions.
            </p>

            <p class="blurb">
                The remaining 2% will be used to provide initial liquidity pools for DEXes
                (decentralized exchanges). In order for CHAT tokens to be traded it is necessary to
                list CHAT on one or more exchanges. The intention is to trade on IC based DEXes. To
                list CHAT on a DEX implementing an <WhitepaperExternalLink
                    href="https://academy.binance.com/en/articles/what-is-an-automated-market-maker-amm"
                    >AMM</WhitepaperExternalLink> it is necessary to provide a liquidity pool of CHAT
                backed by another token, in our case ICP raised from the decentralization sale. We plan
                to make CHAT available on several DEXes as and when they are available. For each DEX
                it will be necessary to create a proposal to transfer some CHAT from the SNS to the DEX,
                and another proposal to transfer an equal value of ICP from the SNS to the DEX. The plan
                is to “seed” these DEXes with the 2% of CHAT tokens set aside for this purpose although
                this might not all happen at once.
            </p>

            <h3 class="link-target" id="5-2">Initial SNS configuration</h3>

            <p class="blurb">
                The SNS will initially be configured with the values shown in the tables below which
                can all subsequently be changed by proposal.
            </p>

            <div class="tab blurb">
                <div>Transaction fee in CHAT tokens that must be paid for ledger transfers</div>
                <div>0.01</div>
                <div>Number of CHAT tokens that a rejected proposal costs the proposer</div>
                <div>100</div>
                <div>Minimum number of CHAT tokens that can be staked in a neuron</div>
                <div>100</div>
                <div>Maximum voting period for a proposal</div>
                <div>4 days</div>
                <div>Proportion of voting power needed for a proposal to be accepted</div>
                <div>3%</div>
                <div>Minimum neuron dissolve delay to vote</div>
                <div>1 month</div>
                <div>Maximum neuron dissolve delay</div>
                <div>1 year</div>
                <div>Maximum dissolve delay bonus</div>
                <div>2x</div>
                <div>Maximum age for age bonus</div>
                <div>6 months</div>
                <div>Maximum age bonus</div>
                <div>1.25x</div>
                <div>Percentage of total supply that will be generated annually for rewards</div>
                <div>5%</div>
            </div>

            <h3 class="link-target" id="5-3">SNS decentralization sale configuration</h3>

            <p class="blurb">
                The decentralization sale will be configured with the values shown below.
            </p>

            <div class="tab blurb">
                <div>The total number of CHAT tokens to be sold</div>
                <div>200,000,000 (20%)</div>
                <div>The maximum ICP to be raised</div>
                <div>1,000,000</div>
                <div>The minimum ICP to be raised (otherwise sale fails and ICP returned)</div>
                <div>100,000</div>
                <div>Duration of sale (unless maximum ICP raised sooner)</div>
                <div>2 weeks</div>
                <div>Minimum number of buyers</div>
                <div>100</div>
                <div>Minimum ICP per buyer</div>
                <div>1</div>
            </div>

            <h4 class="link-target" id="5-3-1">Valuation range</h4>

            <p class="blurb">
                The reason to impose a maximum target is to give investors a minimum bound on the
                number of CHAT tokens they will receive for their ICP investment. The lower bound of
                0.1M ICP and the upper bound of 1M ICP for 20% of the tokens gives the OpenChat DAO
                an initial total valuation between 0.5M ICP and 5M ICP. For 1 ICP you would receive
                between 200 -> 2000 CHAT tokens.
            </p>

            <div class="sep">
                <Separator />
            </div>

            <h2 class="link-target" id="6">6) OpenChat SNS treasury</h2>

            <p class="blurb">The SNS will hold a treasury of ICP tokens and CHAT tokens.</p>

            <p class="blurb">
                Immediately after the decentralization sale the SNS will have an ICP ledger account
                with the ICP raised in the sale and a CHAT ledger account with 530M tokens. The plan
                for these CHAT tokens is <WhitepaperInternalLink id="5-1-3"
                    >described above</WhitepaperInternalLink> but the treasury is available to be used
                by the DAO through proposals as it sees fit.
            </p>

            <p class="blurb">
                Soon after the decentralization sale, as and when DEXes are available, proposals
                will be made to transfer CHAT from the 20M reserve into a handful of AMM liquidity
                pools alongside proposals to transfer the corresponding value of ICP from the
                treasury to the AMM liquidity pools. This will enable the trading of CHAT.
            </p>

            <p class="blurb">
                We plan to create a proposal to stake a large portion of ICP, say 80%, as an 8 year
                neuron. This neuron would participate in NNS voting by following an OpenChat beacon
                neuron which would seek to influence the ICs agenda to suit the long term interests
                of the OpenChat DAO. It would also earn voting rewards for the DAO which could be
                used to cover ongoing costs or build up a reserve. This all depends on whether a
                small but significant change is made to the IC to allow canisters to control
                neurons.
            </p>

            <p class="blurb">
                Any liquid ICP in the reserve could be used directly, or the DAO could swap CHAT
                from the CHAT reserve for ICP at a DEX, and use it to fund expenses such as <WhitepaperInternalLink
                    id="6-1">
                    cycles for hosting
                </WhitepaperInternalLink>, <WhitepaperInternalLink id="6-2"
                    >3rd party services</WhitepaperInternalLink
                >, and potentially later for <WhitepaperInternalLink id="6-3">
                    paying the development team
                </WhitepaperInternalLink>.
            </p>

            <h3 class="link-target" id="6-1">ICP for cycles to fund hosting</h3>

            <p class="blurb">
                Initially, proposals will be created to transfer ICP as needed to the account of a
                designated developer who will use it to buy cycles and top-up the root OpenChat
                canister. Going forwards, the root OpenChat canister can be programmed to
                automatically create a proposal when it is below a threshold of cycles to transfer
                ICP to itself and burn it for cycles to run the dapp.
            </p>

            <h3 class="link-target" id="6-2">3rd party services</h3>

            <p class="blurb">
                The intention is for OpenChat to have no off-chain dependencies so that it is not
                necessary to trust any human agent, for example to transact in FIAT currencies. At
                the moment we have the following off-chain dependencies:
            </p>

            <ul class="blurb">
                <li>
                    Phone number verification (which we use as evidence of unique humanity and
                    reward verified users with some premium features). At the time of writing this
                    is implemented using a small executable on AWS which polls an OpenChat canister
                    and sends queued text messages, each containing a verification code, using an
                    AWS service. We plan to integrate with NFID (from Identity Labs) and use their
                    service to verify user phone numbers. We can then use an SNS proposal to send
                    ICP to Identity Labs on an ongoing basis as payment.
                </li>
                <li>
                    Sending push notifications to browsers (and later native devices). In a similar
                    vein we use an executable on AWS to query an OpenChat canister and push any
                    queued notifications. This will be replaced by an upcoming capability to make
                    fire and forget HTTP calls directly from IC canisters
                </li>
                <li>
                    Serving the dapp on oc.app (hosted on AWS). Eventually this capability will be
                    built into the boundary nodes - <WhitepaperExternalLink
                        href="https://forum.dfinity.org/t/boundary-node-roadmap/15562"
                        >see here</WhitepaperExternalLink>
                </li>
            </ul>

            <h3 class="link-target" id="6-3">Pay the development team</h3>

            <p class="blurb">
                Initially at least DFINITY will continue to fund the OpenChat development team and
                thus a core contributor to the OpenChat open source project. DFINITY is expecting to
                migrate its day to day business from existing web2 chat solutions (i.e. Slack) to
                using IC based web3 solutions for its needs, and by funding the OpenChat open source
                project is able to influence the roadmap of the project to help ensure the
                enterprise features it requires are prioritized. This does not mean that DFINITY is
                the only contributor, and OpenChat welcomes community contributions.
            </p>

            <p class="blurb">
                At some point it is likely this funding will stop and the OpenChat DAO will need to
                fund its own development. In this case the development team(s) can make proposals to
                the SNS to receive ICP for ongoing funding. For example the team could make a
                proposal each quarter with a development plan and a request for funds.
            </p>

            <div class="sep">
                <Separator />
            </div>

            <h2 class="link-target" id="7">7) Tokenomics</h2>

            <h3 class="link-target" id="7-1">Total supply levers</h3>

            <p class="blurb">
                At genesis the total supply of CHAT tokens will be 1B. The supply will increase if
                more tokens are minted and decrease if tokens are burned.
            </p>

            <p class="blurb">
                The SNS is configured to generate 5% of the total supply annually to pay voting
                rewards to participating neurons. This value of 5% could be subsequently changed by
                proposal. Voting rewards accumulate in participating neurons as <WhitepaperExternalLink
                    href="https://wiki.internetcomputer.org/wiki/Maturity_modulation"
                    >maturity</WhitepaperExternalLink
                >. At the point a neuron’s maturity is disbursed it is burned and the corresponding
                value of CHAT tokens will be minted by the SNS ledger to an account. It is also
                possible for the SNS to mint tokens by proposal although it is unlikely the OpenChat
                DAO will elect to do this.
            </p>

            <p class="blurb">The only way the SNS can burn tokens is by proposal.</p>

            <h3 class="link-target" id="7-2">Income and outgoings</h3>

            <p class="blurb">
                At genesis the SNS will have a treasury of ICP from the decentralization sale and
                530M CHAT tokens.
            </p>

            <p class="blurb">
                The SNS will receive an income in CHAT tokens from premium features, transaction
                fees, 3rd party integrations etc. The SNS will also receive an income in ICP from
                the NNS voting rewards of its large ICP neuron if that goes ahead.
            </p>

            <p class="blurb">
                The SNS will have various outgoings. It will use ICP to pay the OpenChat dapp
                hosting costs (cycles), 3rd parties for services, and potentially in the future, the
                core dev team. It will use CHAT to pay user rewards and community bounties.
            </p>

            <p class="blurb">
                In the early years, outgoings will outstrip income and the treasury will largely be
                used to fund user rewards and community bounties. The expectation is that as income
                grows over time it will eventually balance outgoings. A higher income would also
                allow a higher rate of user rewards and bounties to encourage higher growth in users
                and usage.
            </p>

            <p class="blurb">
                As the OpenChat DAO sees fit it can choose to burn CHAT tokens to reduce the total
                supply. The expectation is that over several years the SNS will be able to afford to
                burn CHAT at an increasing rate until the burn rate matches the minting rate from
                voting rewards and the total supply becomes constant.
            </p>

            <p class="blurb">
                The following diagram depicts a projection of the total supply of CHAT over time.
                For the purposes of this projection it is assumed that the reward rate will remain
                at a constant 5% and that the burn rate will start at 0.125%, increasing by a factor
                of 1.5 each year, until it balances the reward rate.
            </p>

            <GoogleChart
                totalWidth={width}
                title="CHAT supply over time"
                originalWidth={943}
                originalHeight={582}
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTR-Snm-_Eq_UcQ5ClcdjGTLg4UOyvUl04rZXpY1W0n_yLuKJkANs-umrNS4F469qZoI17w1Nci08Sf/pubchart?oid=285935273&amp;format=interactive" />

            <h3 class="link-target" id="7-3">Token price</h3>

            <p class="blurb">
                There are various factors that will influence the price of CHAT tokens such as
            </p>
            <ul class="blurb">
                <li>Total supply</li>
                <li>Market sentiment</li>
                <li>Income</li>
                <li>Costs</li>
                <li>Liquid supply</li>
            </ul>
            <p class="blurb">
                We have discussed total supply but arguably liquid supply is a bigger factor when
                considering the token price.
            </p>

            <p class="blurb">
                After the decentralization sale, participants will receive a basket of neurons of
                varying dissolve delays with only 1/13 being immediately liquid. The voting reward
                rate, initialized to 5%, is expected to encourage token holders to lock up a certain
                proportion of tokens thus, at least temporarily, removing them from the liquid
                supply. In the case of the seed funders, every neuron has a 1 year vesting period
                before it can even start dissolving. In the case of the founding dev team, every
                neuron has a 3 year vesting period.
            </p>

            <p class="blurb">
                There are various tokenomics parameters which can affect the proportion of CHAT that
                is locked up. These include the max dissolve delay, the dissolve delay bonus, min
                dissolve delay to vote, max age, max age bonus, and voting reward rate. We have
                carefully chosen <WhitepaperInternalLink id="5-2"
                    >initial values</WhitepaperInternalLink> for these parameters which we believe provide
                a good balance of incentives but these are all levers available to the DAO to allow it
                to influence the total and liquid supply and therefore the price if so desired.
            </p>

            <p class="blurb">
                Consider the SNS treasury of CHAT tokens. These tokens are liquid but are only being
                trickled out (in percentage terms) to the community as user rewards and bounties,
                and then only some proportion will find their way onto the market (DEXes). It is a
                similar story for the portion of CHAT held in the NNS reserve - it is liquid but
                will not enter the market unless the DAO decides to conduct a future sale.
            </p>

            <p class="blurb">
                As a general rule the DAO will want the price of the token to rise over time but
                this has to be balanced against other factors such as the growth of the app. For
                instance it might be desirable in some circumstances to turn the user reward taps up
                higher to encourage more user growth but in the short term that could negatively
                impact price by increasing the liquid supply.
            </p>

            <h3 class="link-target" id="7-4">Voting power over time</h3>

            <p class="blurb">
                The following diagram depicts a projection of the voting power over time segmented
                by founding dev team & seed funders and the rest of the token holder community. This
                projection is derived on the basis of the <WhitepaperInternalLink id="5-2"
                    >initial SNS parameter values</WhitepaperInternalLink
                >, the <WhitepaperInternalLink id="5-1"
                    >initial token distribution</WhitepaperInternalLink
                >, intrinsic properties of founder/funder neurons and some assumptions:
            </p>

            <ul class="blurb">
                <li>The SNS will distribute 20% of its treasury annually</li>
                <li>
                    The dev team and seed funders will keep 92% of their neurons staked for the
                    period
                </li>
                <li>Other CHAT holders will stake 50% of their neurons going forwards</li>
                <li>The average dissolve delay for a neuron will be 6.5 months</li>
                <li>
                    20% CHAT sold in decentralization sale and remaining 9% allocated for sale
                    remains unsold. The
                </li>
                <li>
                    founding dev team and seed funders have their voting power reduced as a
                    proportion of CHAT sold out of total allocation for sale = 20/29 = 69%
                </li>
            </ul>

            <p class="blurb">
                The full model used to plot this graph can be found in <WhitepaperExternalLink
                    href="https://docs.google.com/spreadsheets/d/1-LuBsCXxXdpia0-CDEY5eFveczp3eQdM3BponEX3Tq0/edit#gid=1167954061"
                    >this spreadsheet</WhitepaperExternalLink
                >.
            </p>

            <GoogleChart
                totalWidth={width}
                title="Voting power over time"
                originalWidth={813}
                originalHeight={503}
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTR-Snm-_Eq_UcQ5ClcdjGTLg4UOyvUl04rZXpY1W0n_yLuKJkANs-umrNS4F469qZoI17w1Nci08Sf/pubchart?oid=1816967829&amp;format=interactive" />

            <p class="blurb">
                In the first year the share of voting power held by the community is expected to
                decrease as it is assumed they will only stake 50% of their tokens going forwards
                whereas the founding dev team and seed funders expect to keep 92% staked. However,
                thereafter it is expected that voting power will shift further and further towards
                the community as more tokens are distributed. Importantly the balance of voting
                power should always remain in the hands of the wider community.
            </p>
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

        &.todo {
            font-weight: 900;
            color: var(--secondary);
        }
    }

    .tab {
        font-size: toRem(14);
        display: grid;
        grid-template-columns: 4fr 1fr;
        background-color: rgba(255, 255, 255, 0.1);
        margin-bottom: $sp4;

        > div {
            padding: toRem(12);
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);

            &:nth-child(odd) {
                border-right: 1px solid rgba(255, 255, 255, 0.3);
            }

            &:nth-child(even) {
                text-align: right;
            }

            &:last-child() {
                border-bottom: none;
            }
        }
    }

    :global(.link-target) {
        transition: color ease-in-out 300ms;
    }

    :global(.link-target.highlight) {
        color: var(--accent);
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

    .sep {
        margin-top: $sp6;
        text-align: center;
    }
</style>
