/**
 * There seems to be a bug in chrome such that a service worker will spend several minutes in the "waiting to activate" state despite
 * the fact that we call skipWaiting.
 *
 * Therefore we will try to detect this situation and if we find it, we unregiter and refresh the window.
 */

export async function startSwCheckPoller(): Promise<void> {
    if ("serviceWorker" in navigator) {
        window.setInterval(checkServiceWorker, 10000);
    }
}

async function checkServiceWorker() {
    const reg = await navigator.serviceWorker.getRegistration("sw.js");
    if (reg) {
        console.log("SW: checking for a new root service worker");
        await reg.update(); // this should get the new service worker and install it if it's available
        if (reg.active && reg.waiting) {
            // we have both an active and a waiting service worker
            console.log("SW: we have a new service worker waiting to be activated");
        }
    }
}
