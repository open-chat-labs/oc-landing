<script lang="ts">
    import Section from "./Section.svelte";
    import ChartLine from "svelte-material-icons/ChartLine.svelte";
    import MessageLockOutline from "svelte-material-icons/MessageLockOutline.svelte";
    import EmoticonHappyOutline from "svelte-material-icons/EmoticonHappyOutline.svelte";
    import { mobileWidth } from "../stores/screenDimensions";
    import FlipBox from "./FlipBox.svelte";

    let iconColor = "rgba(0,0,0,0.4)";

    $: iconSize = $mobileWidth ? "2em" : "2.5em";
</script>

<Section id={"usp"}>
    <div class="grid">
        <FlipBox>
            <div slot="front" class="item">
                <span class="big ">100%</span>
                <span>on chain</span>
            </div>
            <div slot="back" class="item back">
                <span class="head">100% on chain</span>
                <span class="txt">
                    All of your data is stored 100% on chain in your own canister. Each group chat
                    also has its own canister.
                </span>
            </div>
        </FlipBox>
        <FlipBox>
            <div slot="front" class="item">
                <span class="big ">sns</span>
                <span>controlled</span>
            </div>
            <div slot="back" class="item back">
                <span class="head">sns controlled</span>
                <span class="txt">
                    The product roadmap can <em>only</em> be decided, approved and enacted by the community.
                    For us, by us.
                </span>
            </div>
        </FlipBox>
        <FlipBox>
            <div slot="front" class="item">
                <span class="big ">open</span>
                <span>source</span>
            </div>
            <div slot="back" class="item back">
                <span class="head">open source</span>
                <span class="txt">
                    All of the source code is available to inspect. We use repeatable builds so you
                    can confirm that what <em>you</em> approved is what's actually running.
                </span>
            </div>
        </FlipBox>
        <FlipBox>
            <div slot="front" class="item">
                <span class="big medium">scalable</span>
                <ChartLine size={iconSize} color={iconColor} />
            </div>
            <div slot="back" class="item back">
                <span class="head">scalable</span>
                <span class="txt">
                    Our canister architecture combined with the power of the Internet Computer allow
                    us to scale indefinitely.
                </span>
            </div>
        </FlipBox>
        <FlipBox>
            <div slot="front" class="item">
                <span class="big medium">secure</span>
                <MessageLockOutline size={iconSize} color={iconColor} />
            </div>
            <div slot="back" class="item back">
                <span class="head">secure</span>
                <span class="txt">
                    Relax in the knowledge that your messages are secured using advanced blockchain
                    cryptography thanks to the Internet Computer protocol.
                </span>
            </div>
        </FlipBox>
        <FlipBox>
            <div slot="front" class="item">
                <span class="big medium">reliable</span>
                <EmoticonHappyOutline size={iconSize} color={iconColor} />
            </div>
            <div slot="back" class="item back">
                <span class="head">reliable</span>
                <span class="txt">
                    With each canister replicated by the Internet Computer you never have to worry
                    about losing your data.
                </span>
            </div>
        </FlipBox>
    </div>

    <div class="footnote">
        <a href="/features">Click here for a full description of the product features.</a>
    </div>
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
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        color: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: toRem(15);
        min-height: toRem(200);
        background-color: var(--secondary);
        transition: transform ease-in-out 200ms;
        @include box-shadow(1);
        font-size: toRem(40);
        @include mobile() {
            font-size: toRem(30);
            min-hight: toRem(150);
        }

        &:hover {
            transform: scale(1.03);
        }

        .big {
            font-family: "Roboto", sans-serif;
            font-weight: 900;
            font-size: toRem(100);
            color: #fff;
            text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.4);
            line-height: 90%;
            text-transform: uppercase;

            @include mobile() {
                font-size: toRem(70);
            }
        }

        .medium {
            font-size: toRem(50);
            line-height: 100%;
            margin-bottom: $sp4;

            @include mobile() {
                font-size: toRem(35);
                line-height: 80%;
            }
        }

        &.back {
            background: var(--gradient);
            color: #fff;
            .head {
                font-family: "Roboto", sans-serif;
                font-size: toRem(35);
                line-height: 90%;
                text-transform: uppercase;
                margin-bottom: $sp3;
                @include mobile() {
                    font-size: toRem(22);
                }
            }

            .txt {
                font-size: toRem(15);
                @include mobile() {
                    font-size: toRem(12);
                }
            }
        }
    }

    .footnote {
        font-style: italic;
        font-size: toRem(15);
    }
</style>
