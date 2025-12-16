require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' });


const ai = new GoogleGenAI({}); // Inicjalizacja Gemini

app.use(bodyParser.json());
app.use(cors({ origin: "*" })); 

const REACT_COMPONENTS_DIR = path.join(__dirname, 'src', 'views');

const MODEL_NAME = 'gemini-2.5-flash'; 

// PROMPTY - troche crazzyy

function getNewProjectPrompt(description) {
    return `Jesteś ekspertem ReactJS. Stwórz 3 RÓŻNE, kompletne propozycje interfejsu (komponenty) na podstawie opisu:
"${description}"

ZASADY KONTENERA (BARDZO WAŻNE):
1. Twój komponent renderuje się w MAŁYM OKNIE (nie na pełnym ekranie).
2. Główny wrapper musi mieć styl: {{ width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden', boxSizing: 'border-box' }}.
3. ZAKAZ używania "100vw" lub "100vh" (używaj 100%).
4. ZAKAZ sztywnych szerokości (np. width: 1200px). Używaj %, flex lub max-width.

ZASADY TECHNICZNE:
1. Używaj WYŁĄCZNIE stylów inline.
2. BRAK zewnętrznych bibliotek.
3. Czysty React.

WYMAGANY FORMAT WYJŚCIOWY:
--- first.jsx ---
// kod
--- second.jsx ---
// kod
--- third.jsx ---
// kod

ZAKAZY:
- Żadnych opisów, tylko kod.
- Brak markdowna poza kodem.
`;
}

function getEvolutionaryPrompt(comment, baseCode) {
    return `Jesteś ekspertem UI/UX i ReactJS. Twoim zadaniem jest ewolucja interfejsu w 3 SKRAJNIE RÓŻNYCH kierunkach.

DANE WEJŚCIOWE:
1. KOD BAZOWY:
\`\`\`jsx
${baseCode}
\`\`\`
2. INSTRUKCJA ZMIAN (Musi być wdrożona w każdym pliku):
"${comment}"

BARDZO WAŻNE:
Model ma tendencję do tworzenia identycznych plików. TO JEST ZABRONIONE.
Każdy z 3 plików musi mieć INNY KOD CSS/STYLE.

ZADANIA DLA KAŻDEGO PLIKU:

--- Wariant 1 (first.jsx): BEZPIECZNA AKTUALIZACJA ---
1. Weź kod bazowy.
2. Wprowadź zmianę z instrukcji: "${comment}".
3. ZACHOWAJ resztę układu i stylów w 99% taką samą jak w oryginale. To jest wersja dla klienta, który nie lubi zmian.

--- Wariant 2 (second.jsx): REWOLUCJA UKŁADU (LAYOUT REMIX) ---
1. Wprowadź zmianę z instrukcji.
2. ZMIEŃ FUNDAMENTALNIE UKŁAD (LAYOUT).
   - Jeśli menu było na górze -> daj je na bok lub na dół.
   - Jeśli kontent był w jednej kolumnie -> zrób dwie (grid).
   - Jeśli przyciski były okrągłe -> zrób kwadratowe.
   - Odwróć kolejność sekcji.
3. Ten widok MUSI mieć inną strukturę DOM/Flexbox niż first.jsx.
4. Zmień troche kolory i czcionkę. Poszalej.

--- Wariant 3 (third.jsx): NOWY VIBE (ARTISTIC REDESIGN) ---
1. Wprowadź zmianę z instrukcji.
2. ZMIEŃ KOLORY I TYPOGRAFIĘ.
   - Zmień tło (np. z jasnego na ciemne lub odwrotnie).
   - Zmień style obramowań (np. dodaj gruby border lub mocne cienie).
   - Zmień fonty (np. z szeryfowych na bezszeryfowe).
3. To ma wyglądać jak "skórka" inna niż oryginał.

WYMAGANY FORMAT WYJŚCIOWY:
--- first.jsx ---
// kod
--- second.jsx ---
// kod
--- third.jsx ---
// kod

ZASADY TECHNICZNE:
- Tylko React + style inline (style={{...}}).
- Żadnych zewnętrznych bibliotek.
- Zwróć TYLKO KOD.
`;
}


