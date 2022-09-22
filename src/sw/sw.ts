import { handleRequest } from "./http_request";
import { registerRoute, setCatchHandler, setDefaultHandler } from "workbox-routing";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";
import {
    CacheFirstIfSignedIn,
    isAnonymous,
    NetworkFirstIfSignedIn,
    StaleWhileRevalidateIfSignedIn,
} from "./strategies";

declare const self: ServiceWorkerGlobalScope;

const DEBUG = true;

//workbox config

// TODO make use of expiry and cacheable response plugins

registerRoute(
    (route) => {
        return [/main-.*[css|js]$/].some((re) => re.test(route.request.url));
    },
    new CacheFirstIfSignedIn({
        cacheName: "openchat_cache_first",
        plugins: [
            new CacheableResponsePlugin({
                statuses: [200],
            }),
            new ExpirationPlugin({
                maxAgeSeconds: 30 * 24 * 60 * 60,
            }),
        ],
    })
);

registerRoute(
    (route) => {
        return [
            /assets\/.*\.svg$/,
            /openchat.webmanifest/,
            /icon.png/,
            /apple-touch-icon.png/,
        ].some((re) => re.test(route.request.url));
    },
    new StaleWhileRevalidateIfSignedIn({
        cacheName: "openchat_stale_while_revalidate",
        plugins: [
            new CacheableResponsePlugin({
                statuses: [200],
            }),
            new ExpirationPlugin({
                maxAgeSeconds: 30 * 24 * 60 * 60,
            }),
        ],
    })
);

registerRoute(
    (route) => {
        return route.request.destination === "document";
    },
    new NetworkFirstIfSignedIn({
        cacheName: "openchat_network_first",
        plugins: [
            new CacheableResponsePlugin({
                statuses: [200],
            }),
            new ExpirationPlugin({
                maxAgeSeconds: 30 * 24 * 60 * 60,
            }),
        ],
    })
);

setDefaultHandler(({ request }) => {
    return defaultHandler(request);
});

setCatchHandler(({ request }) => {
    return defaultHandler(request);
});

// Always install updated SW immediately
self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("activate", async () => {
    // upon activation take control of all clients (tabs & windows)
    await self.clients.claim();
    // reload all clients
    const clients = (await self.clients.matchAll()) as WindowClient[];
    clients.forEach((client) => client.navigate(client.url));
});

async function defaultHandler(request: Request): Promise<Response> {
    if (await isAnonymous()) {
        console.debug("SW: default handler - not signed in falling back to network: ", request.url);
        return fetch(request);
    } else {
        try {
            console.debug(
                "SW: default handler - signed in falling back to default ic service worker ",
                request.url
            );
            return handleRequest(request);
        } catch (e) {
            const error_message = String(e);
            console.error(error_message);
            if (DEBUG) {
                return new Response(error_message, {
                    status: 501,
                });
            }
            return new Response("Internal Error", { status: 502 });
        }
    }
}
