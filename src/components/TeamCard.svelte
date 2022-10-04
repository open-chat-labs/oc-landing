<script lang="ts">
    import { fade } from "svelte/transition";
    export let imageUrl: string;
    export let hoverImageUrl: string;
    export let name: string;
    export let blurb: string;

    let hovering = false;
</script>

<div class="team-card">
    <div
        class="img"
        on:mouseenter={() => (hovering = true)}
        on:mouseleave={() => (hovering = false)}
        style={`background-image: url("${imageUrl}")`}>
        <div class="name">
            {name}
        </div>
        {#if hovering}
            <div
                transition:fade|local
                class="overlay"
                style={`background-image: url("${hoverImageUrl}")`}>
                <div class="name">
                    {name}
                </div>
            </div>
        {/if}
    </div>
    <div class="blurb">
        {blurb}
    </div>
</div>

<style type="text/scss">
    .team-card {
        display: flex;
        flex-direction: column;
        margin-bottom: $sp4;
    }
    .img,
    .overlay {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .img {
        height: toRem(200);
        // background-color: var(--secondary);
        position: relative;
        margin-bottom: $sp4;
        position: relative;

        &:hover {
            .name {
                transform: scale(1.2);
            }
        }

        @include size-below(xs) {
            height: toRem(350);
        }
    }

    .name {
        transition: transform ease-in-out 200ms;
        transform-origin: 100% 50%;
        position: absolute;
        bottom: 5px;
        right: 10px;
        font-style: italic;
        font-size: toRem(30);
        font-weight: 500;
        color: #fff;
        text-shadow: 3px 3px 2px var(--tertiary);
    }

    .blurb {
        text-align: justify;
    }
</style>
