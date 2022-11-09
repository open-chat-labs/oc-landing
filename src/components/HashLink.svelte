<script lang="ts">
    import { currentPath } from "../stores/route";
    export let id: string;
</script>

<a href={`/${$currentPath.path}#${id}`}><slot /></a>
