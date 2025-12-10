import React from 'react';

const ModernPoolAGHApp = () => {
    // Neon Color Palette
    const darkBg = '#0A0A0A'; // Deep black background
    const darkerBg = '#1A1A1A'; // Slightly lighter black for sections/cards
    const neonPrimary = '#00FFFF'; // Vibrant Cyan for primary elements (e.g., AGH Blue equivalent)
    const neonAccent = '#39FF14'; // Electric Green for calls to action/highlights
    const neonTextLight = '#E0FFFF'; // Very light cyan for general text

    // Glow effects
    const textGlowPrimary = `0 0 5px ${neonPrimary}, 0 0 10px ${neonPrimary}`;
    const textGlowAccent = `0 0 5px ${neonAccent}, 0 0 10px ${neonAccent}`;
    // Stronger glow for elements to stand out
    const elementGlowPrimary = `0 0 8px ${neonPrimary}, 0 0 15px ${neonPrimary}, 0 0 25px ${neonPrimary}50`; // Last value is opacity
    const elementGlowAccent = `0 0 8px ${neonAccent}, 0 0 15px ${neonAccent}, 0 0 25px ${neonAccent}50`;

    const sectionStyle = {
        padding: '60px 20px',
        textAlign: 'center',
        marginBottom: '0',
        color: neonTextLight, // Default text color for sections
        borderBottom: `1px solid ${neonPrimary}40`, // Subtle divider
    };

    const cardStyle = {
        background: darkerBg,
        borderRadius: '10px',
        border: `1px solid ${neonPrimary}80`, // Slightly transparent neon border
        boxShadow: elementGlowPrimary, // Neon glow for cards
        padding: '30px',
        margin: '20px',
        flex: '1',
        minWidth: '280px',
        maxWidth: '350px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'all 0.3s ease-in-out', // Smooth transitions
        // Note: For actual hover effects, you'd typically use CSS modules or styled-components
        // as inline styles don't support pseudo-classes like :hover directly.
        // For this example, we'll focus on the static neon aesthetic.
    };

    const buttonBaseStyle = {
        border: 'none',
        padding: '18px 35px',
        fontSize: '1.2em',
        borderRadius: '8px',
        cursor: 'pointer',
        marginTop: '30px',
        transition: 'all 0.3s ease',
        textTransform: 'uppercase', // Neon text often uppercase
    };

    const linkBaseStyle = {
        margin: '0 20px',
        color: neonTextLight,
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'color 0.3s ease-in-out, text-shadow 0.3s ease-in-out',
        textShadow: textGlowPrimary,
        letterSpacing: '0.05em', // Spread out letters
    };

    return (
        <div style={{
            fontFamily: "'Orbitron', monospace, sans-serif", // Futuristic/neon font. Link it in index.html for full effect.
            color: neonTextLight,
            backgroundColor: darkBg,
            minHeight: '100vh', // Ensure background covers full height
        }}>
            <header style={{
                backgroundColor: darkerBg,
                color: neonPrimary,
                padding: '15px 40px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: elementGlowPrimary, // Header glow
                borderBottom: `1px solid ${neonPrimary}`,
            }}>
                <h1 style={{ margin: 0, fontSize: '2.2em', textShadow: textGlowPrimary, letterSpacing: '0.1em' }}>Basen <span style={{ fontWeight: 'normal', color: neonTextLight, textShadow: textGlowPrimary }}>AGH</span></h1>
                <nav>
                    <a href="#about" style={linkBaseStyle}>O Nas</a>
                    <a href="#features" style={linkBaseStyle}>Udogodnienia</a>
                    <a href="#hours-prices" style={linkBaseStyle}>Godziny & Cennik</a>
                    <a href="#contact" style={linkBaseStyle}>Kontakt</a>
                </nav>
            </header>

            <section style={{
                ...sectionStyle,
                // Darker overlay and neon placeholder image
                backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://via.placeholder.com/1500x500/${darkBg.substring(1)}/${neonPrimary.substring(1)}?text=AGH+POOL+NEON")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: neonTextLight,
                height: '450px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textShadow: textGlowPrimary, // Hero text glow
                borderBottom: `2px solid ${neonPrimary}`, // Stronger border for hero
            }}>
                <h2 style={{ fontSize: '3.8em', marginBottom: '15px', lineHeight: '1.2', textShadow: textGlowPrimary, letterSpacing: '0.08em' }}>Zanurkuj w Świecie Sportu!</h2>
                <p style={{ fontSize: '1.3em', maxWidth: '750px', lineHeight: '1.6', opacity: 0.9 }}>
                    Nowoczesny basen sportowo-rekreacyjny AGH w Krakowie. Idealne miejsce na trening, relaks i aktywny wypoczynek dla każdego.
                </p>
                <button style={{
                    ...buttonBaseStyle,
                    backgroundColor: neonAccent,
                    color: darkBg, // Text on button is dark for strong contrast
                    boxShadow: elementGlowAccent, // Accent glow
                    textShadow: `none`, // Remove text shadow on button text for crispness
                }} onClick={() => alert('Przekierowanie do systemu rezerwacji lub aktualności')}>
                    Sprawdź Dostępność & Zarezerwuj!
                </button>
            </section>

            <section id="about" style={{ ...sectionStyle, backgroundColor: darkerBg }}>
                <h2 style={{ fontSize: '2.5em', marginBottom: '20px', color: neonPrimary, textShadow: textGlowPrimary, letterSpacing: '0.05em' }}>O Nas</h2>
                <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.1em', opacity: 0.9 }}>
                    Basen AGH to nowoczesny kompleks wodny otwarty dla studentów, pracowników AGH oraz mieszkańców Krakowa. Oferujemy 6-torowy basen sportowy, strefę rekreacyjną z hydromasażami, jacuzzi oraz saunę suchą. Dbamy o najwyższe standardy czystości i bezpieczeństwa, zapewniając idealne warunki do pływania i relaksu.
                </p>
            </section>

            <section id="features" style={{ ...sectionStyle, backgroundColor: darkBg }}>
                <h2 style={{ fontSize: '2.5em', marginBottom: '40px', color: neonPrimary, textShadow: textGlowPrimary, letterSpacing: '0.05em' }}>Nasze Udogodnienia</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
                    <div style={cardStyle}>
                        {/* Placeholder icons with neon colors */}
                        <img src={`https://via.placeholder.com/60/${darkerBg.substring(1)}/${neonPrimary.substring(1)}?text=🏊`} alt="Tor pływacki" style={{ marginBottom: '15px', borderRadius: '50%', boxShadow: `0 0 10px ${neonPrimary}` }} />
                        <h3 style={{ color: neonPrimary, fontSize: '1.6em', marginBottom: '10px', textShadow: textGlowPrimary }}>Tory Pływackie</h3>
                        <p style={{ opacity: 0.8 }}>6 profesjonalnych torów, idealnych do intensywnych treningów i swobodnego pływania rekreacyjnego.</p>
                    </div>
                    <div style={cardStyle}>
                        <img src={`https://via.placeholder.com/60/${darkerBg.substring(1)}/${neonAccent.substring(1)}?text=🌊`} alt="Basen rekreacyjny" style={{ marginBottom: '15px', borderRadius: '50%', boxShadow: `0 0 10px ${neonAccent}` }} />
                        <h3 style={{ color: neonPrimary, fontSize: '1.6em', marginBottom: '10px', textShadow: textGlowPrimary }}>Strefa Rekreacyjna</h3>
                        <p style={{ opacity: 0.8 }}>Basen rekreacyjny z hydromasażami, gejzerami i "dziką rzeką" dla pełnego relaksu i zabawy.</p>
                    </div>
                    <div style={cardStyle}>
                        <img src={`https://via.placeholder.com/60/${darkerBg.substring(1)}/${neonTextLight.substring(1)}?text=♨️`} alt="Sauna" style={{ marginBottom: '15px', borderRadius: '50%', boxShadow: `0 0 10px ${neonTextLight}` }} />
                        <h3 style={{ color: neonPrimary, fontSize: '1.6em', marginBottom: '10px', textShadow: textGlowPrimary }}>Sauna & Jacuzzi</h3>
                        <p style={{ opacity: 0.8 }}>Odpocznij po treningu w naszej suchej saunie lub zrelaksuj się w bąbelkowej wodzie jacuzzi.</p>
                    </div>
                </div>
            </section>

            <section id="hours-prices" style={{ ...sectionStyle, backgroundColor: darkerBg }}>
                <h2 style={{ fontSize: '2.5em', marginBottom: '40px', color: neonPrimary, textShadow: textGlowPrimary, letterSpacing: '0.05em' }}>Godziny Otwarcia & Cennik</h2>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px' }}>
                    <div style={{
                        flex: '1',
                        minWidth: '300px',
                        maxWidth: '450px',
                        textAlign: 'left',
                        padding: '30px',
                        borderRadius: '10px',
                        boxShadow: elementGlowPrimary, // Glow for hours box
                        backgroundColor: darkBg,
                        border: `1px solid ${neonPrimary}80`
                    }}>
                        <h3 style={{ color: neonPrimary, borderBottom: `2px solid ${neonPrimary}`, paddingBottom: '15px', marginBottom: '25px', fontSize: '1.8em', textShadow: textGlowPrimary }}>Godziny</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '12px', padding: '10px 0', borderBottom: `1px dotted ${neonPrimary}50`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span><strong>Pon - Pt:</strong></span> <span>6:00 - 22:00</span></li>
                            <li style={{ marginBottom: '12px', padding: '10px 0', borderBottom: `1px dotted ${neonPrimary}50`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span><strong>Sobota:</strong></span> <span>8:00 - 20:00</span></li>
                            <li style={{ padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span><strong>Niedziela:</strong></span> <span>9:00 - 18:00</span></li>
                        </ul>
                    </div>
                    <div style={{
                        flex: '1',
                        minWidth: '300px',
                        maxWidth: '450px',
                        textAlign: 'left',
                        padding: '30px',
                        borderRadius: '10px',
                        boxShadow: elementGlowPrimary, // Glow for prices box
                        backgroundColor: darkBg,
                        border: `1px solid ${neonPrimary}80`
                    }}>
                        <h3 style={{ color: neonPrimary, borderBottom: `2px solid ${neonPrimary}`, paddingBottom: '15px', marginBottom: '25px', fontSize: '1.8em', textShadow: textGlowPrimary }}>Cennik (60 min)</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '12px', padding: '10px 0', borderBottom: `1px dotted ${neonPrimary}50`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Bilet Normalny:</span> <strong style={{ color: neonPrimary, textShadow: textGlowPrimary }}>20 PLN</strong></li>
                            <li style={{ marginBottom: '12px', padding: '10px 0', borderBottom: `1px dotted ${neonPrimary}50`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Bilet Ulgowy (studenci AGH):</span> <strong style={{ color: neonAccent, textShadow: textGlowAccent }}>15 PLN</strong></li>
                            <li style={{ padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span>Karnet Miesięczny:</span> <strong style={{ color: neonPrimary, textShadow: textGlowPrimary }}>od 120 PLN</strong></li>
                        </ul>
                        <p style={{ fontSize: '0.9em', color: neonTextLight, opacity: 0.7, marginTop: '15px' }}>Szczegółowy cennik i zasady korzystania z karnetów dostępne w recepcji.</p>
                    </div>
                </div>
            </section>

            {/* Contact section with inverted colors for striking effect */}
            <section id="contact" style={{ ...sectionStyle, backgroundColor: neonPrimary, color: darkBg, borderBottom: `2px solid ${neonAccent}` }}>
                <h2 style={{ fontSize: '2.5em', marginBottom: '30px', color: darkBg, textShadow: `0 0 5px ${neonTextLight}` }}>Skontaktuj Się z Nami!</h2>
                <p style={{ fontSize: '1.2em', marginBottom: '15px', fontWeight: 'bold' }}><strong>Adres:</strong> ul. Reymonta 19, 30-059 Kraków</p>
                <p style={{ fontSize: '1.2em', marginBottom: '15px', fontWeight: 'bold' }}><strong>Telefon:</strong> +48 12 617 39 39</p>
                <p style={{ fontSize: '1.2em', marginBottom: '20px', fontWeight: 'bold' }}><strong>Email:</strong> <a href="mailto:basen@agh.edu.pl" style={{ color: darkBg, textDecoration: 'underline', textShadow: `0 0 3px ${neonTextLight}` }}>basen@agh.edu.pl</a></p>
                <div style={{ marginTop: '30px' }}>
                    <button style={{
                        ...buttonBaseStyle,
                        backgroundColor: darkBg, // Dark button on bright background
                        color: neonPrimary,
                        padding: '15px 30px',
                        boxShadow: elementGlowPrimary, // Primary neon glow
                        textShadow: textGlowPrimary,
                    }} onClick={() => alert('Otworzy mapę z lokalizacją basenu')}>
                        Znajdź nas na mapie!
                    </button>
                </div>
            </section>

            <footer style={{
                backgroundColor: darkerBg,
                color: neonTextLight,
                textAlign: 'center',
                padding: '25px',
                fontSize: '0.9em',
                borderTop: `1px solid ${neonPrimary}`,
                textShadow: `0 0 3px ${neonTextLight}`,
                opacity: 0.7,
            }}>
                <p>&copy; {new Date().getFullYear()} Basen AGH. Wszystkie prawa zastrzeżone.</p>
                <p>Projekt i wykonanie: Zespół IT AGH (w domyśle).</p>
            </footer>
        </div>
    );
};

export default ModernPoolAGHApp;