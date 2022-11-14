import { copyToClipboard } from "./copy";

export function copyUrl(ev: CustomEvent<string>) {
    copyToClipboard(`${window.location.origin}${window.location.pathname}#${ev.detail}`);
}

export function scrollToHash(hash: string): number | undefined {
    const matches = /^(\d{1})(?:-(\d{1}))?(?:-(\d{1}))?$/.exec(hash);
    if (!matches) {
        return undefined;
    }

    const [_, one] = matches;

    setTimeout(() => {
        const target = document.getElementById(hash);
        if (!target) {
            console.log("target not found");
            return;
        }

        const rect = target.getBoundingClientRect();
        const top = rect.top + window.scrollY - 80;
        console.log("Scrolling to ", window.scrollY, rect);
        window.scrollTo({
            top,
        });
        target.classList.add("highlight");
        window.setTimeout(() => {
            target.classList.remove("highlight");
        }, 1000);
    }, 200); // this 200 is the duration of the collapsible card transition :puke:

    return Number(one);
}
