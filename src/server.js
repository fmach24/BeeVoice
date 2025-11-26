

// Pobranie klucza API ze zmiennej środowiskowej serwera
// UWAGA: Klucz musi być ustawiony w konsoli przed uruchomieniem serwera!
const SERVER_API_KEY = "AIzaSyDa81vOaJdhalEbaVxJkNkCkM6kFBYq4fk"
const express = require('express');
const bodyParser = require('body-parser');
const { GoogleGenAI } = require('@google/genai');

const app = express();
const PORT = 3001;


if (!SERVER_API_KEY) {
    console.error("Błąd: Zmienna środowiskowa GEMINI_API_KEY_SERVER nie jest ustawiona.");
    process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: SERVER_API_KEY });

app.use(bodyParser.json());

// Konfiguracja CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// --- ZMODYFIKOWANY Endpoint Gemini ---
app.post('/api/generate', async (req, res) => {
    // Akceptujemy instrukcję i poprzedni kod
    const { instruction, previousCode } = req.body; 

    if (!instruction || !previousCode) {
        return res.status(400).json({ error: 'Brak instrukcji lub poprzedniej wersji kodu w żądaniu.' });
    }

    // 1. Konstrukcja Precyzyjnego Promptu
    const prompt = `
        Jesteś ekspertem React. Twoim zadaniem jest zmodyfikowanie poniższego kodu komponentu React (JSX) zgodnie z instrukcją użytkownika.
        
        Zwróć TYLKO i WYŁĄCZNIE kompletny, poprawny i gotowy do użycia kod komponentu React w formacie strzałkowej funkcji JavaScript, zaczynając od 'const DynamicComponent = () => {' i kończąc na '};'. a następnie musi, w ostatniej linijce, ZWRÓCIĆ tę funkcję, używając 'return DynamicComponent;'.
        Nie dołączaj żadnych importów, komentarzy, bloku markdown (typu \`\`\`), ani dodatkowych wyjaśnień. 

        Instrukcja użytkownika: "${instruction}"
        
        Oto AKTUALNA WERSJA KODU, którą musisz zmodyfikować:
        
        ${previousCode}
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash", 
            contents: prompt,
        });

        // Wysłanie odpowiedzi z powrotem do frontendu
        // Gemini zwraca TYLKO kod, zgodnie z promptem
        console.log("Otrzymany kod z Gemini:", response.text);
        res.json({ newCode: response.text }); 

    } catch (error) {
        console.error('Błąd komunikacji z Gemini:', error);
        res.status(500).json({ error: 'Błąd generowania kodu.' });
    }
});

app.listen(PORT, () => {
    console.log(`Serwer Proxy działa na porcie ${PORT}`);
    console.log(`Używa klucza z ENV: ${SERVER_API_KEY.substring(0, 5)}...`);
});