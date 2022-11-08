import type { Theme } from "./themes";

const txtHigh = "rgba(255,255,255,0.8)";
const txtMed = "rgba(255,255,255,0.6)";
const txtLow = "rgba(255,255,255,0.38)";

const primary = "#22a7f2";
// const primary = "#085d8c";
const secondary = "#df783f";

const black = "#1B1C21";

export function darkTheme(defaultTheme: Theme): Theme {
    return {
        ...defaultTheme,
        name: "dark",
        label: "Dark",
        primary,
        secondary,
        txt: "#ffffff",
        accent: "#e87fb4",
        bg: black,
        "txt-light": "#B1B1B1",

        brag: {
            op: "0.7",
        },

        context: {
            bg: "#2f3039",
        },

        phone: {
            bd: "#ffffffdd",
        },

        header: {
            bg: black,
            txt: txtMed,
            bd: "1px solid rgba(255,255,255,0.2)",
        },

        auth: {
            bg: "rgba(0,0,0,0.6)",
            txt: txtMed,
        },

        roadmap: {
            bd: "#32353F",
        },
    };
}
