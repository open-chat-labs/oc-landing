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

        content: {
            bg: "#ffffff",
        },
    };
}
