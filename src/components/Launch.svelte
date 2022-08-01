<script lang="ts">
    export let size: "small" | "large";
</script>

<a
    target="_blank"
    href="https://oc.app"
    class="launch"
    class:small={size === "small"}
    class:large={size === "large"}>Launch ...</a>

<style type="text/scss">
    .launch {
        font-family: "Roboto", sans-serif;
        transition: background-color ease-in-out 200ms;
        color: #fff;
        background-color: var(--primary);
        border: none;
        cursor: pointer;
        text-decoration: none;
        font-weight: 500;
        &:hover {
            background-color: var(--primary-darker);
        }

        &.large {
            padding: toRem(15) toRem(30);
            font-size: toRem(30);
            @include box-shadow(3);
        }

        &.small {
            color: var(--primary);
            background-color: #fff;
            padding: toRem(10) toRem(20);
            font-size: toRem(16);
            @include box-shadow(1);
        }
    }
</style>
