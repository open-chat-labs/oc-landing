import App from "./App.svelte";
import { registerServiceWorker } from "./registerServiceWorker";
import { startSwCheckPoller } from "./updateServiceWorker";

const app = new App({
    target: document.body,
});

export default app;

registerServiceWorker();
startSwCheckPoller();
