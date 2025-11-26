import React from 'react';

const ThirdPlywalniaAGHView = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '650px',
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
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
  };

  const listStyle = {
    listStyleType: 'disc',
    marginLeft: '20px',
    color: '#555',
    lineHeight: '1.8',
  };

  const listItemStyle = {
    marginBottom: '8px',
  };

  const rulesListStyle = {
    listStyleType: 'decimal',
    marginLeft: '20px',
    color: '#555',
    lineHeight: '1.8',
  };

  const emphasisStyle = {
    fontWeight: 'bold',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Pływalnia AGH - Udogodnienia i Zasady</h2>

      <div style={sectionStyle}>
        <h3 style={{ color: '#333', marginBottom: '15px' }}>Dostępne Udogodnienia:</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}><span style={emphasisStyle}>Basen sportowy:</span> 25-metrowy, 6 torów, głębokość od 1.2m do 1.8m.</li>
          <li style={listItemStyle}><span style={emphasisStyle}>Basen rekreacyjny:</span> Z hydromasażami, gejzerami, sztuczną rzeką.</li>
          <li style={listItemStyle}><span style={emphasisStyle}>Strefa wellness:</span> Sauna fińska, łaźnia parowa, jacuzzi.</li>
          <li style={listItemStyle}><span style={emphasisStyle}>Siłownia:</span> Nowoczesny sprzęt do ćwiczeń siłowych i cardio.</li>
          <li style={listItemStyle}><span style={emphasisStyle}>Kawiarnia:</span> Oferująca napoje i przekąski.</li>
          <li style={listItemStyle}><span style={emphasisStyle}>Sklepik:</span> Z akcesoriami pływackimi.</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={{ color: '#333', marginBottom: '15px' }}>Ważne Zasady:</h3>
        <ol style={rulesListStyle}>
          <li style={listItemStyle}>Na terenie pływalni obowiązuje <span style={emphasisStyle}>czepek kąpielowy</span>.</li>
          <li style={listItemStyle}>Obuwie zmienne (klapki) jest <span style={emphasisStyle}>obowiązkowe</span>.</li>
          <li style={listItemStyle}>Dzieci do lat 7 mogą przebywać na basenie <span style={emphasisStyle}>wyłącznie pod opieką osób pełnoletnich</span>.</li>
          <li style={listItemStyle}>Przed wejściem do wody należy skorzystać z prysznica.</li>
          <li style={listItemStyle}>Zabrania się biegania po obiekcie.</li>
          <li style={listItemStyle}>Należy zapoznać się z pełnym regulaminem obiektu dostępnym przy kasie.</li>
        </ol>
      </div>

      <div>
        <p style={{ textAlign: 'center', fontSize: '0.9em', color: '#777', marginTop: '20px' }}>
          Dbamy o komfort i bezpieczeństwo wszystkich użytkowników.
        </p>
      </div>
    </div>
  );
};

export default ThirdPlywalniaAGHView;