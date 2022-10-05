import { AuthClient, IdbStorage } from "@dfinity/auth-client";
import {
    CacheFirst,
    NetworkFirst,
    StaleWhileRevalidate,
    Strategy,
    StrategyHandler,
} from "workbox-strategies";
import { handleRequest } from "./http_request";

export async function isAnonymous() {
    const client = await AuthClient.create({
        idleOptions: { disableIdle: true },
        storage: new IdbStorage(),
    });
    const id = client.getIdentity();
    const principal = id.getPrincipal();
    return principal.isAnonymous();
}

function toRequest(input) {
    return typeof input === "string" ? new Request(input) : input;
}

export class IcHandler extends StrategyHandler {
    async fetch(input: RequestInfo): Promise<Response> {
        console.debug(
            "SW: cache miss (or revalidation), falling back to default ic service worker ",
            input
        );
        return handleRequest(toRequest(input));
    }
}

function createIcHandler(strategy: Strategy, handler: StrategyHandler): IcHandler {
    return new IcHandler(strategy, {
        event: handler.event,
        request: handler.request,
        params: handler.params,
    });
}

export class StaleWhileRevalidateIfSignedIn extends StaleWhileRevalidate {
    async _handle(request: Request, handler: StrategyHandler) {
        if (process.env.LANDING_PAGE_MODE && (await isAnonymous())) {
            console.debug(
                "SW: StaleWhileRevalidate - not signed in, use network handler if not in cache ",
                request.url
            );
            return super._handle(request, handler);
        }
        console.debug(
            "SW: StaleWhileRevalidate signed in: use ic handler if not in cache",
            request.url
        );
        return super._handle(request, createIcHandler(this, handler));
    }
}

export class CacheFirstIfSignedIn extends CacheFirst {
    async _handle(request: Request, handler: StrategyHandler) {
        const referrer = new URL(request.referrer);
        const anon = await isAnonymous();
        const passthrough = anon || landingPageRoutes.includes(referrer.pathname);
        if (process.env.LANDING_PAGE_MODE && passthrough) {
            console.debug(
                "SW: CacheFirst - not signed in, use network handler if not in cache ",
                request.url,
                referrer.pathname
            );
            return super._handle(request, handler);
        }
        console.debug(
            "SW: CacheFirst signed in: use ic handler if not in cache",
            request.url,
            referrer.pathname
        );
        return super._handle(request, createIcHandler(this, handler));
    }
}

export const landingPageRoutes = ["/home", "/features", "/roadmap", "/whitepaper", "/architecture"];

export class NetworkFirstIfSignedIn extends NetworkFirst {
    async _handle(request: Request, handler: StrategyHandler) {
        // For some routes we want to load the landing page regardless of whether we are signed in
        const url = new URL(request.url);
        const anon = await isAnonymous();
        const passthrough = anon || landingPageRoutes.includes(url.pathname);
        if (process.env.LANDING_PAGE_MODE && passthrough) {
            console.debug(
                "SW: NetworkFirst - not signed, use network handler if not in cache ",
                url.pathname
            );
            return super._handle(request, handler);
        }
        console.debug("SW: NetworkFirst signed in: use ic handler if not in cache", url.pathname);
        return super._handle(request, createIcHandler(this, handler));
    }
}
