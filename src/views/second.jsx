import React, { useState } from 'react';

function SecondView() {
  const [cartCount, setCartCount] = useState(0);

  const primaryColor = '#4CAF50'; // Green
  const accentColor = '#FFC107'; // Amber
  const bgColor = '#E8F5E9'; // Light Green
  const textColor = '#388E3C'; // Darker Green
  const cardBgColor = '#FFFFFF';

  const headerStyle = {
    backgroundColor: primaryColor,
    color: '#FFFFFF',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const navStyle = {
    display: 'flex',
    gap: '25px',
  };

  const linkStyle = {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '1em',
    fontWeight: 'bold',
    transition: 'color 0.3s ease'
  };

  const mainStyle = {
    flexGrow: 1,
    padding: '40px 20px',
    backgroundColor: bgColor,
    color: textColor,
    fontFamily: 'Verdana, sans-serif'
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2.5em',
    marginBottom: '40px',
    color: primaryColor
  };

  const productGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const cardStyle = {
    backgroundColor: cardBgColor,
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column'
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
  };

  const cardImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    backgroundColor: '#CFD8DC' // Light blue-grey placeholder
  };

  const cardContentStyle = {
    padding: '20px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const cardTitleStyle = {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: primaryColor
  };

  const cardDescriptionStyle = {
    fontSize: '0.9em',
    color: '#607D8B', // Blue Grey
    marginBottom: '15px'
  };

  const cardPriceStyle = {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#E65100', // Deep Orange
    marginBottom: '15px'
  };

  const addButtonBaseStyle = {
    backgroundColor: primaryColor,
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.3s ease'
  };

  const addButtonHoverStyle = {
    backgroundColor: '#66BB6A' // Lighter Green
  };

  const footerStyle = {
    backgroundColor: primaryColor,
    color: '#FFFFFF',
    textAlign: 'center',
    padding: '15px',
    fontSize: '0.8em',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 -2px 4px rgba(0,0,0,0.1)'
  };

  const products = [
    { id: 1, name: 'Ekologiczny Chleb', description: 'Wypiekany z pełnoziarnistej mąki, na naturalnym zakwasie.', price: '12.50 zł' },
    { id: 2, name: 'Ciastka Owocowe', description: 'Świeże owoce sezonowe, kruche ciasto.', price: '8.00 zł' },
    { id: 3, name: 'Rogaliki Maślane', description: 'Puszyste i aromatyczne, idealne na śniadanie.', price: '3.50 zł' },
    { id: 4, name: 'Sernik Klasyczny', description: 'Tradycyjny sernik z domowego sera, pieczony według babcinej receptury.', price: '45.00 zł' },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: bgColor }}>
      <header style={headerStyle}>
        <h1 style={{ margin: 0, fontSize: '1.8em' }}>EcoPiekarnia</h1>
        <nav style={navStyle}>
          <a href="#" style={linkStyle}>Produkty</a>
          <a href="#" style={linkStyle}>Promocje</a>
          <a href="#" style={linkStyle}>O nas</a>
          <a href="#" style={linkStyle}>Koszyk ({cartCount})</a>
        </nav>
      </header>
      <main style={mainStyle}>
        <h2 style={titleStyle}>Nasze Ekologiczne Wypieki</h2>
        <div style={productGridStyle}>
          {products.map(product => (
            <div
              key={product.id}
              style={{ ...cardStyle, ...(hoveredCard === product.id ? cardHoverStyle : {}) }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={cardImageStyle}></div> {/* Placeholder for image */}
              <div style={cardContentStyle}>
                <div>
                  <h3 style={cardTitleStyle}>{product.name}</h3>
                  <p style={cardDescriptionStyle}>{product.description}</p>
                </div>
                <div>
                  <p style={cardPriceStyle}>{product.price}</p>
                  <button
                    style={{
                      ...addButtonBaseStyle,
                      ...(hoveredCard === product.id ? addButtonHoverStyle : {})
                    }}
                    onClick={() => setCartCount(cartCount + 1)}
                  >
                    Dodaj do koszyka
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} EcoPiekarnia. Smacznego!</p>
      </footer>
    </div>
  );
}

export default SecondView;