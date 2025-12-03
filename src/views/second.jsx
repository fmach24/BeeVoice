import React, { useState, useMemo } from 'react';

function ProductCarouselView() {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Color palette for this view
  const primaryColor = '#6A0572'; // Deep Purple
  const accentColor = '#AB83A1'; // Muted Pink
  const lightBgColor = '#2C0735'; // Dark Purple-Blue
  const cardBgColor = '#4B0A5A'; // Medium Purple
  const textColor = '#E0BBE4'; // Light Purple
  const lightTextColor = '#957DAD'; // Gray-Purple
  const buttonHoverColor = '#500860'; // Darker Purple
  const shadowColor = 'rgba(0, 0, 0, 0.25)';

  const products = useMemo(() => [
    { id: 1, name: 'Artisan Sourdough', price: '12.99 PLN', image: 'https://via.placeholder.com/400x300/87CEEB/FFFFFF?text=Sourdough', description: 'Hand-crafted with a tangy zest and a perfect crust, ideal for gourmet sandwiches.' },
    { id: 2, name: 'Chocolate Croissant', price: '7.50 PLN', image: 'https://via.placeholder.com/400x300/FFD700/FFFFFF?text=Croissant', description: 'Flaky pastry filled with rich dark chocolate, a perfect morning treat.' },
    { id: 3, name: 'Rye Bread', price: '10.00 PLN', image: 'https://via.placeholder.com/400x300/D2B48C/FFFFFF?text=Rye', description: 'Hearty and wholesome, packed with nutrients, great with savory dishes.' },
    { id: 4, name: 'Blueberry Muffin', price: '5.99 PLN', image: 'https://via.placeholder.com/400x300/ADD8E6/FFFFFF?text=Muffin', description: 'Bursting with fresh blueberries and a delightful crumble topping.' },
    { id: 5, name: 'Ciabatta Loaf', price: '9.50 PLN', image: 'https://via.placeholder.com/400x300/B0E0E6/FFFFFF?text=Ciabatta', description: 'Light, airy, and rustic, excellent for dipping or as a side to pasta.' },
    { id: 6, name: 'Apple Pie Slice', price: '15.00 PLN', image: 'https://via.placeholder.com/400x300/F08080/FFFFFF?text=Apple+Pie', description: 'Classic comfort in every bite, warm apples with cinnamon in a buttery crust.' },
  ], []);

  const productsPerPage = 1; // Display one product at a time in the "carousel"

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  // Styles
  const containerStyle = useMemo(() => ({
    minHeight: '100vh',
    backgroundColor: lightBgColor,
    padding: '40px 20px',
    fontFamily: 'Montserrat, sans-serif',
    color: textColor,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }), [lightBgColor, textColor]);

  const headerStyle = useMemo(() => ({
    textAlign: 'center',
    marginBottom: '40px',
    maxWidth: '800px',
  }), []);

  const titleStyle = useMemo(() => ({
    fontSize: '3.2em',
    color: primaryColor,
    marginBottom: '10px',
  }), [primaryColor]);

  const subtitleStyle = useMemo(() => ({
    fontSize: '1.1em',
    color: lightTextColor,
    margin: '0 auto',
  }), [lightTextColor]);

  const carouselWrapperStyle = useMemo(() => ({
    display: 'flex',
    alignItems: 'center',
    maxWidth: '700px',
    width: '100%',
    position: 'relative',
  }), []);

  const navButtonStyle = useMemo(() => ({
    backgroundColor: primaryColor,
    color: textColor,
    border: 'none',
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    fontSize: '1.5em',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    zIndex: 10,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    boxShadow: `0 2px 8px ${shadowColor}`,
  }), [primaryColor, textColor, shadowColor]);

  const prevButtonStyle = useMemo(() => ({
    ...navButtonStyle,
    left: '-25px',
  }), [navButtonStyle]);

  const nextButtonStyle = useMemo(() => ({
    ...navButtonStyle,
    right: '-25px',
  }), [navButtonStyle]);

  const carouselContentStyle = useMemo(() => ({
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    overflow: 'hidden',
    padding: '0 50px', // Space for navigation buttons
  }), []);

  const cardBaseStyle = useMemo(() => ({
    backgroundColor: cardBgColor,
    borderRadius: '15px',
    padding: '30px',
    boxShadow: `0 8px 20px ${shadowColor}`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: `calc(100% / ${productsPerPage} - 40px)`, // Adjust width based on productsPerPage
    margin: '0 20px',
    border: `2px solid ${primaryColor}`,
  }), [cardBgColor, shadowColor, productsPerPage, primaryColor]);

  const cardHoverStyle = useMemo(() => ({
    transform: 'scale(1.03)',
    boxShadow: `0 12px 25px ${shadowColor}`,
  }), [shadowColor]);

  const productImageStyle = useMemo(() => ({
    width: '100%',
    maxWidth: '400px',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '20px',
    border: `1px solid ${accentColor}`,
  }), [accentColor]);

  const productNameStyle = useMemo(() => ({
    fontSize: '2.5em',
    color: primaryColor,
    marginBottom: '10px',
  }), [primaryColor]);

  const productDescriptionStyle = useMemo(() => ({
    fontSize: '1em',
    color: lightTextColor,
    marginBottom: '20px',
    flexGrow: 1,
    lineHeight: '1.6',
    maxWidth: '90%',
  }), [lightTextColor]);

  const productPriceStyle = useMemo(() => ({
    fontSize: '2em',
    fontWeight: 'bold',
    color: accentColor,
    marginBottom: '25px',
  }), [accentColor]);

  const buttonStyle = useMemo(() => ({
    backgroundColor: accentColor,
    color: cardBgColor,
    border: 'none',
    padding: '14px 30px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1.1em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  }), [accentColor, cardBgColor]);

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Discover Our Featured Delights</h1>
        <p style={subtitleStyle}>
          Indulge in our exquisite collection of fresh-baked goods, each a masterpiece of flavor and craft.
        </p>
      </header>
      <div style={carouselWrapperStyle}>
        <button
          style={{ ...prevButtonStyle, '&:hover': { transform: 'translateY(-50%) scale(1.1)' } }}
          onClick={prevProduct}
        >
          &lt;
        </button>
        <div style={carouselContentStyle}>
          {products.slice(currentIndex, currentIndex + productsPerPage).map(product => (
            <div
              key={product.id}
              style={{ ...cardBaseStyle, ...(hoveredCardId === product.id ? cardHoverStyle : {}) }}
              onMouseEnter={() => setHoveredCardId(product.id)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              <img src={product.image} alt={product.name} style={productImageStyle} />
              <h2 style={productNameStyle}>{product.name}</h2>
              <p style={productDescriptionStyle}>{product.description}</p>
              <span style={productPriceStyle}>{product.price}</span>
              <button
                style={{
                  ...buttonStyle,
                  ...(hoveredCardId === product.id && { backgroundColor: buttonHoverColor })
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
        <button
          style={{ ...nextButtonStyle, '&:hover': { transform: 'translateY(-50%) scale(1.1)' } }}
          onClick={nextProduct}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default ProductCarouselView;