<script lang="ts">
    import { onMount } from "svelte";
    import Brag from "./Brag.svelte";
    import Section from "./Section.svelte";
    import LogoPurple from "./LogoPurple.svelte";

    const brags = [
        {
            avatar: "../random.svg",
            username: "Donni3_Dark0",
            date: Date.now(),
            title: "An unmatched messaging platform",
            blurb: "It is the best messaging application on the market, that simple. I use it every day, from building my buisness to connecting with friends. OpenChat is the ONLY messaging application I use. I also love that I can transfer ICP and BTC within the application! Who else does this?",
        },
        {
            avatar: "../elton.svg",
            username: "mov3rse",
            date: Date.now(),
            title: "What a splendid thing!",
            blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut pellentesque velit. Praesent nisl diam, mattis in eleifend id, finibus nec ex. Aenean at laoreet ex, a interdum dolor. Cras eget mi purus. Morbi eu euismod orci. Aenean varius, erat ac elementum varius, elit mi venenatis nisi, nec ornare lacus ligula eu velit. Duis fermentum ullamcorper tellus vel semper. Morbi.",
        },
        {
            avatar: "../ghost.svg",
            username: "julian_jelfs",
            date: Date.now(),
            title: "Better than you might expect actually.",
            blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus est, imperdiet ac ex vitae, auctor laoreet magna. Quisque condimentum accumsan augue, quis pulvinar quam volutpat at. Cras faucibus nunc justo, vitae tincidunt quam dignissim a. Proin ligula turpis, consectetur sit amet diam in, dictum.",
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

<Section lazy={true} id={"brag-box"}>
    <div class="bragbox">
        <Brag
            index={index + 1}
            total={brags.length}
            avatar={selected.avatar}
            username={selected.username}
            date={selected.date}
            title={selected.title}
            blurb={selected.blurb} />

        <div class="logo">
            <LogoPurple size={492} fillOpacity={0.1} strokeOpacity={0.05} />
        </div>
    </div>
</Section>

<style type="text/scss">
    .bragbox {
        overflow: hidden;
        position: relative;
        padding: toRem(100) toRem(160);
        height: 492px;
        background-color: #23a2ee;
    }

    .logo {
        position: absolute;
        top: 0;
        right: toRem(-85);
    }
</style>
