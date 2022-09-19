import type { Theme } from "./themes";

const darkBase = "#121212";
const dark05 = "#191919";
const dark10 = "#2b2b2b";
const dark15 = "#383838";
const dark20 = "#454545";
const dark25 = "#525252";
const dark45 = "#666666";
const dark50 = "#777777";
const dark55 = "#888888";
const dark60 = "#ababab";

const txtHigh = "rgba(255,255,255,0.8)";
const txtMed = "rgba(255,255,255,0.6)";
const txtLow = "rgba(255,255,255,0.38)";

export function darkTheme(defaultTheme: Theme): Theme {
    return {
        ...defaultTheme,
        name: "dark",
        label: "Dark",
        primary: "#085d8c",
        secondary: "#df783f",
        gradient: darkBase,
        txt: txtHigh,
        accent: "#e87fb4",

        content: {
            bg: dark10,
        },
    };
}
