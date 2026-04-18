import React from 'react';

export default function FirstPizzeriaPage() {
    const primaryColor = '#a83c00'; // Dark orange/brown
    const accentColor = '#f5b041'; // Lighter orange/yellow
    const backgroundColor = '#f8f8f8';
    const textColor = '#333';
    const lightTextColor = '#fff';

    const headerStyle = {
        backgroundColor: primaryColor,
        color: lightTextColor,
        padding: '20px 0',
        textAlign: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px 0',
        backgroundColor: '#c05000',
    };

    const navLinkStyle = {
        color: lightTextColor,
        textDecoration: 'none',
        margin: '0 15px',
        fontWeight: 'bold',
        fontSize: '1.1em',
        transition: 'color 0.3s ease',
    };

    const heroSectionStyle = {
        backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px', // Fixed height for hero, but content adapts
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: lightTextColor,
        textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
        textAlign: 'center',
        padding: '20px',
    };

    const heroTitleStyle = {
        fontSize: '3em',
        marginBottom: '10px',
    };

    const heroTextStyle = {
        fontSize: '1.2em',
        maxWidth: '70%',
        margin: '0 auto',
    };

    const sectionStyle = {
        padding: '40px 20px',
        backgroundColor: backgroundColor,
        color: textColor,
        maxWidth: '90%',
        margin: '0 auto',
        boxSizing: 'border-box',
    };

    const sectionTitleStyle = {
        textAlign: 'center',
        fontSize: '2.5em',
        marginBottom: '30px',
        color: primaryColor,
    };

    const menuGridStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '25px',
    };

    const menuItemStyle = {
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: '20px',
        textAlign: 'center',
        flex: '1 1 300px', // Allows items to grow/shrink, max 300px wide
        maxWidth: 'calc(50% - 12.5px)', // Max 2 items per row with gap
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const menuItemImageStyle = {
        width: '100%',
        height: '180px',
        objectFit: 'cover',
        borderRadius: '4px',
        marginBottom: '15px',
    };

    const menuItemTitleStyle = {
        fontSize: '1.5em',
        color: primaryColor,
        marginBottom: '10px',
    };

    const menuItemDescriptionStyle = {
        fontSize: '0.9em',
        color: '#666',
        marginBottom: '15px',
        flexGrow: 1, // Pushes price to bottom
    };

    const menuItemPriceStyle = {
        fontSize: '1.4em',
        fontWeight: 'bold',
        color: accentColor,
    };

    const contactSectionStyle = {
        ...sectionStyle,
        backgroundColor: primaryColor,
        color: lightTextColor,
        textAlign: 'center',
    };

    const footerStyle = {
        backgroundColor: '#333',
        color: '#ccc',
        textAlign: 'center',
        padding: '20px 0',
        fontSize: '0.9em',
    };

    const buttonStyle = {
        backgroundColor: accentColor,
        color: primaryColor,
        border: 'none',
        padding: '12px 25px',
        borderRadius: '5px',
        fontSize: '1.1em',
        cursor: 'pointer',
        marginTop: '20px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
    };

    const pizzas = [
        { id: 1, name: 'Margherita', description: 'Classic tomato, mozzarella, basil.', price: '12.00', image: 'https://images.unsplash.com/photo-1594007654729-407edc192a11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, name: 'Pepperoni Feast', description: 'Loads of pepperoni, mozzarella, tomato.', price: '14.50', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983ed3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 3, name: 'Veggie Delight', description: 'Fresh peppers, onions, mushrooms, olives.', price: '13.00', image: 'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 4, name: 'Meat Lover\'s', description: 'Ham, bacon, pepperoni, sausage.', price: '16.00', image: 'https://images.unsplash.com/photo-1628842600267-347069792131?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 5, name: 'Hawaiian', description: 'Ham, pineapple, mozzarella.', price: '13.50', image: 'https://images.unsplash.com/photo-1601912444109-0d315488424a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 6, name: 'BBQ Chicken', description: 'Grilled chicken, red onion, BBQ sauce.', price: '15.00', image: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];

    return (
        <div style={{ width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden', boxSizing: 'border-box', fontFamily: 'Arial, sans-serif' }}>
            <header style={headerStyle}>
                <h1 style={{ margin: 0, fontSize: '2.5em' }}>Crazy Pizza House</h1>
                <p style={{ margin: '5px 0 0' }}>The taste you'll never forget!</p>
            </header>

            <nav style={navStyle}>
                <a href="#menu" style={navLinkStyle}>Menu</a>
                <a href="#about" style={navLinkStyle}>About Us</a>
                <a href="#contact" style={navLinkStyle}>Contact</a>
            </nav>

            <section style={heroSectionStyle}>
                <div>
                    <h2 style={heroTitleStyle}>Freshly Baked, Delicious Pizzas</h2>
                    <p style={heroTextStyle}>Hand-crafted with the finest ingredients and baked to perfection. Order now!</p>
                    <button style={buttonStyle}>View Our Menu</button>
                </div>
            </section>

            <section id="menu" style={sectionStyle}>
                <h2 style={sectionTitleStyle}>Our Delicious Menu</h2>
                <div style={menuGridStyle}>
                    {pizzas.map(pizza => (
                        <div key={pizza.id} style={menuItemStyle}>
                            <img src={pizza.image} alt={pizza.name} style={menuItemImageStyle} />
                            <h3 style={menuItemTitleStyle}>{pizza.name}</h3>
                            <p style={menuItemDescriptionStyle}>{pizza.description}</p>
                            <p style={menuItemPriceStyle}>${pizza.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="about" style={sectionStyle}>
                <h2 style={sectionTitleStyle}>About Us</h2>
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ fontSize: '1.1em', lineHeight: '1.6' }}>
                        Crazy Pizza House started with a simple dream: to bring authentic, mouth-watering pizza to our community.
                        Using only the freshest local ingredients and time-honored recipes, we've been serving up happiness one slice at a time since 2005.
                        Come and taste the difference that passion makes!
                    </p>
                    <img src="https://images.unsplash.com/photo-1563227814-c9f080352be5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our Kitchen" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginTop: '30px' }} />
                </div>
            </section>

            <section id="contact" style={contactSectionStyle}>
                <h2 style={sectionTitleStyle}>Contact Us</h2>
                <p style={{ fontSize: '1.2em', marginBottom: '15px' }}>Ready to order or have a question?</p>
                <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Call us at: (123) 456-7890</p>
                <p style={{ fontSize: '1.1em' }}>Visit us at: 123 Pizza Lane, Food City, FC 12345</p>
                <p style={{ marginTop: '20px' }}>
                    <a href="mailto:info@crazypizzahouse.com" style={{ color: accentColor, textDecoration: 'none', fontWeight: 'bold' }}>info@crazypizzahouse.com</a>
                </p>
            </section>

            <footer style={footerStyle}>
                <p>&copy; {new Date().getFullYear()} Crazy Pizza House. All rights reserved.</p>
            </footer>
        </div>
    );
}