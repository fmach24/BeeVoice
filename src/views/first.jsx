import React from 'react';

function FirstView() {
  const headerStyle = {
    backgroundColor: '#8B4513', // SaddleBrown
    color: '#FFD700', // Gold
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif'
  };

  const navStyle = {
    display: 'flex',
    gap: '25px',
  };

  const linkStyle = {
    color: '#FFFFFF', // White
    textDecoration: 'none',
    fontSize: '1.1em',
    fontWeight: 'bold',
    transition: 'color 0.3s ease'
  };

  const heroSectionStyle = {
    textAlign: 'center',
    padding: '80px 20px',
    backgroundColor: '#F5DEB3', // Wheat
    color: '#5A2D0C', // Dark brown for text
    fontFamily: 'Georgia, serif',
    lineHeight: '1.6'
  };

  const sloganStyle = {
    fontSize: '2.5em',
    marginBottom: '20px',
    color: '#8B4513'
  };

  const descriptionStyle = {
    fontSize: '1.2em',
    maxWidth: '800px',
    margin: '0 auto 30px auto'
  };

  const buttonStyle = {
    backgroundColor: '#A0522D', // Sienna
    color: 'white',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1em',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FDF5E6' }}>
      <header style={headerStyle}>
        <h1 style={{ margin: 0, fontSize: '1.8em' }}>Piekarnia Szymona z Limanowej</h1>
        <nav style={navStyle}>
          <a href="#" style={linkStyle}>Strona Główna</a>
          <a href="#" style={linkStyle}>Oferta</a>
          <a href="#" style={linkStyle}>O Nas</a>
          <a href="#" style={linkStyle}>Kontakt</a>
        </nav>
      </header>
      <section style={heroSectionStyle}>
        <h2 style={sloganStyle}>Tradycja i Smak Prosto z Serca Limanowej</h2>
        <p style={descriptionStyle}>
          Od pokoleń pieczemy dla Państwa najsmaczniejsze chleby, bułki i ciasta, bazując na sprawdzonych recepturach i lokalnych składnikach.
          Doświadcz prawdziwego smaku domowych wypieków.
        </p>
        <button style={buttonStyle}>Zobacz Naszą Ofertę</button>
      </section>
    </div>
  );
}

export default FirstView;