function saveComponents(responseText) {
    console.log("Przetwarzanie i zapisywanie plików...");
    const regex = /---\s*([a-z]+\.jsx)\s*---\s*(.*?)(?=\s*---\s*[a-z]+\.jsx\s*---|$)/gs;
    let match;
    let savedCount = 0;

    while ((match = regex.exec(responseText)) !== null) {
        const fileName = match[1];
        let code = match[2];

        code = code.replace(/```jsx|```/g, '').trim();

        // Odcinanie śmieci
        const junkMarkers = ["\n### ", "\n**Propo", "\n--- \n", "\nTen kod"];
        junkMarkers.forEach(marker => {
            const index = code.indexOf(marker);
            if (index !== -1) code = code.substring(0, index).trim();
        });
        
        if (code && code.length > 50) { 
            const filePath = path.join(REACT_COMPONENTS_DIR, fileName);
            fs.writeFileSync(filePath, code, 'utf8');
            console.log(`Zapisano: ${fileName}`);
            savedCount++;
        }
    }
    if (savedCount === 0) console.warn("Nie znaleziono kodu do zapisania.");
}

async function callGemini(fullPrompt, audioPart = null) {
    try {
        const contents = audioPart 
            ? [{ role: "user", parts: [{ text: fullPrompt }, audioPart] }]
            : [{ role: "user", parts: [{ text: fullPrompt }] }];

        const response = await ai.models.generateContent({
            model: MODEL_NAME, 
            contents: contents,
            config: { temperature: 0.9, candidateCount: 1 }
        });
        return response.text;
    } catch (error) {
        console.error("Błąd API:", error.message);
        return null;
    }
}

// --- ENDPOINTY ---

// 1. Transkrypcja Audio
app.post('/transcribe', upload.single('audio'), async (req, res) => {
    try {
        if (!req.file) return res.status(400).send({ error: "Brak pliku audio" });
        
        const audioData = fs.readFileSync(req.file.path);
        const transcriptText = await callGemini(
            "Dokładna transkrypcja na polski. Tylko tekst.",
            { inlineData: { mimeType: req.file.mimetype, data: audioData.toString('base64') } }
        );
        fs.unlinkSync(req.file.path);
        res.json({ text: transcriptText ? transcriptText.trim() : "" });
    } catch (error) {
        console.error("Błąd transkrypcji:", error);
        res.status(500).json({ error: "Błąd." });
    }
});

// 2. Nowy Projekt
app.post('/new', async (req, res) => {
    const promptText = req.body.prompt;
    console.log(`\nNowy projekt: "${promptText}"`);
    const systemPrompt = getNewProjectPrompt(promptText);
    const responseText = await callGemini(systemPrompt);
    
    if (responseText) {
        saveComponents(responseText);
        res.json({ status: "success" });
    } else {
        res.status(500).json({ error: "Błąd generowania" });
    }
});

// 3. Edycja (Tekst + Opcjonalny Obraz)
app.post('/edit', upload.single('image'), async (req, res) => {
    const { comment, bestViewIndex } = req.body;
    const viewIndex = parseInt(bestViewIndex, 10);
    const files = ['first.jsx', 'second.jsx', 'third.jsx'];
    const selectedFile = files[viewIndex];

    if (!selectedFile) return res.status(400).send("Błąd indexu");

    console.log(`\nEdycja: ${selectedFile}, Instrukcja: "${comment}"`);
    
    const filePath = path.join(REACT_COMPONENTS_DIR, selectedFile);
    let baseCode = "";
    if (fs.existsSync(filePath)) baseCode = fs.readFileSync(filePath, 'utf8');

    let imagePart = null;
    if (req.file) {
        console.log("Wykryto zrzut ekranu");
        const imgData = fs.readFileSync(req.file.path);
        imagePart = { inlineData: { mimeType: req.file.mimetype, data: imgData.toString('base64') } };
        fs.unlinkSync(req.file.path);
    }

    let finalPrompt = getEvolutionaryPrompt(comment, baseCode);
    
    // Jeśli jest obrazek, dodajemy instrukcję "Patrz na mazak"
    if (imagePart) {
        finalPrompt = `ZADANIE MULTIMODALNE (TEKST + OBRAZ):
1. Spójrz na obraz. Użytkownik zaznaczył coś CZERWONYM MAZAKIEM (red scribble).
2. Zlokalizuj ten obszar w kodzie poniżej.
3. Wprowadź zmiany GŁÓWNIE w tym zaznaczonym obszarze.
` + finalPrompt;
    }

    const responseText = await callGemini(finalPrompt, imagePart);
    
    if (responseText) {
        saveComponents(responseText);
        res.json({ status: "success", evolvedFrom: selectedFile });
    } else {
        res.status(500).json({ error: "Błąd edycji" });
    }
});

app.listen(4000, () => {
  console.log('Serwer BeeVoice - działa na porcie 4000');
});