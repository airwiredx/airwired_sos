

// Apply language-based theme colors
document.addEventListener("DOMContentLoaded", function() {
    var selectedLanguage = localStorage.getItem("selectedLanguage");

    const themeColors = {
        en: "#0033A0", // English (Blue)
        fr: "#0055A4", // French (Blue)
        es: "#AA151B", // Spanish (Red)
        ar: "#008000", // Arabic (Green)
        pt: "#009739", // Portuguese (Green)
        zh: "#DE2910", // Chinese (Red)
        hi: "#FF9933", // Hindi (Orange)
        ru: "#D52B1E", // Russian (Red)
        de: "#000000", // German (Black)
        yo: "#008000", // Yoruba (Green)
        ha: "#008000", // Hausa (Green)
        ig: "#008000", // Igbo (Green)
        pcm: "#008000" // Nigerian Pidgin (Green)
    };

    if (themeColors[selectedLanguage]) {
        document.body.style.backgroundColor = themeColors[selectedLanguage];
    }
});

