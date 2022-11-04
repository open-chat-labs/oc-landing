<script lang="ts">
    import { onMount } from "svelte";
    import Brag from "./Brag.svelte";
    import Section from "./Section.svelte";

    const brags = [
        {
            avatar: "../random.svg",
            username: "Donni3_Dark0",
            date: Date.now(),
            title: "It’s the best messaging application on the market, that simple.",
        },
        {
            avatar: "../elton.svg",
            username: "mov3rse",
            date: Date.now(),
            title: "What a splendid thing! Actually quite good I suppose.",
        },
        {
            avatar: "../ghost.svg",
            username: "julian_jelfs",
            date: Date.now(),
            title: "Better than you might expect actually. Seems to work quite well as it goes.",
        },
    ];

    let counter = 0;
    $: index = counter % brags.length;
    $: selected = brags[index];

    onMount(() => {
        setInterval(() => {
            counter = counter + 1;
        }, 3000);
    });
</script>

<Section id={"brag-box"}>
    <div class="background" />
    <div class="bragbox">
        <Brag
            avatar={selected.avatar}
            username={selected.username}
            date={selected.date}
            title={selected.title} />
    </div>
</Section>

<style type="text/scss">
    .background {
        background: linear-gradient(180deg, #23a2ee 0%, #5b2b88 100%);
        filter: blur(300px);
        opacity: var(--brag-op);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .bragbox {
        overflow: hidden;
        position: relative;
        height: 324px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 toRem(160);

        @include mobile() {
            padding: 0 toRem(24);
        }
    }
</style>
