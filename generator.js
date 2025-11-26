// generator.js
require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const readline = require('readline');

// Upewnij się, że zmienna środowiskowa GEMINI_API_KEY jest ustawiona
const ai = new GoogleGenAI({}); 
console.log("Używany klucz API Gemini:", process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.substring(0, 5) + '...' : 'BRAK');

// Ścieżka do katalogu z komponentami React
// Pamiętaj: Upewnij się, że to jest poprawna ścieżka do Twojego projektu!
const REACT_COMPONENTS_DIR = path.join(__dirname, 'src', 'views');

// --- Zmienne do historii ---
// Stan przechowujący kontekst najlepszego widoku i ostatniego prompta
let refinementContext = {
    bestPrompt: "",
    lastPrompt: "",
    bestViewIndex: 0,
    refinementNotes: ""
};

// --- Funkcje pomocnicze ---

/**
 * Zwraca ustrukturyzowany prompt systemowy dla Gemini, uwzględniający kontekst udoskonaleń.
 */
function getSystemPrompt(newPrompt, isRefining) {
    const baseSystem = `Jesteś ekspertem generującym kod komponentów ReactJS. Twoim zadaniem jest stworzenie trzech różnych, kompletnych widoków w formacie funkcyjnym komponentu (hooks i proste style inline są dozwolone).

Musisz rygorystycznie przestrzegać poniższego formatu wyjściowego. Użyj dokładnie tych samych separatorów i nazw plików, bez dodatkowych komentarzy ani wstępu poza blokami kodu. Każdy kod musi być gotowym, samodzielnym komponentem do importu.
`;

    let context = "";
    if (isRefining && refinementContext.bestPrompt) {
        context = `\n--- KONTEKST UDOSKONALENIA ---\n
PROMPT BAZOWY (dla najlepszego widoku): ${refinementContext.bestPrompt}
WYBRANY WIDOK DO POPRAWY: ${refinementContext.bestViewIndex + 1} (plik first.jsx, second.jsx lub third.jsx)
OSTATNIE UWAGI/POPRAWKI: ${refinementContext.refinementNotes}

TWOJE ZADANIE: Użyj prompta użytkownika (poniżej) jako modyfikacji do PROMPTA BAZOWEGO. Skup się na ulepszeniu jednego z trzech widoków lub stworzeniu trzech nowych wariantów spełniających nowe uwagi.
`;
    }

    const outputFormat = `
--- first.jsx ---
// [TUTAJ KOMPONENT REACTJS DLA first.jsx]

--- second.jsx ---
// [TUTAJ KOMPONENT REACTJS DLA second.jsx]

--- third.jsx ---
// [TUTAJ KOMPONENT REACTJS DLA third.jsx]
`;
    
    return baseSystem + context + outputFormat + `\n--- AKTUALNA PROŚBA UŻYTKOWNIKA ---\n` + newPrompt;
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
 * Pętla do ciągłego udoskonalania widoków.
 */
async function refinementLoop() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("--- Kreator Widoków ReactJS z Gemini ---");
    console.log("Aplikacja React powinna być uruchomiona i monitorować zmiany.");
    console.log("---------------------------------------");

    let running = true;
    while (running) {
        let isRefining = refinementContext.bestPrompt !== "";

        // 1. Pytanie o prompta lub akcję
        const actionPrompt = await new Promise(resolve => {
            if (isRefining) {
                 rl.question(`\nIteracja ${refinementContext.bestViewIndex + 1}. Wybierz akcję (1-3 dla wyboru, 'n' dla nowego prompta, 'q' dla wyjścia, lub wpisz uwagi do poprawy): `, resolve);
            } else {
                 rl.question("Podaj prompt dla trzech nowych widoków (np. 'trzy wersje strony logowania'): ", resolve);
            }
        });

        // Obsługa wyjścia
        if (actionPrompt.toLowerCase() === 'q') {
            running = false;
            break;
        }

        // 2. Obsługa wyboru/udokonalenia
        if (isRefining && ['1', '2', '3'].includes(actionPrompt)) {
            const selectedIndex = parseInt(actionPrompt) - 1;
            refinementContext.bestViewIndex = selectedIndex;
            
            const refinementNotes = await new Promise(resolve => {
                rl.question(`Wybrano Widok ${selectedIndex + 1}. Wpisz uwagi/poprawki dla Gemini (np. "Widok 3 jest najlepszy, ale potrzebuje większych przycisków"): `, resolve);
            });
            
            refinementContext.refinementNotes = refinementNotes;
            console.log(`\nPrzygotowuję się do udoskonalenia na podstawie: "${refinementNotes}"`);
            
            // Kontynuujemy z nowym promptem, który będzie zawierał kontekst
            const fullPrompt = getSystemPrompt(refinementNotes, true);
            refinementContext.lastPrompt = refinementNotes; // Zapisujemy ostatnie uwagi

            await callGeminiAndSave(fullPrompt);

        } else if (isRefining && actionPrompt.toLowerCase() === 'n') {
             // Wyczyść historię i poproś o nowy, bazowy prompt
             refinementContext = { bestPrompt: "", lastPrompt: "", bestViewIndex: 0, refinementNotes: "" };
             console.log("Rozpoczynanie od zera...");

        } else if (isRefining) {
             // Jeśli wprowadzono tekst, zakładamy, że to uwagi do ostatniego prompta
             refinementContext.refinementNotes = actionPrompt;
             console.log(`\nPrzygotowuję się do udoskonalenia na podstawie: "${actionPrompt}"`);
             
             const fullPrompt = getSystemPrompt(actionPrompt, true);
             refinementContext.lastPrompt = actionPrompt;

             await callGeminiAndSave(fullPrompt);
            
        } else { 
            // Pierwszy prompt lub nowy bazowy prompt
            refinementContext.bestPrompt = actionPrompt; // Ustawiamy to jako prompt bazowy
            refinementContext.lastPrompt = actionPrompt;
            refinementContext.refinementNotes = "Pierwsza generacja";

            const fullPrompt = getSystemPrompt(actionPrompt, false);
            await callGeminiAndSave(fullPrompt);
        }
    }
    
    rl.close();
    console.log("Zakończono kreator widoków.");
}

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

// Uruchomienie pętli
refinementLoop();