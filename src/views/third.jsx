import React from 'react';

const MenuItem = ({ name, description, price, isSpecial }) => (
  <div className={`modern-menu-item ${isSpecial ? 'special-glow' : ''}`}>
    <div className="item-info">
      <h3 className="item-name">{name}</h3>
      <p className="item-description">{description}</p>
    </div>
    <span className="item-price">{price}</span>
  </div>
);

const App = () => {
  const pizzas = [
    { name: "NEO MARGHERITA", description: "Klasyka, na nowo wyobrażona z nowoczesnym blaskiem.", price: "$12.99" },
    { name: "CYBER KURCZAK", description: "Kurczak grillowany, wędzone chipotle i neonowa mżawka.", price: "$15.50", isSpecial: true },
    { name: "ELEKTRYCZNE WARZYWA", description: "Świeże warzywa sezonowe, jasne i żywe.", price: "$14.00" },
    { name: "RETRO ROMANA", description: "Anchois, kapary, oliwki – ponadczasowy smak.", price: "$13.75" },
    { name: "METROPOLIS MIĘSNA", description: "Pepperoni, kiełbasa, szynka, marzenie mięsożercy.", price: "$16.99", isSpecial: true },
  ];

  return (
    <div className="modern-neon-pizzeria">
      <header className="modern-header">
        <h1 className="modern-logo">
          <span className="logo-text-primary">NEO</span>
          <span className="logo-text-secondary">PIZZA</span>
        </h1>
        <nav className="modern-nav">
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#about" className="nav-link">O Nas</a>
          <a href="#contact" className="nav-link">Kontakt</a>
        </nav>
      </header>

      <section className="hero-modern">
        <div className="hero-content">
          <h2 className="hero-title">Poczuj Noc</h2>
          <p className="hero-subtitle">Wyrafinowane smaki w eleganckiej, lśniącej atmosferze.</p>
          <button className="cta-button">Zobacz Menu</button>
        </div>
        <div className="hero-overlay"></div>
      </section>

      <section id="menu" className="menu-modern">
        <h2 className="section-title">Nasze Firmowe Kawałki</h2>
        <div className="menu-list">
          {pizzas.map((pizza, index) => (
            <MenuItem key={index} {...pizza} />
          ))}
        </div>
        <button className="cta-button secondary-button">Pełne Menu i Zamawianie</button>
      </section>

      <footer className="modern-footer">
        <p className="footer-text">&copy; 2023 NEOPIZZA. Nowoczesny Smak. Neonowe Noce.</p>
      </footer>

      {/* Stylizacja CSS */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Bebas+Neue&display=swap');

        :root {
          --dark-bg: #0d0d1a;
          --accent-glow: #00f0ff; /* Cyjan */
          --secondary-glow: #ff00ff; /* Magenta */
          --text-color-light: #f0f0f0;
          --text-color-dark: #b0b0b0;
        }

        .modern-neon-pizzeria {
          font-family: 'Montserrat', sans-serif;
          background-color: var(--dark-bg);
          color: var(--text-color-light);
          min-height: 100vh;
          overflow-x: hidden;
          text-align: center;
        }

        .modern-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px 50px;
          background-color: rgba(0, 0, 0, 0.4);
          border-bottom: 1px solid rgba(0, 240, 255, 0.2);
          position: sticky;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }

        .modern-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3em;
          margin: 0;
          line-height: 1;
        }

        .logo-text-primary {
          color: var(--text-color-light);
          text-shadow: 0 0 8px var(--accent-glow), 0 0 15px var(--accent-glow);
        }

        .logo-text-secondary {
          color: var(--secondary-glow);
          text-shadow: 0 0 6px var(--secondary-glow), 0 0 10px var(--secondary-glow);
          margin-left: -0.1em; /* Korekta optyczna */
        }

        .modern-nav .nav-link {
          color: var(--text-color-dark);
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1em;
          margin-left: 35px;
          padding: 5px 0;
          position: relative;
          transition: all 0.3s ease;
        }

        .modern-nav .nav-link::before {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 50%;
            width: 0;
            height: 2px;
            background: var(--accent-glow);
            box-shadow: 0 0 5px var(--accent-glow);
            transition: all 0.3s ease;
            transform: translateX(-50%);
        }

        .modern-nav .nav-link:hover {
          color: var(--text-color-light);
          text-shadow: 0 0 5px var(--accent-glow);
        }

        .modern-nav .nav-link:hover::before {
            width: 100%;
        }

        .hero-modern {
          height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          /* Tło: Użyj własnego obrazu w stylu neonowym lub ciemnego tła miasta */
          background: url('https://images.unsplash.com/photo-1517248135460-4c31154316d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80') center center/cover no-repeat fixed;
          box-shadow: inset 0 0 50px rgba(0,240,255,0.2), inset 0 0 100px rgba(255,0,255,0.2);
        }

        .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                to bottom,
                rgba(13, 13, 26, 0.6) 0%,
                rgba(13, 13, 26, 0.8) 50%,
                rgba(13, 13, 26, 0.9) 100%
            );
            z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding: 20px;
        }

        .hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 5em;
          margin-bottom: 20px;
          color: var(--text-color-light);
          text-shadow: 0 0 10px var(--accent-glow), 0 0 20px var(--accent-glow);
          letter-spacing: 2px;
        }

        .hero-subtitle {
          font-size: 1.5em;
          color: var(--text-color-dark);
          text-shadow: 0 0 5px rgba(255,255,255,0.3);
          margin-bottom: 40px;
        }

        .cta-button {
          background: none;
          border: 2px solid var(--accent-glow);
          color: var(--text-color-light);
          padding: 15px 35px;
          font-size: 1.2em;
          font-weight: 600;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          box-shadow: 0 0 15px rgba(0,240,255,0.4);
          border-radius: 5px;
        }

        .cta-button:hover {
          background-color: var(--accent-glow);
          color: var(--dark-bg);
          box-shadow: 0 0 25px var(--accent-glow), 0 0 40px var(--accent-glow);
          transform: translateY(-3px);
        }

        .menu-modern {
          padding: 80px 20px;
          background-color: var(--dark-bg);
          position: relative;
          z-index: 5;
        }

        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3.5em;
          margin-bottom: 70px;
          color: var(--text-color-light);
          text-shadow: 0 0 8px var(--secondary-glow), 0 0 15px var(--secondary-glow);
          letter-spacing: 1px;
        }

        .menu-list {
          max-width: 900px;
          margin: 0 auto 60px auto;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .modern-menu-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px 30px;
          background-color: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(0, 240, 255, 0.1);
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
        }

        .modern-menu-item::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, var(--accent-glow), var(--secondary-glow));
            z-index: -1;
            filter: blur(8px);
            opacity: 0;
            transition: opacity 0.3s ease;
            border-radius: 8px;
        }

        .modern-menu-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
        }

        .modern-menu-item:hover::before {
            opacity: 0.6;
        }

        .modern-menu-item.special-glow {
            border-color: var(--secondary-glow);
            box-shadow: 0 0 15px rgba(255,0,255,0.4);
        }
        .modern-menu-item.special-glow .item-name {
            color: var(--secondary-glow);
            text-shadow: 0 0 8px var(--secondary-glow);
        }
        .modern-menu-item.special-glow .item-price {
            color: var(--accent-glow);
            text-shadow: 0 0 6px var(--accent-glow);
        }
        .modern-menu-item.special-glow:hover::before {
            opacity: 0.8;
            background: linear-gradient(45deg, var(--secondary-glow), var(--accent-glow));
        }

        .item-info {
          text-align: left;
          flex-grow: 1;
        }

        .item-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8em;
          margin-bottom: 5px;
          color: var(--accent-glow);
          text-shadow: 0 0 5px var(--accent-glow);
        }

        .item-description {
          font-size: 0.95em;
          color: var(--text-color-dark);
          line-height: 1.4;
        }

        .item-price {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6em;
          color: var(--secondary-glow);
          text-shadow: 0 0 5px var(--secondary-glow);
          margin-left: 30px;
        }

        .secondary-button {
            background: none;
            border: 1px solid var(--text-color-dark);
            color: var(--text-color-dark);
            box-shadow: none;
            font-size: 1em;
            padding: 12px 25px;
            margin-top: 30px;
        }

        .secondary-button:hover {
            border-color: var(--accent-glow);
            color: var(--accent-glow);
            background-color: rgba(0, 240, 255, 0.1);
            box-shadow: 0 0 15px rgba(0, 240, 255, 0.4);
        }

        .modern-footer {
          padding: 40px 20px;
          background-color: rgba(0, 0, 0, 0.6);
          border-top: 1px solid rgba(255, 0, 255, 0.2);
          color: var(--text-color-dark);
          font-size: 0.9em;
          text-shadow: 0 0 3px rgba(255,255,255,0.1);
        }

        /* Responsywność */
        @media (max-width: 768px) {
            .modern-header {
                flex-direction: column;
                padding: 20px;
            }
            .modern-logo {
                font-size: 2.5em;
                margin-bottom: 15px;
            }
            .modern-nav .nav-link {
                margin: 0 15px;
                font-size: 1em;
            }
            .hero-title {
                font-size: 3.5em;
            }
            .hero-subtitle {
                font-size: 1.2em;
            }
            .section-title {
                font-size: 2.8em;
                margin-bottom: 50px;
            }
            .modern-menu-item {
                flex-direction: column;
                align-items: flex-start;
                padding: 20px;
            }
            .item-name {
                font-size: 1.6em;
            }
            .item-description {
                margin-bottom: 10px;
            }
            .item-price {
                align-self: flex-end;
                margin-left: 0;
            }
        }

        @media (max-width: 480px) {
            .modern-nav {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 10px;
            }
            .modern-nav .nav-link {
                margin: 0 5px;
            }
            .hero-title {
                font-size: 2.5em;
            }
            .hero-subtitle {
                font-size: 1em;
            }
        }
      `}</style>
    </div>
  );
};

export default App;