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
            <div>
                <ArrowLink color={"#4AE97A"} path={"features"}>View All Features</ArrowLink>
                <span class="complete">Complete</span>
            </div>
            <div class="title">Basic chat features</div>
            <div class="detail">
                All of the basic features that you expect from a chat app: direct chats, public and
                private groups; attach files, images, giphs, emojis; translate, pin, edit and delete
                messages; send ICP; create polls; customise appearance; use on desktop or mobile - <Link
                    path="features">and much more!</Link>
            </div>

            <div class="status">
                <div class="when">Q4</div>
                <div class="year">2022</div>
            </div>
            <div class="title">SNS launch</div>
            <div class="detail">
                Launching of a Service Nervous System and handing over control of OpenChat to the
                control of that SNS. From this point forward the system will be democratically
                controlled by the holders of the CHAT utility token.
            </div>

            <div class="status">
                <div class="when">Q4</div>
                <div class="year">2022</div>
            </div>
            <div class="title">User rewards</div>
            <div class="detail">
                The SNS launch will unlock the potential to reward users with CHAT tokens to shape
                the character of the system, to help build great communities and to supercharge
                adoption.
            </div>

            <div class="status">
                <div class="when">Q1/2</div>
                <div class="year">2023</div>
            </div>
            <div class="title">Integrations & Communities</div>
            <div class="detail">
                Support communities with integrated chat or create your own (optionally private)
                community within OpenChat. A community can be thought of like a slack workspace or a
                discord server. You control who joins your community and you can create a rich set
                of private or public groups within it making use of all of the OpenChat features
                that you already know.
            </div>

            <div class="status">
                <div class="year">Continuous</div>
            </div>
            <div class="title">The future</div>
            <div class="detail">
                We see great potential and have many ideas for the future, but what makes OpenChat
                unique is that the community will decide the directions we take and the priorities
                we pursue. We are excited to see what you come up with!
            </div>
        </div>

        <ArrowLink path={"roadmap"}>View Entire Roadmap</ArrowLink>
    </div>
</Section>

<style type="text/scss">
    .roadmap {
        color: #ffffff;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: $sp5;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 2fr 2fr;
        margin-bottom: $sp5;
        gap: $sp5;
        align-items: flex-start;

        > div {
            border-bottom: solid 1px #32353f;
            padding: $sp5 0;
        }

        > div:nth-child(-n + 3) {
            border-top: solid 1px #32353f;
        }

        .status {
            display: flex;
            gap: $sp3;
            align-items: center;
        }

        @include mobile() {
            column-gap: 0;
        }

        .complete {
            color: #4ae97a;
        }

        .title {
            @include ubuntu(700, 50, 57);
        }

        .when {
            @include ubuntu(700, 28, 32);
        }

        .detail,
        .year {
            color: #b1b1b1;
            @include roboto(400, 16, 28);
        }
    }
</style>
