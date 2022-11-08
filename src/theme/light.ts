import type { Theme } from "./themes";

const gradient = "linear-gradient(#22a7f2, #5f2583)";
const primary = "#22a7f2";
const secondary = "#df783f";

const black = "#242834";

export function lightTheme(): Theme {
    return {
        name: "light",
        label: "Light",

        primary,
        secondary,
        hgradient: `linear-gradient(0.25turn, ${primary}, hotpink)`,
        gradient,
        txt: black,
        "txt-light": "#5C5C5C",
        accent: "hotpink",
        bg: "white",

        brag: {
            op: "0.3",
        },

        context: {
            bg: "#ffffff",
        },

        phone: {
            bd: "transparent",
        },

        launch: {
            bg: primary,
        },

        header: {
            bg: "#ffffff",
            txt: black,
            bd: "none",
        },

        auth: {
            bg: "rgba(255,255,255,0.9)",
            txt: "#191919",
        },

        roadmap: {
            bd: "#E2E2E2",
        },
    };
}
