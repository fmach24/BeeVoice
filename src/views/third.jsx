import React from 'react';

const CommunityPoolAGHApp = () => {
    const primaryGreen = '#8bc34a'; // Fresh, friendly green
    const secondaryGreen = '#4caf50'; // Darker green
    const accentYellow = '#ffeb3b'; // Yellow accent
    const textColor = '#333';
    const bgColor = '#f7fdf7'; // Light green-ish background

    const containerStyle = {
        fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif', // Playful font for community feel
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '30px',
        backgroundColor: bgColor,
        boxShadow: '0 0 20px rgba(0,0,0,0.08)',
        border: `4px dashed ${primaryGreen}`, // Playful border
        borderRadius: '20px',
        marginTop: '30px',
        marginBottom: '30px',
        color: textColor,
        lineHeight: '1.6',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '50px',
        borderBottom: `3px solid ${secondaryGreen}`,
        paddingBottom: '25px',
    };

    // Note: Inline styles don't directly support :hover pseudo-classes.
    // For a real app, you'd use a CSS module, styled-components, or a library.
    // Here, we just define the base style.
    const navItemStyle = {
        margin: '0 15px',
        textDecoration: 'none',
        color: secondaryGreen,
        fontWeight: 'bold',
        fontSize: '1.2em',
        padding: '8px 15px',
        borderRadius: '8px',
        transition: 'background-color 0.3s, color 0.3s',
        border: `1px solid ${primaryGreen}`,
    };

    const sectionHeaderStyle = {
        fontSize: '2.5em',
        color: secondaryGreen,
        textAlign: 'center',
        marginBottom: '40px',
        marginTop: '60px',
        position: 'relative',
        textShadow: '1px 1px 0px rgba(0,0,0,0.05)',
    };

    const cardContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
    };

    const cardStyle = {
        background: '#fff',
        padding: '25px',
        borderRadius: '15px',
        boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
        width: '45%',
        minWidth: '300px',
        transition: 'transform 0.2s ease-in-out',
        // Example hover: ':hover': { transform: 'translateY(-5px)' }
    };

    return (
        <div style={containerStyle}>
            <header style={headerStyle}>
                <h1 style={{ fontSize: '4em', color: primaryGreen, textShadow: '3px 3px 0px rgba(0,0,0,0.1)' }}>
                    💦 Basen AGH 🥳
                </h1>
                <p style={{ fontSize: '1.4em', color: secondaryGreen, marginBottom: '25px' }}>
                    Twoje miejsce na plusk, relaks i sport w sercu AGH!
                </p>
                <nav>
                    <a href="#news" style={navItemStyle}>Aktualności</a>
                    <a href="#schedule" style={navItemStyle}>Harmonogram</a>
                    <a href="#gallery" style={navItemStyle}>Galeria Wodna</a>
                    <a href="#join-us" style={navItemStyle}>Dołącz do nas!</a>
                </nav>
            </header>

            <section id="news" style={{ marginBottom: '70px' }}>
                <h2 style={sectionHeaderStyle}>Najświeższe Wiadomości z Basenu!</h2>
                <div style={cardContainerStyle}>
                    <div style={cardStyle}>
                        <h3 style={{ color: secondaryGreen, borderBottom: `2px dashed ${primaryGreen}`, paddingBottom: '12px', marginBottom: '15px', fontSize: '1.8em' }}>Grand Prix Pływackie AGH 2024!</h3>
                        <p style={{ fontSize: '0.9em', color: '#777', marginBottom: '18px' }}>25 października 2024</p>
                        <p>Zapraszamy wszystkich entuzjastów pływania do udziału w naszym corocznym Grand Prix! Zapisy ruszają już w przyszłym tygodniu. Medale i nagrody czekają!</p>
                        <button style={{ background: accentYellow, border: 'none', padding: '12px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginTop: '20px', fontSize: '1.1em', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                            Czytaj więcej!
                        </button>
                    </div>
                    <div style={cardStyle}>
                        <h3 style={{ color: secondaryGreen, borderBottom: `2px dashed ${primaryGreen}`, paddingBottom: '12px', marginBottom: '15px', fontSize: '1.8em' }}>Nowe Zajęcia Aqua Aerobiku!</h3>
                        <p style={{ fontSize: '0.9em', color: '#777', marginBottom: '18px' }}>10 października 2024</p>
                        <p>Od listopada rozszerzamy ofertę o dodatkowe zajęcia Aqua Aerobiku! Idealne dla każdego, kto szuka energicznej formy ruchu w wodzie. Zapraszamy!</p>
                        <button style={{ background: accentYellow, border: 'none', padding: '12px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginTop: '20px', fontSize: '1.1em', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                            Sprawdź godziny
                        </button>
                    </div>
                </div>
            </section>

            <section id="schedule" style={{ marginBottom: '70px' }}>
                <h2 style={sectionHeaderStyle}>Harmonogram Zajęć i Dostępności</h2>
                <div style={{ background: '#fff', padding: '35px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)' }}>
                    <p style={{ marginBottom: '25px', textAlign: 'center', fontSize: '1.1em' }}>
                        Zobacz, co dzieje się na naszym basenie każdego dnia! Od porannych pływań po wieczorne relaksacje.
                    </p>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginBottom: '25px' }}>
                        <thead>
                            <tr style={{ backgroundColor: primaryGreen, color: '#fff' }}>
                                <th style={{ padding: '15px', border: `1px solid ${primaryGreen}` }}>Godzina</th>
                                <th style={{ padding: '15px', border: `1px solid ${primaryGreen}` }}>Poniedziałek</th>
                                <th style={{ padding: '15px', border: `1px solid ${primaryGreen}` }}>Wtorek</th>
                                <th style={{ padding: '15px', border: `1px solid ${primaryGreen}` }}>Środa</th>
                                <th style={{ padding: '15px', border: `1px solid ${primaryGreen}` }}>...</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '12px', border: `1px solid ${primaryGreen}` }}>7:00-8:00</td>
                                <td style={{ padding: '12px', border: `1px solid ${primaryGreen}` }}>Pływanie swobodne</td>
                                <td style={{ padding: '12px', border: `1px solid ${primaryGreen}` }}>Aqua Fitness</td>
                                <td style={{ padding: '12px', border: `1px solid ${primaryGreen}` }}>Pływanie swobodne</td>
                                <td style={{ padding: '12px', border: `1px solid ${primaryGreen}` }}>...</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '12px', border: `1px solid ${primaryGreen}` }}>17:00-18:00</td>
                                <td style={{ padding: '12px', border: `1px solid ${primaryGreen}` }}>Nauka Pływania</td>
                                <td style={{ padding: '12px', border: `1px solid ${primaryGreen}` }}>Pływanie swobodne</td>
                                <td style={{ padding: '12px', border: `1px solid ${primaryGreen}` }}>Aqua Aerobik</td>
                                <td style={{ padding: '12px', border: `1px solid ${primaryGreen}` }}>...</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '12px', border: `1px solid ${primaryGreen}` }}>20:00-21:00</td>
                                <td style={{ padding: '12px', border: `1px solid ${primaryGreen}` }}>Pływanie swobodne</td>
                                <td style={{ padding: '12px', border: `1px solid ${primaryGreen}` }}>Tory zamknięte</td>
                                <td style={{ padding: '12px', border: `1px solid ${primaryGreen}` }}>Pływanie swobodne</td>
                                <td style={{ padding: '12px', border: `1px solid ${primaryGreen}` }}>...</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{ fontSize: '1em', color: '#555', marginTop: '25px', textAlign: 'center' }}>
                        Pełny, szczegółowy rozkład dostępny jest w recepcji oraz do pobrania w formacie PDF.
                    </p>
                </div>
            </section>

            <section id="gallery" style={{ marginBottom: '70px' }}>
                <h2 style={sectionHeaderStyle}>Nasza Wodna Galeria!</h2>
                <div style={cardContainerStyle}>
                    <img src="https://via.placeholder.com/300x220/4CAF50/fff?text=Basen+AGH+1" alt="Basen AGH" style={{ width: '300px', height: '220px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }} />
                    <img src="https://via.placeholder.com/300x220/8BC34A/fff?text=Basen+AGH+2" alt="Basen AGH" style={{ width: '300px', height: '220px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }} />
                    <img src="https://via.placeholder.com/300x220/FFEB3B/333?text=Basen+AGH+3" alt="Basen AGH" style={{ width: '300px', height: '220px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }} />
                </div>
                <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '1.2em' }}>
                    Przyjdź i poczuj atmosferę na żywo! Czekamy na Ciebie!
                </p>
            </section>

            <section id="join-us" style={{ marginBottom: '70px', textAlign: 'center' }}>
                <h2 style={sectionHeaderStyle}>Dołącz do Naszej Społeczności!</h2>
                <p style={{ fontSize: '1.3em', marginBottom: '35px' }}>
                    Śledź nas w mediach społecznościowych, aby być na bieżąco z wydarzeniami i promocjami!
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '25px' }}>
                    <button style={{ backgroundColor: '#1877F2', color: '#fff', border: 'none', padding: '18px 35px', borderRadius: '10px', cursor: 'pointer', fontSize: '1.2em', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                        Facebook
                    </button>
                    <button style={{ backgroundColor: '#C13584', color: '#fff', border: 'none', padding: '18px 35px', borderRadius: '10px', cursor: 'pointer', fontSize: '1.2em', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                        Instagram
                    </button>
                </div>
                <p style={{ marginTop: '40px', fontSize: '1.2em' }}>
                    Masz pytania lub chcesz z nami porozmawiać? <br/> <a href="mailto:info@agh.edu.pl" style={{ color: secondaryGreen, textDecoration: 'underline' }}>Napisz do nas!</a>
                </p>
            </section>

            <footer style={{ textAlign: 'center', marginTop: '60px', paddingTop: '25px', borderTop: `2px dashed ${primaryGreen}`, color: '#777', fontSize: '1em' }}>
                <p>Zawsze dla Ciebie, z basenu AGH! &copy; {new Date().getFullYear()}</p>
                <p style={{ fontSize: '0.8em', marginTop: '10px' }}>Tworzone z pasją przez wodnych entuzjastów AGH.</p>
            </footer>
        </div>
    );
};

export default CommunityPoolAGHApp;