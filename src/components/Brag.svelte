<script lang="ts">
    import { fade } from "svelte/transition";

    export let index: number;
    export let total: number;
    export let avatar: string;
    export let username: string;
    export let date: number;
    export let title: string;
    export let blurb: string;

    $: dateStr = new Date(date).toLocaleDateString();
</script>

<div class="brag" transition:fade>
    <div class="avatar">
        <img src={avatar} alt="user avatar" />
    </div>
    <div class="quote">
        <div class="title">"{title}"</div>
        <div class="blurb">{blurb}</div>
        <div class="footer">
            <div class="name_date">
                <span class="username">- {username}</span>
                <span class="date">{dateStr}</span>
            </div>
            <div class="num">{index}/{total}</div>
        </div>
    </div>
</div>

<style type="text/scss">
    .brag {
        display: flex;
        color: #fff;
        gap: $sp5;
        @include roboto(400, 16, 28);

        .avatar {
            img {
                width: toRem(75);
                height: toRem(75);
            }
            border-radius: 50%;
        }

        .title {
            @include manrope(700, 28, 32);
            margin-bottom: $sp4;
        }

        .blurb {
            margin-bottom: $sp4;
        }

        .footer {
            display: flex;
            gap: $sp4;
            justify-content: space-between;

            .username {
                @include roboto(700, 16, 28);
            }
        }
    }
</style>
