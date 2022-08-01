<script lang="ts">
    export let imageUrl: string;
    export let name: string;
    export let blurb: string;
</script>

<div class="team-card">
    <div class="img" style={`background-image: url("${imageUrl}")`}>
        <div class="overlay" />
        <div class="name">
            {name}
        </div>
    </div>
    <div class="blurb">
        {blurb}
    </div>
</div>

<style type="text/scss">
    $bg: lighten(#ff9505, 10%);
    .team-card {
        display: flex;
        flex-direction: column;
        margin-bottom: $sp4;
    }

    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        transition: backdrop-filter ease-in-out 0.5s;

        &:hover {
            backdrop-filter: invert(1);
        }
    }

    .img {
        height: toRem(200);
        // background-color: var(--secondary);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: $bg;
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
        font-family: "Roboto", sans-serif;
        font-style: italic;
        // @include font(bold, italic, fs-260);
        font-size: toRem(30);
        color: #fff;
        text-shadow: 3px 3px 2px var(--tertiary);
    }

    .blurb {
        text-align: justify;
    }
</style>
