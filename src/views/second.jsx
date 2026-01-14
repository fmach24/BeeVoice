export default function AGHPoolOceanicSecond() {
  return (
    <div style={{ width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden', boxSizing: 'border-box', backgroundColor: '#f0f0f0' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '20px' }}>
        <div style={{ width: '30%', padding: '10px', backgroundColor: '#ddd', borderRadius: '5px' }}>
          <h1 style={{ color: '#333', fontSize: '1.8em' }}>Basen AGH</h1>
          <div style={{ backgroundColor: '#fff', height: '2px', width: '50px', margin: '5px 0' }}></div>
          <div style={{ backgroundColor: '#e60023', height: '2px', width: '50px', margin: '5px 0' }}></div>
          <p style={{ color: '#666', fontSize: '1em' }}>Nowoczesny basen w stylu oceanicznym.</p>
        </div>

        <div style={{ width: '65%', padding: '10px', backgroundColor: '#fff', borderRadius: '5px' }}>
          <h2 style={{ color: '#333', fontSize: '1.6em', marginBottom: '10px' }}>Godziny Otwarcia</h2>
          <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
            <li style={{ color: '#666', fontSize: '1em', marginBottom: '5px' }}>Poniedziałek - Piątek: 7:00 - 22:00</li>
            <li style={{ color: '#666', fontSize: '1em', marginBottom: '5px' }}>Sobota: 9:00 - 20:00</li>
            <li style={{ color: '#666', fontSize: '1em' }}>Niedziela: 9:00 - 18:00</li>
          </ul>
        </div>
      </div>

      <div style={{ width: '80%', margin: '20px auto', height: '200px', overflow: 'hidden', borderRadius: '10px', backgroundColor: '#eee' }}>
        <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '50px', backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '20px', right: '0', width: '100%', height: '50px', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%' }}></div>
      </div>
    </div>
  );
}