import { writable } from "svelte/store";
import { AuthProvider } from "../authProvider";

export const selectedAuthProviderStore = createStore();

function enumFromStringValue<T>(enm: { [s: string]: T }, value: string, def: T): T {
    return (Object.values(enm) as unknown as string[]).includes(value)
        ? (value as unknown as T)
        : def;
}

function createStore() {
    const key = "openchat_selected_auth_provider";
    const def = AuthProvider.II;
    const stored = localStorage.getItem(key);
    const initial = stored !== null ? enumFromStringValue(AuthProvider, stored, def) : def;

    const store = writable<AuthProvider>(initial);

    function _init(authProvider: AuthProvider) {
        if (localStorage.getItem(key) === null) {
            _set(authProvider);
        }
    }

    function _set(authProvider: AuthProvider) {
        store.update((_) => {
            localStorage.setItem(key, authProvider);
            return authProvider;
        });
    }

    return {
        subscribe: store.subscribe,
        init: (authProvider: AuthProvider): void => _init(authProvider),
        set: (authProvider: AuthProvider): void => _set(authProvider),
    };
}
