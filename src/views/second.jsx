import React from 'react';

export default function SecondPizzeriaPage() {
    const primaryColor = '#2d3748'; // Dark slate
    const accentColor = '#e53e3e'; // Red
    const lightBackgroundColor = '#f7fafc';
    const darkBackgroundColor = '#1a202c';
    const textColor = '#4a5568';
    const lightTextColor = '#fff';

    const mainWrapperStyle = {
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        boxSizing: 'border-box',
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        lineHeight: '1.6',
        color: textColor,
    };

    const sectionBaseStyle = {
        padding: '60px 20px',
        textAlign: 'center',
        boxSizing: 'border-box',
    };

    const heroSectionStyle = {
        ...sectionBaseStyle,
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1542282287-f6556488d011?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: lightTextColor,
        minHeight: '450px', // Ensures it's visible, content dictates full height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const heroTitleStyle = {
        fontSize: '3.5em',
        marginBottom: '15px',
        letterSpacing: '1px',
        fontWeight: 700,
    };

    const heroSubtitleStyle = {
        fontSize: '1.5em',
        maxWidth: '80%',
        margin: '0 auto 30px',
    };

    const ctaButtonStyle = {
        backgroundColor: accentColor,
        color: lightTextColor,
        padding: '15px 35px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontSize: '1.3em',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        border: 'none',
        cursor: 'pointer',
    };

    const sectionTitleStyle = {
        fontSize: '2.8em',
        marginBottom: '40px',
        color: primaryColor,
        fontWeight: 600,
    };

    const featureGridStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
        maxWidth: '1000px',
        margin: '0 auto',
    };

    const featureItemStyle = {
        flex: '1 1 280px', // Allows 3 items per row roughly
        maxWidth: 'calc(33.33% - 20px)',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
        padding: '30px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const featureIconStyle = {
        fontSize: '3em',
        color: accentColor,
        marginBottom: '20px',
    };

    const featureTitleStyle = {
        fontSize: '1.8em',
        color: primaryColor,
        marginBottom: '15px',
    };

    const menuHighlightGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
        maxWidth: '1100px',
        margin: '0 auto',
    };

    const menuHighlightItemStyle = {
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        textAlign: 'left',
    };

    const menuHighlightImageStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    };

    const menuHighlightContentStyle = {
        padding: '20px',
    };

    const menuHighlightTitleStyle = {
        fontSize: '1.6em',
        color: primaryColor,
        marginBottom: '10px',
    };

    const menuHighlightDescriptionStyle = {
        fontSize: '0.95em',
        color: '#666',
        marginBottom: '10px',
    };

    const menuHighlightPriceStyle = {
        fontSize: '1.3em',
        fontWeight: 'bold',
        color: accentColor,
    };

    const testimonialSectionStyle = {
        ...sectionBaseStyle,
        backgroundColor: darkBackgroundColor,
        color: lightTextColor,
    };

    const testimonialItemStyle = {
        maxWidth: '700px',
        margin: '0 auto 40px',
        backgroundColor: '#3b4559',
        borderRadius: '10px',
        padding: '30px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    };

    const testimonialQuoteStyle = {
        fontSize: '1.2em',
        fontStyle: 'italic',
        marginBottom: '20px',
    };

    const testimonialAuthorStyle = {
        fontWeight: 'bold',
        fontSize: '1.1em',
        color: accentColor,
    };

    const contactFormStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
        textAlign: 'left',
    };

    const inputStyle = {
        width: '100%',
        padding: '12px',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '1em',
        boxSizing: 'border-box',
    };

    const textareaStyle = {
        ...inputStyle,
        minHeight: '120px',
        resize: 'vertical',
    };

    const submitButtonStyle = {
        backgroundColor: primaryColor,
        color: lightTextColor,
        padding: '12px 30px',
        borderRadius: '5px',
        border: 'none',
        fontSize: '1.1em',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
        width: '100%',
    };

    const footerStyle = {
        backgroundColor: primaryColor,
        color: lightTextColor,
        padding: '30px 20px',
        textAlign: 'center',
        fontSize: '0.9em',
    };

    const pizzas = [
        { id: 1, name: 'Spicy Salami', description: 'Italian salami, chili flakes, fresh basil.', price: '15.99', image: 'https://images.unsplash.com/photo-1579735418197-25e5b854e4f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, name: 'Truffle Mushroom', description: 'Mushrooms, truffle oil, mozzarella, parmesan.', price: '18.50', image: 'https://images.unsplash.com/photo-1593560708920-61dd98c63bc9?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 3, name: 'Prosciutto Arugula', description: 'Prosciutto, fresh arugula, cherry tomatoes.', price: '17.25', image: 'https://images.unsplash.com/photo-1582234033129-90616b701239?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];

    const testimonials = [
        { id: 1, quote: "The best pizza I've ever had! Fresh ingredients and perfect crust. A must-try!", author: "Anna L." },
        { id: 2, quote: "Amazing service and even better food. My family loves their Margherita!", author: "John P." },
        { id: 3, quote: "Consistently delicious. This is our go-to spot for pizza night.", author: "Maria K." },
    ];

    return (
        <div style={mainWrapperStyle}>
            <section style={heroSectionStyle}>
                <h1 style={heroTitleStyle}>Experience the Art of Pizza</h1>
                <p style={heroSubtitleStyle}>Hand-tossed, stone-baked, and made with love. Taste the tradition!</p>
                <a href="#menu-highlights" style={ctaButtonStyle}>Explore Our Menu</a>
            </section>

            <section style={{ ...sectionBaseStyle, backgroundColor: lightBackgroundColor }}>
                <h2 style={sectionTitleStyle}>Why Choose Us?</h2>
                <div style={featureGridStyle}>
                    <div style={featureItemStyle}>
                        <span style={featureIconStyle}>🍕</span> {/* Placeholder for icon */}
                        <h3 style={featureTitleStyle}>Authentic Flavors</h3>
                        <p>Traditional recipes passed down through generations, crafted with passion.</p>
                    </div>
                    <div style={featureItemStyle}>
                        <span style={featureIconStyle}>🌿</span>
                        <h3 style={featureTitleStyle}>Fresh Ingredients</h3>
                        <p>Locally sourced, premium quality ingredients for an unforgettable taste.</p>
                    </div>
                    <div style={featureItemStyle}>
                        <span style={featureIconStyle}>🚚</span>
                        <h3 style={featureTitleStyle}>Fast Delivery</h3>
                        <p>Hot and fresh pizzas delivered right to your door, every time.</p>
                    </div>
                </div>
            </section>

            <section id="menu-highlights" style={{ ...sectionBaseStyle, backgroundColor: '#fff' }}>
                <h2 style={sectionTitleStyle}>Our Signature Pizzas</h2>
                <div style={menuHighlightGridStyle}>
                    {pizzas.map(pizza => (
                        <div key={pizza.id} style={menuHighlightItemStyle}>
                            <img src={pizza.image} alt={pizza.name} style={menuHighlightImageStyle} />
                            <div style={menuHighlightContentStyle}>
                                <h3 style={menuHighlightTitleStyle}>{pizza.name}</h3>
                                <p style={menuHighlightDescriptionStyle}>{pizza.description}</p>
                                <p style={menuHighlightPriceStyle}>${pizza.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button style={{ ...ctaButtonStyle, marginTop: '50px' }}>View Full Menu</button>
            </section>

            <section style={testimonialSectionStyle}>
                <h2 style={{ ...sectionTitleStyle, color: lightTextColor }}>What Our Customers Say</h2>
                <div>
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} style={testimonialItemStyle}>
                            <p style={testimonialQuoteStyle}>"{testimonial.quote}"</p>
                            <p style={testimonialAuthorStyle}>- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ ...sectionBaseStyle, backgroundColor: lightBackgroundColor }}>
                <h2 style={sectionTitleStyle}>Get in Touch</h2>
                <div style={contactFormStyle}>
                    <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                        <p style={{marginBottom: '10px'}}>We'd love to hear from you!</p>
                        <input type="text" placeholder="Your Name" style={inputStyle} />
                        <input type="email" placeholder="Your Email" style={inputStyle} />
                        <textarea placeholder="Your Message" style={textareaStyle}></textarea>
                        <button type="submit" style={submitButtonStyle}>Send Message</button>
                    </form>
                </div>
                <p style={{ marginTop: '30px', fontSize: '1.1em', color: primaryColor }}>
                    Or call us: <span style={{ fontWeight: 'bold' }}>+1 (555) PIZZA-CO</span>
                </p>
            </section>

            <footer style={footerStyle}>
                <p>&copy; {new Date().getFullYear()} PizzaCraft. All rights reserved.</p>
                <p>123 Crafting Alley, Flavor Town, FT 54321</p>
            </footer>
        </div>
    );
}