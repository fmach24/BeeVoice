import React from 'react';

function ThirdView() {
  const headerStyle = {
    backgroundColor: '#8B4513', // SaddleBrown
    color: '#FFD700', // Gold
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif'
  };

  const navStyle = {
    display: 'flex',
    gap: '25px',
  };

  const linkStyle = {
    color: '#FFFFFF', // White
    textDecoration: 'none',
    fontSize: '1.1em',
    fontWeight: 'bold',
    transition: 'color 0.3s ease'
  };

  const mainContainerStyle = {
    padding: '40px 20px',
    backgroundColor: '#FDF5E6', // OldLace
    fontFamily: 'Georgia, serif',
    color: '#5A2D0C',
    maxWidth: '900px',
    margin: '0 auto'
  };

  const sectionTitleStyle = {
    textAlign: 'center',
    fontSize: '2.5em',
    marginBottom: '50px',
    color: '#8B4513'
  };

  const contentSectionStyle = {
    marginBottom: '40px',
    backgroundColor: '#FFFFFF',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
  };

  const subTitleStyle = {
    fontSize: '1.8em',
    color: '#A0522D', // Sienna
    marginBottom: '15px',
    borderBottom: '1px solid #D2B48C',
    paddingBottom: '10px'
  };

  const paragraphStyle = {
    fontSize: '1.1em',
    lineHeight: '1.7',
    marginBottom: '15px'
  };

  const contactInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    fontSize: '1.1em'
  };

  const mapPlaceholderStyle = {
    width: '100%',
    height: '300px',
    backgroundColor: '#D2B48C', // Tan
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '1.5em',
    borderRadius: '8px',
    marginTop: '20px'
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FDF5E6' }}>
      <header style={headerStyle}>
        <h1 style={{ margin: 0, fontSize: '1.8em' }}>Piekarnia Szymona z Limanowej</h1>
        <nav style={navStyle}>
          <a href="#" style={linkStyle}>Strona Główna</a>
          <a href="#" style={linkStyle}>Oferta</a>
          <a href="#" style={linkStyle}>O Nas</a>
          <a href="#" style={linkStyle}>Kontakt</a>
        </nav>
      </header>
      <div style={mainContainerStyle}>
        <h2 style={sectionTitleStyle}>O Nas i Jak Się z Nami Skontaktować</h2>

        <div style={contentSectionStyle}>
          <h3 style={subTitleStyle}>Nasza Historia</h3>
          <p style={paragraphStyle}>
            Piekarnia Szymona to rodzinna firma z długimi tradycjami, która od ponad 50 lat karmi mieszkańców Limanowej i okolic.
            Zaczynaliśmy od małego pieca w sercu miasta, a dziś, choć rozwinęliśmy się, niezmiennie pielęgnujemy sztukę tradycyjnego pieczenia.
            Wierzymy, że prawdziwy smak wypływa z pasji, najlepszych składników i szacunku dla rzemiosła.
          </p>
          <p style={paragraphStyle}>
            Każdy bochenek chleba, każda bułka i ciasto są dla nas wyrazem miłości do tego, co robimy.
            Nasze receptury, przekazywane z pokolenia na pokolenie, łączą w sobie klasykę z nutą nowoczesności,
            zawsze z dbałością o najwyższą jakość i świeżość.
          </p>
        </div>

        <div style={contentSectionStyle}>
          <h3 style={subTitleStyle}>Skontaktuj Się z Nami</h3>
          <div style={contactInfoStyle}>
            <p><strong>Adres:</strong> ul. Krakowska 12, 34-600 Limanowa</p>
            <p><strong>Telefon:</strong> <a href="tel:+48123456789" style={{ color: '#A0522D', textDecoration: 'none' }}>+48 123 456 789</a></p>
            <p><strong>Email:</strong> <a href="mailto:kontakt@piekarniaszymona.pl" style={{ color: '#A0522D', textDecoration: 'none' }}>kontakt@piekarniaszymona.pl</a></p>
            <p><strong>Godziny otwarcia:</strong> Poniedziałek - Sobota: 6:00 - 18:00, Niedziela: Nieczynne</p>
          </div>
          <div style={mapPlaceholderStyle}>
            Mapa dojazdu (Limanowa)
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdView;