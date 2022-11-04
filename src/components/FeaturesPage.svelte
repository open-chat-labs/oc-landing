<script lang="ts">
    import { onMount } from "svelte";
    import Feature from "./Feature.svelte";
    import { themeStore } from "../theme/themes";
    import { mobileWidth } from "../stores/screenDimensions";

    const sectionHeight = 800;
    const scrollOffet = 56;
    let scrollTop = 0;
    let phoneEl: HTMLDivElement;
    let bottomPadding = 0;

    function onScroll() {
        scrollTop = window.scrollY;
    }

    function clamp(n: number) {
        if (n < 0) return 0;
        if (n > 700) return 700;
        return n;
    }

    const screenshotMap = {
        light: [
            { url: "../screenshots/mobilefirst.png", alt: "mobile first" },
            { url: "../screenshots/creategroup1.png", alt: "create group" },
            { url: "../screenshots/permissions.png", alt: "group permissions" },
            { url: "../screenshots/whatshot.gif", alt: "find groups to join" },
            { url: "../screenshots/userprofile.gif", alt: "user profile" },
            { url: "../screenshots/messages.gif", alt: "sending messages" },
            { url: "../screenshots/search.gif", alt: "searching" },
            { url: "../screenshots/voting_light.png", alt: "voting" },
        ],
        dark: [
            { url: "../screenshots/mobilefirst.png", alt: "mobile first" },
            { url: "../screenshots/creategroup1.png", alt: "create group" },
            { url: "../screenshots/permissions.png", alt: "group permissions" },
            { url: "../screenshots/whatshot.gif", alt: "find groups to join" },
            { url: "../screenshots/userprofile.gif", alt: "user profile" },
            { url: "../screenshots/messages.gif", alt: "sending messages" },
            { url: "../screenshots/search.gif", alt: "searching" },
            { url: "../screenshots/voting_dark.png", alt: "voting" },
        ],
    };

    $: screenshots = screenshotMap[$themeStore.name];

    onMount(() => {
        if (phoneEl) {
            // calculate how far from bottom of the screen the bottom of the phone is
            const rect = phoneEl.getBoundingClientRect();
            bottomPadding = window.innerHeight - rect.bottom - 45;
        }
    });
</script>

<svelte:window on:scroll={onScroll} />

{#if !$mobileWidth}
    <div class="phone" bind:this={phoneEl}>
        {#each screenshots as screenshot, i}
            <div
                style={`height: ${
                    i === 0 ? 700 : clamp(scrollTop - (scrollOffet + sectionHeight * (i - 1)))
                }px`}
                class="feature-img-container">
                <img class="feature-img" src={screenshot.url} alt={screenshot.alt} />
            </div>
        {/each}
    </div>
{/if}

<div class="content" style={`padding-bottom: ${bottomPadding}px`}>
    <Feature backgroundColor={"#transparent"} title={"Mobile first"}>
        <p>
            A chat app should be used on the go and so OpenChat was designed from the beginning to
            work well first and foremost on your mobile device.
        </p>
        <p>
            The user interface will respond to give a seamless experience on devices of any size
            from mobile to desktop.
        </p>
    </Feature>

    <Feature backgroundColor={"#FF005C"} color={"#ffffff"} title={"Groups"}>
        <p>
            Create private groups with friends and family to coordinate and chat together. With a
            private group, you have full control over who is the group.
        </p>
    </Feature>

    <Feature backgroundColor={"#FEC000"} title={"Permissions"}>
        <p>
            Permissions are assigned to different types of users. As the group owner you will decide
            who gets admin privileges. Making other people admins will allow them to help you
            moderate the group to make sure it works the way you want.
        </p>
    </Feature>

    <Feature backgroundColor={"#08AEDB"} title={"Finding groups"}>
        <p>
            By selecting the "What's hot" menu option you can find list of popular groups. In the
            future we will add more fine grain categorisation and filtering capability to make it
            even easier to find what you're looking for.
        </p>
        <p>
            If you <em>know</em> the name of the group you are looking for, you can also simply search
            for it from the universal search box and preview or join the group from there.
        </p>
    </Feature>

    <Feature backgroundColor={"#673BB7"} color={"#ffffff"} title={"User profile"}>
        <p>Configure your personal information, UI settings and chat settings at any time.</p>

        <p>Manage your crypt accounts and account storage.</p>

        <p>View your own personl stats. Get messaging!</p>
    </Feature>

    <Feature backgroundColor={"#05B09F"} title={"Sending messages"}>
        <p>
            Sending messages is the heart of any chat app. OpenChat provides all of the features
            that you would expect and adds a few unique capabilities of its own.
        </p>
    </Feature>

    <Feature backgroundColor={"#FF8541"} color={"#ffffff"} title={"Search"}>
        <p>
            Search globally for users, messages or public groups right from the universal search box
            below the user panel.
        </p>

        <p>You can also search for messages within any selected chat.</p>
    </Feature>

    <Feature backgroundColor={"transparent"} title={"Proposal voting"}>
        <p>
            A unique feature of OpenChat is that it allows you to vote directly on NNS and (soon)
            SNS proposals.
        </p>

        <p>
            Simply register your OpenChat account as a hotkey for the neuron that you wish to vote
            with and join the relevant public group.
        </p>
    </Feature>
</div>

<style type="text/scss">
    $border: 5px;
    $height: calc(700px + $border * 2);
    $width: calc(392px + $border * 2);

    .phone {
        pointer-events: none;
        overflow: hidden;
        display: block;
        width: $width;
        height: $height;
        position: fixed;
        right: 40%;
        top: 120px;
        transform: translateX($width);
        border: $border solid var(--phone-bd);
        border-radius: toRem(18);
        @include box-shadow(3);
        z-index: 2;
    }

    .feature-img-container {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: $height;

        .feature-img {
            width: 100%;
            max-width: 100%;
            height: 100%;
            max-height: 100%;
            object-fit: cover;
            object-position: bottom;
        }
    }

    .content {
        position: relative;
        z-index: 1;
        padding: 0;
        padding-bottom: toRem(460);
        @include mobile() {
            padding: 0;
        }
    }
</style>
