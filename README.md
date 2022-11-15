# This is the landing page for OpenChat

This repo forms the landing page for OpenChat. It is comprised of two important parts.

### The landing page

This is just a fairly straightforward svelte app.

To build run one of the following (depending on env):

```
npm run build
npm run build:prod
npm run build:prod-test
```

To run in dev mode run:

```
npm run dev
```

### The service worker

This is a copy of the default ic service worker but it has a couple of modifications.

Firstly, we need to add the open chat domains (test.oc.app, oc.app) to the hostname canister id map so that we can use
those "vanity" urls.

Secondly, we modify the behaviour of the default service worker such that it only delegates to the
relevant canister if the user is signed in. This means that we will show the landing page both if the user has not yet
installed the service worker _and_ if the user is not signed in.

Thirdly, we handle web push notifications.

And finally, we integrate it with google workbox so that we can add easy control over the caching of assets to improve
the performance of the app.

To build the service worker run on of the following (depending on env):

```
npm run build:sw
npm run build:sw-dev
```

### Why can't you build both the main site _and_ the service worker using rollup?

Good question. You probably can but I just couldn't get it to work. To save time I therefore just picked up the webpack
config from the ic project to build the service worker and that seems to work fine.

## License

Copyright 2022 Computism LTD

Licensed under the AGPLv3: https://www.gnu.org/licenses/agpl-3.0.html
