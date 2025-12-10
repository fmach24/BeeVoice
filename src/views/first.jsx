import React from 'react';

const MinimalistPoolAGHApp = () => {
    return (
        <div style={{ fontFamily: 'Verdana, Geneva, sans-serif', maxWidth: '960px', margin: '0 auto', padding: '20px', lineHeight: '1.6' }}>
            <header style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ margin: 0, color: '#2c3e50', fontSize: '2.5em' }}>Basen AGH</h1>
                <nav>
                    <a href="#about" style={{ margin: '0 15px', textDecoration: 'none', color: '#3498db', fontWeight: 'bold' }}>O Nas</a>
                    <a href="#hours" style={{ margin: '0 15px', textDecoration: 'none', color: '#3498db', fontWeight: 'bold' }}>Godziny</a>
                    <a href="#prices" style={{ margin: '0 15px', textDecoration: 'none', color: '#3498db', fontWeight: 'bold' }}>Cennik</a>
                    <a href="#contact" style={{ margin: '0 15px', textDecoration: 'none', color: '#3498db', fontWeight: 'bold' }}>Kontakt</a>
                </nav>
            </header>

            <section id="about" style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px', fontSize: '1.8em' }}>O Basenie AGH</h2>
                <p>Witamy na stronie Basenu AGH – nowoczesnego obiektu sportowego dostępnego dla studentów, pracowników oraz mieszkańców Krakowa. Oferujemy 6 torów pływackich, basen rekreacyjny, jacuzzi oraz saunę suchą.</p>
                <p>Nasz basen to idealne miejsce do aktywnego wypoczynku i treningu pływackiego w komfortowych warunkach. Zapraszamy!</p>
            </section>

            <section id="hours" style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px', fontSize: '1.8em' }}>Godziny Otwarcia</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px', padding: '5px 0', borderBottom: '1px dotted #eee' }}><strong>Poniedziałek - Piątek:</strong> 6:00 - 22:00</li>
                    <li style={{ marginBottom: '10px', padding: '5px 0', borderBottom: '1px dotted #eee' }}><strong>Sobota:</strong> 8:00 - 20:00</li>
                    <li style={{ marginBottom: '10px', padding: '5px 0' }}><strong>Niedziela:</strong> 9:00 - 18:00</li>
                </ul>
                <p style={{ fontSize: '0.9em', color: '#555' }}>Prosimy o zapoznanie się z aktualnymi informacjami o zajętości torów na tablicy ogłoszeń lub telefonicznie.</p>
            </section>

            <section id="prices" style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px', fontSize: '1.8em' }}>Cennik</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginBottom: '15px' }}>
                    <thead>
                        <tr>
                            <th style={{ borderBottom: '1px solid #ccc', padding: '10px', backgroundColor: '#f0f0f0' }}>Rodzaj Biletu</th>
                            <th style={{ borderBottom: '1px solid #ccc', padding: '10px', backgroundColor: '#f0f0f0' }}>Cena (60 min)</th>
                            <th style={{ borderBottom: '1px solid #ccc', padding: '10px', backgroundColor: '#f0f0f0' }}>Cena (studencki AGH)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ borderBottom: '1px solid #eee', padding: '10px' }}>Normalny</td>
                            <td style={{ borderBottom: '1px solid #eee', padding: '10px' }}>20 PLN</td>
                            <td style={{ borderBottom: '1px solid #eee', padding: '10px' }}>15 PLN</td>
                        </tr>
                        <tr>
                            <td style={{ borderBottom: '1px solid #eee', padding: '10px' }}>Ulgowy (dzieci, seniorzy)</td>
                            <td style={{ borderBottom: '1px solid #eee', padding: '10px' }}>15 PLN</td>
                            <td style={{ borderBottom: '1px solid #eee', padding: '10px' }}>N/A</td>
                        </tr>
                        <tr>
                            <td style={{ borderBottom: '1px solid #eee', padding: '10px' }}>Karnet miesięczny</td>
                            <td style={{ borderBottom: '1px solid #eee', padding: '10px' }}>180 PLN</td>
                            <td style={{ borderBottom: '1px solid #eee', padding: '10px' }}>120 PLN</td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ fontSize: '0.9em', color: '#555', marginTop: '10px' }}>Wszystkie ceny zawierają VAT. Szczegółowy cennik dostępny w kasie basenu.</p>
            </section>

            <section id="contact" style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px', fontSize: '1.8em' }}>Kontakt</h2>
                <p><strong>Adres:</strong> ul. Reymonta 19, 30-059 Kraków</p>
                <p><strong>Telefon (Recepcja):</strong> +48 12 617 39 39</p>
                <p><strong>Email:</strong> <a href="mailto:basen@agh.edu.pl" style={{ color: '#3498db', textDecoration: 'none' }}>basen@agh.edu.pl</a></p>
            </section>

            <footer style={{ textAlign: 'center', marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #eee', color: '#777', fontSize: '0.9em' }}>
                <p>&copy; {new Date().getFullYear()} Basen AGH. Wszelkie prawa zastrzeżone.</p>
            </footer>
        </div>
    );
};

export default MinimalistPoolAGHApp;