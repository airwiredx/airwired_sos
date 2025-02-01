


// Retrieve and apply language selection
document.addEventListener("DOMContentLoaded", function() {
    var selectedLanguage = localStorage.getItem("selectedLanguage");
    if (!selectedLanguage) {
        window.location.href = "index.html"; // Redirect if no language selected
    }
});

