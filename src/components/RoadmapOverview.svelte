<script lang="ts">
    import Section from "./Section.svelte";
    import Link from "./Link.svelte";
    import { currentPath } from "../stores/route";
    import ArrowLink from "./ArrowLink.svelte";

    let visible = false;
</script>

<Section bind:visible lazy={true} id={"roadmap"}>
    <div
        class="roadmap"
        on:click={() =>
            currentPath.set({
                path: "roadmap",
                hash: "",
            })}>
        <div class="header">
            <h2>Roadmap</h2>
            <div class="features">
                <ArrowLink path={"roadmap"}>View Entire Roadmap</ArrowLink>
            </div>
        </div>
        <div class="grid">
            <div class="item">
                <div class="status">
                    <span class="complete">Complete</span>
                </div>
                <div class="title">Basic chat features</div>
                <div class="detail">
                    All of the basic features that you expect from a chat app: direct chats, public
                    and private groups; attach files, images, giphs, emojis; translate, pin, edit
                    and delete messages; send ICP; create polls; customise appearance; use on
                    desktop or mobile - <Link path="features">and much more!</Link>
                </div>
            </div>

            <div class="item">
                <div class="status">
                    <div class="when">Q4</div>
                    <div class="year">2022</div>
                </div>
                <div class="title">SNS launch</div>
                <div class="detail">
                    Launching of a Service Nervous System and handing over control of OpenChat to
                    the control of that SNS. From this point forward the system will be
                    democratically controlled by the holders of the CHAT utility token.
                </div>
            </div>

            <div class="item">
                <div class="status">
                    <div class="when">Q4</div>
                    <div class="year">2022</div>
                </div>
                <div class="title">User rewards</div>
                <div class="detail">
                    The SNS launch will unlock the potential to reward users with CHAT tokens to
                    shape the character of the system, to help build great communities and to
                    supercharge adoption.
                </div>
            </div>

            <div class="item">
                <div class="status">
                    <div class="when">Q1/2</div>
                    <div class="year">2023</div>
                </div>
                <div class="title">Integrations & Communities</div>
                <div class="detail">
                    Support communities with integrated chat or create your own (optionally private)
                    community within OpenChat. A community can be thought of like a slack workspace
                    or a discord server. You control who joins your community and you can create a
                    rich set of private or public groups within it making use of all of the OpenChat
                    features that you already know.
                </div>
            </div>

            <div class="item">
                <div class="status">
                    <div class="year">Continuous</div>
                </div>
                <div class="title">The future</div>
                <div class="detail">
                    We see great potential and have many ideas for the future, but what makes
                    OpenChat unique is that the community will decide the directions we take and the
                    priorities we pursue. We are excited to see what you come up with!
                </div>
            </div>
        </div>

        <ArrowLink path={"roadmap"}>View Entire Roadmap</ArrowLink>
    </div>
</Section>

<style type="text/scss">
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: $sp5;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr;
        margin-bottom: $sp5;
        align-items: flex-start;
        @include roboto(400, 16, 28);

        .item {
            border-top: solid 1px var(--roadmap-bd);
            padding: toRem(48) 0;
            display: flex;
            justify-content: flex-start;
            gap: $sp3;
        }

        .item:last-child {
            border-bottom: solid 1px var(--roadmap-bd);
        }

        .status {
            display: flex;
            gap: $sp3;
            align-items: flex-start;
            justify-content: flex-start;
            flex: 2;
        }

        .complete {
            color: #4ae97a;
            @include roboto(600, 16, 28);
        }

        .title {
            @include ubuntu(700, 50, 57);
            flex: 4;
        }

        .when {
            @include ubuntu(700, 28, 32);
        }

        .detail {
            flex: 4;
        }

        .detail,
        .year {
            color: var(--txt-light);
        }
    }
</style>
