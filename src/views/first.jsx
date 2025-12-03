import React, { useState } from 'react';

function FirstView() {
  const [buttonHover, setButtonHover] = useState(false);
  const [productCardHover, setProductCardHover] = useState(null);

  const primaryColor = '#8B4513'; // SaddleBrown
  const accentColor = '#FFD700'; // Gold
  const lightBgColor = '#FDF5E6'; // OldLace
  const midBgColor = '#F5DEB3'; // Wheat
  const darkTextColor = '#5A2D0C'; // Dark brown for text
  const textColorAlt = '#6e3e1f';

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
    color: textColorAlt
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

  const productShowcaseSectionStyle = {
    backgroundColor: lightBgColor,
    padding: '60px 20px',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    borderBottom: `1px solid ${primaryColor}`
  };

  const productShowcaseTitleStyle = {
    fontSize: '2.5em',
    color: primaryColor,
    marginBottom: '50px'
  };

  const productGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const productCardBaseStyle = {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    border: `1px solid ${midBgColor}`
  };

  const productCardHoverEffectStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 15px rgba(0,0,0,0.15)'
  };

  const productTitleStyle = {
    color: primaryColor,
    fontSize: '1.4em',
    margin: '15px 0 10px 0'
  };

  const productDescriptionStyle = {
    color: darkTextColor,
    fontSize: '0.95em',
    lineHeight: '1.5'
  };

  const productImageStyle = {
    width: '100%',
    maxWidth: '150px',
    height: 'auto',
    borderRadius: '5px',
    marginBottom: '10px'
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

  const breadItems = [
    { id: 1, name: 'Chleb Żytni na Zakwasie', description: 'Tradycyjny chleb na naturalnym zakwasie, długo dojrzewający, z chrupiącą skórką.', img: 'https://via.placeholder.com/150/8B4513/FFD700?text=Chleb' },
    { id: 2, name: 'Bułki Pszenne', description: 'Puszyste i delikatne bułki, idealne na śniadanie.', img: 'https://via.placeholder.com/150/8B4513/FFD700?text=Bułki' },
    { id: 3, name: 'Chleb Razowy z Ziarnami', description: 'Bogaty w błonnik, z dodatkiem ziaren słonecznika i dyni.', img: 'https://via.placeholder.com/150/8B4513/FFD700?text=Razowy' },
    { id: 4, name: 'Drożdżówka z Serem', description: 'Słodka drożdżówka z kremowym serem i kruszonką.', img: 'https://via.placeholder.com/150/8B4513/FFD700?text=Drożdżówka' },
  ];

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
          <button
            style={{ ...buttonBaseStyle, ...(buttonHover ? buttonHoverStyle : {}) }}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            Zobacz Naszą Ofertę
          </button>
        </section>

        <section style={productShowcaseSectionStyle}>
          <h2 style={productShowcaseTitleStyle}>Nasze Wyjątkowe Pieczywo</h2>
          <div style={productGridStyle}>
            {breadItems.map((item) => (
              <div
                key={item.id}
                style={{ ...productCardBaseStyle, ...(productCardHover === item.id ? productCardHoverEffectStyle : {}) }}
                onMouseEnter={() => setProductCardHover(item.id)}
                onMouseLeave={() => setProductCardHover(null)}
              >
                <img src={item.img} alt={item.name} style={productImageStyle} />
                <h3 style={productTitleStyle}>{item.name}</h3>
                <p style={productDescriptionStyle}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} Piekarnia "Złoty Kłos". Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}

export default FirstView;