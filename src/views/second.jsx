import React, { useState } from 'react';

function SecondView() {
  const [selectedCategory, setSelectedCategory] = useState('Wszystkie');
  const [productHover, setProductHover] = useState(null);

  const primaryColor = '#8B4513'; // SaddleBrown
  const accentColor = '#DAA520'; // Goldenrod
  const darkBgColor = '#F5DEB3'; // Wheat
  const lightBgColor = '#F8F8F8'; // Off-white
  const cardBgColor = '#FFFFFF';
  const darkTextColor = '#4A2C0A';
  const lightTextColor = '#6B4219';

  const products = [
    { id: 1, name: 'Chleb Wiejski', category: 'Chleby', price: '12.50 zł', img: 'https://via.placeholder.com/200/8B4513/DAA520?text=Chleb' },
    { id: 2, name: 'Bagietka Francuska', category: 'Bułki', price: '4.00 zł', img: 'https://via.placeholder.com/200/8B4513/DAA520?text=Bagietka' },
    { id: 3, name: 'Sernik Wiedeński', category: 'Ciasta', price: '45.00 zł', img: 'https://via.placeholder.com/200/8B4513/DAA520?text=Sernik' },
    { id: 4, name: 'Chałka Drożdżowa', category: 'Słodkie', price: '9.80 zł', img: 'https://via.placeholder.com/200/8B4513/DAA520?text=Chałka' },
    { id: 5, name: 'Chleb Orzechowy', category: 'Chleby', price: '15.00 zł', img: 'https://via.placeholder.com/200/8B4513/DAA520?text=Orzechowy' },
    { id: 6, name: 'Rogalik Maślany', category: 'Bułki', price: '2.50 zł', img: 'https://via.placeholder.com/200/8B4513/DAA520?text=Rogalik' },
    { id: 7, name: 'Tort Bezowy', category: 'Ciasta', price: '60.00 zł', img: 'https://via.placeholder.com/200/8B4513/DAA520?text=Bezowy' },
    { id: 8, name: 'Bułka Poznańska', category: 'Bułki', price: '2.00 zł', img: 'https://via.placeholder.com/200/8B4513/DAA520?text=Poznańska' },
  ];
  const categories = ['Wszystkie', 'Chleby', 'Bułki', 'Ciasta', 'Słodkie'];

  const filteredProducts = selectedCategory === 'Wszystkie'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: lightBgColor,
    fontFamily: 'Roboto, sans-serif',
    color: darkTextColor,
  };

  const headerStyle = {
    backgroundColor: primaryColor,
    color: 'white',
    padding: '15px 25px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    fontSize: '1.8em',
    fontWeight: 'bold',
  };

  const mainContentStyle = {
    display: 'flex',
    flexGrow: 1,
    padding: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  };

  const sidebarStyle = {
    width: '250px',
    paddingRight: '30px',
    borderRight: `1px solid ${darkBgColor}`,
    marginRight: '30px',
  };

  const categoryTitleStyle = {
    color: primaryColor,
    fontSize: '1.5em',
    marginBottom: '20px',
  };

  const categoryListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const categoryItemBaseStyle = {
    padding: '10px 15px',
    marginBottom: '10px',
    backgroundColor: cardBgColor,
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    border: `1px solid ${darkBgColor}`,
    color: lightTextColor,
    fontWeight: 'bold',
  };

  const categoryItemActiveStyle = {
    backgroundColor: primaryColor,
    color: 'white',
    transform: 'translateX(5px)',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  };

  const productsGridStyle = {
    flexGrow: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  };

  const productCardBaseStyle = {
    backgroundColor: cardBgColor,
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    border: `1px solid ${darkBgColor}`,
  };

  const productCardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 15px rgba(0,0,0,0.1)',
  };

  const productImageStyle = {
    width: '100%',
    maxWidth: '200px',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '15px',
    border: `1px solid ${accentColor}`,
  };

  const productNameStyle = {
    color: primaryColor,
    fontSize: '1.3em',
    marginBottom: '8px',
  };

  const productPriceStyle = {
    color: lightTextColor,
    fontSize: '1.1em',
    fontWeight: 'bold',
  };

  const footerStyle = {
    backgroundColor: primaryColor,
    color: 'white',
    textAlign: 'center',
    padding: '15px',
    fontSize: '0.9em',
    marginTop: 'auto',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        Katalog Produktów Piekarni
      </header>

      <div style={mainContentStyle}>
        <aside style={sidebarStyle}>
          <h3 style={categoryTitleStyle}>Kategorie</h3>
          <ul style={categoryListStyle}>
            {categories.map(category => (
              <li
                key={category}
                style={{
                  ...categoryItemBaseStyle,
                  ...(selectedCategory === category ? categoryItemActiveStyle : {})
                }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>

        <section style={productsGridStyle}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div
                key={product.id}
                style={{ ...productCardBaseStyle, ...(productHover === product.id ? productCardHoverStyle : {}) }}
                onMouseEnter={() => setProductHover(product.id)}
                onMouseLeave={() => setProductHover(null)}
              >
                <img src={product.img} alt={product.name} style={productImageStyle} />
                <h4 style={productNameStyle}>{product.name}</h4>
                <p style={productPriceStyle}>{product.price}</p>
              </div>
            ))
          ) : (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: lightTextColor }}>Brak produktów w tej kategorii.</p>
          )}
        </section>
      </div>

      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} Piekarnia. Smak Tradycji.</p>
      </footer>
    </div>
  );
}

export default SecondView;