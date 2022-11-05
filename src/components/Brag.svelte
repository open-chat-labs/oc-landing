<script lang="ts">
    export let avatar: string;
    export let username: string;
    export let date: number;
    export let title: string;
    export let visible: boolean;

    $: dateStr = new Date(date).toLocaleDateString();
</script>

<div class="brag" class:visible>
    <div class="quote">"{title}"</div>
    <div class="footer">
        <img class="avatar" src={avatar} alt="user avatar" />
        <span class="username">{username}</span>
        <span class="date">{dateStr}</span>
    </div>
</div>

<style type="text/scss">
    .brag {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: opacity 1s ease-in-out;
        text-align: left;
        @include roboto(400, 16, 28);
        opacity: 0;

        &.visible {
            opacity: 1;
        }

        .avatar {
            width: toRem(32);
            height: toRem(32);
            border-radius: 50%;
        }

        .quote {
            @include manrope(700, 45, 60);
            margin-bottom: $sp4;

            @include mobile() {
                @include manrope(500, 28, 35);
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
