<script lang="ts">
    import Section from "./Section.svelte";
    import { dimensions } from "../stores/screenDimensions";
    import Headline from "./Headline.svelte";

    const ratio = 315 / 560;
    $: width = Math.min(600, $dimensions.width - 50);
    $: height = width * ratio;
</script>

<Section lazy={true} id={"video"}>
    <Headline>Watch a demo</Headline>
    <iframe
        {width}
        {height}
        src="https://www.youtube.com/embed/brdHgU6DxcQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
</Section>

<style type="text/scss">
</style>
