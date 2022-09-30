<script lang="ts">
    import Content from "./Content.svelte";
    import Separator from "./Separator.svelte";
    import Feature from "./Feature.svelte";
    import Link from "./Link.svelte";
</script>

<Content offset={false}>
    <Feature
        lazy={false}
        screenshotUrl={"../screenshots/mobilefirst.png"}
        screenshotAlt={"mobile first"}
        title={"Mobile first"}>
        <p>
            A chat app should be used on the go and so OpenChat was designed from the beginning to
            work well first and foremost on your mobile device.
        </p>
        <p>
            The user interface will respond to give a seamless experience on devices of any size
            from mobile to desktop.
        </p>
        <p>
            It has been designed initially as a progressive web app meaning that on most mobile
            phone platforms it can be saved to your homescreen to give a native app like experience.
        </p>

        <p>
            As support for various web apis grows we can enhance the app's behaviours on all
            platforms without the costly duplication of effort required to build fully native apps
            for each target platform.
        </p>

        <p>
            In the near future we intend to create native app shells for iOS and Android so that we
            can exploit any native apis that are not yet supported via standard web apis (most
            notably Push Notifications on iOS).
        </p>
    </Feature>

    <Separator />

    <Feature
        screenshotUrl={"../screenshots/creategroup1.png"}
        screenshotAlt={"create a group"}
        title={"Groups"}
        rtl={true}>
        <p>
            Of course it is possible to chat directly one-to-one with another person but it is also
            possible to create group chats.
        </p>
        <p>
            This is a great way to expand the usefulness of the app. Create private groups with
            friends and family to coordinate and chat together. With a private group, you have full
            control over who is the group.
        </p>
        <p>
            You can also decide to create a public group. You can then share a url to join your new
            group or you can just allow people to discover it organically via search,
            recommendations or word of mouth. Be sure to add some information to your group's
            description to tell people what the group is about and to list any guidance on conduct
            that you might expect.
        </p>
    </Feature>

    <Separator />

    <Feature
        screenshotUrl={"../screenshots/permissions.png"}
        screenshotAlt={"set group permissions"}
        title={"Permissions"}>
        <p>
            Whether you are creating a public or a private group you will be given a sensible set of
            default permissions for your group.
        </p>
        <p>
            Permissions are assigned to different types of users. As the group owner you will decide
            who gets admin privileges. Making other people admins will allow them to help you
            moderate the group to make sure it works the way you want.
        </p>
        <p>
            Take a look through the options to exercise fine control over your group. For example,
            you may want to create a group that is completely read-only for ordinary members.
        </p>
    </Feature>

    <Separator />

    <Feature
        screenshotUrl={"../screenshots/whatshot.gif"}
        screenshotAlt={"find groups to join"}
        title={"Finding groups"}
        rtl={true}>
        <p>When you first join OpenChat it might be a little unclear how to get started.</p>
        <p>
            By selecting the "What's hot" menu option you can find list of popular groups. In the
            future we will add more fine grain categorisation and filtering capability to make it
            even easier to find what you're looking for.
        </p>
        <p>
            If you see something you like you can join right away. Alternatively you can choose to
            preview a group allowing you to browse recent messages in read-only mode to help you
            decide whether you'd like to join.
        </p>
        <p>Of course you can leave a group at any time so don't be shy.</p>
        <p>
            If you <em>know</em> the name of the group you are looking for, you can also simply search
            for it from the universal search box and preview or join the group from there.
        </p>
    </Feature>

    <Separator />

    <Feature
        screenshotUrl={"../screenshots/userprofile.gif"}
        screenshotAlt={"user profile"}
        title={"User profile"}>
        <p>
            It's a really good idea to get familiar with your user profile section as a lot of
            important features are included in here.
        </p>
        <p>
            Firstly you can select / change your user avatar so people know who they are talking to.
            You can also change your username and set a bio to tell people a little bit about
            yourself. This forms the basis for the user card that people will see when they click on
            your username.
        </p>
        <p>
            You can also change various aspects of the app appearance. Choose a language to
            translate the UI into (if you speak a language that is not yet supported, perhaps you
            can help us with some translations!). We support a light or a dark theme or you can
            choose to follow the theme specified by the system you are running on. And finally you
            can make adjustments to the font size if you prefer things more roomy or more compact
            than the default.
        </p>

        <p>You can share the url to a chat to make it easier for friends and family to join.</p>

        <p>
            You can configure various aspects of how chats behave. Play with these settings to find
            a combination that work for you.
        </p>

        <p>
            You can manage and see the balances of various crypto accounts. These accounts are
            important for paying for various premium features and for sending crypto to other users
            as chat messages. This will be explained in more detail when we talk about sending
            messages.
        </p>
        <p>Finally, you can see your own personal stats. Get messaging!</p>
    </Feature>

    <Separator />

    <Feature
        screenshotUrl={"../screenshots/messages.gif"}
        screenshotAlt={"sending messages"}
        title={"Sending messages"}
        rtl={true}>
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

    <Separator />

    <Feature screenshotUrl={"../screenshots/search.gif"} screenshotAlt={"Search"} title={"Search"}>
        <p>
            There a several ways to search within OpenChat. To search globally for users, publich
            groups or messages, just use the universal search box directly under the user panel and
            above the chat list.
        </p>

        <p>
            Then simply click on any result. For users, this will initiate a direct chat; for groups
            that you are not currently a member of you will enter preview mode and from there you
            can decide whether to join or not; for messages you will be taken directly to the
            relevant chat with the correct message selected.
        </p>

        <p>
            You can also search <em>within</em> a chat by selecting search from the chat's menu. This
            allows you to find a specific message within that particular chat only.
        </p>
    </Feature>

    <Separator />

    <Feature
        screenshotUrl={"../screenshots/voting.png"}
        screenshotAlt={"Voting"}
        title={"Proposal voting"}
        rtl={true}>
        <p>
            A unique feature of OpenChat is that it allows you to vote directly on NNS and (soon)
            SNS proposals.
        </p>

        <p>
            Simply register your OpenChat account as a hotkey for the neuron that you wish to vote
            with and join the relevant public group.
        </p>

        <p>You can then discuss and vote on proposals from right inside your favourite chat app.</p>
    </Feature>

    <Link path={"roadmap"}>Click here for details of our future roadmap.</Link>
</Content>

<style type="text/scss">
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
