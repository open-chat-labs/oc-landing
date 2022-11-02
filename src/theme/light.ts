import type { Theme } from "./themes";

const gradient = "linear-gradient(#22a7f2, #5f2583)";
const primary = "#7E52FF";
const secondary = "#df783f";

const black = "#242834";

export function lightTheme(): Theme {
    return {
        name: "light",
        label: "Light",

        primary: "#22a7f2",
        secondary,
        hgradient: "linear-gradient(0.25turn, #22a7f2, hotpink)",
        gradient,
        txt: black,
        "txt-light": "#5C5C5C",
        accent: "hotpink",
        bg: "white",

        launch: {
            bg: primary,
        },

        header: {
            bg: "#fff",
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
