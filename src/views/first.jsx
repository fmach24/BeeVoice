export default function AGHPoolOceanicFirst() {
  return (
    <div style={{ width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden', boxSizing: 'border-box', backgroundColor: '#29ABE2', backgroundImage: 'linear-gradient(to bottom, #29ABE2, #0077CC)' }}>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: 'gold', fontSize: '2em', marginBottom: '10px' }}>Basen AGH</h1>
        <div style={{ backgroundColor: '#fff', height: '2px', width: '50px', margin: '0 auto', marginBottom: '5px' }}></div>
        <div style={{ backgroundColor: '#e60023', height: '2px', width: '50px', margin: '0 auto' }}></div>
        <p style={{ color: 'white', fontSize: '1.2em' }}>Nowoczesny basen w stylu oceanicznym.</p>
      </div>
      <div style={{ width: '80%', margin: '0 auto', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <h2 style={{ color: 'gold', fontSize: '1.5em', marginBottom: '10px' }}>Godziny Otwarcia</h2>
        <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
          <li style={{ color: 'white', fontSize: '1em', marginBottom: '5px' }}>Poniedziałek - Piątek: 7:00 - 22:00</li>
          <li style={{ color: 'white', fontSize: '1em', marginBottom: '5px' }}>Sobota: 9:00 - 20:00</li>
          <li style={{ color: 'white', fontSize: '1em' }}>Niedziela: 9:00 - 18:00</li>
        </ul>
      </div>
      <div style={{ position: 'relative', width: '80%', margin: '20px auto', height: '200px', overflow: 'hidden', borderRadius: '10px', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
        <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '50px', backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '20px', right: '0', width: '100%', height: '50px', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%' }}></div>
      </div>
    </div>
  );
}