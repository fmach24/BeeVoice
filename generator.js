// generator.js
require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const readline = require('readline');
const express =require("express");
const cors =require('cors');
const bodyParser = require('body-parser');
const app = express();
// Upewnij się, że zmienna środowiskowa GEMINI_API_KEY jest ustawiona
const ai = new GoogleGenAI({}); 
console.log("Używany klucz API Gemini:", process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.substring(0, 5) + '...' : 'BRAK');
app.use(bodyParser.json())

const allowedOrigins = ["http://localhost:3000","http://localhost:8080"];

    app.use(
        cors({
            origin: function(origin, callback) {
                if (!origin) return callback(null, true);
                if (allowedOrigins.indexOf(origin) === -1) {
                    var msg =
                        "The CORS policy for this site does not " +
                        "allow access from the specified Origin.";
                    return callback(new Error(msg), false);
                }
                return callback(null, true);
            }
        })
    ); 

// Ścieżka do katalogu z komponentami React
// Pamiętaj: Upewnij się, że to jest poprawna ścieżka do Twojego projektu!
const REACT_COMPONENTS_DIR = path.join(__dirname, 'src', 'views');

/**
 * Zwraca ustrukturyzowany prompt systemowy dla Gemini, uwzględniający kontekst udoskonaleń.
 */
function getSystemPrompt(comment, bestCode) {
    const baseSystem = `Jesteś ekspertem generującym kod komponentów ReactJS. Twoim zadaniem jest stworzenie trzech różnych, kompletnych widoków w formacie funkcyjnym komponentu (hooks i proste style inline są dozwolone).

Musisz rygorystycznie przestrzegać poniższego formatu wyjściowego. Użyj dokładnie tych samych separatorów i nazw plików, bez dodatkowych komentarzy ani wstępu poza blokami kodu. Każdy kod musi być gotowym, samodzielnym komponentem do importu.
`;

        context = `\n--- KONTEKST UDOSKONALENIA ---\n
WYBRANY WIDOK DO POPRAWY: ${bestCode}
OSTATNIE UWAGI/POPRAWKI: ${comment}
`;

    const outputFormat = `
--- first.jsx ---
// [TUTAJ KOMPONENT REACTJS DLA first.jsx]

--- second.jsx ---
// [TUTAJ KOMPONENT REACTJS DLA second.jsx]

--- third.jsx ---
// [TUTAJ KOMPONENT REACTJS DLA third.jsx]
`;
    
    return baseSystem + context + outputFormat
}


/**
 * Ekstrahuje kody z odpowiedzi Gemini i zapisuje je do plików.
 * Zmieniona logika parsowania na bardziej elastyczną, używającą regex.
 * @param {string} responseText Odpowiedź tekstowa od Gemini.
 */
function saveComponents(responseText) {
    console.log("Ekstrakcja i zapisywanie komponentów...");
    const files = ['first.jsx', 'second.jsx', 'third.jsx'];
    let successCount = 0;

    // Regex do wyłapania bloku kodu: --- filename --- [CODE] --- (nastepny plik lub koniec)
    // flaga 's' (dotall) pozwala, aby kropka pasowała także do znaków nowej linii
    const regex = /---\s*([a-z]+\.jsx)\s*---\s*(.*?)(?=\s*---\s*[a-z]+\.jsx\s*---|$)/gs;
    let match;
    const extractedCodes = {};

    while ((match = regex.exec(responseText)) !== null) {
        const fileName = match[1];
        let code = match[2];
        
        // Czyścimy: usuwamy znaczniki markdown, białe znaki
        code = code.replace(/```jsx|```/g, '').trim();
        
        extractedCodes[fileName] = code;
    }

    files.forEach(fileName => {
        const code = extractedCodes[fileName];
        
        if (code && code.length > 50) { 
            const filePath = path.join(REACT_COMPONENTS_DIR, fileName);
            fs.writeFileSync(filePath, code, 'utf8');
            console.log(`✅ Zapisano pomyślnie: ${fileName} (${code.length} bajtów)`);
            successCount++;
        } else {
            console.warn(`⚠️ Ostrzeżenie: Plik ${fileName} nie został nadpisany lub kod jest zbyt krótki.`);
        }
    });

    if (successCount === files.length) {
        console.log("Wszystkie pliki zostały zaktualizowane. Odśwież widok w przeglądarce.");
    }
}

// Funkcja restartu została usunięta, ponieważ Node jest już odpalony
// i zmiany plików powinny wywołać Live Reload w React.



/**
 * Wywołuje Gemini i zapisuje pliki, obsługując tryb debugowania.
 */
async function callGeminiAndSave(fullPrompt) {
    const debugFile = 'gemini_response.txt';
    let responseText = null;

    if (fs.existsSync(debugFile)) {
        // Tryb DEBUG
        responseText = fs.readFileSync(debugFile, 'utf8');
        console.log(`[DEBUG] Używam odpowiedzi z pliku ${debugFile}.`);
    } else {
        // Tryb API
        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash', 
                contents: fullPrompt,
            });
            responseText = response.text;
        } catch (error) {
            console.error("\n[BŁĄD GEMINI] Nie udało się wygenerować kodu:", error.message);
            return;
        }
    }

    if (responseText) {
        saveComponents(responseText);
    }
}




app.post('/edit', async (req,res)=>{

    const bestVersion = req.body.bestView;
    const comment = req.body.comment;
    const files = ['first.jsx', 'second.jsx', 'third.jsx'];
    const selectedFile = files[bestVersion]
    const filePath = path.join(REACT_COMPONENTS_DIR, selectedFile);
    console.log(filePath);
    let code = ""
    try {
    code = fs.readFileSync(filePath, 'utf8');
    } catch (err) {
    console.error(err);
    }
    const prompt = getSystemPrompt(comment,code);
    await callGeminiAndSave(prompt)
    return "ok"
});

app.listen(4000, () => {
  console.log('REST API server running on port 4000');
});