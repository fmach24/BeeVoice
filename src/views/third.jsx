import React, { useState } from 'react';

function ThirdView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const primaryColor = '#1976D2'; // Blue
  const accentColor = '#64B5F6'; // Light Blue
  const bgColor = '#E3F2FD'; // Even Lighter Blue
  const textColor = '#212121'; // Dark Grey
  const formBgColor = '#FFFFFF';
  const successColor = '#4CAF50';
  const errorColor = '#F44336';

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: bgColor,
    fontFamily: 'Lato, sans-serif',
    color: textColor
  };

  const headerStyle = {
    backgroundColor: primaryColor,
    color: '#FFFFFF',
    padding: '20px 30px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  };

  const mainStyle = {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px'
  };

  const formContainerStyle = {
    backgroundColor: formBgColor,
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    width: '100%'
  };

  const titleStyle = {
    fontSize: '2.2em',
    marginBottom: '25px',
    color: primaryColor,
    textAlign: 'center'
  };

  const formGroupStyle = {
    marginBottom: '20px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: textColor
  };

  const inputBaseStyle = {
    width: '100%',
    padding: '12px',
    border: `1px solid ${accentColor}`,
    borderRadius: '5px',
    fontSize: '1em',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    outline: 'none'
  };

  const inputFocusStyle = {
    borderColor: primaryColor,
    boxShadow: `0 0 0 3px ${accentColor}`
  };

  const textareaStyle = {
    ...inputBaseStyle,
    resize: 'vertical',
    minHeight: '120px'
  };

  const submitButtonBaseStyle = {
    backgroundColor: primaryColor,
    color: 'white',
    padding: '15px 25px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1em',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    width: '100%',
    fontWeight: 'bold'
  };

  const submitButtonHoverStyle = {
    backgroundColor: '#0D47A1', // Darker Blue
    transform: 'translateY(-2px)'
  };

  const submitButtonDisabledStyle = {
    backgroundColor: accentColor,
    cursor: 'not-allowed'
  };

  const statusMessageStyle = {
    textAlign: 'center',
    marginTop: '20px',
    padding: '10px',
    borderRadius: '5px',
    fontWeight: 'bold'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (formData.name && formData.email && formData.message) {
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } else {
      setSubmissionStatus('error');
    }
    setIsSubmitting(false);
  };

  const getStatusMessage = () => {
    if (submissionStatus === 'success') {
      return <p style={{ ...statusMessageStyle, backgroundColor: successColor, color: 'white' }}>Wiadomość wysłana pomyślnie!</p>;
    }
    if (submissionStatus === 'error') {
      return <p style={{ ...statusMessageStyle, backgroundColor: errorColor, color: 'white' }}>Wypełnij wszystkie pola, aby wysłać wiadomość.</p>;
    }
    return null;
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={{ margin: 0, fontSize: '2.5em' }}>Skontaktuj się z nami</h1>
      </header>
      <main style={mainStyle}>
        <div style={formContainerStyle}>
          <h2 style={titleStyle}>Wyślij do nas wiadomość</h2>
          <form onSubmit={handleSubmit}>
            <div style={formGroupStyle}>
              <label htmlFor="name" style={labelStyle}>Imię i Nazwisko:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={inputBaseStyle}
                onFocus={(e) => e.target.style = { ...inputBaseStyle, ...inputFocusStyle }}
                onBlur={(e) => e.target.style = inputBaseStyle}
                required
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="email" style={labelStyle}>Adres E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={inputBaseStyle}
                onFocus={(e) => e.target.style = { ...inputBaseStyle, ...inputFocusStyle }}
                onBlur={(e) => e.target.style = inputBaseStyle}
                required
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="message" style={labelStyle}>Wiadomość:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={textareaStyle}
                onFocus={(e) => e.target.style = { ...textareaStyle, ...inputFocusStyle }}
                onBlur={(e) => e.target.style = textareaStyle}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                ...submitButtonBaseStyle,
                ...(isSubmitting ? submitButtonDisabledStyle : {}),
                ...(!isSubmitting && { ...submitButtonBaseStyle, ...(formData.name && formData.email && formData.message ? submitButtonHoverStyle : {}) })
              }}
              disabled={isSubmitting}
              onMouseEnter={(e) => { if (!isSubmitting) e.currentTarget.style.backgroundColor = submitButtonHoverStyle.backgroundColor; e.currentTarget.style.transform = submitButtonHoverStyle.transform; }}
              onMouseLeave={(e) => { if (!isSubmitting) e.currentTarget.style.backgroundColor = submitButtonBaseStyle.backgroundColor; e.currentTarget.style.transform = 'none'; }}
            >
              {isSubmitting ? 'Wysyłanie...' : 'Wyślij Wiadomość'}
            </button>
          </form>
          {getStatusMessage()}
        </div>
      </main>
      <footer style={{ backgroundColor: primaryColor, color: '#FFFFFF', textAlign: 'center', padding: '15px', fontSize: '0.9em' }}>
        <p>&copy; {new Date().getFullYear()} Firma Kontaktowa. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}

export default ThirdView;