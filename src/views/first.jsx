import React from 'react';

const AghPoolWebsiteFirst = () => {
  const primaryColor = '#007bff'; // A vibrant blue
  const accentColor = '#28a745'; // A green for secondary actions
  const textColor = '#343a40';
  const lightBg = '#f8f9fa';
  const darkBg = '#e9ecef';

  return (
    <div style={{
      width: '100%',
      height: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
      color: textColor,
      backgroundColor: lightBg,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: primaryColor,
        color: 'white',
        padding: '15px 20px',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        flexShrink: 0
      }}>
        <h1 style={{ margin: 0, fontSize: '1.5em' }}>AGH Pływalnia</h1>
        <p style={{ margin: '5px 0 0', fontSize: '0.9em', opacity: 0.9 }}>Twoje miejsce relaksu i treningu</p>
      </header>

      {/* Hero Section */}
      <section style={{
        backgroundImage: `url('https://via.placeholder.com/600x300/007bff/ffffff?text=AGH+Basen')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '60px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textShadow: '0 2px 4px rgba(0,0,0,0.5)',
        minHeight: '200px', // Ensure visibility in small windows
        flexShrink: 0
      }}>
        <h2 style={{ fontSize: '2em', margin: '0 0 10px' }}>Zanurz się w Świecie Sportu!</h2>
        <p style={{ fontSize: '1.1em', maxWidth: '80%', margin: '0 auto 20px' }}>
          Nowoczesna pływalnia AGH zaprasza do korzystania z basenów i strefy wellness.
        </p>
        <button style={{
          backgroundColor: accentColor,
          color: 'white',
          border: 'none',
          padding: '12px 25px',
          borderRadius: '5px',
          fontSize: '1em',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          outline: 'none',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}>
          Sprawdź Grafik
        </button>
      </section>

      {/* Main Content Area - Flex Grow to fill space */}
      <main style={{ flexGrow: 1, padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Info Cards */}
        <div style={{
          display: 'flex',
          flexDirection: 'column', // Stack vertically in small window
          gap: '20px',
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            flex: '1 1 auto'
          }}>
            <h3 style={{ color: primaryColor, marginTop: 0, marginBottom: '10px' }}>Godziny Otwarcia</h3>
            <p>Poniedziałek - Piątek: 6:00 - 22:00</p>
            <p>Sobota - Niedziela: 8:00 - 20:00</p>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            flex: '1 1 auto'
          }}>
            <h3 style={{ color: primaryColor, marginTop: 0, marginBottom: '10px' }}>Adres</h3>
            <p>ul. Reymonta 17, 30-059 Kraków</p>
            <p>Wydział XYZ, Budynek ABC</p>
          </div>
        </div>

        {/* Quick Links / Call to Actions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', // Responsive grid
          gap: '15px'
        }}>
          <button style={{
            backgroundColor: darkBg,
            color: textColor,
            border: 'none',
            padding: '15px 10px',
            borderRadius: '5px',
            fontSize: '0.9em',
            cursor: 'pointer',
            textAlign: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            transition: 'background-color 0.3s ease',
            outline: 'none'
          }}>
            Cennik
          </button>
          <button style={{
            backgroundColor: darkBg,
            color: textColor,
            border: 'none',
            padding: '15px 10px',
            borderRadius: '5px',
            fontSize: '0.9em',
            cursor: 'pointer',
            textAlign: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            transition: 'background-color 0.3s ease',
            outline: 'none'
          }}>
            Zajęcia
          </button>
          <button style={{
            backgroundColor: darkBg,
            color: textColor,
            border: 'none',
            padding: '15px 10px',
            borderRadius: '5px',
            fontSize: '0.9em',
            cursor: 'pointer',
            textAlign: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            transition: 'background-color 0.3s ease',
            outline: 'none'
          }}>
            Kontakt
          </button>
          <button style={{
            backgroundColor: darkBg,
            color: textColor,
            border: 'none',
            padding: '15px 10px',
            borderRadius: '5px',
            fontSize: '0.9em',
            cursor: 'pointer',
            textAlign: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            transition: 'background-color 0.3s ease',
            outline: 'none'
          }}>
            Galeria
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: primaryColor,
        color: 'white',
        textAlign: 'center',
        padding: '15px 20px',
        fontSize: '0.8em',
        marginTop: 'auto', // Push to bottom
        flexShrink: 0
      }}>
        &copy; {new Date().getFullYear()} Pływalnia AGH. Wszystkie prawa zastrzeżone.
      </footer>
    </div>
  );
};

export default AghPoolWebsiteFirst;