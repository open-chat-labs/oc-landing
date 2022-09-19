import { AuthClient, IdbStorage } from "@dfinity/auth-client";
import { handleRequest } from "./http_request";

declare const self: ServiceWorkerGlobalScope;

const DEBUG = true;

function createAuthClient() {
    return AuthClient.create({
        idleOptions: { disableIdle: true },
        storage: new IdbStorage(),
    });
}

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

const cacheName = "openchat_asset_cache";
const assetRegex = /main-.*[css|js]$/gi;

type CacheStrategy = "cache_first" | "network_first" | "no_cache";

/**
 * We need to be pretty conservative here to avoid
 * a) leaving ourselves with stale cached resources
 * b) consuming megabytes of storage with low cache hit ratios
 *
 * Yes that makes offline usage harder but that is a secondary goal behind performance improvements
 */
function getCacheStrategy(request: Request): CacheStrategy {
    if (assetRegex.test(request.url)) {
        return "cache_first";
    } else if (["document"].includes(request.destination)) {
        return "network_first";
    }
    return "no_cache";
}

function cacheFirstNetworkFallback(request: Request): Promise<Response> {
    console.log("SW: checking SW cache for resource: ", request.url);
    return caches.open(cacheName).then((cache) => {
        // Go to the cache first
        return cache.match(request.url).then((cachedResponse) => {
            // Return a cached response if we have one
            if (cachedResponse) {
                console.log("SW: cache hit for: ", request.url);
                return cachedResponse;
            }

            console.log("SW: cache miss for: ", request.url);
            return handleRequest(request).then((resp) => {
                cache.put(request, resp.clone());
                return resp;
            });
        });
    });
}

function networkFirstCacheFallback(request: Request): Promise<Response> {
    return caches.open(cacheName).then((cache) => {
        function serveFromCache() {
            console.log(
                "SW: resource failed to load from the network, falling back to cache: ",
                request.url
            );
            // If the network is unavailable, get
            return cache.match(request.url);
        }
        // Go to the network first
        console.log("SW: attempting to request resource from the network: ", request.url);
        return handleRequest(request)
            .then((resp) => {
                if (resp.ok) {
                    console.log("SW: resource loaded from the network: ", request.url);
                    cache.put(request, resp.clone());
                    return resp;
                } else {
                    return serveFromCache();
                }
            })
            .catch(serveFromCache);
    });
}

function checkCache(request: Request): Promise<Response> {
    const strategy = getCacheStrategy(request);
    // Check if this is a request for an image
    if (strategy === "cache_first") {
        return cacheFirstNetworkFallback(request);
    } else if (strategy === "network_first") {
        return networkFirstCacheFallback(request);
    } else {
        console.log("SW: bypassing sw cache for resource: ", request.url);
        return handleRequest(request);
    }
}

async function checkAuthStatus(request: Request): Promise<Response> {
    const client = await createAuthClient();
    const id = client.getIdentity();
    const principal = id.getPrincipal();
    const anon = principal.isAnonymous();
    if (anon) {
        return fetch(request);
    } else {
        try {
            return checkCache(request);
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

// Intercept and proxy all fetch requests made by the browser or DOM on this scope.
self.addEventListener("fetch", (event: FetchEvent) => {
    event.respondWith(checkAuthStatus(event.request));
});
