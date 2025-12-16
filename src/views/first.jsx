import React from 'react';

const MenuCard = ({ name, price, description }) => (
  <div className="menu-card">
    <h3>{name}</h3>
    <p>{description}</p>
    <span className="price">{price}</span>
  </div>
);

const App = () => {
  const pizzas = [
    { name: "Margherita Glow", price: "$12.99", description: "Klasyczny smak z neonowym blaskiem." },
    { name: "Cyber Pepperoni", price: "$14.99", description: "Ostra pepperoni, nasycona futurystycznymi smakami." },
    { name: "Synth Supreme", price: "$16.99", description: "Wszystkie ulubione składniki, lśniące pod neonami." },
    { name: "Veggie Vapor", price: "$13.99", description: "Świeże warzywa, lekkie jak para, bogate w smak." },
  ];

  return (
    <div className="neon-pizzeria-app">
      <header className="neon-header">
        <h1 className="logo neon-text">Neon Slice</h1>
        <nav>
          <ul>
            <li><a href="#menu" className="neon-link">Menu</a></li>
            <li><a href="#about" className="neon-link">O Nas</a></li>
            <li><a href="#contact" className="neon-link">Kontakt</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <h2 className="neon-text hero-title">Skosztuj Przyszłości, Kęs po Kęsie</h2>
        <p className="hero-subtitle neon-text-secondary">Twój Ulubiony Neonowy Zakątek</p>
        <button className="neon-button">Zamów Teraz!</button>
      </section>

      <section id="menu" className="menu-section">
        <h2 className="neon-text section-title">Nasze Lśniące Menu</h2>
        <div className="menu-grid">
          {pizzas.map((pizza, index) => (
            <MenuCard key={index} {...pizza} />
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <h2 className="neon-text section-title">O Nas</h2>
        <p className="neon-text-secondary">
          Neon Slice to klasyczne wibracje pizzerii z futurystycznym twistem.
          Ciesz się naszą żywą atmosferą i pysznymi, lśniącymi pizzami!
        </p>
      </section>

      <section id="contact" className="contact-section">
        <h2 className="neon-text section-title">Skontaktuj Się</h2>
        <p className="neon-text-secondary">Odwiedź nas: Cyber Ulica 123, Neo Miasto</p>
        <p className="neon-text-secondary">Zadzwoń: (555) NEON-PIZZA</p>
      </section>

      <footer className="neon-footer">
        <p>&copy; 2023 Neon Slice Pizzeria. Wszelkie prawa zastrzeżone.</p>
      </footer>

      {/* Stylizacja CSS */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Press+Start+2P&display=swap');

        :root {
          --neon-blue: #00f0ff;
          --neon-pink: #ff00ff;
          --neon-green: #00ff00;
          --bg-dark: #0a0a1a;
          --text-light: #e0e0e0;
        }

        .neon-pizzeria-app {
          font-family: 'Orbitron', sans-serif; /* Alternatywnie 'Press Start 2P' dla bardziej retro */
          background-color: var(--bg-dark);
          color: var(--text-light);
          min-height: 100vh;
          text-align: center;
          overflow-x: hidden;
          line-height: 1.6;
        }

        .neon-text {
          color: var(--text-light);
          text-shadow: 0 0 5px var(--neon-blue), 0 0 10px var(--neon-blue), 0 0 20px var(--neon-pink), 0 0 40px var(--neon-pink);
        }

        .neon-text-secondary {
            color: var(--text-light);
            text-shadow: 0 0 3px var(--neon-green), 0 0 8px var(--neon-green);
        }

        .neon-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background-color: rgba(0, 0, 0, 0.4);
          border-bottom: 2px solid var(--neon-blue);
          box-shadow: 0 0 15px var(--neon-blue);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .logo {
          font-family: 'Press Start 2P', cursive;
          font-size: 2.5em;
          margin: 0;
        }

        .neon-header nav ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
        }

        .neon-header nav li {
          margin-left: 30px;
        }

        .neon-link {
          text-decoration: none;
          color: var(--text-light);
          font-size: 1.2em;
          padding: 5px 10px;
          transition: all 0.3s ease;
          position: relative;
        }

        .neon-link::before {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background: var(--neon-pink);
            box-shadow: 0 0 5px var(--neon-pink), 0 0 10px var(--neon-pink);
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .neon-link:hover::before {
            transform: scaleX(1);
        }

        .hero-section {
          padding: 100px 20px;
          background: linear-gradient(45deg, #1a0033, #00001a, #330033);
          border-bottom: 2px solid var(--neon-pink);
          box-shadow: 0 0 20px var(--neon-pink);
        }

        .hero-title {
          font-size: 3.5em;
          margin-bottom: 20px;
        }

        .hero-subtitle {
          font-size: 1.5em;
          margin-bottom: 40px;
        }

        .neon-button {
          background: none;
          border: 2px solid var(--neon-blue);
          color: var(--text-light);
          padding: 15px 30px;
          font-size: 1.3em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue) inset;
        }

        .neon-button:hover {
          color: var(--neon-pink);
          border-color: var(--neon-pink);
          box-shadow: 0 0 20px var(--neon-pink), 0 0 40px var(--neon-pink) inset;
          transform: scale(1.05);
        }

        .section-title {
          font-size: 3em;
          margin-bottom: 60px;
          padding-top: 80px;
        }

        .menu-section {
          padding: 80px 20px;
          background-color: #0d0d21;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .menu-card {
          background-color: rgba(0, 0, 0, 0.6);
          padding: 30px;
          border-radius: 10px;
          border: 2px solid transparent;
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.4);
          transition: all 0.3s ease;
          position: relative;
        }

        .menu-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 0 20px var(--neon-pink), 0 0 40px var(--neon-blue);
        }

        .menu-card h3 {
          font-size: 1.8em;
          margin-bottom: 10px;
          color: var(--neon-blue);
          text-shadow: 0 0 5px var(--neon-blue);
        }

        .menu-card p {
          font-size: 1.1em;
          color: var(--text-light);
          margin-bottom: 20px;
        }

        .menu-card .price {
          font-size: 1.5em;
          color: var(--neon-green);
          text-shadow: 0 0 5px var(--neon-green);
          font-weight: bold;
        }

        .about-section, .contact-section {
          padding: 80px 20px;
          background-color: #1a0a2a;
          border-top: 2px solid var(--neon-blue);
          border-bottom: 2px solid var(--neon-pink);
        }

        .about-section p, .contact-section p {
          font-size: 1.2em;
          max-width: 800px;
          margin: 20px auto;
          line-height: 1.6;
        }

        .neon-footer {
          padding: 30px 20px;
          background-color: rgba(0, 0, 0, 0.4);
          border-top: 2px solid var(--neon-green);
          box-shadow: 0 0 15px var(--neon-green);
          font-size: 0.9em;
          color: rgba(255, 255, 255, 0.7);
        }

        /* Responsywność */
        @media (max-width: 768px) {
            .neon-header {
                flex-direction: column;
                padding: 15px 20px;
            }
            .neon-header nav ul {
                margin-top: 15px;
            }
            .neon-header nav li {
                margin: 0 10px;
            }
            .hero-title {
                font-size: 2.5em;
            }
            .hero-subtitle {
                font-size: 1.2em;
            }
            .section-title {
                font-size: 2.2em;
            }
        }
      `}</style>
    </div>
  );
};

export default App;