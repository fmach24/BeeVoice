import React from 'react';

function SecondView() {
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

  const mainContainerStyle = {
    padding: '40px 20px',
    backgroundColor: '#FDF5E6', // OldLace
    fontFamily: 'Georgia, serif',
    color: '#5A2D0C'
  };

  const sectionTitleStyle = {
    textAlign: 'center',
    fontSize: '2.5em',
    marginBottom: '50px',
    color: '#8B4513'
  };

  const productGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const productCardStyle = {
    backgroundColor: '#FFFFFF',
    border: '1px solid #D2B48C', // Tan
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    paddingBottom: '20px'
  };

  const productImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    marginBottom: '15px'
  };

  const productNameStyle = {
    fontSize: '1.8em',
    color: '#A0522D', // Sienna
    marginBottom: '10px'
  };

  const productDescriptionStyle = {
    fontSize: '1em',
    color: '#696969', // DimGray
    padding: '0 15px'
  };

  const products = [
    { name: 'Chleb Wiejski', desc: 'Tradycyjny chleb na zakwasie, pieczony w piecu opalanym drewnem.', img: 'https://via.placeholder.com/300x200?text=Chleb+Wiejski' },
    { name: 'Bułki Kajzerki', desc: 'Puszyste i chrupiące bułki, idealne na śniadanie.', img: 'https://via.placeholder.com/300x200?text=Bulki+Kajzerki' },
    { name: 'Ciasto Drożdżowe', desc: 'Słodkie ciasto z kruszonką i sezonowymi owocami.', img: 'https://via.placeholder.com/300x200?text=Ciasto+Drozdzowe' },
    { name: 'Sernik Limanowski', desc: 'Aksamitny sernik na kruchym spodzie, według babcinej receptury.', img: 'https://via.placeholder.com/300x200?text=Sernik+Limanowski' },
    { name: 'Rogaliki Maślane', desc: 'Delikatne rogaliki z marmoladą lub czekoladą.', img: 'https://via.placeholder.com/300x200?text=Rogaliki+Maslane' },
    { name: 'Pączki Tradycyjne', desc: 'Puszyste pączki z różą, smażone na złoto.', img: 'https://via.placeholder.com/300x200?text=Paczki+Tradycyjne' },
  ];

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
      <div style={mainContainerStyle}>
        <h2 style={sectionTitleStyle}>Nasza Wyjątkowa Oferta Wypieków</h2>
        <div style={productGridStyle}>
          {products.map((product, index) => (
            <div key={index} style={productCardStyle}>
              <img src={product.img} alt={product.name} style={productImageStyle} />
              <h3 style={productNameStyle}>{product.name}</h3>
              <p style={productDescriptionStyle}>{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SecondView;