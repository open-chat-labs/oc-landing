<script lang="ts">
    import Headline from "./Headline.svelte";
</script>

<div class="content">
    <Headline>Architecture</Headline>

    <div class="arch">
        <img src="../architecture.png" alt="open chat architecture diagram" loading="lazy" />

        <h1 class="draft">draft</h1>
    </div>

    <p class="blurb">
        Full details of the OpenChat architecture will be available here soon. In the meantime
        please feel free to <a href="https://github.com/open-ic/open-chat" target="_blank"
            >check out the source code</a
        >.
    </p>
</div>

<style type="text/scss">
    .content {
        padding: 0 toRem(160);
    }
    .arch {
        margin-bottom: $sp4;
        position: relative;
        text-align: center;

        img {
            width: 100%;
        }
    }

    .draft {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-25deg);
        opacity: 0.3;
        color: var(--secondary);
        text-transform: uppercase;
        margin: 0;

        font-size: toRem(200);

        @include mobile() {
            font-size: toRem(100);
        }
    }
</style>
