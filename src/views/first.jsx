import React, { useState } from 'react';

function FirstView() {
  const [buttonHover, setButtonHover] = useState(false);

  const primaryColor = '#8B4513'; // SaddleBrown
  const accentColor = '#FFD700'; // Gold
  const lightBgColor = '#FDF5E6'; // OldLace
  const midBgColor = '#F5DEB3'; // Wheat
  const darkTextColor = '#5A2D0C'; // Dark brown for text

  const headerStyle = {
    backgroundColor: primaryColor,
    color: accentColor,
    padding: '15px 25px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Roboto, sans-serif',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  };

  const navStyle = {
    display: 'flex',
    gap: '30px',
  };

  const linkBaseStyle = {
    color: '#FFFFFF', // White by default
    textDecoration: 'none',
    fontSize: '1.1em',
    fontWeight: 'bold',
    transition: 'color 0.3s ease, transform 0.3s ease',
  };

  const heroSectionStyle = {
    textAlign: 'center',
    padding: '100px 20px',
    backgroundColor: midBgColor,
    color: darkTextColor,
    fontFamily: 'Georgia, serif',
    lineHeight: '1.6',
    borderBottom: `1px solid ${primaryColor}`
  };

  const sloganStyle = {
    fontSize: '3em',
    marginBottom: '25px',
    color: primaryColor,
    fontWeight: 'bold'
  };

  const descriptionStyle = {
    fontSize: '1.3em',
    maxWidth: '850px',
    margin: '0 auto 40px auto',
    color: '#6e3e1f'
  };

  const buttonBaseStyle = {
    backgroundColor: primaryColor,
    color: 'white',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.2em',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  };

  const buttonHoverStyle = {
    backgroundColor: '#A0522D', // Sienna
    transform: 'translateY(-2px)'
  };

  const footerStyle = {
    backgroundColor: primaryColor,
    color: lightBgColor,
    textAlign: 'center',
    padding: '20px',
    fontSize: '0.9em',
    marginTop: 'auto',
    fontFamily: 'Roboto, sans-serif'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: lightBgColor }}>
      <header style={headerStyle}>
        <h1 style={{ margin: 0, fontSize: '2em' }}>Piekarnia "Złoty Kłos"</h1>
        <nav style={navStyle}>
          <a href="#" style={linkBaseStyle}>Strona Główna</a>
          <a href="#" style={linkBaseStyle}>Nasze Produkty</a>
          <a href="#" style={linkBaseStyle}>O Nas</a>
          <a href="#" style={linkBaseStyle}>Kontakt</a>
        </nav>
      </header>
      <main style={{ flexGrow: 1 }}>
        <section style={heroSectionStyle}>
          <h2 style={sloganStyle}>Tradycja i Smak Prosto z Serca Limanowej</h2>
          <p style={descriptionStyle}>
            Od pokoleń pieczemy dla Państwa najsmaczniejsze chleby, bułki i ciasta, bazując na sprawdzonych recepturach i lokalnych składnikach.
            Doświadcz prawdziwego smaku domowych wypieków.
          </p>
          <p style={{ color: 'blue', fontSize: '1.5em', fontWeight: 'bold', marginBottom: '30px' }}>hej</p>
          <button
            style={{ ...buttonBaseStyle, ...(buttonHover ? buttonHoverStyle : {}) }}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            Zobacz Naszą Ofertę
          </button>
        </section>
      </main>
      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} Piekarnia "Złoty Kłos". Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}

export default FirstView;