<script lang="ts">
    import Section from "./Section.svelte";
    import { dimensions } from "../stores/screenDimensions";

    const ratio = 315 / 560;
    $: width = Math.min(600, $dimensions.width - 50);
    $: height = width * ratio;
</script>

<Section id={"video"}>
    <h2>Watch a demo</h2>
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
