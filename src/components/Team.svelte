<script lang="ts">
    import Section from "./Section.svelte";
    import TeamCard from "./TeamCard.svelte";
</script>

<Section zoom={"right"} id={"team"}>
    <h2>Meet the team</h2>

    <div class="team">
        <TeamCard
            imageUrl={"../matt.png"}
            name={"Matt"}
            blurb={`Bacon ipsum dolor amet sausage flank cupim kevin, kielbasa brisket strip steak meatball
            tenderloin ribeye spare ribs bresaola rump capicola hamburger. Burgdoggen turkey biltong
            t-bone tenderloin shankle pork chop. Chuck landjaeger biltong drumstick doner alcatra.
            Shoulder salami boudin brisket.`} />
        <TeamCard
            imageUrl={"../hamish2.png"}
            name={"Hamish"}
            blurb={`Bacon ipsum dolor amet sausage flank cupim kevin, kielbasa brisket strip steak meatball
            tenderloin ribeye spare ribs bresaola rump capicola hamburger. Burgdoggen turkey biltong
            t-bone tenderloin shankle pork chop. Chuck landjaeger biltong drumstick doner alcatra.
            Shoulder salami boudin brisket.`} />
        <TeamCard
            imageUrl={"../julian.png"}
            name={"Julian"}
            blurb={`Bacon ipsum dolor amet sausage flank cupim kevin, kielbasa brisket strip steak meatball
            tenderloin ribeye spare ribs bresaola rump capicola hamburger. Burgdoggen turkey biltong
            t-bone tenderloin shankle pork chop. Chuck landjaeger biltong drumstick doner alcatra.
            Shoulder salami boudin brisket.`} />
    </div>
</Section>

<style type="text/scss">
    .team {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: $sp4;

        @include size-below(xs) {
            grid-template-columns: 1fr;
        }
    }
</style>
