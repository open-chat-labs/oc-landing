/* eslint-disable no-undef */
import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
import dev from "rollup-plugin-dev";
import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";
import inject from "rollup-plugin-inject";
import html from "@rollup/plugin-html";
import postcss from "rollup-plugin-postcss";
import * as fs from "fs";
import * as path from "path";
import * as rimraf from "rimraf";

const production = !process.env.ROLLUP_WATCH;

function serve() {
    return dev({
        dirs: ["./build", "./public"],
        spa: "./index.html",
        port: 8080,
    });
}

rimraf.sync(path.join(__dirname, "build"));
fs.mkdirSync("build");

console.log("Production: ", production);
console.log("INTERNET_IDENTITY_URL", process.env.INTERNET_IDENTITY_URL);
console.log("NFID_URL", process.env.NFID_URL);

const landingPageMode = true;

export default {
    input: landingPageMode ? "./src/main.ts" : "./src/main-temp.ts",
    output: {
        sourcemap: true,
        format: "es",
        name: "app",
        dir: "build",
        entryFileNames: "[name]-[hash].js",
    },
    plugins: [
        svelte({
            preprocess: sveltePreprocess({
                sourceMap: !production,
                scss: {
                    prependData: `@use 'sass:math'; @import 'src/styles/mixins.scss';`,
                },
            }),
            compilerOptions: {
                // enable run-time checks when not in production
                dev: !production,
            },
        }),
        postcss({ extract: true }),

        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration -
        // consult the documentation for details:
        // https://github.com/rollup/plugins/tree/master/packages/commonjs
        resolve({
            preferBuiltins: false,
            browser: true,
            dedupe: ["svelte"],
        }),
        commonjs(),
        typescript({
            sourceMap: !production,
            inlineSources: !production,
        }),
        inject({
            Buffer: ["buffer", "Buffer"],
            process: "process/browser",
        }),
        json(),

        // In dev mode, call `npm run start` once
        // the bundle has been generated
        !production && serve(),

        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        !production && livereload("public"),

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser(),

        // nodePolyfills(/* options */),

        replace({
            preventAssignment: true,
            "process.env.VERSION": "1.2.7",
            "process.env.FORCE_FETCH_ROOT_KEY": "0",
            "process.env.INTERNET_IDENTITY_URL": JSON.stringify(process.env.INTERNET_IDENTITY_URL),
            "process.env.II_DERIVATION_ORIGIN": maybeStringify(process.env.II_DERIVATION_ORIGIN),
            "process.env.NFID_URL": JSON.stringify(process.env.NFID_URL),
            "process.env.LANDING_PAGE_MODE": landingPageMode,
        }),

        html({
            template: ({ files }) => {
                const jsEntryFile = files.js.find((f) => f.isEntry).fileName;
                const cssFile = files.css[0].fileName;

                return `
                    <!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <title>OpenChat: Decentralised chat on the Internet Computer</title>
                            <meta charset="utf-8" />
                            <meta name="theme-color" media="(prefers-color-scheme: light)" content="#22A7F2" />
                            <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1B1C21" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <meta name="apple-mobile-web-app-title" content="OpenChat" />
                            <meta name="description" content="OpenChat is a fully featured chat application running end-to-end on the Internet Computer blockchain." />
                            <meta property="og:title" content="OpenChat">
                            <meta property="og:type" content="website" />
                            <meta property="og:description" content="OpenChat is a fully featured chat application running end-to-end on the Internet Computer blockchain.">
                            <meta property="og:image" content="/share-oc-light.png">
                            <meta name="twitter:image" content="/share-oc-light.png">
                            <meta property="og:url" content="https://oc.app">
                            <meta name="twitter:card" content="summary_large_image">
                            <meta property="og:site_name" content="OpenChat">
                            <meta name="twitter:image:alt" content="OpenChat is a fully featured chat application running end-to-end on the Internet Computer blockchain.">
                            <link rel="manifest" href="/openchat.webmanifest" />
                            <link rel="apple-touch-startup-image" href="/apple-touch-icon.png" />
                            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                            <link rel="icon" type="image/png" href="/icon.png" />
                            <link rel="stylesheet" href="/${cssFile}" />
                            <link rel="preconnect" href="https://fonts.googleapis.com" />
                            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                            <link
                                href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&family=Roboto:wght@300;400&display=swap"
                                rel="stylesheet"
                            />

                            <script type="module" defer src="/${jsEntryFile}"></script>
                        </head>
                        <body></body>
                    </html>
                    `;
            },
        }),
    ],
    watch: {
        clearScreen: false,
    },
};

function maybeStringify(value) {
    return value !== undefined ? JSON.stringify(value) : undefined;
}
