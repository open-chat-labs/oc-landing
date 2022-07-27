<script lang="ts">
    import Header from "./components/Header.svelte";
    import Home from "./components/Home.svelte";
</script>

<main>
    <Header />
    <Home />
</main>

<style type="text/scss">
    main {
        text-align: center;
        background: var(--gradient);
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
</style>
