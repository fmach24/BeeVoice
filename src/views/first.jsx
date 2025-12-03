import React, { useState, useMemo } from 'react';

function ProductHorizontalListView() {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  // Color palette for this view
  const primaryColor = '#3A86FF'; // Vibrant Blue
  const accentColor = '#FF006E'; // Pink
  const lightBgColor = '#F0F4F8'; // Lighter Gray-Blue
  const cardBgColor = '#FFFFFF'; // White
  const textColor = '#2C3E50'; // Dark Blue-Gray
  const lightTextColor = '#7F8C8D'; // Medium Gray
  const buttonHoverColor = '#2A6FDD'; // Darker Blue
  const shadowColor = 'rgba(0, 0, 0, 0.08)';

  const products = useMemo(() => [
    { id: 1, name: 'Artisan Sourdough', price: '12.99 PLN', image: 'https://via.placeholder.com/200x150/87CEEB/FFFFFF?text=Sourdough', description: 'Hand-crafted with a tangy zest and perfect crust.' },
    { id: 2, name: 'Chocolate Croissant', price: '7.50 PLN', image: 'https://via.placeholder.com/200x150/FFD700/FFFFFF?text=Croissant', description: 'Flaky pastry with rich, melted dark chocolate filling.' },
    { id: 3, name: 'Rye Bread', price: '10.00 PLN', image: 'https://via.placeholder.com/200x150/D2B48C/FFFFFF?text=Rye', description: 'Hearty and wholesome, perfect for any meal, rich in fiber.' },
    { id: 4, name: 'Blueberry Muffin', price: '5.99 PLN', image: 'https://via.placeholder.com/200x150/ADD8E6/FFFFFF?text=Muffin', description: 'Bursting with fresh blueberries and a crunchy top.' },
    { id: 5, name: 'Ciabatta Loaf', price: '9.50 PLN', image: 'https://via.placeholder.com/200x150/B0E0E6/FFFFFF?text=Ciabatta', description: 'Light, airy, and perfect for sandwiches or dipping in olive oil.' },
    { id: 6, name: 'Apple Pie Slice', price: '15.00 PLN', image: 'https://via.placeholder.com/200x150/F08080/FFFFFF?text=Apple+Pie', description: 'Classic comfort in every bite, with cinnamon-spiced apples.' },
  ], []);

  // Styles
  const containerStyle = useMemo(() => ({
    minHeight: '100vh',
    backgroundColor: lightBgColor,
    padding: '40px 20px',
    fontFamily: 'Roboto, sans-serif',
    color: textColor,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }), [lightBgColor, textColor]);

  const headerStyle = useMemo(() => ({
    textAlign: 'center',
    marginBottom: '50px',
    maxWidth: '900px',
  }), []);

  const titleStyle = useMemo(() => ({
    fontSize: '3em',
    color: primaryColor,
    marginBottom: '15px',
  }), [primaryColor]);

  const subtitleStyle = useMemo(() => ({
    fontSize: '1.2em',
    color: lightTextColor,
    margin: '0 auto',
  }), [lightTextColor]);

  const listContainerStyle = useMemo(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    maxWidth: '900px',
    width: '100%',
    margin: '0 auto',
  }), []);

  const cardBaseStyle = useMemo(() => ({
    backgroundColor: cardBgColor,
    borderRadius: '12px',
    padding: '20px',
    boxShadow: `0 4px 10px ${shadowColor}`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    border: `1px solid ${lightBgColor}`,
  }), [cardBgColor, shadowColor, lightBgColor]);

  const cardHoverStyle = useMemo(() => ({
    transform: 'translateY(-5px)',
    boxShadow: `0 8px 15px ${shadowColor}`,
  }), [shadowColor]);

  const productImageStyle = useMemo(() => ({
    width: '150px',
    height: '110px',
    objectFit: 'cover',
    borderRadius: '8px',
    flexShrink: 0,
  }), []);

  const productInfoStyle = useMemo(() => ({
    flexGrow: 1,
    textAlign: 'left',
  }), []);

  const productNameStyle = useMemo(() => ({
    fontSize: '1.7em',
    color: primaryColor,
    marginBottom: '5px',
  }), [primaryColor]);

  const productDescriptionStyle = useMemo(() => ({
    fontSize: '0.9em',
    color: lightTextColor,
    marginBottom: '10px',
    lineHeight: '1.5',
  }), [lightTextColor]);

  const productPriceStyle = useMemo(() => ({
    fontSize: '1.4em',
    fontWeight: 'bold',
    color: accentColor,
  }), [accentColor]);

  const buttonContainerStyle = useMemo(() => ({
    flexShrink: 0,
    marginLeft: 'auto',
  }), []);

  const buttonStyle = useMemo(() => ({
    backgroundColor: primaryColor,
    color: cardBgColor,
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.95em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    whiteSpace: 'nowrap',
  }), [primaryColor, cardBgColor]);

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Our Delicious Bakery Selection</h1>
        <p style={subtitleStyle}>
          Explore our exquisite range of freshly baked delights, crafted with the finest ingredients and passion for quality.
        </p>
      </header>
      <div style={listContainerStyle}>
        {products.map(product => (
          <div
            key={product.id}
            style={{ ...cardBaseStyle, ...(hoveredCardId === product.id ? cardHoverStyle : {}) }}
            onMouseEnter={() => setHoveredCardId(product.id)}
            onMouseLeave={() => setHoveredCardId(null)}
          >
            <img src={product.image} alt={product.name} style={productImageStyle} />
            <div style={productInfoStyle}>
              <h2 style={productNameStyle}>{product.name}</h2>
              <p style={productDescriptionStyle}>{product.description}</p>
            </div>
            <div style={buttonContainerStyle}>
              <span style={productPriceStyle}>{product.price}</span>
              <button
                style={{
                  ...buttonStyle,
                  ...(hoveredCardId === product.id && { backgroundColor: buttonHoverColor, marginLeft: '15px' })
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductHorizontalListView;