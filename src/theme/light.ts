import type { Theme } from "./themes";

export function lightTheme(): Theme {
    return {
        name: "light",
        label: "Light",

        primary: "#22a7f2",
        secondary: "#ff9505",
        hgradient: "linear-gradient(0.25turn, #22a7f2, hotpink)",
        gradient: "linear-gradient(#22a7f2, #5f2583)",
        txt: "#191919",
        accent: "hotpink",

        header: {
            bg: "#22a7f2",
            txt: "#ffffff",
        },

        content: {
            bg: "#ffffff",
        },

        auth: {
            bg: "rgba(255,255,255,0.9)",
            txt: "#191919",
        },
    };
}
