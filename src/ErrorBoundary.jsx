// src/ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Zaktualizuj stan, aby następny render pokazał zastępcze UI.
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    // Możesz też zalogować błąd do serwisu raportowania błędów
    console.error("Błąd w widoku:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Możesz wyrenderować dowolny własny interfejs zastępczy
      return (
        <div style={{ 
            padding: '20px', 
            margin: '20px',
            backgroundColor: '#ffebee', 
            color: '#c62828', 
            border: '2px solid #ef9a9a', 
            borderRadius: '8px',
            fontFamily: 'sans-serif',
            textAlign: 'center'
        }}>
          <h3>Błąd renderowania widoku</h3>
          <p>AI wygenerowało kod z błędem.</p>
          <details style={{ whiteSpace: 'pre-wrap', textAlign: 'left', marginTop: '10px', fontSize: '12px' }}>
            {this.state.error && this.state.error.toString()}
          </details>
          <button 
            onClick={() => this.setState({ hasError: false })}
            style={{ marginTop: '15px', padding: '8px 16px', cursor: 'pointer' }}
          >
            Spróbuj odświeżyć
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;