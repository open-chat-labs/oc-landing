<script lang="ts">
</script>

<div class="menu">
    <div class="menu-item">
        <a href="#features">Features</a>
    </div>
    <div class="menu-item">
        <a href="#tokenomics">Tokenomics</a>
    </div>
    <div class="menu-item">
        <a href="#architecture">Architecture</a>
    </div>
    <div class="menu-item">
        <a href="#roadmap">Roadmap</a>
    </div>
    <div class="menu-item">
        <a href="#video">Video</a>
    </div>
    <div class="menu-item">
        <a href="#team">Team</a>
    </div>
    <a class="home" href="#intro">
        <div class="logo" />
    </a>
</div>

<style type="text/scss">
    .logo {
        background-image: url("../spinner.svg");
        width: 50px;
        height: 50px;
    }
    .menu {
        flex: 0 0 70px;
        @include z-index("menu");
        padding: $sp4;
        background-color: var(--primary);
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: $sp5;
    }

    .home {
        position: absolute;
        top: 10px;
        left: 10px;
    }

    .menu-item {
        a {
            font-family: "Yantramanav", sans-serif;
            font-size: toRem(20);
            font-weight: bold;
            color: #fff;
        }
    }
</style>
