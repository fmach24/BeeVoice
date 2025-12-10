// generator.js
require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer'); // Do obsługi przesyłania plików audio

const app = express();
const upload = multer({ dest: 'uploads/' }); // Folder tymczasowy na pliki audio

const ai = new GoogleGenAI({}); 
console.log("Używany klucz API Gemini:", process.env.GEMINI_API_KEY ? 'OK' : 'BRAK');

app.use(bodyParser.json());
app.use(cors({ origin: "*" })); 

const REACT_COMPONENTS_DIR = path.join(__dirname, 'src', 'views');

// --- Helpery ---

function getSystemPrompt(userInstruction, currentCode = '', targetFile = null) {
    if (targetFile) {
        return `
Jesteś ekspertem ReactJS. Edytuj istniejący komponent.
Plik: ${targetFile}.

AKTUALNY KOD:
\`\`\`jsx
${currentCode}
\`\`\`

INSTRUKCJA:
"${userInstruction}"

ZASADY:
1. Zwróć PEŁNY, poprawiony kod.
2. Format:
--- ${targetFile} ---
// kod
`;
    }

    return `
Stwórz 3 RÓŻNE warianty interfejsu React na podstawie:
"${userInstruction}"

Format:
--- first.jsx ---
// kod
--- second.jsx ---
// kod
--- third.jsx ---
// kod
`;
}

function saveComponents(responseText) {
    console.log("Przetwarzanie odpowiedzi...");
    const regex = /---\s*([a-z]+\.jsx)\s*---\s*(.*?)(?=\s*---\s*[a-z]+\.jsx\s*---|$)/gs;
    let match;
    let savedCount = 0;

    while ((match = regex.exec(responseText)) !== null) {
        const fileName = match[1];
        let code = match[2].replace(/```jsx|```/g, '').trim();
        if (code.length > 20) {
            fs.writeFileSync(path.join(REACT_COMPONENTS_DIR, fileName), code, 'utf8');
            console.log(`✅ Zaktualizowano: ${fileName}`);
            savedCount++;
        }
    }
}

async function callGemini(fullPrompt) {
    const modelName = 'gemini-2.5-flash'; 
    const maxRetries = 3; //gdyby Gemini był zmęczony od roboty to ma 3 próby
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            if (attempt > 1) {
                console.log(`Próba ${attempt}/${maxRetries}... Czekam chwilę...`);
                await new Promise(resolve => setTimeout(resolve, 2000));
            }

            const response = await ai.models.generateContent({
                model: modelName, 
                contents: fullPrompt,
            });
            
            return response.text;

        } catch (error) {
            const isOverloaded = error.message?.includes('503') || error.message?.includes('overloaded');
            
            if (isOverloaded && attempt < maxRetries) {
                console.warn(`Model przeciążony (503). Ponawiam próbę...`);
                continue;
            } else {
                console.error("Krytyczny błąd API Gemini:", error.message);
                return null; // Poddajemy się :(((
            }
        }
    }
    return null;
}

// ENDPOINT: TRANSKRYPCJA AUDIO (Działa na każdej przeglądarce)
app.post('/transcribe', upload.single('audio'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({ error: "Brak pliku audio" });
        }

        console.log("Otrzymano nagranie audio, przetwarzanie...");

        // 1. Wczytaj plik audio z dysku
        const audioPath = req.file.path;
        const audioData = fs.readFileSync(audioPath);
        const base64Audio = audioData.toString('base64');
        const mimeType = req.file.mimetype; // np. audio/webm lub audio/mp4

        // 2. Wyślij do Gemini z prośbą o transkrypcję
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: "Twoim zadaniem jest dokładna transkrypcja tego nagrania audio na tekst w języku polskim. Nie dodawaj żadnych komentarzy, wstępów ani znaczników. Wypisz tylko to, co słyszysz." },
                        {
                            inlineData: {
                                mimeType: mimeType,
                                data: base64Audio
                            }
                        }
                    ]
                }
            ]
        });

        const transcript = response.text.trim();
        console.log(`Transkrypcja: "${transcript}"`);

        // 3. Posprzątaj (usuń plik tymczasowy)
        fs.unlinkSync(audioPath);

        res.json({ text: transcript });

    } catch (error) {
        console.error("Błąd transkrypcji:", error);
        res.status(500).json({ error: "Nie udało się rozpoznać mowy." });
    }
});


// --- Reszta endpointów ---

app.post('/new', async (req, res) => {
    const promptText = req.body.prompt;
    console.log(`Generowanie nowego projektu: "${promptText}"`);
    const systemPrompt = getSystemPrompt(promptText, '', null);
    const responseText = await callGemini(systemPrompt);
    if (responseText) {
        saveComponents(responseText);
        res.status(200).send({ message: "Wygenerowano nowe widoki" });
    } else {
        res.status(500).send({ error: "Błąd generowania" });
    }
});

app.post('/edit', async (req, res) => {
    const { bestViewIndex, comment } = req.body;
    const files = ['first.jsx', 'second.jsx', 'third.jsx'];
    const targetFile = files[bestViewIndex];
    console.log(`Edycja pliku: ${targetFile}. Uwagi: "${comment}"`);
    const filePath = path.join(REACT_COMPONENTS_DIR, targetFile);
    let currentCode = "";
    try {
        currentCode = fs.readFileSync(filePath, 'utf8');
    } catch (err) {
        return res.status(500).send({ error: "Błąd odczytu pliku" });
    }
    const systemPrompt = getSystemPrompt(comment, currentCode, targetFile);
    const responseText = await callGemini(systemPrompt);
    if (responseText) {
        saveComponents(responseText);
        res.status(200).send({ message: "Zaktualizowano widok" });
    } else {
        res.status(500).send({ error: "Błąd edycji" });
    }
});

app.listen(4000, () => {
  console.log('Serwer API działa na porcie 4000');
});