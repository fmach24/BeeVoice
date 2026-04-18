import React, { useState, useRef } from 'react';
import FirstView from './views/first';
import SecondView from './views/second';
import ThirdView from './views/third';
import ErrorBoundary from './ErrorBoundary';
import html2canvas from 'html2canvas';

const views = [
  { name: 'Widok 1', component: FirstView },
  { name: 'Widok 2', component: SecondView },
  { name: 'Widok 3', component: ThirdView },
];

const AVAILABLE_MODELS = [
  { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash (Szybki)' },
  { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro (Jakość)' },
  { id: 'gemini-3-pro-preview', name: 'Gemini 3 Preview (Nowość)' },
  { id: 'gemma-3-27b-it', name: 'Gemma 3 27B (Open Source)' }
];

const containerStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  overflow: 'hidden',
  backgroundColor: '#f5f5f5'
};

const navigationStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '90px',
  padding: '0 30px',
  backgroundColor: '#ffffff',
  borderTop: '1px solid #e0e0e0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 -5px 20px rgba(0,0,0,0.05)',
  zIndex: 10000
};

const navBtnStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#f0f2f5',
    color: '#333',
    fontSize: '24px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
};

const newProjectBtnStyle = {
    padding: '12px 24px',
    backgroundColor: '#333',
    backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
    boxShadow: '0 4px 15px rgba(118, 75, 162, 0.4)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.6)',
  backdropFilter: 'blur(5px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2000
};

const modalContentStyle = {
  backgroundColor: 'white',
  padding: '40px',
  borderRadius: '20px',
  width: '550px',
  boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
};

const micBtnStyle = {
    background: 'transparent',
    border: 'none',
    fontSize: '13px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    cursor: 'pointer',
    padding: '5px 10px',
    borderRadius: '4px',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
};

const copyBtnStyle = {
    position: 'absolute',
    top: '0px',
    right: '55px',
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    backdropFilter: 'blur(2px)',
};

const fullscreenBtnStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#333',
    fontSize: '20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    zIndex: 1000
};

