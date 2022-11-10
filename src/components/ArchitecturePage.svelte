<script lang="ts">
    import Headline from "./Headline.svelte";
    import CollapsibleCard from "./CollapsibleCard.svelte";
    import HashLinkTarget from "./HashLinkTarget.svelte";
    import { copyUrl } from "../utils/linking";
    import ZoomableImage from "./ZoomableImage.svelte";
    import ExternalLink from "./ExternalLink.svelte";
    import HashLink from "./HashLink.svelte";

    let linked: number | undefined = undefined;
</script>

<div class="architecture">
    <Headline>Architecture</Headline>

    <CollapsibleCard on:copyUrl={copyUrl} open={linked === 1} id={"1"} title={"System overview"}>
        <span slot="subtitle">1</span>
        <div class="body" slot="body">
            <p>
                OpenChat is a system composed of canister smart contracts running on the Internet
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

    <CollapsibleCard on:copyUrl={copyUrl} open={linked === 2} id={"2"} title={"System in depth"}>
        <span slot="subtitle">2</span>
        <div class="body" slot="body">
            <p>
                The OpenChat system architecture has been driven by both the requirements and by the
                current and anticipated future characteristics of the Internet Computer.
            </p>

            <ZoomableImage
                on:zoom
                url={"../architecture/complex.png"}
                alt="Complete architecture" />

            <HashLinkTarget on:copyUrl={copyUrl} id="2-1">Canister components</HashLinkTarget>

            <HashLinkTarget on:copyUrl={copyUrl} id="2-1-1">User canister</HashLinkTarget>

            <p>
                A key decision was made to give each user their own canister. This holds the user’s
                direct chats including the messages of both parties, references to each group the
                user is a member of, and other data such as their authentication principal,
                username, bio, avatar and blocked users. The user’s canister becomes a wallet for
                holding tokens in IC ledgers which allows tokens to be sent between users as chat
                messages. The user can also add their canister as a hotkey to their neurons which
                allows them to easily vote on proposals within the NNS and SNS proposal groups on
                OpenChat.
            </p>

            <p>
                There are pros and cons to this architecture but it will best support the long term
                scalability of the system.
            </p>

            <HashLinkTarget on:copyUrl={copyUrl} id="2-1-2">User index canister</HashLinkTarget>

            <p>
                The user index canister essentially holds the global registry of OpenChat users.
                Each user record includes the principal, user id, username, avatar id,
                created/updated/last online, account charges, phone verification status, storage
                limit, user referred by, wasm version, and several other fields. It is responsible
                for creating, upgrading, topping up, and keeping track of user canisters. It can
                verify users (using a code sent over SMS) and take payment for premium services such
                as more storage or groups. It calls into <HashLink id="2-1-5">OpenStorage</HashLink>
                to manage users’ file storage quotas.
            </p>

            <p>
                Ultimately it might be necessary to shard the user index across multiple canisters
                but 32 GB of stable memory will give enough capacity for a long time yet and we can
                cross that bridge later.
            </p>

            <HashLinkTarget on:copyUrl={copyUrl} id="2-1-3">Group canister</HashLinkTarget>

            <p>
                As for users, each group has its own canister. This stores and manages the group
                members and their roles, all the messages and other events that have occurred in the
                group, and other details of the group such as name, description, rules, avatar,
                permissions, pinned messages etc. Any message file attachments such as images and
                videos are stored using the OpenStorage service rather than in the group canister
                itself. We anticipate that with 32 GB of stable storage available to a single
                canister and since the messages in group canisters only have text, no groups will
                outgrow their canister. The same goes for user canisters.
            </p>

            <HashLinkTarget on:copyUrl={copyUrl} id="2-1-4">Group index canister</HashLinkTarget>

            <p>
                The group index canister essentially holds the global registry of OpenChat groups.
                Each group record includes the group id (canister id), active until timestamp, wasm
                version, and several other fields. In addition, public group records include the
                name, description, avatar id, and various other fields. It is responsible for
                creating, upgrading, topping up, and keeping track of user canisters. It also
                provides a searchable index of public groups and maintains a list of hot groups.
            </p>

            <!-- TODO possibly openstorage is 2-2 rather than 2-1-5 -->
            <HashLinkTarget on:copyUrl={copyUrl} id="2-1-5">OpenStorage</HashLinkTarget>

            <p>
                <ExternalLink href="https://github.com/open-ic/open-storage"
                    >OpenStorage</ExternalLink
                >is a scalable file storage system built by the OpenChat team which is available to
                be used by other projects. It consists of an index canister and dynamically created
                bucket canisters which hold the file data. Once a bucket is full it becomes
                read-only and a new bucket is created. OpenStorage implements <ExternalLink
                    href="https://en.wikipedia.org/wiki/Content-addressable_storage"
                    >content addressing</ExternalLink> so that for duplicate files the data is only stored
                once. This makes the forwarding of file messages on OpenChat cheap and quick. Files in
                OpenStorage are owned by users, in the case of OpenChat the sender of a file message
                is the file owner. Internally a file holds a reference to the underlying blob. It uses
                reference counting so that if all the files for a given blob are deleted then the blob
                is deleted.
            </p>

            <p>
                Each user is given a byte allowance which they can’t exceed. The first file
                reference a user has to a blob comes out of the user’s allowance but any further
                file references the user has to the same blob do not. This allows a user to upload
                or forward the same file multiple times without additional cost.
            </p>

            <HashLinkTarget on:copyUrl={copyUrl} id="2-2">Verifiable canister code</HashLinkTarget>

            <p>
                The <ExternalLink href={"https://github.com/open-ic/open-chat"}
                    >OpenChat source code</ExternalLink> is built into the WASMs used by each type of
                OpenChat canister in a repeatable way using docker. Anyone who pulls the OpenChat source
                code and uses the docker build will produce identical WASM files.
            </p>

            <p>
                Each canister exposes a metrics endpoint which is publicly accessible over the raw
                domain. In each case these metrics include the git commit id which identifies the
                specific source code revision used to build the WASM currently running on that
                canister. For example here is the url of the metrics endpoint for the user index
                canister: https://4bkt6-4aaaa-aaaaf-aaaiq-cai.raw.ic0.app/metrics.
            </p>

            <p>
                You can use dfx to interrogate the sha256 hash of the WASM module for any given
                canister id using the following command:
            </p>

            <code>dfx canister --network ic info 4bkt6-4aaaa-aaaaf-aaaiq-cai </code>

            <p>
                By building the WASM module for a canister at the given git commit, calculating its
                sha256 hash, and comparing with the module hash returned by the IC using dfx, the
                source code running on any canister can be verified.
            </p>
            <ul class="list">
                <li>
                    the canister ids of the top-level OpenChat canisters can be found in the
                    canister_ids.json file in the root of the OpenChat repo
                </li>
                <li>
                    the canister id of any group canister can be found in the url for that group in
                    the OpenChat app
                </li>
                <li>
                    likewise the canister id of any user canister can be found in the url of a
                    direct chat with that user
                </li>
                <li>
                    your own canister id can be found from the main menu in the advanced section of
                    your profile
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
