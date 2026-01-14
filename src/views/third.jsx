export default function AGHPoolOceanicThird() {
  return (
    <div style={{ width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden', boxSizing: 'border-box', backgroundColor: '#1a1a1a', color: '#fff' }}>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: '#ffcc00', fontSize: '2.5em', marginBottom: '5px', fontFamily: 'Arial, sans-serif' }}>Basen AGH</h1>
        <div style={{ backgroundColor: '#fff', height: '3px', width: '60px', margin: '0 auto', marginBottom: '8px' }}></div>
        <div style={{ backgroundColor: '#e60023', height: '3px', width: '60px', margin: '0 auto' }}></div>
        <p style={{ color: '#ddd', fontSize: '1.4em', fontFamily: 'Verdana, sans-serif' }}>Nowoczesny basen w stylu oceanicznym.</p>
      </div>

      <div style={{ width: '80%', margin: '0 auto', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)', border: '1px solid #444' }}>
        <h2 style={{ color: '#ffcc00', fontSize: '1.8em', marginBottom: '10px', fontFamily: 'Arial, sans-serif' }}>Godziny Otwarcia</h2>
        <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
          <li style={{ color: '#eee', fontSize: '1.2em', marginBottom: '8px', fontFamily: 'Verdana, sans-serif' }}>Poniedziałek - Piątek: 7:00 - 22:00</li>
          <li style={{ color: '#eee', fontSize: '1.2em', marginBottom: '8px', fontFamily: 'Verdana, sans-serif' }}>Sobota: 9:00 - 20:00</li>
          <li style={{ color: '#eee', fontSize: '1.2em', fontFamily: 'Verdana, sans-serif' }}>Niedziela: 9:00 - 18:00</li>
        </ul>
      </div>

      <div style={{ position: 'relative', width: '80%', margin: '20px auto', height: '250px', overflow: 'hidden', borderRadius: '15px', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '60px', backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '25px', right: '0', width: '100%', height: '60px', backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: '50%' }}></div>
      </div>
    </div>
  );
}