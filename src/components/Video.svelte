<script lang="ts">
    import Section from "./Section.svelte";
</script>

<Section zoom={"left"} id={"video"}>
    <h2>Demo video</h2>
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/brdHgU6DxcQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
</Section>

<style type="text/scss">
</style>
