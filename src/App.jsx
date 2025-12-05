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
  maxHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Arial, sans-serif',
  overflow:'hidden'
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
  const [hasUserSelectedBest, setHasUserSelectedBest] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [comment, setComment] = useState('');
  
  const goToNext = () => {
    setCurrentViewIndex((prev) => (prev + 1) % views.length);
  };

  const startVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      alert('Twoja przeglądarka nie obsługuje rozpoznawania mowy. Użyj Chrome lub Edge.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'pl-PL';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setComment(transcript);
    };

    recognition.onerror = (event) => {
      console.error('Błąd rozpoznawania mowy:', event.error);
      alert('Błąd mikrofonu: ' + event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const RenderButtonConditionally = ({hasUserSelectedBest})=>{
    if(hasUserSelectedBest){
      return (<div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '10px' }}>
          <div style={{ display: 'flex', gap: '5px' }}>
            <input 
              type="text" 
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Wpisz poprawkę..." 
              style={{ 
                flex: 1, 
                padding: '10px', 
                boxSizing: 'border-box', 
                border: isListening ? '2px solid #e74c3c' : '1px solid #ccc',
                borderRadius: '4px'
              }} 
            />
            <button 
              onClick={startVoiceInput}
              disabled={isListening}
              style={{ 
                padding: '10px 20px', 
                backgroundColor: isListening ? '#e74c3c' : '#2ecc71',
                color: 'white', 
                border: 'none', 
                cursor: isListening ? 'not-allowed' : 'pointer',
                borderRadius: '4px',
                fontSize: '20px'
              }}
              title="Kliknij i mów"
            >
              {isListening ? '🔴' : '🎤'}
            </button>
          </div>
          {isListening && <p style={{ margin: 0, color: '#e74c3c', fontSize: '14px' }}>🔴 Słucham... Mów teraz!</p>}
          <button 
            onClick={sendComment} 
            style={{ 
              width: '100%', 
              padding: '10px', 
              backgroundColor: '#008CBA', 
              color: 'white', 
              border: 'none', 
              cursor: 'pointer',
              borderRadius: '4px'
            }}
          >
            Wyślij Poprawkę
          </button>
        </div>)
    }
    return null;
  }

  const sendComment=()=>{
    if (!comment.trim()) {
      alert('Wpisz lub nagraj poprawkę!');
      return;
    }
    setIsLoading(true);
    fetch("http://localhost:4000/edit", {
      body: JSON.stringify({ comment: comment, bestView: currentViewIndex }),
      method: "POST",
      headers: { "Content-Type": "application/json" }
    }).then(res=>{
      setIsLoading(false);
      console.log("Poprawka wysłana");
      setComment('');
    });
    setHasUserSelectedBest(false);
  }
  const goToPrev = () => {
    setCurrentViewIndex((prev) => (prev - 1 + views.length) % views.length);
  };

  const selectView = () => {
    const selectedName = views[currentViewIndex].name;
    setHasUserSelectedBest(true);
    //fetch("http://localhost:4000/edit", {body: JSON.stringify({ selectedView: selectedName }), method: "POST", headers: { "Content-Type": "application/json" }})

    console.log(`Użytkownik wybrał: ${selectedName}`);
  };

  return (
    <div style={containerStyle}>
      <div style={{ display:"flex", flexDirection:"row", paddingBottom: '80px', flexGrow: 1 }}>
        <div style={{overflowY:"scroll"}}>
          <FirstView />
        </div>
                <div style={{overflowY:"scroll"}}>
          <SecondView />
        </div>
        <div style={{overflowY:"scroll"}}>
          <ThirdView />
        </div>
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
        <RenderButtonConditionally hasUserSelectedBest={hasUserSelectedBest} />
        {isLoading && <label style={{ marginLeft: '15px', fontStyle: 'italic' }}>
            Laduje sie...
        </label>}

      </div>
      
    </div>
  );
}