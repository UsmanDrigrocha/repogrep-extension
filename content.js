document.addEventListener("keydown", (e) => {
    alert("Redirecting to Repogrep...");
    const tag = document.activeElement?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || document.activeElement?.isContentEditable) {
        return;
    }

    if (e.key.toLowerCase() === "r") {
        const currentUrl = window.location.href;

        if (currentUrl.startsWith("https://github.com/")) {
            const newUrl = currentUrl.replace(
                "https://github.com/",
                "https://repogrep.com/"
            );

            window.location.href = newUrl;
        }
    }
});
