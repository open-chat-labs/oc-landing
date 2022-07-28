import { readable, derived } from "svelte/store";

export const dimensions = readable(
    { width: window.innerWidth, height: window.innerHeight },
    function start(set) {
        function resize() {
            set({ width: window.innerWidth, height: window.innerHeight });
            resetRootFontForScreenWidth(window.innerWidth);
        }

        window.addEventListener("resize", resize);

        return function stop() {
            window.removeEventListener("resize", resize);
        };
    }
);

resetRootFontForScreenWidth(window.innerWidth);

function resetRootFontForScreenWidth(width: number) {
    if (width < 354) {
        setRootFontSize(13);
    } else if (width < 576) {
        setRootFontSize(13);
    } else if (width < 768) {
        setRootFontSize(14);
    } else if (width < 992) {
        setRootFontSize(14);
    } else if (width < 1200) {
        setRootFontSize(15);
    } else {
        setRootFontSize(16);
    }
}

export const enum ScreenWidth {
    ExtraExtraSmall = "ExtraExtraSmall",
    ExtraSmall = "ExtraSmall",
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
    ExtraLarge = "ExtraLarge",
    ExtraExtraLarge = "ExtraExtraLarge",
}

export const enum ScreenHeight {
    Small = "Small",
    Large = "Large",
}

function setRootFontSize(n: number): void {
    console.log("Setting root font size to: ", n);
    document.documentElement.style.setProperty("--font-size", `${n}px`);
}

export const screenWidth = derived(dimensions, ($dimensions) => {
    if ($dimensions.width < 354) {
        setRootFontSize(13);
        return ScreenWidth.ExtraExtraSmall;
    } else if ($dimensions.width < 576) {
        setRootFontSize(14);
        return ScreenWidth.ExtraSmall;
    } else if ($dimensions.width < 768) {
        setRootFontSize(14);
        return ScreenWidth.Small;
    } else if ($dimensions.width < 992) {
        setRootFontSize(15);
        return ScreenWidth.Medium;
    } else if ($dimensions.width < 1200) {
        setRootFontSize(15);
        return ScreenWidth.Large;
    } else if ($dimensions.width < 1792) {
        setRootFontSize(16);
        return ScreenWidth.ExtraLarge; // this is the default width on 15' macbook
    } else {
        setRootFontSize(16);
        return ScreenWidth.ExtraExtraLarge;
    }
});

export const mobileWidth = derived(dimensions, ($dimensions) => {
    return $dimensions.width < 768;
});

export const screenHeight = derived(dimensions, ($dimensions) => {
    if ($dimensions.height < 768) {
        return ScreenHeight.Small;
    } else {
        return ScreenHeight.Large;
    }
});
