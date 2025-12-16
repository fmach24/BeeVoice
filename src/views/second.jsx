import React, { useState } from 'react';

const AghPoolWebsiteSecond = () => {
  const primaryColor = '#0056b3'; // Darker blue
  const secondaryColor = '#ffc107'; // Yellow accent
  const textColor = '#333';
  const lightBg = '#f4f7f6';
  const darkBg = '#e0e0e0';
  const cardBg = 'white';

  const [activeDay, setActiveDay] = useState('Poniedziałek');

  const scheduleData = {
    'Poniedziałek': [
      { time: '07:00-08:00', activity: 'Pływanie rekreacyjne', pool: 'Główny' },
      { time: '08:00-09:00', activity: 'Aquaaerobik', pool: 'Mniejszy' },
      { time: '10:00-11:00', activity: 'Nauka pływania (dzieci)', pool: 'Nauka' },
      { time: '17:00-18:00', activity: 'Pływanie sportowe', pool: 'Główny' },
      { time: '19:00-20:00', activity: 'Pływanie rekreacyjne', pool: 'Główny' },
      { time: '20:00-21:00', activity: 'Pływanie rekreacyjne', pool: 'Główny' },
      { time: '21:00-22:00', activity: 'Pływanie rekreacyjne', pool: 'Główny' },
    ],
    'Wtorek': [
      { time: '07:00-08:00', activity: 'Pływanie rekreacyjne', pool: 'Główny' },
      { time: '09:00-10:00', activity: 'Aqua Fitness', pool: 'Mniejszy' },
      { time: '11:00-12:00', activity: 'Nauka pływania (dorośli)', pool: 'Nauka' },
      { time: '18:00-19:00', activity: 'Pływanie sportowe', pool: 'Główny' },
    ],
    'Środa': [
      { time: '07:00-08:00', activity: 'Pływanie rekreacyjne', pool: 'Główny' },
      { time: '08:00-09:00', activity: 'Pływanie rekreacyjne', pool: 'Główny' },
      { time: '10:00-11:00', activity: 'Pływanie rekreacyjne', pool: 'Mniejszy' },
      { time: '16:00-17:00', activity: 'Aquaaerobik', pool: 'Mniejszy' },
      { time: '18:00-19:00', activity: 'Nauka pływania (dzieci)', pool: 'Nauka' },
    ],
    'Czwartek': [
      { time: '07:00-08:00', activity: 'Pływanie rekreacyjne', pool: 'Główny' },
      { time: '09:00-10:00', activity: 'Pływanie rekreacyjne', pool: 'Główny' },
      { time: '11:00-12:00', activity: 'Aqua Fitness', pool: 'Mniejszy' },
      { time: '17:00-18:00', activity: 'Pływanie sportowe', pool: 'Główny' },
    ],
    'Piątek': [
      { time: '07:00-08:00', activity: 'Pływanie rekreacyjne', pool: 'Główny' },
      { time: '08:00-09:00', activity: 'Pływanie rekreacyjne', pool: 'Główny' },
      { time: '10:00-11:00', activity: 'Nauka pływania (dzieci)', pool: 'Nauka' },
      { time: '17:00-18:00', activity: 'Pływanie rekreacyjne', pool: 'Główny' },
      { time: '19:00-20:00', activity: 'Pływanie rekreacyjne', pool: 'Główny' },
    ],
    'Sobota': [
      { time: '09:00-10:00', activity: 'Pływanie rekreacyjne', pool: 'Główny' },
      { time: '10:00-11:00', activity: 'Nauka pływania (dzieci)', pool: 'Nauka' },
      { time: '14:00-15:00', activity: 'Pływanie rekreacyjne', pool: 'Główny' },
    ],
    'Niedziela': [
      { time: '09:00-10:00', activity: 'Pływanie rekreacyjne', pool: 'Główny' },
      { time: '10:00-11:00', activity: 'Pływanie rekreacyjne', pool: 'Mniejszy' },
      { time: '13:00-14:00', activity: 'Pływanie rekreacyjne', pool: 'Główny' },
    ],
  };

  const daysOfWeek = Object.keys(scheduleData);

  return (
    <div style={{
      width: '100%',
      height: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
      boxSizing: 'border-box',
      fontFamily: 'Verdana, sans-serif',
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
        <h1 style={{ margin: 0, fontSize: '1.6em' }}>AGH Pływalnia - Grafik i Usługi</h1>
      </header>

      {/* Main Content */}
      <main style={{ flexGrow: 1, padding: '20px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
        {/* Schedule Section */}
        <section style={{
          backgroundColor: cardBg,
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h2 style={{ color: primaryColor, marginTop: 0, marginBottom: '15px', textAlign: 'center' }}>Grafik Zajęć</h2>
          
          {/* Day Tabs */}
          <div style={{
            display: 'flex',
            overflowX: 'auto', // Allow horizontal scrolling for day tabs
            marginBottom: '15px',
            paddingBottom: '5px', // Space for scrollbar
            borderBottom: `1px solid ${lightBg}`,
            flexShrink: 0, // Prevent tabs from shrinking vertically
            whiteSpace: 'nowrap', // Keep buttons on one line
            // Custom scrollbar for Webkit browsers (Chrome, Safari)
            WebkitOverflowScrolling: 'touch',
            // Firefox specific scrollbar (basic, not fully customizable inline)
            scrollbarWidth: 'thin',
            scrollbarColor: `${primaryColor} transparent`,
          }}>
            {daysOfWeek.map(day => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                style={{
                  flexShrink: 0, // Prevent buttons from shrinking
                  padding: '10px 15px',
                  marginRight: '10px',
                  border: 'none',
                  borderRadius: '5px',
                  backgroundColor: activeDay === day ? primaryColor : darkBg,
                  color: activeDay === day ? 'white' : textColor,
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                  outline: 'none',
                  fontSize: '0.9em'
                }}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule Table */}
          <div style={{ overflowX: 'auto', flexGrow: 1 }}> {/* Make table itself scrollable if wide */}
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'left',
              minWidth: '400px' // Ensure table doesn't get too narrow
            }}>
              <thead style={{ backgroundColor: darkBg }}>
                <tr>
                  <th style={{ padding: '10px', borderBottom: `1px solid ${darkBg}` }}>Godzina</th>
                  <th style={{ padding: '10px', borderBottom: `1px solid ${darkBg}` }}>Aktywność</th>
                  <th style={{ padding: '10px', borderBottom: `1px solid ${darkBg}` }}>Basen</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData[activeDay].length > 0 ? (
                  scheduleData[activeDay].map((item, index) => (
                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? lightBg : cardBg }}>
                      <td style={{ padding: '10px', borderBottom: `1px solid ${darkBg}` }}>{item.time}</td>
                      <td style={{ padding: '10px', borderBottom: `1px solid ${darkBg}` }}>{item.activity}</td>
                      <td style={{ padding: '10px', borderBottom: `1px solid ${darkBg}` }}>{item.pool}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" style={{ padding: '10px', textAlign: 'center' }}>Brak zajęć tego dnia.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Services Section */}
        <section style={{
          backgroundColor: cardBg,
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
          flexShrink: 0 // Prevent services from shrinking too much
        }}>
          <h2 style={{ color: primaryColor, marginTop: 0, marginBottom: '15px', textAlign: 'center' }}>Nasze Usługi</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ padding: '10px', borderBottom: `1px solid ${lightBg}` }}>
              <h3 style={{ margin: '0 0 5px', fontSize: '1.1em', color: textColor }}>Nauka pływania</h3>
              <p style={{ margin: 0, fontSize: '0.9em' }}>Zajęcia indywidualne i grupowe dla dzieci i dorosłych.</p>
            </div>
            <div style={{ padding: '10px', borderBottom: `1px solid ${lightBg}` }}>
              <h3 style={{ margin: '0 0 5px', fontSize: '1.1em', color: textColor }}>Aquaaerobik</h3>
              <p style={{ margin: 0, fontSize: '0.9em' }}>Energetyczne zajęcia w wodzie poprawiające kondycję.</p>
            </div>
            <div style={{ padding: '10px', borderBottom: `1px solid ${lightBg}` }}>
              <h3 style={{ margin: '0 0 5px', fontSize: '1.1em', color: textColor }}>Treningi sportowe</h3>
              <p style={{ margin: 0, fontSize: '0.9em' }}>Dla zaawansowanych pływaków i klubów sportowych.</p>
            </div>
            <button style={{
              backgroundColor: secondaryColor,
              color: textColor,
              border: 'none',
              padding: '12px 25px',
              borderRadius: '5px',
              fontSize: '1em',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              outline: 'none',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              alignSelf: 'center',
              marginTop: '10px'
            }}>
              Zapisz się na zajęcia!
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: primaryColor,
        color: 'white',
        textAlign: 'center',
        padding: '15px 20px',
        fontSize: '0.8em',
        marginTop: 'auto',
        flexShrink: 0
      }}>
        &copy; {new Date().getFullYear()} Pływalnia AGH.
      </footer>
    </div>
  );
};

export default AghPoolWebsiteSecond;