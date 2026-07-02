console.log("Injector loaded");

let theaterEnabled = false;
let lastVideoId = "";

function goHome() {
    window.location.href = "https://www.youtube.com/";
}

function forceHighestQuality() {
    const player = document.getElementById("movie_player");

    if (!player) return;

    try {
        const qualities = player.getAvailableQualityLevels?.();

        if (!qualities?.length) return;

        const best = qualities[0];

        console.log("Available qualities:", qualities);
        console.log("Setting quality:", best);

        player.setPlaybackQualityRange?.(best);
        player.setPlaybackQuality?.(best);
    } catch (err) {
        console.log("Quality error:", err);
    }
}

function updateLayout() {
    const watchPage = location.pathname.startsWith("/watch");

    document.body.classList.toggle("obs-watch-page", watchPage);

    if (!watchPage) {
        theaterEnabled = false;
        lastVideoId = "";
        return;
    }

    const watch = document.querySelector("ytd-watch-flexy");
    const theaterButton = document.querySelector(".ytp-size-button");

    if (!watch || !theaterButton) return;

    if (!watch.hasAttribute("theater") && !theaterEnabled) {
        theaterEnabled = true;
        theaterButton.click();
    }

    const videoId = new URLSearchParams(location.search).get("v");

    if (videoId && videoId !== lastVideoId) {
        lastVideoId = videoId;

        // Give YouTube time to initialize the player
        setTimeout(forceHighestQuality, 1500);
    }
}

document.addEventListener("keydown", (e) => {
    const tag = document.activeElement?.tagName;

    if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        document.activeElement?.isContentEditable
    ) {
        return;
    }

    if (e.key === "Backspace") {
        e.preventDefault();
        goHome();
    }
});

const observer = new MutationObserver(updateLayout);

observer.observe(document.body, {
    childList: true,
    subtree: true
});

window.addEventListener("yt-navigate-finish", () => {
    setTimeout(updateLayout, 300);
});

window.addEventListener("load", () => {
    setTimeout(updateLayout, 300);
});

updateLayout();