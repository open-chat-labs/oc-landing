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
            return handler.fetch(request);
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
        if (process.env.LANDING_PAGE_MODE && (await isAnonymous())) {
            console.debug(
                "SW: CacheFirst - not signed in, use network handler if not in cache ",
                request.url
            );
            return handler.fetch(request);
        }
        console.debug("SW: CacheFirst signed in: use ic handler if not in cache", request.url);
        return super._handle(request, createIcHandler(this, handler));
    }
}

export class NetworkFirstIfSignedIn extends NetworkFirst {
    async _handle(request: Request, handler: StrategyHandler) {
        if (process.env.LANDING_PAGE_MODE && (await isAnonymous())) {
            console.debug(
                "SW: NetworkFirst - not signed, use network handler if not in cache ",
                request.url
            );
            return handler.fetch(request);
        }
        console.debug("SW: NetworkFirst signed in: use ic handler if not in cache", request.url);
        return super._handle(request, createIcHandler(this, handler));
    }
}