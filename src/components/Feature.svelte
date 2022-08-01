<script lang="ts">
    import { mobileWidth } from "../stores/screenDimensions";
    import Section from "./Section.svelte";

    export let screenshotUrl: string | undefined = undefined;
    export let screenshotAlt: string | undefined = undefined;
    export let title: string;
    export let rtl = false;
</script>

<Section id={title}>
    <div class="feature" class:rtl={rtl && !$mobileWidth} class:full={screenshotUrl === undefined}>
        {#if screenshotUrl !== undefined}
            <div class="screenshot">
                <img loading="lazy" src={screenshotUrl} alt={screenshotAlt} />
            </div>
        {/if}
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

        &.full {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2, auto);
            grid-column-gap: 0;
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
                text-align: center;
                padding: 0 toRem(40);
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
