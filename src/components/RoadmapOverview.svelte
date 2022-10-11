<script lang="ts">
    import Section from "./Section.svelte";
    import CheckBold from "svelte-material-icons/CheckBold.svelte";
    import RocketLaunch from "svelte-material-icons/RocketLaunch.svelte";
    import { mobileWidth } from "../stores/screenDimensions";
    import Headline from "./Headline.svelte";
    import Link from "./Link.svelte";
    import { currentPath } from "../stores/route";

    let visible = false;
    let iconColor = "var(--roadmap-status-txt)";
    $: iconSize = $mobileWidth ? "4em" : "5.5em";
</script>

<Section bind:visible lazy={true} id={"roadmap"}>
    <div on:click={() => currentPath.set("roadmap")}>
        <Headline>Roadmap Overview</Headline>

        <div class="grid">
            <div class="status complete" class:visible>
                <CheckBold size={iconSize} color={iconColor} />
                <div class="status-text">done</div>
            </div>
            <div class="item txt">
                <div class="txt-header">Basic chat features</div>
                <div class="txt-desc">
                    All of the basic features that you expect from a chat app: direct chats, public
                    and private groups; attach files, images, giphs, emojis; translate, pin, edit
                    and delete messages; send ICP; create polls; customise appearance; use on
                    desktop or mobile - <Link path="features">and much more!</Link>
                </div>
            </div>

            <div class="txt">
                <div class="txt-header">SNS launch</div>
                <div class="txt-desc">
                    Launching of a Service Nervous System and handing over control of OpenChat to
                    the control of that SNS. From this point forward the system will be
                    democratically controlled by the holders of the CHAT utility token.
                </div>
            </div>
            <div class="status" class:visible>
                <div class="when">Q4</div>
                <div class="status-text">2022</div>
            </div>

            <div class="status" class:visible>
                <div class="when">Q4</div>
                <div class="status-text">2022</div>
            </div>
            <div class="txt">
                <div class="txt-header">User rewards</div>
                <div class="txt-desc">
                    The SNS launch will unlock the potential to reward users with CHAT tokens to
                    shape the character of the system, to help build great communities and to
                    supercharge adoption.
                </div>
            </div>

            <div class="txt">
                <div class="txt-header">Integrations & Communities</div>
                <div class="txt-desc">
                    Support communities with integrated chat or create your own (optionally private)
                    community within OpenChat. A community can be thought of like a slack workspace
                    or a discord server. You control who joins your community and you can create a
                    rich set of private or public groups within it making use of all of the OpenChat
                    features that you already know.
                </div>
            </div>
            <div class="status" class:visible>
                <div class="when">Q1/2</div>
                <div class="status-text">2023</div>
            </div>

            <div class="status" class:visible>
                <RocketLaunch size={iconSize} color={iconColor} />
            </div>
            <div class="txt">
                <div class="txt-header">The future</div>
                <div class="txt-desc">
                    We see great potential and have many ideas for the future, but what makes
                    OpenChat unique is that the community will decide the directions we take and the
                    priorities we pursue. We are excited to see what you come up with!
                </div>
            </div>
        </div>

        <Link path="roadmap">Click here for a more detailed product roadmap.</Link>
    </div>
</Section>

<style type="text/scss">
    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: $sp4;
        margin-bottom: $sp5;

        @include mobile() {
            column-gap: 0;
        }

        .txt {
            padding: $sp5;
            text-align: left;
            grid-column: span 3;
            background: var(--roadmap-desc-bg);
            color: var(--roadmap-desc-txt);

            @include mobile() {
                padding: $sp4;
            }

            .txt-header {
                font-size: toRem(30);
                font-weight: 500;
                margin-bottom: $sp3;
            }

            .txt-desc {
                font-size: toRem(20);
                font-weight: 300;
            }
        }

        .status {
            min-height: toRem(150);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: var(--roadmap-status-txt);
            background-color: var(--roadmap-status-bg);
            transition: transform ease-in-out 100ms;

            @include size-above(sm) {
                &.visible {
                    &:nth-child(1) {
                        @include pop(1000ms);
                    }

                    &:nth-child(4) {
                        @include pop(1100ms);
                    }

                    &:nth-child(5) {
                        @include pop(1200ms);
                    }

                    &:nth-child(8) {
                        @include pop(1300ms);
                    }

                    &:nth-child(9) {
                        @include pop(1400ms);
                    }
                }
            }

            &.complete {
                background-color: #2a9a2a;
            }

            .when {
                font-weight: 900;
                font-size: toRem(50);
                text-transform: uppercase;
            }

            .status-text {
                font-size: toRem(30);
                text-transform: uppercase;

                @include mobile() {
                    font-size: toRem(25);
                }
            }
        }
    }
</style>
