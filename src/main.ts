import App from "./App.svelte";
import { registerServiceWorker } from "./registerServiceWorker";

const app = new App({
    target: document.body,
});

export default app;

registerServiceWorker();
