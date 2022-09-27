<script lang="ts">
    import Content from "./Content.svelte";
    import Roadmap from "./RoadmapOverview.svelte";
    import Hero from "./Hero.svelte";
    import Intro from "./Intro.svelte";
    import Video from "./Video.svelte";
    import Team from "./Team.svelte";
    import SellingPoints from "./SellingPoints.svelte";
</script>

<Hero on:login />

<Content offset={false}>
    <SellingPoints />

    <Intro />

    <Roadmap />

    <Team />

    <Video />
</Content>
