import type { Theme } from "./themes";

const gradient = "linear-gradient(#22a7f2, #5f2583)";
// const primary = "#085d8c";
const primary = "#22a7f2";
const secondary = "#df783f";

export function lightTheme(): Theme {
    return {
        name: "light",
        label: "Light",

        // primary: "#22a7f2",
        primary,
        // secondary: "#ff9505",
        secondary,
        hgradient: "linear-gradient(0.25turn, #22a7f2, hotpink)",
        gradient,
        // txt: "#191919",
        txt: "#fff",
        accent: "hotpink",

        header: {
            // bg: "#22a7f2",
            bg: "rgba(0,0,0,0.2)",
            txt: "#ffffff",
        },

        content: {
            bg: "rgba(255,255,255,0.1)",
        },

        auth: {
            bg: "rgba(255,255,255,0.9)",
            txt: "#191919",
        },

        roadmap: {
            status: {
                txt: "#fff",
                // bg: "#ff9505",
                bg: secondary,
            },
            desc: {
                txt: "#191919",
                bg: "#efefef",
            },
            date: {
                bg: secondary,
            },
        },
    };
}
