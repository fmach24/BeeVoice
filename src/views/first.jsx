import React, { useState, useMemo } from 'react';

function ModernFeedbackForm() {
  const [formData, setFormData] = useState({
    rating: null,
    comments: '',
    email: '',
    optIn: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [hoveredButton, setHoveredButton] = useState(false);

  // Modern & Clean Color Palette
  const bgColor = '#F0F2F5'; // Light neutral gray
  const cardBg = '#FFFFFF';
  const primaryText = '#333333';
  const secondaryText = '#666666';
  const accentColor = '#4A90E2'; // Soft blue
  const buttonHoverColor = '#357ABD'; // Darker blue
  const borderColor = '#E0E0E0';
  const inputBg = '#FFFFFF';
  const shadowColor = 'rgba(0, 0, 0, 0.05)';
  const radioCheckedColor = accentColor;
  const focusBorderColor = '#A0CFFF';

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
      console.log('Survey Data Submitted (Modern):', formData);
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your valuable feedback!');
      setFormData({ rating: null, comments: '', email: '', optIn: false });
    }, 1500);
  };

  // Styles
  const containerStyle = useMemo(() => ({
    minHeight: '100vh',
    backgroundColor: bgColor,
    padding: '40px 20px',
    fontFamily: "'Roboto', 'Helvetica Neue', Arial, sans-serif",
    color: primaryText,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }), [bgColor, primaryText]);

  const formCardStyle = useMemo(() => ({
    maxWidth: '640px',
    width: '100%',
    backgroundColor: cardBg,
    borderRadius: '12px',
    boxShadow: `0 10px 30px ${shadowColor}`,
    padding: '40px',
    border: `1px solid ${borderColor}`,
    textAlign: 'left',
  }), [cardBg, shadowColor, borderColor]);

  const titleStyle = useMemo(() => ({
    fontSize: '2.4em',
    color: primaryText,
    marginBottom: '10px',
    textAlign: 'center',
    fontWeight: '700',
  }), [primaryText]);

  const subtitleStyle = useMemo(() => ({
    fontSize: '1.05em',
    color: secondaryText,
    marginBottom: '35px',
    lineHeight: '1.6',
    textAlign: 'center',
  }), [secondaryText]);

  const sectionTitleStyle = useMemo(() => ({
    fontSize: '1.4em',
    color: primaryText,
    marginBottom: '20px',
    marginTop: '30px',
    fontWeight: '600',
    borderBottom: `1px solid ${borderColor}`,
    paddingBottom: '10px',
  }), [primaryText, borderColor]);

  const formGroupStyle = useMemo(() => ({
    marginBottom: '25px',
  }), []);

  const labelStyle = useMemo(() => ({
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: primaryText,
    fontSize: '0.95em',
  }), [primaryText]);

  const inputBaseStyle = useMemo(() => ({
    width: '100%',
    padding: '12px 15px',
    border: `1px solid ${borderColor}`,
    borderRadius: '8px',
    backgroundColor: inputBg,
    color: primaryText,
    fontSize: '1em',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    '&:focus': {
      borderColor: focusBorderColor,
      boxShadow: `0 0 0 3px ${focusBorderColor}30`,
      outline: 'none',
    },
  }), [borderColor, inputBg, primaryText, focusBorderColor]);

  const textareaStyle = useMemo(() => ({
    ...inputBaseStyle,
    resize: 'vertical',
    minHeight: '100px',
  }), [inputBaseStyle]);

  const radioGroupStyle = useMemo(() => ({
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    marginTop: '10px',
    justifyContent: 'flex-start',
  }), []);

  const radioLabelStyle = useMemo(() => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    fontSize: '0.95em',
    color: secondaryText,
  }), [secondaryText]);

  const customRadioStyle = useMemo(() => (isChecked) => ({
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: `2px solid ${isChecked ? radioCheckedColor : borderColor}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
    transition: 'background-color 0.2s ease, border-color 0.2s ease',
    backgroundColor: isChecked ? radioCheckedColor : inputBg,
  }), [radioCheckedColor, borderColor, inputBg]);

  const innerRadioDotStyle = useMemo(() => ({
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: cardBg,
    transition: 'opacity 0.2s ease, transform 0.2s ease',
  }), [cardBg]);

  const customCheckboxStyle = useMemo(() => (isChecked) => ({
    width: '20px',
    height: '20px',
    borderRadius: '6px',
    border: `2px solid ${isChecked ? accentColor : borderColor}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
    transition: 'background-color 0.2s ease, border-color 0.2s ease',
    backgroundColor: isChecked ? accentColor : inputBg,
    color: cardBg,
    fontSize: '14px',
    fontWeight: 'bold',
  }), [accentColor, borderColor, inputBg, cardBg]);

  const buttonStyle = useMemo(() => ({
    backgroundColor: accentColor,
    color: cardBg,
    border: 'none',
    padding: '14px 25px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.05em',
    fontWeight: '600',
    transition: 'background-color 0.2s ease, transform 0.1s ease',
    width: '100%',
    marginTop: '30px',
    outline: 'none',
    boxShadow: `0 4px 10px ${accentColor}40`,
  }), [accentColor, cardBg]);

  const buttonActiveHoverStyle = useMemo(() => ({
    backgroundColor: buttonHoverColor,
    transform: 'translateY(-1px)',
    boxShadow: `0 6px 12px ${buttonHoverColor}40`,
  }), [buttonHoverColor]);

  const submitMessageStyle = useMemo(() => ({
    marginTop: '25px',
    fontSize: '1.05em',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
    color: primaryText,
  }), [primaryText]);

  return (
    <div style={containerStyle}>
      <div style={formCardStyle}>
        <h2 style={titleStyle}>Tell Us What You Think</h2>
        <p style={subtitleStyle}>
          Your feedback helps us improve! Please share your thoughts below.
        </p>
        <form onSubmit={handleSubmit}>
          <h3 style={sectionTitleStyle}>Your Experience</h3>
          <div style={formGroupStyle}>
            <label style={labelStyle}>How would you rate your overall experience?</label>
            <div style={radioGroupStyle}>
              {[1, 2, 3, 4, 5].map(rating => (
                <label key={`rating-modern-${rating}`} style={radioLabelStyle}>
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
                    <div style={{ ...innerRadioDotStyle, opacity: formData.rating === String(rating) ? 1 : 0, transform: formData.rating === String(rating) ? 'scale(0.6)' : 'scale(0)' }}></div>
                  </div>
                  <span>{rating} Star{rating > 1 ? 's' : ''}</span>
                </label>
              ))}
            </div>
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="comments-1" style={labelStyle}>Additional Comments</label>
            <textarea
              id="comments-1"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              style={textareaStyle}
              rows="5"
              disabled={isSubmitting}
              placeholder="Any suggestions or praises you'd like to share?"
            ></textarea>
          </div>

          <h3 style={sectionTitleStyle}>About You (Optional)</h3>
          <div style={formGroupStyle}>
            <label htmlFor="email-1" style={labelStyle}>Email Address</label>
            <input
              type="email"
              id="email-1"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputBaseStyle}
              disabled={isSubmitting}
              placeholder="name@example.com"
            />
          </div>

          <div style={{ ...formGroupStyle, display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            <label htmlFor="optIn-1" style={{ ...labelStyle, marginBottom: '0', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                id="optIn-1"
                name="optIn"
                checked={formData.optIn}
                onChange={handleChange}
                disabled={isSubmitting}
                style={{ display: 'none' }}
              />
              <div style={customCheckboxStyle(formData.optIn)}>
                {formData.optIn && '✔'}
              </div>
              <span>I'd like to receive occasional updates.</span>
            </label>
          </div>

          <button
            type="submit"
            style={{ ...buttonStyle, ...(hoveredButton && !isSubmitting ? buttonActiveHoverStyle : {}) }}
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending Feedback...' : 'Submit Feedback'}
          </button>
        </form>
        {submitMessage && (
          <p style={{ ...submitMessageStyle, color: submitMessage.includes('Thank you') ? accentColor : primaryText }}>
            {submitMessage}
          </p>
        )}
      </div>
    </div>
  );
}

export default ModernFeedbackForm;