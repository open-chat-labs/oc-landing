import { handleRequest } from "./http_request";

declare const self: ServiceWorkerGlobalScope;

const DEBUG = true;

//workbox config
import { registerRoute, setDefaultHandler } from "workbox-routing";
import {
    CacheFirstIfSignedIn,
    isAnonymous,
    NetworkFirstIfSignedIn,
    StaleWhileRevalidateIfSignedIn,
} from "./strategies";

const assetRegexes = [/main-.*[css|js]$/gi];
const unversionedAssets = [/assets\/.*\.svg$/gi];

// TODO make use of expiry and cacheable response plugins

registerRoute((route) => {
    return assetRegexes.some((re) => re.test(route.url.pathname));
}, new CacheFirstIfSignedIn());

registerRoute((route) => {
    return unversionedAssets.some((re) => re.test(route.url.pathname));
}, new StaleWhileRevalidateIfSignedIn());

registerRoute((route) => {
    return route.request.destination === "document";
}, new NetworkFirstIfSignedIn());

setDefaultHandler(({ request }) => {
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
        console.log("SW: default handler - not signed in falling back to network: ", request.url);
        return fetch(request);
    } else {
        try {
            console.log(
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
