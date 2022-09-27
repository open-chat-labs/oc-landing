<script lang="ts">
    import Section from "./Section.svelte";
    import CheckBold from "svelte-material-icons/CheckBold.svelte";
    import RocketLaunch from "svelte-material-icons/RocketLaunch.svelte";
    import { mobileWidth } from "../stores/screenDimensions";

    let iconColor = "var(--roadmap-status-txt)";
    $: iconSize = $mobileWidth ? "4em" : "5.5em";
</script>

<Section id={"roadmap"}>
    <h2>Roadmap</h2>

    <div class="grid">
        <div class="status complete">
            <CheckBold size={iconSize} color={iconColor} />
            <div class="status-text">done</div>
        </div>
        <div class="item txt">
            <div class="txt-header">Basic chat features</div>
            <div class="txt-desc">
                All of the basic features that you expect from a chat app: direct chats, public and
                private groups; attach files, images, giphs, emojis; translate, pin, edit and delete
                messages; send ICP; create polls; customise appearance; use on desktop or mobile - <a
                    href="/features">and much more!</a>
            </div>
        </div>

        <div class="txt">
            <div class="txt-header">Communities</div>
            <div class="txt-desc">
                Create your own (optionally private) community within OpenChat. A community can be
                thought of like a slack workspace or a discord server. You control who joins your
                community and you can create a rich set of private or public groups within in making
                use of all of the OpenChat features that you already know.
            </div>
        </div>
        <div class="status">
            <div class="when">Q1</div>
            <div class="status-text">2023</div>
        </div>

        <div class="status">
            <div class="when">Q3</div>
            <div class="status-text">2023</div>
        </div>
        <div class="txt">
            <div class="txt-header">Integrations</div>
            <div class="txt-desc">
                Communities will unlock the potential to integrate OpenChat with other dApps in the
                IC ecosystem. Allow OpenChat to power direct or groups chats directly from within
                your own interface. Integrate at the UI level or via our integration APIs - whatever
                suites your team's approach.
            </div>
        </div>

        <div class="txt">
            <div class="txt-header">The future</div>
            <div class="txt-desc">
                We see great potential and have many ideas for the future, but what makes OpenChat
                unique is that it is the community that will decide the directions we take and the
                priorities we pursue. We are excited to see what you come up with!
            </div>
        </div>
        <div class="status">
            <RocketLaunch size={iconSize} color={iconColor} />
        </div>
    </div>

    <div class="footnote">
        <a href="/roadmap">Click here for a more detailed product roadmap.</a>
    </div>
</Section>

<style type="text/scss">
    .grid {
        font-family: "Roboto", sans-serif;
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
                margin-bottom: $sp3;
            }

            .txt-desc {
                font-family: "Lora", serif;
                font-size: toRem(20);
                font-weight: 400;
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

            &.complete {
                background-color: #2a9a2a;
            }

            .when {
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

    .footnote {
        font-style: italic;
        font-size: toRem(15);
    }
</style>
