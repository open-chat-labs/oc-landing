<script lang="ts">
    import Carousel from "./Carousel.svelte";
    import Content from "./Content.svelte";
    import Separator from "./Separator.svelte";
    import { mobileWidth } from "../stores/screenDimensions";
</script>

<Content offset={false}>
    <div class="feature ltr">
        <img class="col_1" src="../screenshots/mobilefirst.png" alt="mobile first" />
        <div class="blurb col_2">
            <h2 class="title">Mobile first</h2>
            <p>
                A chat app should be used on the go and so OpenChat was designed from the beginning
                to work well first and foremost on your mobile device.
            </p>
            <p>
                The user interface will respond to give a seamless experience on devices of any size
                from mobile to desktop.
            </p>
            <p>
                It has been designed initially as a progressive web app meaning that on most mobile
                phone platforms it can be saved to your homescreen to give a native app like
                experience.
            </p>

            <p>
                As support for various web apis grows we can enhance the app's behaviours on all
                platforms without the costly duplication of effort required to build fully native
                apps for each target platform.
            </p>
        </div>
    </div>

    <Separator />

    <div class="feature rtl">
        <img class="col_1" src="../screenshots/creategroup1.png" alt="create a group" />
        <div class="blurb col_2">
            <h2 class="title">Groups</h2>
            <p>
                Of course it is possible to chat directly one-to-one with another person but it is
                also possible to create group chats.
            </p>
            <p>
                This is a great way to expand the usefulness of the app. Create private groups with
                friends and family to coordinate and chat together. With a private group, you have
                full control over who is the group.
            </p>
            <p>
                You can also decide to create a public group. You can then share a url to join your
                new group or you can just allow people to discover it organically via search,
                recommendations or word of mouth. Be sure to add some information to your group's
                description to tell people what the group is about and to list any guidance on
                conduct that you might expect.
            </p>
        </div>
    </div>

    <Separator />

    <div class="feature">
        <img class="col_1" src="../screenshots/permissions.png" alt="set group permissions" />
        <div class="blurb col_2">
            <h2 class="title">Permissions</h2>
            <p>
                Whether you are creating a public or a private group you will be given a sensible
                set of default permissions for your group.
            </p>
            <p>
                Permissions are assigned to different types of users. As the group owner you will
                decide who gets admin privileges. Making other people admins will allow them to help
                you moderate the group to make sure it works the way you want.
            </p>
            <p>
                Take a look through the options to exercise fine control over your group. For
                example, you may want to create a group that is completely read-only for ordinary
                members.
            </p>
        </div>
    </div>

    <Separator />

    <div class="feature rtl">
        <img class="col_1" src="../screenshots/whatshot.gif" alt="find groups to join" />
        <div class="blurb col_2">
            <h2 class="title">Finding groups</h2>
            <p>When you first join OpenChat it might be a little unclear how to get started.</p>
            <p>
                By selecting the "What's hot" menu option you can find list of popular groups. In
                the future we will add more fine grain categorisation and filtering capability to
                make it even easier to find what you're looking for.
            </p>
            <p>
                If you see something you like you can join right away. Alternatively you can choose
                to preview a group allowing you to browse recent messages in read-only mode to help
                you decide whether you'd like to join.
            </p>
            <p>Of course you can leave a group at any time so don't be shy.</p>
            <p>
                If you <em>know</em> the name of the group you are looking for, you can also simply search
                for it from the universal search box and preview or join the group from there.
            </p>
        </div>
    </div>

    <Separator />

    <div class="blurb">
        <h2 class="title">User profile</h2>
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
    </div>

    <div class="carousel">
        <Carousel perPage={$mobileWidth ? 1 : 3} items={5}>
            <img src="../screenshots/userdetails.png" alt="user details" />
            <img src="../screenshots/changetheme.gif" alt="app appearance" />
            <img src="../screenshots/configchats.png" alt="configure chats" />
            <img src="../screenshots/accounts.png" alt="accounts and storage" />
            <img src="../screenshots/stats.png" alt="user stats" />
        </Carousel>
    </div>

    <h2>Proposal chats</h2>

    <Separator />

    <h3>Sending messages</h3>
    <ul>
        <li>text messages</li>
        <li>attach images, video, audio or files</li>
        <li>inline youtube</li>
        <li>send giphy messages</li>
        <li>Send crypto</li>
        <li>Create polls</li>
        <li>Edit or delete messages</li>
        <li>Translate messages</li>
        <li>Replies (quote or thread)</li>
        <li>Pin messages</li>
    </ul>
    <Separator />

    <h3>Search</h3>

    <Separator />
    <h3>Communities</h3>
</Content>

<style type="text/scss">
    h2 {
        text-align: left;
        margin-bottom: $sp4;
    }
    h3 {
        margin: 0;
        font-family: "Yantramanav", sans-serif;
        font-size: 1.5rem;
        text-align: left;
        margin-bottom: $sp4;
    }
    .blurb {
        // padding-top: toRem(40);
        font-size: toRem(20);
    }
    .feature {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: $sp7;
        margin-bottom: $sp6;

        &.rtl {
            grid-template-columns: 2fr 1fr;
            flex-direction: column-reverse;

            .col_1 {
                order: 1;
            }
        }
    }
    img,
    video {
        width: 100%;
        @include box-shadow(3);
    }
    .carousel {
        margin-bottom: $sp6;

        img {
            box-shadow: none;
        }
    }
</style>
