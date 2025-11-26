import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const API_ENDPOINT = 'http://localhost:3001/api/generate';

// 1. Początkowy komponent, który będzie modyfikowany przez Gemini
// Musi być w formacie, który Gemini będzie modyfikować.
const INITIAL_JSX_CODE = `
DynamicComponent = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div style={{ padding: '20px', border: '2px solid #3498db', borderRadius: '8px', textAlign: 'center' }}>
            <h2>Hello from Dynamic React!</h2>
            <p>Licznik: {count}</p>
            <button 
                onClick={() => setCount(count + 1)} 
                style={{ backgroundColor: '#2ecc71', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Kliknij mnie
            </button>
        </div>
    );
}; `;

// Miejsce, gdzie skompilowany komponent będzie wstrzykiwany
const RENDER_CONTAINER_ID = 'dynamic-root';

function CodeGenerator() {
    const [instruction, setInstruction] = useState('');
    const [currentCode, setCurrentCode] = useState(INITIAL_JSX_CODE);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // --- 2. Funkcja Kompilująca i Renderująca ---
    // --- ZMODYFIKOWANA Funkcja Kompilująca i Renderująca ---
// --- ZMODYFIKOWANA Funkcja Kompilująca i Renderująca ---
// --- ZMODYFIKOWANA Funkcja Kompilująca i Renderująca ---
const compileAndRender = (code) => {
    setError('');
    
    try {
        // 1. Babel Standalone transformuje kod JSX/React na czysty JS
        const compiledJs = window.Babel.transform(code, {
            presets: ['react'],
        }).code;

        // 2. Owinięcie kodu funkcją anonimową i bezpieczne wykonanie
        // Konstrukcja: new Function(code)(); wykonuje kod i zwraca wartość 'return'.
        const componentFunctionCode = `
            
                // Konieczne importy w zakresie wykonania kodu
                const React = window.React;
                const useState = React.useState;
                const useEffect = React.useEffect;
                
                // Wstrzyknięcie skompilowanego JS (który powinien zawierać 'return DynamicComponent;')
                ${compiledJs}
                
            
        `;
        console.log("Kompilowany kod funkcji komponentu:", componentFunctionCode);
        eval(componentFunctionCode)
        // Utworzenie i wywołanie nowej funkcji (najbezpieczniejszy odpowiednik eval())
        // Zmienna 'componentFunction' przechwyci funkcję zwracaną przez skompilowany kod.

        console.log("componentFunction uzyskana z eval:", DynamicComponent);
        
        // Po pomyślnej kompilacji zapisujemy nowy kod
        setCurrentCode(code);
        return true;

    } catch (err) {
        console.error("Błąd kompilacji/renderowania:", err);
        setError(`Błąd kompilacji JSX: ${err.message}. Sprawdź kod!`);
        return false;
    }
};
    
    // Uruchomienie kompilacji początkowego kodu przy ładowaniu
    useEffect(() => {
        compileAndRender(INITIAL_JSX_CODE);
    }, []);


    // --- 3. Wysyłanie do Proxy i Pobieranie Nowego Kodu ---
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!instruction.trim()) {
            setError('Wpisz instrukcję!');
            return;
        }

        setIsLoading(true);

        try {
            const res = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    instruction: instruction,
                    previousCode: currentCode // Wysyłamy poprzednią wersję kodu!
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Błąd serwera Proxy.');
            }

            const newCode = data.newCode.trim();

            // 4. Kompilacja i renderowanie nowego kodu
            if (compileAndRender(newCode)) {
                setInstruction(''); // Czyścimy pole instrukcji
            }
            
        } catch (err) {
            setError(`Błąd: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    // --- 5. Renderowanie Interfejsu ---
    return (
        <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
            <h1>🔮 Generator UI React (Gemini + Kompilacja w Przeglądarce)</h1>
            <p style={{ color: 'green' }}>Klucz API ukryty na serwerze Proxy. Kompilacja JSX odbywa się w przeglądarce (Babel Standalone).</p>

            <div style={{ display: 'flex', gap: '20px' }}>
                
                {/* Panel Kontrolny */}
                <div style={{ flex: 1 }}>
                    <h2>1. Instrukcja</h2>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            placeholder="Np. Zmień kolor tła przycisku na czerwony i dodaj tytuł 'Nowy Projekt'."
                            value={instruction}
                            onChange={(e) => setInstruction(e.target.value)}
                            rows="4"
                            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                            disabled={isLoading}
                        />
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            style={{ width: '100%', padding: '10px', fontSize: '18px', cursor: 'pointer', marginTop: '10px', backgroundColor: '#3498db', color: 'white', border: 'none' }}
                        >
                            {isLoading ? 'Generowanie i Kompilacja...' : 'Wyślij do Gemini i Kompiluj'}
                        </button>
                    </form>
                    {error && <div style={{ color: 'red', marginTop: '15px' }}>{error}</div>}

                    <h2 style={{ marginTop: '30px' }}>2. Wygenerowany Kod JSX</h2>
                    <p>Ostatnio zmodyfikowany kod, wysyłany jako kontekst do Gemini:</p>
                    <pre style={{ whiteSpace: 'pre-wrap', backgroundColor: '#f4f4f4', padding: '10px', maxHeight: '400px', overflowY: 'scroll' }}>
                        <code>{currentCode}</code>
                    </pre>
                </div>

                {/* Podgląd Komponentu */}
                <div style={{ flex: 1, borderLeft: '1px solid #ccc', paddingLeft: '20px' }}>
                    <h2>3. Dynamiczny Podgląd React</h2>
                    <div id={RENDER_CONTAINER_ID} style={{ minHeight: '300px', border: '1px dashed #aaa' }}>
                        {/* Tutaj Babel wstrzyknie skompilowany komponent */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CodeGenerator;