<script lang="ts">
    import { mobileWidth } from "../stores/screenDimensions";
    import Section from "./Section.svelte";

    export let screenshotUrl: string;
    export let screenshotAlt: string;
    export let title: string;
    export let rtl = false;
</script>

<Section id={title} zoom="fade">
    <div class="feature" class:rtl={rtl && !$mobileWidth}>
        <img loading="lazy" class="screenshot" src={screenshotUrl} alt={screenshotAlt} />
        <h2 class="title">{title}</h2>
        <div class="blurb">
            <slot />
        </div>
    </div>
</Section>

<style type="text/scss">
    h2 {
        text-align: left;
        margin-bottom: $sp4;
    }
    h3 {
        margin: 0;
        font-family: "Roboto", sans-serif;
        font-size: 1.5rem;
        text-align: left;
        margin-bottom: $sp4;
    }
    .blurb {
        font-size: toRem(20);
    }
    .feature {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: auto 1fr;
        grid-column-gap: $sp7;
        margin-bottom: $sp6;

        .screenshot {
            grid-area: 1 / 1 / 3 / 2;
        }
        .title {
            grid-area: 1 / 2 / 2 / 3;
        }
        .blurb {
            grid-area: 2 / 2 / 3 / 3;
        }

        &.rtl {
            display: grid;
            grid-template-columns: 2fr 1fr;

            .screenshot {
                grid-area: 1 / 2 / 3 / 3;
            }
            .title {
                grid-area: 1 / 1 / 2 / 2;
            }
            .blurb {
                grid-area: 2 / 1 / 3 / 2;
            }
        }

        @include mobile() {
            grid-template-columns: 1fr;
            grid-template-rows: auto repeat(2, auto);

            .title {
                grid-area: 1 / 1 / 2 / 2;
                text-align: center;
            }
            .screenshot {
                grid-area: 2 / 1 / 3 / 2;
                margin-bottom: $sp6;
            }
            .blurb {
                grid-area: 3 / 1 / 4 / 2;
            }
        }
    }
    img {
        width: 100%;
        @include box-shadow(3);
    }
</style>
