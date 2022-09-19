/* eslint-disable no-undef */
import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
import css from "rollup-plugin-css-only";
import dev from "rollup-plugin-dev";
import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";
import inject from "rollup-plugin-inject";

const production = !process.env.ROLLUP_WATCH;

function serve() {
    return dev({
        dirs: ["./build", "./public"],
        spa: "./index.html",
        port: 8080,
    });
}

console.log("Production: ", production);
console.log("INTERNET_IDENTITY_URL", process.env.INTERNET_IDENTITY_URL);

export default {
    input: "./src/main.ts",
    output: {
        sourcemap: true,
        format: "es",
        name: "app",
        file: "public/bundle.js",
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
        // we'll extract any component CSS out into
        // a separate file - better for performance
        css({ output: "bundle.css" }),

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
        }),
    ],
    watch: {
        clearScreen: false,
    },
};

function maybeStringify(value) {
    return value !== undefined ? JSON.stringify(value) : undefined;
}
