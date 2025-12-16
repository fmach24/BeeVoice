import React from 'react';

const AghPoolWebsiteThird = () => {
  const brandColor = '#004c99'; // Deep blue
  const highlightColor = '#ff5722'; // Orange/red accent
  const lightTextColor = '#eee';
  const darkTextColor = '#2c3e50';
  const backgroundColor = '#ecf0f1'; // Light grey/blue
  const cardBackgroundColor = 'white';

  const images = [
    'https://via.placeholder.com/300x200/004c99/ffffff?text=Basen+Glowny',
    'https://via.placeholder.com/300x200/004c99/ffffff?text=Strefa+Dzieci',
    'https://via.placeholder.com/300x200/004c99/ffffff?text=Zajecia+Aqua',
    'https://via.placeholder.com/300x200/004c99/ffffff?text=Relaks',
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Nowe zajęcia z aqua-jogi!',
      date: '15.03.2024',
      summary: 'Zapraszamy na innowacyjne zajęcia z aqua-jogi, które łączą relaks z aktywnością fizyczną w wodzie.',
      image: 'https://via.placeholder.com/150x100/ff5722/ffffff?text=AquaYoga'
    },
    {
      id: 2,
      title: 'Promocja - karnet studencki',
      date: '10.03.2024',
      summary: 'Specjalna oferta dla studentów AGH! Skorzystaj z 20% zniżki na semestralny karnet.',
      image: 'https://via.placeholder.com/150x100/ff5722/ffffff?text=Student'
    },
    {
      id: 3,
      title: 'Remont szatni zakończony',
      date: '01.03.2024',
      summary: 'Szatnie męskie i damskie przeszły gruntowny remont. Zapraszamy do korzystania z odświeżonych przestrzeni!',
      image: 'https://via.placeholder.com/150x100/ff5722/ffffff?text=Szatnie'
    },
    {
      id: 4,
      title: 'Dzień otwarty na basenie!',
      date: '28.02.2024',
      summary: 'Przyjdź i wypróbuj nasze atrakcje za darmo w specjalny dzień otwarty dla mieszkańców Krakowa.',
      image: 'https://via.placeholder.com/150x100/ff5722/ffffff?text=OpenDay'
    }
  ];

  return (
    <div style={{
      width: '100%',
      height: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
      boxSizing: 'border-box',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      color: darkTextColor,
      backgroundColor: backgroundColor,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: brandColor,
        color: lightTextColor,
        padding: '15px 20px',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        flexShrink: 0
      }}>
        <h1 style={{ margin: 0, fontSize: '1.7em' }}>Pływalnia AGH - Galeria i Aktualności</h1>
      </header>

      {/* Main Content */}
      <main style={{ flexGrow: 1, padding: '20px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
        {/* Gallery Section */}
        <section style={{
          backgroundColor: cardBackgroundColor,
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
          flexShrink: 0
        }}>
          <h2 style={{ color: brandColor, marginTop: 0, marginBottom: '15px', textAlign: 'center' }}>Nasza Galeria</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', // Responsive image grid
            gap: '10px'
          }}>
            {images.map((src, index) => (
              <div key={index} style={{
                borderRadius: '5px',
                overflow: 'hidden',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}>
                <img
                  src={src}
                  alt={`AGH Pool ${index + 1}`}
                  style={{ width: '100%', height: '100px', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* News Feed Section */}
        <section style={{
          backgroundColor: cardBackgroundColor,
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
          flexGrow: 1, // Allow news feed to grow and use available space
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h2 style={{ color: brandColor, marginTop: 0, marginBottom: '15px', textAlign: 'center' }}>Aktualności</h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            overflowY: 'auto' // Make news feed scrollable if many items
          }}>
            {newsItems.map(news => (
              <div key={news.id} style={{
                display: 'flex',
                alignItems: 'flex-start',
                paddingBottom: '15px',
                borderBottom: `1px solid ${backgroundColor}`
              }}>
                <img
                  src={news.image}
                  alt={news.title}
                  style={{
                    width: '70px',
                    height: '70px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    marginRight: '15px',
                    flexShrink: 0
                  }}
                />
                <div style={{ flexGrow: 1 }}>
                  <h3 style={{ margin: '0 0 5px', fontSize: '1.1em', color: highlightColor }}>{news.title}</h3>
                  <p style={{ margin: '0 0 5px', fontSize: '0.85em', color: darkTextColor }}>{news.date}</p>
                  <p style={{ margin: 0, fontSize: '0.9em', lineHeight: '1.4' }}>{news.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: brandColor,
        color: lightTextColor,
        textAlign: 'center',
        padding: '15px 20px',
        fontSize: '0.8em',
        marginTop: 'auto',
        flexShrink: 0
      }}>
        &copy; {new Date().getFullYear()} Pływalnia AGH. Odwiedź nas już dziś!
      </footer>
    </div>
  );
};

export default AghPoolWebsiteThird;