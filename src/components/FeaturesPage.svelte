<script lang="ts">
    import { onMount } from "svelte";
    import ArrowLink from "./ArrowLink.svelte";
    import Content from "./Content.svelte";
    import Feature from "./Feature.svelte";

    let scrollTop = 0;

    onMount(() => {
        const main = document.getElementById("main");
        main?.addEventListener("scroll", () => {
            scrollTop = main?.scrollTop ?? 0;
        });
    });

    $: console.log("scroll top: ", scrollTop);

    function clamp(n: number) {
        if (n < 0) return 0;
        if (n > 700) return 700;
        return n;
    }
</script>

<div class="phone">
    <div class="feature-img-container">
        <img class="feature-img" src={"../screenshots/mobilefirst.png"} alt={"mobile first"} />
    </div>

    <div
        style={`top: unset; bottom: 0; height: ${clamp(scrollTop - 56)}px`}
        class="feature-img-container">
        <img class="feature-img" src={"../screenshots/creategroup1.png"} alt={"create group"} />
    </div>

    <!-- <div class="feature-screen wipe-item-container">
        <div class="wipe-item">
            <img src={"../screenshots/permissions.png"} alt={"set group permissions"} />
        </div>
    </div>
    <div class="feature-screen wipe-item-container">
        <div class="wipe-item">
            <img src={"../screenshots/whatshot.gif"} alt={"find groups to join"} />
        </div>
    </div>
    <div class="feature-screen wipe-item-container">
        <div class="wipe-item">
            <img src={"../screenshots/userprofile.gif"} alt={"user profile"} />
        </div>
    </div>
    <div class="feature-screen wipe-item-container">
        <div class="wipe-item">
            <img src={"../screenshots/messages.gif"} alt={"sending messages"} />
        </div>
    </div>
    <div class="feature-screen wipe-item-container">
        <div class="wipe-item">
            <img src={"../screenshots/search.gif"} alt={"searching"} />
        </div>
    </div>
    <div class="feature-screen wipe-item-container">
        <div class="wipe-item">
            <img src={"../screenshots/voting.png"} alt={"voting"} />
        </div>
    </div> -->
</div>

<div class="content">
    <Content>
        <Feature backgroundColor={"#4AE97A"} title={"Mobile first"}>
            <p>
                A chat app should be used on the go and so OpenChat was designed from the beginning
                to work well first and foremost on your mobile device.
            </p>
            <p>
                The user interface will respond to give a seamless experience on devices of any size
                from mobile to desktop.
            </p>
        </Feature>

        <Feature backgroundColor={"#7E52FF"} color={"#ffffff"} title={"Groups"}>
            <p>
                Create private groups with friends and family to coordinate and chat together. With
                a private group, you have full control over who is the group.
            </p>
        </Feature>

        <Feature backgroundColor={"#242834"} color={"#ffffff"} title={"Permissions"}>
            <p>
                Permissions are assigned to different types of users. As the group owner you will
                decide who gets admin privileges. Making other people admins will allow them to help
                you moderate the group to make sure it works the way you want.
            </p>
        </Feature>

        <Feature backgroundColor={"#ff4844"} title={"Finding groups"}>
            <p>
                By selecting the "What's hot" menu option you can find list of popular groups. In
                the future we will add more fine grain categorisation and filtering capability to
                make it even easier to find what you're looking for.
            </p>
            <p>
                If you <em>know</em> the name of the group you are looking for, you can also simply search
                for it from the universal search box and preview or join the group from there.
            </p>
        </Feature>

        <Feature backgroundColor={"#4ab9e9"} title={"User profile"}>
            <p>Configure your personal information, UI settings and chat settings at any time.</p>

            <p>Manage your crypt accounts and account storage.</p>

            <p>View your own personl stats. Get messaging!</p>
        </Feature>

        <Feature backgroundColor={"#ffc702"} title={"Sending messages"}>
            <p>
                Sending messages is the heart of any chat app. OpenChat provides all of the features
                that you would expect and adds a few unique capabilities of its own.
            </p>

            <ul class="list">
                <li>Send, edit or delete text messages</li>
                <li>Use inline markdown to format messages</li>
                <li>Attach images, video, audio clips or files to your messages</li>
                <li>React to messages</li>
                <li>Send giphy messages</li>
                <li>Create and send polls</li>
                <li>Send crypto via message to other users</li>
                <li>Translate messages into your chosen language</li>
                <li>Reply to messages either inline or as part of a threaded conversation</li>
                <li>Pin important messages within a group</li>
            </ul>
        </Feature>

        <Feature backgroundColor={"#f34ac9"} title={"Search"}>
            <p>
                There a several ways to search within OpenChat. To search globally for users, public
                groups or messages, just use the universal search box directly under the user panel
                and above the chat list.
            </p>

            <p>
                Then simply click on any result. For users, this will initiate a direct chat; for
                groups that you are not currently a member of you will enter preview mode and from
                there you can decide whether to join or not; for messages you will be taken directly
                to the relevant chat with the correct message selected.
            </p>

            <p>
                You can also search <em>within</em> a chat by selecting search from the chat's menu.
                This allows you to find a specific message within that particular chat only.
            </p>
        </Feature>

        <Feature backgroundColor={"#000000"} color={"#ffffff"} title={"Proposal voting"}>
            <p>
                A unique feature of OpenChat is that it allows you to vote directly on NNS and
                (soon) SNS proposals.
            </p>

            <p>
                Simply register your OpenChat account as a hotkey for the neuron that you wish to
                vote with and join the relevant public group.
            </p>

            <p>
                You can then discuss and vote on proposals from right inside your favourite chat
                app.
            </p>
            <div class="roadmap">
                <ArrowLink path={"roadmap"}>View Entire Roadmap</ArrowLink>
            </div>
        </Feature>
    </Content>
</div>

<style type="text/scss">
    .phone {
        overflow: hidden;
        display: block;
        width: var(--p-width);
        height: var(--p-height);
        --p-width: 400px;
        --p-height: 708px;
        position: fixed;
        right: 40%;
        top: 160px;
        transform: translateX(400px);
        border: 4px solid #000;
        @include box-shadow(3);
        z-index: 2;
    }

    .feature-img-container {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;

        .feature-img {
            width: 100%;
            max-width: 100%;
            height: 100%;
            max-height: 100%;
            object-fit: cover;
            object-position: bottom;
            transform-origin: bottom;
            vertical-align: initial;
        }
    }

    .content {
        position: relative;
        z-index: 1;
    }
    .list {
        text-align: left;
        list-style: none;
        margin: 0 0 0 toRem(22);
        padding: 0;
        position: relative;

        li {
            &:before {
                position: absolute;
                content: "✓";
                left: toRem(-22);
                color: darkseagreen;
            }
        }
    }
</style>
