<script lang="ts">
    import Headline from "./Headline.svelte";
    import Section from "./Section.svelte";
    import TeamCard from "./TeamCard.svelte";
</script>

<Section lazy={true} id={"team"}>
    <h2>The Team</h2>

    <div class="team">
        <TeamCard
            imageUrl={"../matt2.png"}
            hoverImageUrl={"../matt.jpeg"}
            name={"Matt"}
            blurb={`Matthew is a Software Engineer with 25 years experience across a wide range of domains generally involving web technologies. Recently he has focused on building microservice backends supporting a multi-tenant platform for running online travel agencies. Matt values reliable and maintainable software. He holds a Masters Degree in Engineering and Computer Science from the University of Oxford.`} />
        <TeamCard
            imageUrl={"../hamish2.png"}
            hoverImageUrl={"../hamish.jpeg"}
            name={"Hamish"}
            blurb={`After graduating with a degree in mathematics from Cambridge University, Hamish transitioned into the world of software engineering where he focused primarily on high throughput, low latency cloud based systems. Before building OpenChat, he worked at Emirates where he quickly rose through the ranks, eventually leading the design of their new B2B hotel search engine.`} />
        <TeamCard
            imageUrl={"../julian2.png"}
            hoverImageUrl={"../julian.jpg"}
            name={"Julian"}
            blurb={`Julian has been dabbling in software engineering for the last 25 years or so. He has a varied industry background from defence to risk management, from e-commerce to education technology and from travel to chat. He has developed a penchant for functional front ends. He holds a masters degree in Politics, Philosophy & Economics from the University of Oxford and likes things to be just so.`} />
    </div>
</Section>

<style type="text/scss">
    .team {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: $sp5;

        h2 {
            @include manrope(700, 37, 43);
        }

        @include size-below(xs) {
            grid-template-columns: 1fr;
        }
    }
</style>
