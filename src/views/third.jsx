import React from 'react';

export default function ThirdPizzeriaPage() {
    const primaryColor = '#1d3557'; // Dark blue
    const accentColor = '#e63946'; // Red
    const lightBackgroundColor = '#f1faee'; // Very light blue/green
    const textColor = '#457b9d'; // Muted blue
    const lightTextColor = '#fff';

    const mainWrapperStyle = {
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        boxSizing: 'border-box',
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        lineHeight: '1.5',
        color: textColor,
        backgroundColor: lightBackgroundColor,
    };

    const headerStyle = {
        backgroundColor: primaryColor,
        color: lightTextColor,
        padding: '25px 20px',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    };

    const headerTitleStyle = {
        margin: 0,
        fontSize: '2.8em',
        fontWeight: 700,
        letterSpacing: '1px',
    };

    const headerSubtitleStyle = {
        margin: '5px 0 0',
        fontSize: '1.1em',
        opacity: 0.9,
    };

    const heroSectionStyle = {
        position: 'relative',
        height: '400px', // Fixed height for hero
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: lightTextColor,
    };

    const heroImageStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'brightness(0.6)',
        zIndex: 1,
    };

    const heroContentStyle = {
        position: 'relative',
        zIndex: 2,
        maxWidth: '80%',
    };

    const heroCtaButtonStyle = {
        backgroundColor: accentColor,
        color: lightTextColor,
        padding: '12px 30px',
        borderRadius: '50px',
        textDecoration: 'none',
        fontSize: '1.2em',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
        border: 'none',
        cursor: 'pointer',
        marginTop: '25px',
    };

    const sectionStyle = {
        padding: '60px 20px',
        maxWidth: '1000px',
        margin: '0 auto',
        boxSizing: 'border-box',
    };

    const sectionTitleStyle = {
        textAlign: 'center',
        fontSize: '2.6em',
        marginBottom: '40px',
        color: primaryColor,
        fontWeight: 600,
    };

    const pizzaGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
    };

    const pizzaCardStyle = {
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
    };

    const pizzaImageStyle = {
        width: '100%',
        height: '220px',
        objectFit: 'cover',
    };

    const pizzaInfoStyle = {
        padding: '20px',
        textAlign: 'center',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };

    const pizzaNameStyle = {
        fontSize: '1.7em',
        color: primaryColor,
        marginBottom: '10px',
    };

    const pizzaDescriptionStyle = {
        fontSize: '0.95em',
        color: '#666',
        marginBottom: '15px',
    };

    const pizzaPriceStyle = {
        fontSize: '1.4em',
        fontWeight: 'bold',
        color: accentColor,
    };

    const storySectionStyle = {
        ...sectionStyle,
        backgroundColor: '#a8dadc', // Light blue
        color: primaryColor,
        textAlign: 'center',
    };

    const storyTextStyle = {
        fontSize: '1.15em',
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: '1.8',
    };

    const contactSectionStyle = {
        ...sectionStyle,
        backgroundColor: primaryColor,
        color: lightTextColor,
        textAlign: 'center',
    };

    const contactInfoStyle = {
        fontSize: '1.3em',
        marginBottom: '15px',
    };

    const footerStyle = {
        backgroundColor: '#1a1a2e', // Very dark blue
        color: '#e0e0e0',
        textAlign: 'center',
        padding: '25px 20px',
        fontSize: '0.85em',
    };

    const pizzas = [
        { id: 1, name: 'Diavola', description: 'Spicy salami, fresh chili, mozzarella.', price: '14.99', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, name: 'Quattro Formaggi', description: 'Four delicious cheeses, rich and creamy.', price: '15.50', image: 'https://images.unsplash.com/photo-1588315029754-2ed0a853a67d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 3, name: 'Capricciosa', description: 'Artichokes, ham, mushrooms, olives.', price: '16.25', image: 'https://images.unsplash.com/photo-1544929424-a74fc6740685?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 4, name: 'Marinara', description: 'Tomato, garlic, oregano, extra virgin olive oil.', price: '11.00', image: 'https://images.unsplash.com/photo-1550547660-d94657152066?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 5, name: 'Vegan Delight', description: 'Seasonal vegetables, vegan cheese, pesto.', price: '14.00', image: 'https://images.unsplash.com/photo-1596701041935-4309f7a7d32c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 6, name: 'Pesto Chicken', description: 'Grilled chicken, pesto sauce, sun-dried tomatoes.', price: '16.50', image: 'https://images.unsplash.com/photo-1517686469089-a2e1d752e505?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];

    return (
        <div style={mainWrapperStyle}>
            <header style={headerStyle}>
                <h1 style={headerTitleStyle}>The Artisan Slice</h1>
                <p style={headerSubtitleStyle}>Crafting Perfection, One Pizza at a Time.</p>
            </header>

            <section style={heroSectionStyle}>
                <img src="https://images.unsplash.com/photo-1606771501339-16a75f284e31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Artisan Pizza" style={heroImageStyle} />
                <div style={heroContentStyle}>
                    <h2 style={{ fontSize: '3.2em', marginBottom: '15px' }}>Taste the Tradition</h2>
                    <p style={{ fontSize: '1.3em', marginBottom: '25px', maxWidth: '70%', margin: '0 auto' }}>
                        Discover our passion for authentic, hand-crafted pizzas.
                    </p>
                    <button style={heroCtaButtonStyle}>View Our Pizzas</button>
                </div>
            </section>

            <section style={sectionStyle}>
                <h2 style={sectionTitleStyle}>Our Pizza Creations</h2>
                <div style={pizzaGridStyle}>
                    {pizzas.map(pizza => (
                        <div key={pizza.id} style={pizzaCardStyle}>
                            <img src={pizza.image} alt={pizza.name} style={pizzaImageStyle} />
                            <div style={pizzaInfoStyle}>
                                <h3 style={pizzaNameStyle}>{pizza.name}</h3>
                                <p style={pizzaDescriptionStyle}>{pizza.description}</p>
                                <p style={pizzaPriceStyle}>${pizza.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section style={storySectionStyle}>
                <h2 style={{ ...sectionTitleStyle, color: primaryColor }}>Our Story</h2>
                <p style={storyTextStyle}>
                    At The Artisan Slice, we believe pizza is more than just food – it's an experience.
                    Founded by a family with generations of Italian heritage, our mission is to bring you the true taste of Naples,
                    right here. We meticulously select fresh, high-quality ingredients and combine them with traditional techniques
                    to create pizzas that are both classic and uniquely ours. Join us on a culinary journey!
                </p>
            </section>

            <section style={contactSectionStyle}>
                <h2 style={{ ...sectionTitleStyle, color: lightTextColor }}>Find Us</h2>
                <p style={contactInfoStyle}>123 Masterpiece Avenue, Culinary City, CC 67890</p>
                <p style={contactInfoStyle}>Open Daily: 11 AM - 10 PM</p>
                <p style={contactInfoStyle}>Call for orders: <span style={{ fontWeight: 'bold', color: accentColor }}>+1 (555) ART-SLICE</span></p>
                <p style={{ marginTop: '20px', fontSize: '1.1em' }}>
                    <a href="mailto:info@artisanslice.com" style={{ color: lightTextColor, textDecoration: 'underline' }}>info@artisanslice.com</a>
                </p>
            </section>

            <footer style={footerStyle}>
                <p>&copy; {new Date().getFullYear()} The Artisan Slice. All rights reserved.</p>
            </footer>
        </div>
    );
}