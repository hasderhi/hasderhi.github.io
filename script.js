function toggleViewmode() {
    const body = document.body;

    // Toggle between light and dark manually
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    } else if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    } else {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                body.classList.add("light-mode");
            } else {
                body.classList.add("dark-mode");
            }
    }
}

function goHome() {
    window.location.href = 'index.html';
}

function toggleDescription(card) {
    card.classList.toggle("expanded");
}

toggleViewmode()
toggleViewmode()

