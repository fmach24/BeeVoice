import React, { useState, useMemo } from 'react';

function ProductMinimalGrid() {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  // Color palette for this view
  const primaryColor = '#5F9EA0'; // Cadet Blue
  const accentColor = '#FFC0CB'; // Pink
  const lightBgColor = '#F8F8F8'; // Very Light Gray
  const cardBgColor = '#FFFFFF'; // White
  const textColor = '#4682B4'; // Steel Blue
  const lightTextColor = '#778899'; // Light Slate Gray
  const buttonHoverColor = '#467B9E'; // Darker Cadet Blue
  const shadowColor = 'rgba(0, 0, 0, 0.05)';

  const products = useMemo(() => [
    { id: 1, name: 'Artisan Sourdough', price: '12.99 PLN', image: 'https://via.placeholder.com/180x130/87CEEB/FFFFFF?text=Sourdough' },
    { id: 2, name: 'Chocolate Croissant', price: '7.50 PLN', image: 'https://via.placeholder.com/180x130/FFD700/FFFFFF?text=Croissant' },
    { id: 3, name: 'Rye Bread', price: '10.00 PLN', image: 'https://via.placeholder.com/180x130/D2B48C/FFFFFF?text=Rye' },
    { id: 4, name: 'Blueberry Muffin', price: '5.99 PLN', image: 'https://via.placeholder.com/180x130/ADD8E6/FFFFFF?text=Muffin' },
    { id: 5, name: 'Ciabatta Loaf', price: '9.50 PLN', image: 'https://via.placeholder.com/180x130/B0E0E6/FFFFFF?text=Ciabatta' },
    { id: 6, name: 'Apple Pie Slice', price: '15.00 PLN', image: 'https://via.placeholder.com/180x130/F08080/FFFFFF?text=Apple+Pie' },
    { id: 7, name: 'Whole Wheat Bread', price: '11.50 PLN', image: 'https://via.placeholder.com/180x130/DEB887/FFFFFF?text=Whole+Wheat' },
    { id: 8, name: 'Lemon Tart', price: '14.00 PLN', image: 'https://via.placeholder.com/180x130/FFFACD/FFFFFF?text=Lemon+Tart' },
  ], []);

  // Styles
  const containerStyle = useMemo(() => ({
    minHeight: '100vh',
    backgroundColor: lightBgColor,
    padding: '30px 15px',
    fontFamily: 'Open Sans, sans-serif',
    color: textColor,
  }), [lightBgColor, textColor]);

  const headerStyle = useMemo(() => ({
    textAlign: 'center',
    marginBottom: '40px',
  }), []);

  const titleStyle = useMemo(() => ({
    fontSize: '2.8em',
    color: primaryColor,
    marginBottom: '10px',
  }), [primaryColor]);

  const subtitleStyle = useMemo(() => ({
    fontSize: '1.1em',
    color: lightTextColor,
    maxWidth: '600px',
    margin: '0 auto',
  }), [lightTextColor]);

  const gridContainerStyle = useMemo(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
  }), []);

  const cardBaseStyle = useMemo(() => ({
    backgroundColor: cardBgColor,
    borderRadius: '10px',
    padding: '15px',
    boxShadow: `0 2px 5px ${shadowColor}`,
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    border: `1px solid ${lightBgColor}`,
    position: 'relative',
    overflow: 'hidden',
  }), [cardBgColor, shadowColor, lightBgColor]);

  const cardHoverStyle = useMemo(() => ({
    transform: 'translateY(-3px)',
    boxShadow: `0 5px 10px ${shadowColor}`,
  }), [shadowColor]);

  const productImageStyle = useMemo(() => ({
    width: '100%',
    height: '140px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  }), []);

  const productNameStyle = useMemo(() => ({
    fontSize: '1.4em',
    color: primaryColor,
    marginBottom: '5px',
    minHeight: '2.8em', // Ensure consistent height for names
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }), [primaryColor]);

  const productPriceStyle = useMemo(() => ({
    fontSize: '1.3em',
    fontWeight: 'bold',
    color: accentColor,
    marginBottom: '10px',
  }), [accentColor]);

  const addToCartButtonStyle = useMemo(() => ({
    backgroundColor: primaryColor,
    color: cardBgColor,
    border: 'none',
    padding: '8px 18px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9em',
    fontWeight: 'bold',
    transition: 'background-color 0.2s ease, opacity 0.2s ease',
    opacity: 0, // Hidden by default
    position: 'absolute',
    bottom: '15px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% - 30px)',
  }), [primaryColor, cardBgColor]);

  const addToCartButtonHoverStyle = useMemo(() => ({
    opacity: 1,
    backgroundColor: buttonHoverColor,
  }), [buttonHoverColor]);

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Our Minimalist Bakery Collection</h1>
        <p style={subtitleStyle}>
          Simple, fresh, and delicious. Find your favorite baked goods with ease.
        </p>
      </header>
      <div style={gridContainerStyle}>
        {products.map(product => (
          <div
            key={product.id}
            style={{ ...cardBaseStyle, ...(hoveredCardId === product.id ? cardHoverStyle : {}) }}
            onMouseEnter={() => setHoveredCardId(product.id)}
            onMouseLeave={() => setHoveredCardId(null)}
          >
            <img src={product.image} alt={product.name} style={productImageStyle} />
            <h2 style={productNameStyle}>{product.name}</h2>
            <span style={productPriceStyle}>{product.price}</span>
            <button
              style={{
                ...addToCartButtonStyle,
                ...(hoveredCardId === product.id ? addToCartButtonHoverStyle : {})
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductMinimalGrid;