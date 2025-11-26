import React from 'react';

const FirstPlywalniaAGHView = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '600px',
    margin: '30px auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  };

  const titleStyle = {
    color: '#0056b3',
    textAlign: 'center',
    marginBottom: '25px',
    fontSize: '2em',
  };

  const sectionStyle = {
    marginBottom: '15px',
    borderBottom: '1px solid #eee',
    paddingBottom: '10px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    color: '#333',
    marginRight: '10px',
  };

  const textStyle = {
    color: '#555',
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Pływalnia AGH - Informacje Ogólne</h2>

      <div style={sectionStyle}>
        <p><span style={labelStyle}>Adres:</span> <span style={textStyle}>ul. Piastowska 26a, 30-070 Kraków</span></p>
        <p><span style={labelStyle}>Telefon:</span> <span style={textStyle}>+48 12 617 38 64</span></p>
        <p><span style={labelStyle}>E-mail:</span> <span style={textStyle}>plywalnia@agh.edu.pl</span></p>
      </div>

      <div style={sectionStyle}>
        <h3 style={{ ...labelStyle, fontSize: '1.2em', marginBottom: '10px', borderBottom: 'none' }}>Godziny otwarcia:</h3>
        <p style={textStyle}><span style={labelStyle}>Poniedziałek - Piątek:</span> 6:00 - 22:00</p>
        <p style={textStyle}><span style={labelStyle}>Sobota - Niedziela:</span> 8:00 - 22:00</p>
        <p style={{ ...textStyle, fontSize: '0.9em', marginTop: '10px' }}>*Prosimy o sprawdzenie aktualnych godzin na stronie internetowej.</p>
      </div>

      <div>
        <h3 style={{ ...labelStyle, fontSize: '1.2em', marginBottom: '10px', borderBottom: 'none' }}>Krótki opis:</h3>
        <p style={textStyle}>
          Pływalnia AGH to nowoczesny obiekt sportowy oferujący szeroki zakres usług dla studentów, pracowników oraz mieszkańców Krakowa.
          Dysponujemy basenem sportowym, rekreacyjnym oraz strefą wellness. Zapraszamy!
        </p>
      </div>
    </div>
  );
};

export default FirstPlywalniaAGHView;