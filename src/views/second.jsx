import React, { useState, useMemo } from 'react';

function VibrantFeedbackForm() {
  const [formData, setFormData] = useState({
    rating: null,
    comments: '',
    email: '',
    optIn: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [hoveredButton, setHoveredButton] = useState(false);

  // Vibrant & Playful Color Palette
  const bgColorGradient = 'linear-gradient(135deg, #FFD700 0%, #FF6347 100%)'; // Gold to Tomato
  const cardBg = '#FFFFFF';
  const primaryText = '#34495E'; // Dark Blue-Gray
  const secondaryText = '#7F8C8D'; // Medium Gray
  const accentColor = '#3498DB'; // Bright Blue
  const buttonHoverColor = '#2980B9'; // Darker Blue
  const borderColor = '#DCDCDC'; // Light Gray
  const inputBg = '#FDFDFD';
  const shadowColor = 'rgba(0,0,0,0.15)';
  const radioCheckedColor = accentColor;
  const focusBorderColor = '#5DADE2';

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (submitMessage) setSubmitMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    setTimeout(() => {
      console.log('Survey Data Submitted (Vibrant):', formData);
      setIsSubmitting(false);
      setSubmitMessage('Awesome! Thanks for your feedback!');
      setFormData({ rating: null, comments: '', email: '', optIn: false });
    }, 1500);
  };

  // Styles
  const containerStyle = useMemo(() => ({
    minHeight: '100vh',
    background: bgColorGradient,
    padding: '40px 20px',
    fontFamily: "'Poppins', sans-serif",
    color: primaryText,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }), [bgColorGradient, primaryText]);

  const formCardStyle = useMemo(() => ({
    maxWidth: '580px',
    width: '100%',
    backgroundColor: cardBg,
    borderRadius: '15px',
    boxShadow: `0 15px 35px ${shadowColor}`,
    padding: '45px',
    border: `1px solid ${borderColor}`,
    textAlign: 'center',
  }), [cardBg, shadowColor, borderColor]);

  const titleStyle = useMemo(() => ({
    fontSize: '2.6em',
    color: primaryText,
    marginBottom: '15px',
    fontWeight: '800',
    letterSpacing: '-0.5px',
  }), [primaryText]);

  const subtitleStyle = useMemo(() => ({
    fontSize: '1.15em',
    color: secondaryText,
    marginBottom: '35px',
    lineHeight: '1.6',
  }), [secondaryText]);

  const sectionTitleStyle = useMemo(() => ({
    fontSize: '1.6em',
    color: primaryText,
    marginBottom: '25px',
    marginTop: '40px',
    textAlign: 'left',
    fontWeight: '700',
    borderBottom: `2px solid ${accentColor}20`,
    paddingBottom: '10px',
  }), [primaryText, accentColor]);

  const formGroupStyle = useMemo(() => ({
    marginBottom: '30px',
    textAlign: 'left',
  }), []);

  const labelStyle = useMemo(() => ({
    display: 'block',
    marginBottom: '10px',
    fontWeight: '600',
    color: primaryText,
    fontSize: '1em',
  }), [primaryText]);

  const inputBaseStyle = useMemo(() => ({
    width: '100%',
    padding: '14px 18px',
    border: `2px solid ${borderColor}`,
    borderRadius: '10px',
    backgroundColor: inputBg,
    color: primaryText,
    fontSize: '1em',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    '&:focus': {
      borderColor: focusBorderColor,
      boxShadow: `0 0 0 4px ${focusBorderColor}30`,
      outline: 'none',
    },
  }), [borderColor, inputBg, primaryText, focusBorderColor]);

  const textareaStyle = useMemo(() => ({
    ...inputBaseStyle,
    resize: 'vertical',
    minHeight: '130px',
  }), [inputBaseStyle]);

  const radioGroupStyle = useMemo(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '15px',
    marginTop: '15px',
    justifyItems: 'center',
  }), []);

  const radioLabelStyle = useMemo(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    minWidth: '80px',
    padding: '10px',
    borderRadius: '10px',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#F5F5F5',
    }
  }), []);

  const customRadioStyle = useMemo(() => (isChecked) => ({
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    border: `3px solid ${isChecked ? radioCheckedColor : borderColor}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8px',
    transition: 'background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease',
    backgroundColor: isChecked ? radioCheckedColor : inputBg,
    transform: isChecked ? 'scale(1.05)' : 'scale(1)',
  }), [radioCheckedColor, borderColor, inputBg]);

  const innerRadioDotStyle = useMemo(() => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: cardBg,
    transition: 'opacity 0.2s ease, transform 0.2s ease',
  }), [cardBg]);

  const customCheckboxStyle = useMemo(() => (isChecked) => ({
    width: '24px',
    height: '24px',
    borderRadius: '8px',
    border: `3px solid ${isChecked ? accentColor : borderColor}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '12px',
    transition: 'background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease',
    backgroundColor: isChecked ? accentColor : inputBg,
    color: cardBg,
    fontSize: '16px',
    fontWeight: 'bold',
    transform: isChecked ? 'scale(1.05)' : 'scale(1)',
  }), [accentColor, borderColor, inputBg, cardBg]);

  const buttonStyle = useMemo(() => ({
    background: `linear-gradient(45deg, ${accentColor}, ${buttonHoverColor})`,
    color: cardBg,
    border: 'none',
    padding: '16px 35px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1.2em',
    fontWeight: '700',
    transition: 'all 0.3s ease',
    width: '100%',
    marginTop: '40px',
    outline: 'none',
    boxShadow: `0 8px 20px ${accentColor}60`,
    letterSpacing: '0.5px',
  }), [accentColor, buttonHoverColor, cardBg]);

  const buttonActiveHoverStyle = useMemo(() => ({
    background: `linear-gradient(45deg, ${buttonHoverColor}, ${accentColor})`,
    transform: 'translateY(-3px) scale(1.02)',
    boxShadow: `0 12px 25px ${accentColor}80`,
  }), [buttonHoverColor, accentColor]);

  const submitMessageStyle = useMemo(() => ({
    marginTop: '30px',
    fontSize: '1.2em',
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
    color: accentColor,
  }), [accentColor]);

  return (
    <div style={containerStyle}>
      <div style={formCardStyle}>
        <h2 style={titleStyle}>Your Voice Matters!</h2>
        <p style={subtitleStyle}>
          We'd love to hear about your experience. Your feedback helps us grow.
        </p>
        <form onSubmit={handleSubmit}>
          <h3 style={sectionTitleStyle}>Rate Your Experience</h3>
          <div style={formGroupStyle}>
            <label style={labelStyle}>How was your overall experience?</label>
            <div style={radioGroupStyle}>
              {[1, 2, 3, 4, 5].map(rating => (
                <label key={`rating-vibrant-${rating}`} style={radioLabelStyle}>
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={formData.rating === String(rating)}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    style={{ display: 'none' }}
                  />
                  <div style={customRadioStyle(formData.rating === String(rating))}>
                    <div style={{ ...innerRadioDotStyle, opacity: formData.rating === String(rating) ? 1 : 0, transform: formData.rating === String(rating) ? 'scale(1)' : 'scale(0)' }}></div>
                  </div>
                  <span style={{color: formData.rating === String(rating) ? primaryText : secondaryText}}>{rating} Star{rating > 1 ? 's' : ''}</span>
                </label>
              ))}
            </div>
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="comments-2" style={labelStyle}>Tell us more!</label>
            <textarea
              id="comments-2"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              style={textareaStyle}
              rows="6"
              disabled={isSubmitting}
              placeholder="What made your day, or what could be even better?"
            ></textarea>
          </div>

          <h3 style={sectionTitleStyle}>Stay in Touch (Optional)</h3>
          <div style={formGroupStyle}>
            <label htmlFor="email-2" style={labelStyle}>Email Address</label>
            <input
              type="email"
              id="email-2"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputBaseStyle}
              disabled={isSubmitting}
              placeholder="hello@example.com"
            />
          </div>

          <div style={{ ...formGroupStyle, display: 'flex', alignItems: 'center', marginTop: '25px' }}>
            <label htmlFor="optIn-2" style={{ ...labelStyle, marginBottom: '0', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                id="optIn-2"
                name="optIn"
                checked={formData.optIn}
                onChange={handleChange}
                disabled={isSubmitting}
                style={{ display: 'none' }}
              />
              <div style={customCheckboxStyle(formData.optIn)}>
                {formData.optIn && '✔'}
              </div>
              <span style={{color: primaryText}}>Yes, keep me updated!</span>
            </label>
          </div>

          <button
            type="submit"
            style={{ ...buttonStyle, ...(hoveredButton && !isSubmitting ? buttonActiveHoverStyle : {}) }}
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending Smiles...' : 'Submit Feedback'}
          </button>
        </form>
        {submitMessage && (
          <p style={submitMessageStyle}>
            {submitMessage}
          </p>
        )}
      </div>
    </div>
  );
}

export default VibrantFeedbackForm;