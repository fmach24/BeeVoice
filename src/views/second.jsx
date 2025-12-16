import React, { useState } from 'react';

const pizzas = [
  { id: 1, name: "PIXEL PEPPERONI", desc: "KLASYCZNY SMAK, 8-BITOWA ZABAWA.", img: "🍕" },
  { id: 2, name: "SYNTH WAVE SUPREME", desc: "STRZAŁ Z PRZYSZŁOŚCI-PRZESZŁOŚCI.", img: "✨" },
  { id: 3, name: "GALACTIC GARDEN", desc: "WARZYWA Z KOSMOSU.", img: "🌿" },
  { id: 4, name: "QUANTUM QUATTRO", desc: "CZTERY SERY, NIESKOŃCZONY SMAK.", img: "🧀" },
];

const App = () => {
  const [selectedPizza, setSelectedPizza] = useState(null);

  const handleSelectPizza = (pizza) => {
    setSelectedPizza(pizza);
  };

  return (
    <div className="arcade-pizzeria-app">
      <header className="arcade-header">
        <h1 className="game-title neon-flicker">NEON ARCADE PIZZERIA</h1>
        <div className="score-display">
          PUNKTY: <span className="neon-green">99999</span> | ŻYCIA: <span className="neon-red">3</span>
        </div>
      </header>

      <div className="main-screen">
        <aside className="menu-selection">
          <h2 className="section-header glitch">WYBIERZ SWOJĄ MISJĘ</h2>
          <ul className="pizza-list">
            {pizzas.map((pizza) => (
              <li
                key={pizza.id}
                className={`pizza-item ${selectedPizza && selectedPizza.id === pizza.id ? 'active-selection' : ''}`}
                onClick={() => handleSelectPizza(pizza)}
              >
                <span className="pizza-icon">{pizza.img}</span> {pizza.name}
              </li>
            ))}
          </ul>
          <button className="start-button glow-pulse" disabled={!selectedPizza}>
            {selectedPizza ? `ZAMÓW ${selectedPizza.name}` : 'WYBIERZ PIZZĘ ABY ZAMÓWIĆ'}
          </button>
        </aside>

        <main className="pizza-display">
          {selectedPizza ? (
            <div className="pizza-detail">
              <h3 className="neon-text-light glitch">{selectedPizza.name}</h3>
              <p className="neon-text-secondary">{selectedPizza.desc}</p>
              <div className="pizza-art">{selectedPizza.img}</div>
            </div>
          ) : (
            <div className="placeholder-text neon-flicker">
              <p>NACISNIJ START ABY ZACZĄĆ!</p>
              <p>WYBIERZ SWOJE PRZEZNACZENIE!</p>
            </div>
          )}
        </main>
      </div>

      <footer className="arcade-footer">
        <p className="neon-green">© 2023 RETROSLICE CORP. WSZELKIE PRAWA ZASTRZEŻONE. WRZUĆ MONETĘ ABY KONTYNUOWAĆ.</p>
      </footer>

      {/* Stylizacja CSS */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        :root {
          --arcade-bg: #000000;
          --neon-blue: #00f0ff;
          --neon-pink: #ff00ff;
          --neon-green: #00ff00;
          --neon-red: #ff004c;
          --text-color: #c0c0c0;
          --border-color: #333;
        }

        .arcade-pizzeria-app {
          font-family: 'Press Start 2P', cursive;
          background-color: var(--arcade-bg);
          color: var(--text-color);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        .arcade-pizzeria-app::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.15),
                rgba(0, 0, 0, 0.15) 1px,
                transparent 1px,
                transparent 2px
            );
            pointer-events: none;
            z-index: 1;
        }

        .arcade-header {
          width: 100%;
          max-width: 1200px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
          background-color: rgba(10, 10, 10, 0.8);
          border: 3px solid var(--neon-blue);
          box-shadow: 0 0 15px var(--neon-blue), inset 0 0 15px var(--neon-blue);
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
        }

        .game-title {
          font-size: 2.5em;
          color: var(--neon-pink);
          margin: 0;
          text-shadow: 0 0 8px var(--neon-pink), 0 0 15px var(--neon-pink);
          letter-spacing: 2px;
        }

        .score-display {
          font-size: 1.1em;
          color: var(--text-color);
          text-shadow: 0 0 5px var(--neon-green);
        }

        .neon-green { color: var(--neon-green); text-shadow: 0 0 5px var(--neon-green); }
        .neon-red { color: var(--neon-red); text-shadow: 0 0 5px var(--neon-red); }

        .main-screen {
          flex-grow: 1;
          width: 100%;
          max-width: 1200px;
          display: flex;
          gap: 30px;
          background-color: rgba(20, 20, 20, 0.7);
          border: 3px solid var(--neon-green);
          box-shadow: 0 0 15px var(--neon-green), inset 0 0 15px var(--neon-green);
          padding: 30px;
          position: relative;
          z-index: 2;
        }

        .menu-selection {
          flex: 1;
          padding-right: 20px;
          border-right: 2px dashed var(--border-color);
        }

        .section-header {
          font-size: 1.8em;
          color: var(--neon-blue);
          text-shadow: 0 0 5px var(--neon-blue), 0 0 10px var(--neon-blue);
          margin-bottom: 30px;
          border-bottom: 1px solid var(--neon-blue);
          padding-bottom: 10px;
        }

        .pizza-list {
          list-style: none;
          padding: 0;
          margin: 0 0 40px 0;
        }

        .pizza-item {
          font-size: 1.3em;
          padding: 15px 10px;
          margin-bottom: 10px;
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          text-align: left;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .pizza-item:hover {
          border-color: var(--neon-pink);
          color: var(--neon-pink);
          text-shadow: 0 0 5px var(--neon-pink);
          background-color: rgba(255, 0, 255, 0.1);
        }

        .pizza-item.active-selection {
          border-color: var(--neon-green);
          color: var(--neon-green);
          text-shadow: 0 0 8px var(--neon-green), 0 0 15px var(--neon-green);
          background-color: rgba(0, 255, 0, 0.15);
          animation: pulse-border 1s infinite alternate;
        }

        .pizza-icon {
            font-size: 1.2em;
        }

        .start-button {
          background-color: var(--neon-blue);
          border: none;
          color: var(--arcade-bg);
          padding: 20px 30px;
          font-family: 'Press Start 2P', cursive;
          font-size: 1.1em;
          cursor: pointer;
          border-radius: 5px;
          box-shadow: 0 0 15px var(--neon-blue);
          transition: all 0.3s ease;
          width: 100%;
          text-transform: uppercase;
        }

        .start-button:hover:not(:disabled) {
          background-color: var(--neon-pink);
          box-shadow: 0 0 20px var(--neon-pink);
          color: white;
        }

        .start-button:disabled {
          background-color: #333;
          box-shadow: none;
          color: #888;
          cursor: not-allowed;
        }

        .pizza-display {
          flex: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
          min-height: 400px;
        }

        .pizza-detail h3 {
          font-size: 2.5em;
          margin-bottom: 15px;
        }

        .pizza-detail p {
          font-size: 1em;
          max-width: 400px;
          line-height: 1.4;
          margin-bottom: 30px;
        }

        .pizza-art {
          font-size: 6em; /* Duże emoji dla efektu pixel art */
          line-height: 1;
          animation: pizza-spin 4s infinite linear;
        }

        .placeholder-text {
            font-size: 1.5em;
            color: var(--neon-green);
            text-shadow: 0 0 5px var(--neon-green);
            line-height: 1.6;
        }

        .neon-flicker {
            animation: flicker 1.5s infinite alternate;
        }

        .glitch {
            position: relative;
        }
        .glitch::before,
        .glitch::after {
            content: attr(data-text); /* W tym przypadku po prostu replikujemy cienie tekstu */
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            text-shadow: 0 0 5px var(--neon-blue);
            z-index: -1;
        }
        .glitch::before {
            left: 2px;
            text-shadow: -2px 0 var(--neon-pink);
            clip: rect(44px, 450px, 56px, 0);
            animation: glitch-anim-1 2s infinite linear alternate-reverse;
        }
        .glitch::after {
            left: -2px;
            text-shadow: -2px 0 var(--neon-green);
            clip: rect(85px, 450px, 100px, 0);
            animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }

        .glow-pulse {
            animation: glow-pulse 2s infinite alternate;
        }

        /* Animacje */
        @keyframes flicker {
          0%, 18%, 22%, 25%, 53%, 57%, 100% {
            text-shadow: 0 0 5px var(--neon-blue), 0 0 10px var(--neon-blue), 0 0 20px var(--neon-pink);
            opacity: 1;
          }
          20%, 24%, 55% {
            text-shadow: none;
            opacity: 0.8;
          }
        }

        @keyframes pulse-border {
            0% { box-shadow: 0 0 0 0 rgba(0,255,0,0.4); }
            100% { box-shadow: 0 0 0 10px rgba(0,255,0,0); }
        }

        @keyframes glow-pulse {
            0% { box-shadow: 0 0 15px var(--neon-blue); }
            100% { box-shadow: 0 0 25px var(--neon-blue), 0 0 40px var(--neon-blue); }
        }

        @keyframes pizza-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        /* Uproszczone animacje glitch */
        @keyframes glitch-anim-1 {
            0% { clip: rect(44px, 450px, 56px, 0); transform: skew(0.5deg); }
            5% { clip: rect(78px, 450px, 100px, 0); transform: skew(-0.8deg); }
            10% { clip: rect(10px, 450px, 25px, 0); transform: skew(1.2deg); }
            15% { clip: rect(60px, 450px, 70px, 0); transform: skew(-0.3deg); }
            20% { clip: rect(30px, 450px, 45px, 0); transform: skew(0.7deg); }
            25% { clip: rect(50px, 450px, 65px, 0); transform: skew(-0.5deg); }
            30% { clip: rect(20px, 450px, 35px, 0); transform: skew(0.9deg); }
            100% { clip: rect(44px, 450px, 56px, 0); transform: skew(0.5deg); }
        }
        @keyframes glitch-anim-2 {
            0% { clip: rect(85px, 450px, 100px, 0); transform: skew(-0.8deg); }
            5% { clip: rect(10px, 450px, 25px, 0); transform: skew(1.2deg); }
            10% { clip: rect(60px, 450px, 70px, 0); transform: skew(-0.3deg); }
            15% { clip: rect(30px, 450px, 45px, 0); transform: skew(0.7deg); }
            20% { clip: rect(44px, 450px, 56px, 0); transform: skew(0.5deg); }
            25% { clip: rect(15px, 450px, 28px, 0); transform: skew(-1deg); }
            30% { clip: rect(70px, 450px, 85px, 0); transform: skew(0.6deg); }
            100% { clip: rect(85px, 450px, 100px, 0); transform: skew(-0.8deg); }
        }

        /* Responsywność */
        @media (max-width: 768px) {
            .arcade-header {
                flex-direction: column;
                text-align: center;
                padding: 15px;
            }
            .game-title {
                font-size: 1.8em;
                margin-bottom: 10px;
            }
            .main-screen {
                flex-direction: column;
                gap: 20px;
                padding: 20px;
            }
            .menu-selection {
                border-right: none;
                border-bottom: 2px dashed var(--border-color);
                padding-right: 0;
                padding-bottom: 20px;
            }
            .section-header {
                font-size: 1.5em;
            }
            .pizza-item {
                font-size: 1.1em;
            }
            .pizza-detail h3 {
                font-size: 2em;
            }
            .pizza-art {
                font-size: 4em;
            }
            .start-button {
                font-size: 0.9em;
                padding: 15px 20px;
            }
        }
      `}</style>
    </div>
  );
};

export default App;