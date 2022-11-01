<script lang="ts">
    export let size = 32;
    export let fillOpacity = 1;
    export let strokeOpacity = 1;
</script>

<svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
        cx="16"
        cy="16"
        r="12"
        stroke="#522785"
        stroke-opacity={strokeOpacity}
        stroke-width="8" />
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.377 28.9657C22.7421 30.8746 19.5025 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C19.522 0 22.7782 1.13799 25.421 3.06633L20.8394 9.6292C19.4957 8.60689 17.8187 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C17.8444 24 19.543 23.3759 20.8961 22.3273L25.377 28.9657Z"
        fill="#7E52FF"
        fill-opacity={fillOpacity} />
</svg>
