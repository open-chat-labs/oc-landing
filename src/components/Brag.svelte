<script lang="ts">
    import { fade } from "svelte/transition";

    export let avatar: string;
    export let username: string;
    export let date: number;
    export let title: string;

    $: dateStr = new Date(date).toLocaleDateString();
</script>

<div class="brag" transition:fade>
    <div class="quote">"{title}"</div>
    <div class="footer">
        <img class="avatar" src={avatar} alt="user avatar" />
        <span class="username">- {username}</span>
        <span class="date">{dateStr}</span>
    </div>
</div>

<style type="text/scss">
    .brag {
        text-align: left;
        @include roboto(400, 16, 28);

        .avatar {
            width: toRem(32);
            height: toRem(32);
            border-radius: 50%;
        }

        .quote {
            @include manrope(700, 50, 68);
            margin-bottom: $sp4;

            @include mobile() {
                @include manrope(500, 28, 38);
            }
        }

        .footer {
            display: flex;
            gap: $sp4;

            .username {
                @include roboto(700, 16, 28);
            }
        }
    }
</style>
