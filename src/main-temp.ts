import ServiceWorkerLoading from "./ServiceWorkerLoading.svelte";
import { registerServiceWorker } from "./registerServiceWorker";

const app = new ServiceWorkerLoading({
    target: document.body,
});

export default app;

registerServiceWorker();
