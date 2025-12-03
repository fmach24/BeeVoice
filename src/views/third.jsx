import React, { useState } from 'react';

function ThirdView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const primaryColor = '#6B8E23'; // OliveDrab
  const secondaryColor = '#F5F5DC'; // Beige
  const accentColor = '#CD853F'; // Peru
  const bgColor = '#FCFCFC'; // Very light grey
  const textColor = '#333333';
  const lightTextColor = '#666666';
  const borderColor = '#DCDCDC';

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: bgColor,
    fontFamily: 'Montserrat, sans-serif',
    color: textColor,
    lineHeight: '1.6',
  };

  const headerStyle = {
    backgroundColor: primaryColor,
    color: 'white',
    padding: '20px 30px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };

  const headerTitleStyle = {
    fontSize: '2.5em',
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const headerSubtitleStyle = {
    fontSize: '1.1em',
    color: secondaryColor,
  };

  const mainContentStyle = {
    flexGrow: 1,
    maxWidth: '1000px',
    margin: '40px auto',
    padding: '0 20px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '50px',
  };

  const sectionStyle = {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    padding: '40px',
    border: `1px solid ${borderColor}`,
  };

  const sectionTitleStyle = {
    color: primaryColor,
    fontSize: '2em',
    marginBottom: '25px',
    borderBottom: `2px solid ${accentColor}`,
    paddingBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '1.1em',
    marginBottom: '15px',
    color: lightTextColor,
  };

  const contactGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
    marginTop: '30px',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: lightTextColor,
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: `1px solid ${borderColor}`,
    borderRadius: '5px',
    fontSize: '1em',
    boxSizing: 'border-box',
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical',
    minHeight: '120px',
  };

  const buttonStyle = {
    backgroundColor: accentColor,
    color: 'white',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1em',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    marginTop: '15px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  };

  const buttonHoverStyle = {
    backgroundColor: '#C07534', // slightly darker accent
    transform: 'translateY(-1px)',
  };

  const contactInfoStyle = {
    backgroundColor: secondaryColor,
    borderRadius: '8px',
    padding: '30px',
    border: `1px solid ${accentColor}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const infoItemStyle = {
    marginBottom: '15px',
    fontSize: '1.05em',
    color: textColor,
  };

  const mapPlaceholderStyle = {
    backgroundColor: '#E0E0E0',
    height: '200px',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: lightTextColor,
    fontSize: '1.2em',
    marginTop: '20px',
    border: `1px dashed ${lightTextColor}`,
  };

  const footerStyle = {
    backgroundColor: primaryColor,
    color: 'white',
    textAlign: 'center',
    padding: '18px',
    fontSize: '0.85em',
    marginTop: '50px',
    boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // In a real app, you would send this data to a server
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const [buttonHover, setButtonHover] = useState(false);

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={headerTitleStyle}>O Nas & Kontakt</h1>
        <p style={headerSubtitleStyle}>Poznaj naszą historię i skontaktuj się z nami!</p>
      </header>

      <main style={mainContentStyle}>
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Nasza Historia</h2>
          <p style={paragraphStyle}>
            Piekarnia "Złoty Kłos" to miejsce, gdzie tradycja spotyka się z pasją. Od 1995 roku z dumą wypiekamy dla mieszkańców Limanowej i okolic, bazując na sprawdzonych, rodzinnych recepturach. Każdy bochenek chleba, każda bułka i każde ciasto powstaje z najwyższej jakości lokalnych składników, z szacunkiem dla natury i rzemiosła.
          </p>
          <p style={paragraphStyle}>
            Wierzymy, że prawdziwy smak tkwi w prostocie i autentyczności. Dlatego nie uznajemy kompromisów – nasze wyroby to gwarancja świeżości, aromatu i niezapomnianych doznań smakowych, które przeniosą Cię w świat domowych wypieków.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Skontaktuj Się Z Nami</h2>
          <div style={contactGridStyle}>
            <div>
              {formSubmitted ? (
                <p style={{ color: primaryColor, fontWeight: 'bold', fontSize: '1.2em', textAlign: 'center' }}>
                  Dziękujemy za wiadomość! Odpowiemy najszybciej, jak to możliwe.
                </p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={formGroupStyle}>
                    <label htmlFor="name" style={labelStyle}>Imię:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </div>
                  <div style={formGroupStyle}>
                    <label htmlFor="email" style={labelStyle}>Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </div>
                  <div style={formGroupStyle}>
                    <label htmlFor="message" style={labelStyle}>Wiadomość:</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      style={textareaStyle}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    style={{ ...buttonStyle, ...(buttonHover ? buttonHoverStyle : {}) }}
                    onMouseEnter={() => setButtonHover(true)}
                    onMouseLeave={() => setButtonHover(false)}
                  >
                    Wyślij Wiadomość
                  </button>
                </form>
              )}
            </div>
            <div style={contactInfoStyle}>
              <div>
                <p style={infoItemStyle}><strong>Adres:</strong> ul. Krakowska 12, 34-600 Limanowa</p>
                <p style={infoItemStyle}><strong>Telefon:</strong> +48 123 456 789</p>
                <p style={infoItemStyle}><strong>Email:</strong> kontakt@zlotyklos.pl</p>
                <p style={infoItemStyle}><strong>Godziny otwarcia:</strong> Pon-Pt: 7:00-18:00, Sob: 7:00-14:00</p>
              </div>
              <div style={mapPlaceholderStyle}>
                Mapa Poglądowa
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} Piekarnia "Złoty Kłos". Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}

export default ThirdView;