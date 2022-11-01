<script lang="ts">
    import Content from "./Content.svelte";
    import Roadmap from "./RoadmapOverview.svelte";
    import Intro from "./Intro.svelte";
    import Video from "./Video.svelte";
    import Team from "./Team.svelte";
    import SellingPoints from "./SellingPoints.svelte";
    import BragBox from "./BragBox.svelte";
</script>

<Content>
    <Intro />
</Content>

<Content>
    <div class="roadmap">
        <h2>OpenChat users can send messages to each other containing tokens like ICP and BTC.</h2>
        <p>
            Soon OpenChat will be governed by its community as a DAO with its own CHAT token. CHAT
            tokens will be given as rewards to users to turbo-charge growth, making a team of
            millions of advocates allowing OpenChat to become a viable challenger to centralized big
            tech competitors!
        </p>
        <SellingPoints />

        <Roadmap />
    </div>
</Content>

<Content>
    <BragBox />
</Content>

<Content>
    <div class="team">
        <Team />
    </div>
</Content>

<!-- <Video /> -->
<style type="text/scss">
    .team {
        padding: toRem(100) toRem(160);
    }

    .bragbox {
        height: 492px;
        background-color: #7e52ff;
    }

    .roadmap {
        background-color: #242834;
        padding: toRem(100) toRem(160);

        h2 {
            font-family: "Ubuntu", sans-serif;
            font-weight: 700;
            font-size: toRem(50);
            line-height: toRem(57);
            margin-bottom: toRem(48);
            color: #ffffff;
            text-align: left;
            max-width: 80%;
        }

        p {
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: toRem(16);
            line-height: toRem(28);
            color: #b1b1b1;
            margin-bottom: toRem(80);
            max-width: 60%;
        }
    }
</style>
