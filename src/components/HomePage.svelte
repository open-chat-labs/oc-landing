<script lang="ts">
    import Roadmap from "./RoadmapOverview.svelte";
    import Intro from "./Intro.svelte";
    import Team from "./Team.svelte";
    import SellingPoints from "./SellingPoints.svelte";
    import BragBox from "./BragBox.svelte";
</script>

<div class="content">
    <Intro on:login />

    <h2>OpenChat users can send messages to each other containing tokens like ICP and BTC.</h2>
    <p>
        Soon OpenChat will be governed by its community as a DAO with its own CHAT token. CHAT
        tokens will be given as rewards to users to turbo-charge growth, making a team of millions
        of advocates allowing OpenChat to become a viable challenger to centralized big tech
        competitors!
    </p>
    <SellingPoints />

    <Roadmap />
</div>

<BragBox />

<div class="content">
    <Team />
</div>

<style type="text/scss">
    .content {
        @include content-padding();

        @include mobile() {
            padding: 0 toRem(24);
        }

        h2 {
            @include manrope(700, 50, 57);
            margin-bottom: toRem(48);
            text-align: left;
            max-width: 80%;

            @include mobile() {
                @include manrope(700, 28, 38);
                margin-bottom: toRem(16);
            }
        }

        p {
            @include roboto(400, 16, 28);
            color: var(--txt-light);
            margin-bottom: toRem(80);
            max-width: 60%;

            @include mobile() {
                @include roboto(100, 14, 24);
                max-width: 100%;
                margin-bottom: toRem(40);
            }
        }
    }
</style>
