<script lang="ts">
    import Section from "./Section.svelte";
</script>

<Section zoom={"none"} id={"team"}>
    <h2>Meet the team</h2>

    <div class="team">
        <div class="img matt">
            <div class="name">Matt</div>
        </div>
        <div class="img hamish">
            <div class="name">Hamish</div>
        </div>
        <div class="img julian">
            <div class="name">Julian</div>
        </div>
        <div class="blurb">
            Bacon ipsum dolor amet sausage flank cupim kevin, kielbasa brisket strip steak meatball
            tenderloin ribeye spare ribs bresaola rump capicola hamburger. Burgdoggen turkey biltong
            t-bone tenderloin shankle pork chop. Chuck landjaeger biltong drumstick doner alcatra.
            Shoulder salami boudin brisket.
        </div>
        <div class="blurb">
            Bacon ipsum dolor amet sausage flank cupim kevin, kielbasa brisket strip steak meatball
            tenderloin ribeye spare ribs bresaola rump capicola hamburger. Burgdoggen turkey biltong
            t-bone tenderloin shankle pork chop. Chuck landjaeger biltong drumstick doner alcatra.
            Shoulder salami boudin brisket.
        </div>
        <div class="blurb">
            Bacon ipsum dolor amet sausage flank cupim kevin, kielbasa brisket strip steak meatball
            tenderloin ribeye spare ribs bresaola rump capicola hamburger. Burgdoggen turkey biltong
            t-bone tenderloin shankle pork chop. Chuck landjaeger biltong drumstick doner alcatra.
            Shoulder salami boudin brisket.
        </div>
    </div>
</Section>

<style type="text/scss">
    .team {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: $sp4;
    }

    .img {
        height: 200px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

        &:hover {
            .name {
                transform: scale(1.2);
            }
        }
    }

    .name {
        transition: transform ease-in-out 200ms;
        transform-origin: 100% 50%;
        position: absolute;
        bottom: 5px;
        right: 10px;
        font-family: "Yantramanav", sans-serif;
        font-style: italic;
        // @include font(bold, italic, fs-260);
        font-size: toRem(30);
        color: #fff;
        text-shadow: 3px 3px #191919;
    }

    .matt {
        background-image: url("../matt.png");
    }

    .hamish {
        background-image: url("../hamish.png");
    }

    .julian {
        background-image: url("../julian.png");
    }

    .blurb {
        text-align: justify;
    }
</style>
