function updateStatus(message: string) {
    const statusEl = document.getElementById("status");
    if (statusEl) {
        statusEl.innerText = message;
    }
}

export function registerServiceWorker() {
    window.addEventListener("load", async () => {
        console.log("The window has loaded");

        // Verify user's web browser has necessary support
        const unsupported = [
            ["serviceWorker", window.navigator.serviceWorker],
            ["BigInt", window.BigInt],
            ["WebAssembly", window.WebAssembly],
        ]
            .filter((tuple) => !tuple[1])
            .map((tuple) => tuple[0])
            .join(", ");
        if (unsupported) {
            updateStatus(
                `This web browser cannot interact with the Internet Computer securely.  (No: ${unsupported})
       Please try new web browser software.`
            );
        } else {
            console.log(`Installing the service worker`);
            // Ok, let's install the service worker...
            // note: if the service worker was already installed, when the browser requested <domain>/, it would have
            // proxied the response from <domain>/<canister-id>/, so this bootstrap file would have never been
            // retrieved from the boundary nodes
            try {
                await navigator.serviceWorker.register("sw.js");
                console.log("SW registered");
            } catch (e) {
                await navigator.serviceWorker.register("/sw.js");
                console.log("retrying SW registered");
            }

            // delays code execution until serviceworker is ready
            await navigator.serviceWorker.ready;
            console.log("SW is now ready");
            const registration = await navigator.serviceWorker.getRegistration();
            if (registration.active && !navigator.serviceWorker.controller) {
                // There's an active SW, but no controller for this tab. The service worker events are also _not_ fired.
                // This happens after a hard refresh --> Perform a soft reload to load everything from the SW.
                window.location.reload();
            }
        }
    });
}
