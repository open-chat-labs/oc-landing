<script lang="ts">
    export let imageUrl: string;
    export let name: string;
    export let blurb: string;
</script>

<div class="team-card">
    <div class="img" style={`background-image: url("${imageUrl}")`}>
        <div class="name">{name}</div>
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

    .img {
        height: toRem(200);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        margin-bottom: $sp4;

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
        text-shadow: 3px 3px #191919;
    }

    .blurb {
        text-align: justify;
    }
</style>
