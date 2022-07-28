<script lang="ts">
    import Content from "./Content.svelte";
    import Roadmap from "./Roadmap.svelte";
    import Hero from "./Hero.svelte";
    import Intro from "./Intro.svelte";
    import Video from "./Video.svelte";
    import Team from "./Team.svelte";
</script>

<Hero />

<Content offset={true}>
    <Intro />

    <Roadmap />

    <Video />

    <Team />
</Content>
