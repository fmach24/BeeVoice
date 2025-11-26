require('dotenv').config();
// generator.js
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const readline = require('readline');

// Upewnij się, że zmienna środowiskowa GEMINI_API_KEY jest ustawiona
const ai = new GoogleGenAI({}); 
console.log("Używany klucz API Gemini:", process.env.GEMINI_API_KEY);
// Ścieżka do katalogu z komponentami React
const REACT_COMPONENTS_DIR = path.join(__dirname, 'src', 'views');

// --- Funkcje pomocnicze ---

/**
 * Zwraca ustrukturyzowany prompt systemowy dla Gemini.
 */
function getSystemPrompt() {
    return `
Jesteś ekspertem generującym kod komponentów ReactJS. Twoim zadaniem jest stworzenie trzech różnych, kompletnych widoków w formacie funkcyjnym komponentu (hooks i proste style inline są dozwolone).

Musisz rygorystycznie przestrzegać poniższego formatu wyjściowego. Użyj dokładnie tych samych separatorów i nazw plików, bez dodatkowych komentarzy ani wstępu poza blokami kodu. Każdy kod musi być gotowym, samodzielnym komponentem do importu.

--- first.jsx ---
// [TUTAJ KOMPONENT REACTJS DLA first.jsx]

--- second.jsx ---
// [TUTAJ KOMPONENT REACTJS DLA second.jsx]

--- third.jsx ---
// [TUTAJ KOMPONENT REACTJS DLA third.jsx]
`;
}

/**
 * Ekstrahuje kody z odpowiedzi Gemini i zapisuje je do plików.
 * @param {string} responseText Odpowiedź tekstowa od Gemini.
 */
function saveComponents(responseText) {
    console.log("Ekstrakcja i zapisywanie komponentów...");
    const files = ['first.jsx', 'second.jsx', 'third.jsx'];
    let successCount = 0;

    files.forEach((fileName, index) => {
        // Tworzymy regex, który znajdzie zawartość między '--- filename ---' a następnym '---'
        const startMarker = `--- ${fileName} ---`;
        const endMarker = index < files.length - 1 ? `--- ${files[index + 1]} ---` : null;
        
        const startIndex = responseText.indexOf(startMarker);
        
        if (startIndex === -1) {
            console.warn(`Ostrzeżenie: Nie znaleziono bloku dla pliku ${fileName}.`);
            return;
        }

        // Wyciągamy zawartość od znalezionego markera
        let code = responseText.substring(startIndex + startMarker.length);
        
        // Jeśli istnieje następny plik, ucinamy kod na jego markerze
        if (endMarker) {
            const endIndex = code.indexOf(endMarker);
            if (endIndex !== -1) {
                code = code.substring(0, endIndex);
            }
        }
        
        // Czyścimy: usuwamy znaczniki markdown, białe znaki z początku/końca
        code = code.replace(/```jsx|```/g, '').trim();
        
        console.log("First 500 characters of code for " + fileName + ":\n" + code.substring(0, 500) + "\n---\n");
        
        const filePath = path.join(REACT_COMPONENTS_DIR, fileName);
        fs.writeFileSync(filePath, code, 'utf8');
        console.log(`Zapisano pomyślnie: ${fileName}`);
        successCount++;
    });

    if (successCount === files.length) {
        console.log("Wszystkie pliki zostały zaktualizowane.");
    }
}

/**
 * Uruchamia komendy powłoki do restartu aplikacji React.
 */
/**
 * Uruchamia komendy systemowe do restartu aplikacji ReactJS pod Windows.
 */
function restartReactApp() {
    console.log("\nRestartowanie aplikacji ReactJS (Windows)...");
    const reactAppPath = path.join(__dirname);
    
    // 1. Użycie taskkill do zabicia procesu na porcie 3000
    // Komenda szuka i zabija proces na porcie 3000. Dodajemy || true, by nie rzucić błędu, jeśli proces nie istniał.
    const killCommand = 'for /f "tokens=5" %a in (\'netstat -ano ^| findstr :3000\') do taskkill /pid %a /f || true';

    exec(killCommand, (killError, killStdout, killStderr) => {
        // Ignorujemy błędy taskkill, ponieważ mogą wystąpić, gdy proces nie jest uruchomiony.
        
        // 2. Uruchomienie aplikacji React.
        // Używamy 'start cmd /c "..."', aby otworzyć nowe okno CMD i w nim uruchomić 'npm start'.
        // Dzięki temu proces Node.js uruchamiający generator.js nie jest blokowany.
        const startCommand = `start cmd /c "cd /d "${reactAppPath}" && npm start"`;

        exec(startCommand, (startError, startStdout, startStderr) => {
            if (startError) {
                console.error(`Błąd podczas uruchamiania React (npm start): ${startError}`);
                return;
            }
            console.log("Aplikacja React powinna się uruchomić w nowym oknie CMD (http://localhost:3000).");
            console.log("Przejdź do przeglądarki, aby zobaczyć nowe widoki.");
        });
    });
}

// Reszta kodu generator.js pozostaje bez zmian

/**
 * Główna funkcja kreatora.
 */
// generator.js (Zmodyfikowana funkcja main)
async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const debugFile = 'gemini_response.txt';
    let responseText = null;

    console.log("--- Kreator Widoków ReactJS z Gemini ---");

    // ----------------------------------------------------
    // 🔥🔥 TRYB DEBUGOWANIA 🔥🔥
    // Spróbuj wczytać odpowiedź z pliku
    // ----------------------------------------------------
    if (fs.existsSync(debugFile)) {
        console.log(`\n[DEBUG] Znaleziono plik ${debugFile}. Używam odpowiedzi tymczasowej.`);
        try {
            responseText = fs.readFileSync(debugFile, 'utf8');
            // Jeśli plik jest pusty, wymuś przejście do trybu API
            if (responseText.trim().length < 50) {
                 responseText = null; // Wymuś tryb API
                 console.log("[DEBUG] Plik tymczasowy jest za krótki. Przełączam na tryb API.");
            }
        } catch (e) {
            console.error(`[DEBUG ERROR] Nie udało się odczytać pliku: ${e.message}`);
            responseText = null;
        }
    }
    // ----------------------------------------------------

    if (responseText) {
        // Jeśli załadowano z pliku, omijamy prompt użytkownika
        console.log("Pominięto zapytanie do API. Przetwarzanie danych z pliku...");
    } else {
        // Jeśli plik nie istnieje lub nie został wczytany, przechodzimy do API
        const userPrompt = await new Promise(resolve => {
            rl.question("Podaj prompta (np. 'trzy wersje strony logowania'): ", resolve);
        });
        rl.close();

        const fullPrompt = getSystemPrompt() + "\n\n--- Prośba Użytkownika ---\n" + userPrompt;
        console.log("\nWysyłanie zapytania do Gemini...");

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash', 
                contents: fullPrompt,
            });
            responseText = response.text;
        } catch (error) {
            console.error("\n[BŁĄD GEMINI] Nie udało się wygenerować kodu:", error.message);
            console.log("Sprawdź, czy klucz API jest poprawny.");
            return;
        }
    }
    
    // Używamy responseText niezależnie od źródła (plik lub API)
    
    // 1. Ekstrakcja i zapis
    saveComponents(responseText);

    // 2. Restart aplikacji
    restartReactApp();
}

main();