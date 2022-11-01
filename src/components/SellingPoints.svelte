<script lang="ts">
    import Section from "./Section.svelte";
    import { mobileWidth } from "../stores/screenDimensions";
    import Link from "./Link.svelte";
</script>

<Section lazy={false} id={"usp"}>
    <div class="grid">
        <div class="on-chain item">
            <div class="icon" />
            <div class="title">100% On Chain</div>
            <div class="txt">
                All of your data is stored 100% on chain in your own canister. Each group chat also
                has its own canister.
            </div>
        </div>
        <div class="dao item">
            <div class="icon" />
            <div class="title">DAO Controlled</div>
            <div class="txt">
                The product roadmap can <em>only</em> be decided, approved and enacted by the community.
                For us, by us.
            </div>
        </div>
        <div class="open-source item">
            <div class="icon" />
            <div class="title">Open Source</div>
            <div class="txt">
                All of the source code is available to inspect. We use repeatable, verifiable builds
                so you can confirm that what <em>you</em> approved is what's actually running.
            </div>
        </div>
        <div class="scalable item">
            <div class="icon" />
            <div class="title">Scalable</div>
            <div class="txt">
                Our canister architecture combined with the power of the Internet Computer allow us
                to scale indefinitely.
            </div>
        </div>
        <div class="secure item">
            <div class="icon" />
            <div class="title">Secure</div>
            <div class="txt">
                Relax in the knowledge that your messages are secured using advanced blockchain
                cryptography thanks to the Internet Computer protocol.
            </div>
        </div>
        <div class="reliable item">
            <div class="icon" />
            <div class="title">Reliable</div>
            <div class="txt">
                With each canister replicated by the Internet Computer you never have to worry about
                losing your data.
            </div>
        </div>
    </div>

    <Link path="features">View All Features =></Link>
</Section>

<style type="text/scss">
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: $sp4;
        margin-bottom: $sp5;

        @include mobile() {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .item {
        // border-radius: toRem(10);
        padding: toRem(40) toRem(32) toRem(32) toRem(32);
        min-height: toRem(200);
        border-radius: toRem(4);
        transition: transform ease-in-out 200ms;
        text-align: left;

        &.on-chain {
            background-color: #a663ff;
            color: #ffffff;
        }

        &.dao {
            background-color: #f34ac9;
        }

        &.open-source {
            background-color: #4ae97a;
        }

        &.scalable {
            background-color: #ffc702;
        }

        &.secure {
            background-color: #ff4844;
        }

        &.reliable {
            background-color: #4ab9e9;
        }

        .icon {
            width: toRem(40);
            height: toRem(40);
            margin-bottom: toRem(24);
            background-color: #242834;
        }

        .title {
            @include ubuntu(700, 28, 32);
            margin-bottom: toRem(24);
        }

        .txt {
            @include roboto(400, 16, 28);
        }
    }
</style>
