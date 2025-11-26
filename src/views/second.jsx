import React, { useState, useEffect } from 'react';

const SecondPlywalniaAGHView = () => {
  const [laneStatus, setLaneStatus] = useState([]);

  useEffect(() => {
    // Simulate fetching real-time data
    const fetchLaneStatus = () => {
      const statuses = [
        { id: 1, name: 'Tor 1', status: 'Wolny', occupancy: 2 },
        { id: 2, name: 'Tor 2', status: 'Lekcje', occupancy: 8 },
        { id: 3, name: 'Tor 3', status: 'Wolny', occupancy: 3 },
        { id: 4, name: 'Tor 4', status: 'Zajęty', occupancy: 6 },
        { id: 5, name: 'Tor 5', status: 'Wolny', occupancy: 1 },
        { id: 6, name: 'Tor 6', status: 'Zajęty', occupancy: 5 },
      ];
      setLaneStatus(statuses);
    };

    fetchLaneStatus();
    // Można dodać interwał do odświeżania danych co jakiś czas:
    // const interval = setInterval(fetchLaneStatus, 60000);
    // return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '700px',
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

  const legendStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '25px',
    flexWrap: 'wrap',
  };

  const legendItemStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.9em',
  };

  const colorBoxStyle = (color) => ({
    width: '20px',
    height: '20px',
    backgroundColor: color,
    marginRight: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  });

  const lanesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  };

  const laneCardStyle = (status) => {
    let backgroundColor = '#f8f8f8';
    let borderColor = '#ccc';
    let textColor = '#333';
    switch (status) {
      case 'Wolny':
        backgroundColor = '#e6ffe6'; // Jasnozielony
        borderColor = '#4CAF50';
        textColor = '#1e7e34';
        break;
      case 'Zajęty':
        backgroundColor = '#fff3cd'; // Jasnożółty
        borderColor = '#ffc107';
        textColor = '#856404';
        break;
      case 'Lekcje':
        backgroundColor = '#cfe2ff'; // Jasnoniebieski
        borderColor = '#007bff';
        textColor = '#004085';
        break;
      default:
        break;
    }
    return {
      padding: '15px',
      border: `1px solid ${borderColor}`,
      borderRadius: '8px',
      backgroundColor: backgroundColor,
      textAlign: 'center',
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
      color: textColor,
    };
  };

  const statusTextStyle = {
    fontWeight: 'bold',
    fontSize: '1.1em',
    marginTop: '5px',
  };

  const occupancyTextStyle = {
    fontSize: '0.9em',
    color: '#666',
    marginTop: '5px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Pływalnia AGH - Dostępność Torów</h2>

      <div style={legendStyle}>
        <div style={legendItemStyle}>
          <div style={colorBoxStyle('#e6ffe6')}></div>
          <span>Wolny</span>
        </div>
        <div style={legendItemStyle}>
          <div style={colorBoxStyle('#fff3cd')}></div>
          <span>Zajęty / Duże obłożenie</span>
        </div>
        <div style={legendItemStyle}>
          <div style={colorBoxStyle('#cfe2ff')}></div>
          <span>Lekcje / Rezerwacja</span>
        </div>
      </div>

      <div style={lanesGridStyle}>
        {laneStatus.length > 0 ? (
          laneStatus.map((lane) => (
            <div key={lane.id} style={laneCardStyle(lane.status)}>
              <h3>{lane.name}</h3>
              <p style={statusTextStyle}>{lane.status}</p>
              {lane.status === 'Wolny' && <p style={occupancyTextStyle}>Obłożenie: {lane.occupancy} os.</p>}
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>Ładowanie statusu torów...</p>
        )}
      </div>
      <p style={{ textAlign: 'center', marginTop: '25px', fontSize: '0.9em', color: '#777' }}>
        *Dane o dostępności torów są aktualizowane w czasie rzeczywistym (symulacja).
      </p>
    </div>
  );
};

export default SecondPlywalniaAGHView;