export default function App() {
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const [hasUserSelectedBest, setHasUserSelectedBest] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState('');
  const [currentModel, setCurrentModel] = useState(AVAILABLE_MODELS[0].id);
  
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [newProjectPrompt, setNewProjectPrompt] = useState('');
  
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false); 
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // stany dla mazaczka mi bombo
  const [isDrawMode, setIsDrawMode] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);

  // stan dla fullscreen
  const [fullscreenIndex, setFullscreenIndex] = useState(null);
  
  // ref do kontenerów widoków
  const viewContainerRefs = useRef([]);

  // Funkcja kopiowania kodu
  const handleCopyCode = async (index) => {
    try {
      const response = await fetch(`http://localhost:4000/get-code/${index}`);
      const data = await response.json();
      
      if (data.code) {
        await navigator.clipboard.writeText(data.code);
        alert(`Skopiowano kod widoku nr ${index + 1} do schowka`);
      } else {
        alert("Błąd: Nie znaleziono kodu.");
      }
    } catch (err) {
      console.error("Błąd kopiowania:", err);
      alert("Nie udało się pobrać kodu.");
    }
  };

  // audio here
  const handleMicClick = async (setValueFunction) => {
    if (isRecording) {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }
        return;
    }

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
        audioChunksRef.current = [];

        mediaRecorderRef.current.ondataavailable = (event) => {
            if (event.data.size > 0) {
                audioChunksRef.current.push(event.data);
            }
        };

        mediaRecorderRef.current.onstop = async () => {
            setIsRecording(false);
            setIsTranscribing(true);

            const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
            const formData = new FormData();
            formData.append('audio', audioBlob, 'recording.webm');

            try {
                const response = await fetch("http://localhost:4000/transcribe", {
                    method: "POST",
                    body: formData
                });
                const data = await response.json();
                
                if (data.text) {
                    setValueFunction(prev => prev ? `${prev} ${data.text}` : data.text);
                } else {
                    alert("Nie udało się rozpoznać mowy.");
                }
            } catch (err) {
                console.error("Błąd wysyłania audio:", err);
                alert("Błąd połączenia z serwerem transkrypcji.");
            } finally {
                setIsTranscribing(false);
                stream.getTracks().forEach(track => track.stop());
            }
        };

        mediaRecorderRef.current.start();
        setIsRecording(true);

    } catch (err) {
        console.error("Błąd dostępu do mikrofonu:", err);
        alert("Nie udało się uzyskać dostępu do mikrofonu. Sprawdź ustawienia przeglądarki.");
    }
  };

  const goToNext = () => {
    setCurrentViewIndex((prev) => {
      const nextIndex = (prev + 1) % views.length;
      // Jeśli był fullscreen, ustaw fullscreen na nowy widok
      if (fullscreenIndex !== null) {
        setFullscreenIndex(nextIndex);
      }
      return nextIndex;
    });
  };

  const goToPrev = () => {
    setCurrentViewIndex((prev) => {
      const prevIndex = (prev - 1 + views.length) % views.length;
      // Jeśli był fullscreen, ustaw fullscreen na nowy widok
      if (fullscreenIndex !== null) {
        setFullscreenIndex(prevIndex);
      }
      return prevIndex;
    });
  };

  const selectView = () => {
    setHasUserSelectedBest(true);
  };

  const toggleFullscreen = (index) => {
    setFullscreenIndex(fullscreenIndex === index ? null : index);
  };

  // rysowanie
  const startDrawing = ({ nativeEvent }) => {
    if (!isDrawMode) return;
    const { offsetX, offsetY } = nativeEvent;
    const ctx = canvasRef.current.getContext("2d");
    ctx.strokeStyle = "red"; 
    ctx.lineWidth = 4; 
    ctx.lineCap = "round";
    ctx.beginPath(); 
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing || !isDrawMode) return;
    const { offsetX, offsetY } = nativeEvent;
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(offsetX, offsetY); 
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.closePath(); 
    setIsDrawing(false);
  };

  const clearCanvas = () => {
      const canvas = canvasRef.current;
      if(canvas) { 
          const ctx = canvas.getContext('2d'); 
          ctx.clearRect(0, 0, canvas.width, canvas.height); 
      }
  };

  const toggleDrawMode = () => {
      if (isDrawMode) {
          clearCanvas();
          setIsDrawMode(false);
      } else {
          setIsDrawMode(true);
      }
  };


  const sendEdit = async () => {
    if (!comment.trim()) {
      alert('Wpisz poprawkę!');
      return;
    }
    
    setIsLoading(true);
    
    const formData = new FormData();
    formData.append('comment', comment);
    formData.append('bestViewIndex', currentViewIndex);
    formData.append('model', currentModel);

    // zrzut ekranu (póki panel i rysunek są widoczne)
    if (isDrawMode) {
        const element = document.getElementById(`view-container-${currentViewIndex}`);
        try {
            const canvas = await html2canvas(element, { useCORS: true, backgroundColor: null });
            const blob = await new Promise(resolve => canvas.toBlob(resolve));
            formData.append('image', blob, 'screenshot.png');
        } catch (err) {
            console.error("Screen error:", err);
        }
    }

    setHasUserSelectedBest(false);
    setComment('');
    setIsDrawMode(false);
    clearCanvas();

    try {
        await fetch("http://localhost:4000/edit", {
            method: "POST",
            body: formData
        });
        
        setIsLoading(false);
        
    } catch (err) {
        setIsLoading(false);
        console.error("Błąd:", err);
        alert("Wystąpił błąd połączenia z serwerem.");
    }
  };

  const generateNewProject = () => {
    if (!newProjectPrompt.trim()) return;
    setIsLoading(true);
    setShowNewProjectModal(false);
    fetch("http://localhost:4000/new", {
        body: JSON.stringify({ prompt: newProjectPrompt, model: currentModel }),
        method: "POST",
        headers: { "Content-Type": "application/json" }
      }).then(res => {
        setIsLoading(false);
        setNewProjectPrompt('');
      }).catch(err => setIsLoading(false));
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0.4; }
            100% { opacity: 1; }
          }
        `}
      </style>
      
      {/* MODAL NOWEGO PROJEKTU */}
      {showNewProjectModal && (
        <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
                <h2 style={{margin: 0, fontSize: '24px'}}>Nowy widok</h2>
                <p style={{margin: 0, color: '#666', lineHeight: '1.5'}}>
                    Opisz, co chcesz stworzyć. Kliknij "MÓW", nagraj, kliknij "ZATRZYMAJ".
                </p>
                
                <div style={{ position: 'relative' }}>
                    <textarea 
                        value={newProjectPrompt}
                        onChange={(e) => setNewProjectPrompt(e.target.value)}
                        placeholder="Np. Wygeneruj mi strone pizzerii w stylu neonowym."
                        rows={5}
                        style={{ 
                            width: '100%', padding: '15px', fontSize: '16px', borderRadius: '10px', 
                            border: isRecording ? '2px solid #e74c3c' : '1px solid #ddd',
                            backgroundColor: '#f9f9f9', resize: 'none', boxSizing: 'border-box'
                        }}
                    />
                    <button 
                        onClick={() => handleMicClick(setNewProjectPrompt)}
                        style={{
                            position: 'absolute', bottom: '15px', right: '15px', ...micBtnStyle,
                            color: isRecording ? '#e74c3c' : (isTranscribing ? '#f39c12' : '#2196F3'),
                            backgroundColor: 'rgba(255,255,255,0.8)'
                        }}
                    >
                        {isTranscribing ? 'PRZETWARZANIE...' : (isRecording ? 'ZATRZYMAJ' : 'MÓW')}
                    </button>
                </div>

                <div style={{display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '10px'}}>
                    <button 
                        onClick={() => setShowNewProjectModal(false)}
                        style={{ padding: '12px 25px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: '#666' }}
                    >
                        Anuluj
                    </button>
                    <button 
                        onClick={generateNewProject}
                        style={{ ...newProjectBtnStyle, boxShadow: 'none' }}
                    >
                        Generuj
                    </button>
                </div>
            </div>
        </div>
      )}

      {/* GŁÓWNY KONTENER WIDOKÓW */}
      <div style={{ display: "flex", flexDirection: "row", height: 'calc(100vh - 90px)', width: '100%' }}>
        {views.map((item, index) => {
           const ViewComponent = item.component;
           const isSelected = index === currentViewIndex;
           const isFullscreen = fullscreenIndex === index;
           
           // Ukryj widoki, które nie są w fullscreen, jeśli jakiś widok jest w fullscreen
           if (fullscreenIndex !== null && !isFullscreen) {
             return null;
           }
           
           return (
             <div 
                key={index}
                id={`view-container-${index}`} // <-- WAŻNE DLA SCREENA
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentViewIndex(index);
                }}
                onDoubleClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen(index);
                }}
                style={{ 
                    flex: 1, display: 'flex', flexDirection: 'column', overflowY: "hidden",
                    border: isSelected ? '5px solid #4CAF50' : '1px solid #e0e0e0',
                    borderRadius: isSelected ? '0' : '0',
                    zIndex: isSelected ? 10 : 1,
                    boxSizing: 'border-box', transition: 'border 0.2s ease',
                    position: 'relative',
                    cursor: isSelected ? 'default' : 'pointer'
                }}
             >
                <div style={{ 
                    textAlign: 'center', padding: '10px', fontSize: '13px', fontWeight: 'bold', 
                    letterSpacing: '1px', textTransform: 'uppercase',
                    backgroundColor: isSelected ? '#4CAF50' : '#f0f2f5', 
                    color: isSelected ? 'white' : '#999', borderBottom: '1px solid #ccc',
                    position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    {item.name}

                    {/* PRZYCISK KOPIOWANIA KODU */}
                    {isSelected && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCopyCode(index);
                            }}
                            style={copyBtnStyle}
                            title="Kopiuj kod do schowka"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                                e.currentTarget.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            Copy
                        </button>
                    )}
                    
                    {/* PRZYCISK FULLSCREEN */}
                    {isSelected && (
                        <button 
                            onClick={() => toggleFullscreen(index)}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: isFullscreen ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)',
                                color: 'white',
                                fontSize: '16px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s ease',
                                zIndex: 100
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.15)';
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.backgroundColor = isFullscreen ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)';
                            }}
                            title={isFullscreen ? 'Zamknij fullscreen' : 'Pokaż fullscreen'}
                        >
                            {isFullscreen ? '✕' : '⛶'}
                        </button>
                    )}
                </div>
                <div 
                  ref={(el) => viewContainerRefs.current[index] = el}
                  style={{ flex: 1, overflowY: 'auto', backgroundColor: 'white', position: 'relative' }}
                >
                    
                    {/* 6. WARSTWA RYSOWANIA */}
                    {isSelected && isDrawMode && (
                        <canvas 
                            ref={canvasRef} 
                            width={isFullscreen ? window.innerWidth : window.innerWidth / 3} 
                            height={window.innerHeight}
                            onMouseDown={startDrawing} 
                            onMouseMove={draw} 
                            onMouseUp={stopDrawing} 
                            onMouseLeave={stopDrawing}
                            style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999, cursor: 'crosshair' }} 
                        />
                    )}

                    <ErrorBoundary>
                        <ViewComponent />
                    </ErrorBoundary>
                </div>
             </div>
           )
        })}
      </div>

      {/* --- PANEL NAWIGACYJNY --- */}
      <div style={navigationStyle}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', width: '400px' }}> {/* Zwiększ width jeśli trzeba */}
            
            {/* SELECTOR MODELU */}
            <div style={{ position: 'relative' }}>
                <select 
                    value={currentModel}
                    onChange={(e) => setCurrentModel(e.target.value)}
                    style={{
                        appearance: 'none',
                        backgroundColor: '#f0f2f5',
                        border: '1px solid #ddd',
                        padding: '10px 35px 10px 15px',
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#333',
                        cursor: 'pointer',
                        outline: 'none',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                    }}
                >
                    {AVAILABLE_MODELS.map(model => (
                        <option key={model.id} value={model.id}>
                            {model.name}
                        </option>
                    ))}
                </select>
                {/* Strzałeczka CSS do selecta */}
                <div style={{
                    position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
                    pointerEvents: 'none', fontSize: '10px', color: '#666'
                }}>▼</div>
            </div>

            <button onClick={() => setShowNewProjectModal(true)} style={newProjectBtnStyle}>
                Nowy projekt
            </button>

            <button onClick={goToPrev} style={navBtnStyle}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f0f2f5'}
            > 
                ← 
            </button>
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            {!hasUserSelectedBest ? (
                 <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '12px', color: '#888', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Aktualnie oglądasz
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{views[currentViewIndex].name}</span>
                        <button 
                            onClick={selectView} 
                            style={{ 
                                padding: '12px 35px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', 
                                border: 'none', borderRadius: '50px', cursor: 'pointer', boxShadow: '0 4px 10px rgba(76, 175, 80, 0.3)',
                                fontWeight: '600', transition: 'transform 0.1s'
                            }}
                        > 
                            Edytuj ten widok
                        </button>
                    </div>
                 </div>
            ) : (
                <div style={{ display: 'flex', gap: '10px', width: '100%', maxWidth: '600px', alignItems: 'center', position: 'relative' }}>
                    
                    <div style={{ position: 'relative', flex: 1 }}>
                        <input 
                          type="text" 
                          value={comment}
                          autoFocus
                          onChange={(e) => setComment(e.target.value)}
                          placeholder={`Co poprawić w ${views[currentViewIndex].name}?`} 
                          style={{ 
                              width: '100%', padding: '12px 140px 12px 20px', // Zwiększony padding dla przycisków
                              border: isDrawMode ? '2px solid #e74c3c' : '2px solid #4CAF50', 
                              borderRadius: '30px', outline: 'none', fontSize: '16px', boxSizing: 'border-box'
                          }} 
                        />
                        
                        <button 
                            onClick={() => handleMicClick(setComment)}
                            style={{
                                position: 'absolute', right: '80px', top: '50%', transform: 'translateY(-50%)',
                                ...micBtnStyle, color: isRecording ? '#e74c3c' : (isTranscribing ? '#f39c12' : '#2196F3')
                            }}
                        >
                            {isTranscribing ? '...' : (isRecording ? 'STOP' : 'MÓW')}
                        </button>

                        {/* 7. PRZYCISK MAZAKA */}
                        <button 
                            onClick={toggleDrawMode}
                            title="Zaznacz na ekranie"
                            style={{
                                position: 'absolute', right: '5px', top: '50%', transform: 'translateY(-50%)',
                                ...micBtnStyle, fontSize: '20px', 
                                color: isDrawMode ? 'white' : '#ccc',
                                backgroundColor: isDrawMode ? '#e74c3c' : 'transparent',
                                width: '30px', height: '30px', borderRadius: '50%'
                            }}
                        >
                            ✎
                        </button>
                    </div>

                    <button 
                        onClick={sendEdit} 
                        style={{ 
                            padding: '12px 25px', 
                            backgroundColor: isDrawMode ? '#e74c3c' : '#2196F3', 
                            color: 'white', border: 'none', cursor: 'pointer', borderRadius: '30px', fontWeight: 'bold'
                        }}
                    >
                      {isLoading ? '...' : (isDrawMode ? 'Wyślij screen' : 'Wyślij')}
                    </button>
                    
                    <button 
                        onClick={() => { setHasUserSelectedBest(false); setIsDrawMode(false); clearCanvas(); }} 
                        style={{ 
                            width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ccc', 
                            background: 'white', cursor: 'pointer', color: '#666', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                        title="Anuluj"
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f75b5bff'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                    >
                        ✕
                    </button>
                </div>
            )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '20px', width: '300px' }}>
             {isLoading && <span style={{ color: '#666', fontStyle: 'italic', fontSize: '24px', animation: 'blink 1.5s infinite ease-in-out' }}>Generowanie...</span>}
             
             <button 
                onClick={goToNext} 
                style={navBtnStyle}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f0f2f5'}
            > 
                → 
            </button>
        </div>

      </div>
    </div>
  );
}