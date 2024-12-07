document.getElementById("translateBtn").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
    const targetLanguage = document.getElementById("languageSelect").value;

    if (!inputText) {
        alert("Please enter text to translate.");
        return;
    }

    // Simulate translation (this is just a placeholder)
    // Replace this with a real API call (e.g., Google Translate API or DeepL API)
    const translations = {
        en: "Translation in English: " + inputText,
        es: "Traducción en español: " + inputText,
        fr: "Traduction en français: " + inputText,
        de: "Übersetzung auf Deutsch: " + inputText,
    };

    const translatedText = translations[targetLanguage] || "Translation not available.";
    document.getElementById("outputText").value = translatedText;
});