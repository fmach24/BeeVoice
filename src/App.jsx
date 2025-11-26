// App.js
import React, { useState } from 'react';
// Importujemy komponenty z folderu 'views'
import FirstView from './views/first';
import SecondView from './views/second';
import ThirdView from './views/third';

const views = [
  { name: 'Widok 1 (first.jsx)', component: FirstView },
  { name: 'Widok 2 (second.jsx)', component: SecondView },
  { name: 'Widok 3 (third.jsx)', component: ThirdView },
];

const containerStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Arial, sans-serif'
};

const navigationStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '15px 20px',
  backgroundColor: '#f0f0f0',
  borderTop: '1px solid #ccc',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 -2px 5px rgba(0,0,0,0.1)'
};

export default function App() {
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const CurrentViewComponent = views[currentViewIndex].component;

  const goToNext = () => {
    setCurrentViewIndex((prev) => (prev + 1) % views.length);
  };

  const goToPrev = () => {
    setCurrentViewIndex((prev) => (prev - 1 + views.length) % views.length);
  };

  const selectView = () => {
    const selectedName = views[currentViewIndex].name;
    alert(`🎉 WYBRANO: ${selectedName}
    
    Teraz możesz skopiować kod z pliku ${selectedName.match(/\((.*?)\)/)[1]} i użyć go w swoim projekcie.`);
    console.log(`Użytkownik wybrał: ${selectedName}`);
  };

  return (
    <div style={containerStyle}>
      <div style={{ flexGrow: 1, paddingBottom: '80px' }}>
        <CurrentViewComponent />
      </div>

      <div style={navigationStyle}>
        <button onClick={goToPrev} style={{ padding: '10px 20px', fontSize: '16px' }}> &lt; Poprzedni </button>
        
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>
            {views[currentViewIndex].name} ({currentViewIndex + 1}/{views.length})
          </p>
          <button 
            onClick={selectView} 
            style={{ 
              padding: '10px 30px', 
              fontSize: '18px', 
              backgroundColor: '#4CAF50', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          > 
            WYBIERZ TEN PROJEKT 
          </button>
        </div>
        
        <button onClick={goToNext} style={{ padding: '10px 20px', fontSize: '16px' }}> Następny &gt; </button>
      </div>
    </div>
  );
}