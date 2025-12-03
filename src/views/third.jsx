import React, { useState, useMemo } from 'react';

function DarkProfessionalFeedbackForm() {
  const [formData, setFormData] = useState({
    rating: null,
    comments: '',
    email: '',
    optIn: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [hoveredButton, setHoveredButton] = useState(false);

  // Dark Mode & Professional Color Palette
  const bgColor = '#2C3E50'; // Deep blue-gray
  const cardBg = '#34495E'; // Slightly lighter blue-gray for card
  const primaryText = '#ECF0F1'; // Off-white
  const secondaryText = '#BDC3C7'; // Muted light gray
  const accentColor = '#F39C12'; // Bright Orange/Gold
  const buttonHoverColor = '#E67E22'; // Darker Orange
  const borderColor = '#495E70'; // Muted border for elements
  const inputBg = '#3F5468'; // Input background
  const shadowColor = 'rgba(0,0,0,0.4)';
  const radioCheckedColor = accentColor;
  const focusBorderColor = '#F1C40F'; // Brighter gold for focus

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
      console.log('Survey Data Submitted (Dark Professional):', formData);
      setIsSubmitting(false);
      setSubmitMessage('Feedback received. Thank you!');
      setFormData({ rating: null, comments: '', email: '', optIn: false });
    }, 1500);
  };

  // Styles
  const containerStyle = useMemo(() => ({
    minHeight: '100vh',
    backgroundColor: bgColor,
    padding: '40px 20px',
    fontFamily: "'Lato', sans-serif",
    color: primaryText,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }), [bgColor, primaryText]);

  const formCardStyle = useMemo(() => ({
    maxWidth: '680px',
    width: '100%',
    backgroundColor: cardBg,
    borderRadius: '10px',
    boxShadow: `0 10px 30px ${shadowColor}`,
    padding: '45px',
    border: `1px solid ${borderColor}`,
    textAlign: 'left',
  }), [cardBg, shadowColor, borderColor]);

  const titleStyle = useMemo(() => ({
    fontSize: '2.8em',
    color: primaryText,
    marginBottom: '10px',
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: '-0.8px',
  }), [primaryText]);

  const subtitleStyle = useMemo(() => ({
    fontSize: '1.1em',
    color: secondaryText,
    marginBottom: '40px',
    lineHeight: '1.7',
    textAlign: 'center',
  }), [secondaryText]);

  const sectionTitleStyle = useMemo(() => ({
    fontSize: '1.5em',
    color: accentColor,
    marginBottom: '20px',
    marginTop: '35px',
    fontWeight: '600',
    borderBottom: `1px solid ${borderColor}`,
    paddingBottom: '10px',
  }), [accentColor, borderColor]);

  const formGroupStyle = useMemo(() => ({
    marginBottom: '28px',
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
    padding: '13px 16px',
    border: `1px solid ${borderColor}`,
    borderRadius: '6px',
    backgroundColor: inputBg,
    color: primaryText,
    fontSize: '1em',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    '&::placeholder': {
      color: secondaryText,
      opacity: 0.7,
    },
    '&:focus': {
      borderColor: focusBorderColor,
      boxShadow: `0 0 0 3px ${focusBorderColor}40`,
      outline: 'none',
    },
  }), [borderColor, inputBg, primaryText, secondaryText, focusBorderColor]);

  const textareaStyle = useMemo(() => ({
    ...inputBaseStyle,
    resize: 'vertical',
    minHeight: '110px',
  }), [inputBaseStyle]);

  const radioGroupStyle = useMemo(() => ({
    display: 'flex',
    gap: '25px',
    flexWrap: 'wrap',
    marginTop: '15px',
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
    backgroundColor: primaryText,
    transition: 'opacity 0.2s ease, transform 0.2s ease',
  }), [primaryText]);

  const customCheckboxStyle = useMemo(() => (isChecked) => ({
    width: '20px',
    height: '20px',
    borderRadius: '4px',
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
    color: primaryText,
    border: 'none',
    padding: '15px 30px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1.15em',
    fontWeight: '700',
    transition: 'background-color 0.2s ease, transform 0.1s ease',
    width: '100%',
    marginTop: '35px',
    outline: 'none',
    boxShadow: `0 5px 15px ${accentColor}40`,
  }), [accentColor, primaryText]);

  const buttonActiveHoverStyle = useMemo(() => ({
    backgroundColor: buttonHoverColor,
    transform: 'translateY(-2px)',
    boxShadow: `0 8px 18px ${buttonHoverColor}50`,
  }), [buttonHoverColor]);

  const submitMessageStyle = useMemo(() => ({
    marginTop: '30px',
    fontSize: '1.1em',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
    color: accentColor,
  }), [accentColor]);

  return (
    <div style={containerStyle}>
      <div style={formCardStyle}>
        <h2 style={titleStyle}>Professional Feedback</h2>
        <p style={subtitleStyle}>
          Your insights are invaluable. Please take a moment to provide your feedback.
        </p>
        <form onSubmit={handleSubmit}>
          <h3 style={sectionTitleStyle}>Service Evaluation</h3>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Rate your satisfaction:</label>
            <div style={radioGroupStyle}>
              {[1, 2, 3, 4, 5].map(rating => (
                <label key={`rating-dark-${rating}`} style={radioLabelStyle}>
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
                    <div style={{ ...innerRadioDotStyle, opacity: formData.rating === String(rating) ? 1 : 0, transform: formData.rating === String(rating) ? 'scale(0.8)' : 'scale(0)' }}></div>
                  </div>
                  <span style={{color: formData.rating === String(rating) ? primaryText : secondaryText}}>{rating} / 5</span>
                </label>
              ))}
            </div>
          </div>

          <div style={formGroupStyle}>
            <label htmlFor="comments-3" style={labelStyle}>Suggestions or Comments</label>
            <textarea
              id="comments-3"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              style={textareaStyle}
              rows="5"
              disabled={isSubmitting}
              placeholder="Provide any feedback or areas for improvement here..."
            ></textarea>
          </div>

          <h3 style={sectionTitleStyle}>Contact Details (Optional)</h3>
          <div style={formGroupStyle}>
            <label htmlFor="email-3" style={labelStyle}>Email Address</label>
            <input
              type="email"
              id="email-3"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputBaseStyle}
              disabled={isSubmitting}
              placeholder="contact@yourcompany.com"
            />
          </div>

          <div style={{ ...formGroupStyle, display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            <label htmlFor="optIn-3" style={{ ...labelStyle, marginBottom: '0', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                id="optIn-3"
                name="optIn"
                checked={formData.optIn}
                onChange={handleChange}
                disabled={isSubmitting}
                style={{ display: 'none' }}
              />
              <div style={customCheckboxStyle(formData.optIn)}>
                {formData.optIn && '✔'}
              </div>
              <span style={{color: primaryText}}>Subscribe to our newsletter for updates.</span>
            </label>
          </div>

          <button
            type="submit"
            style={{ ...buttonStyle, ...(hoveredButton && !isSubmitting ? buttonActiveHoverStyle : {}) }}
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting securely...' : 'Submit Feedback'}
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

export default DarkProfessionalFeedbackForm;