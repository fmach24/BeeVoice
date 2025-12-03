import React, { useMemo, useState } from 'react';

function SecondBasenAGHContactInfo() {
  const palette = {
    background: '#1a202c',
    card: '#2d3748',
    primaryText: '#e2e8f0',
    secondaryText: '#a0aec0',
    accentRed: '#e53e3e',
    hoverRed: '#c53030',
    borderColor: '#4a5568',
    shadow: 'rgba(0,0,0,0.3)',
    navBg: '#171923',
    navText: '#e2e8f0',
  };

  const containerStyle = useMemo(() => ({
    minHeight: '100vh',
    background: palette.background,
    padding: '0px 20px 40px',
    fontFamily: "'Inter', sans-serif",
    color: palette.primaryText,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }), [palette.background, palette.primaryText]);

  const navStyle = useMemo(() => ({
    width: '100%',
    backgroundColor: palette.navBg,
    boxShadow: `0 2px 8px ${palette.shadow}`,
    padding: '15px 40px',
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxSizing: 'border-box',
  }), [palette.navBg, palette.shadow]);

  const navLinkStyle = useMemo(() => ({
    color: palette.navText,
    textDecoration: 'none',
    fontWeight: '500',
    margin: '0 15px',
    transition: 'color 0.2s ease',
  }), [palette.navText]);

  const navBrandStyle = useMemo(() => ({
    fontSize: '1.4em',
    fontWeight: '700',
    color: palette.accentRed,
    textDecoration: 'none',
  }), [palette.accentRed]);

  const cardStyle = useMemo(() => ({
    maxWidth: '550px',
    width: '100%',
    backgroundColor: palette.card,
    borderRadius: '16px',
    boxShadow: `0 8px 20px ${palette.shadow}`,
    padding: '40px',
    border: `1px solid ${palette.borderColor}`,
    textAlign: 'center',
    boxSizing: 'border-box',
  }), [palette.card, palette.shadow, palette.borderColor]);

  const titleStyle = useMemo(() => ({
    fontSize: '2.2em',
    color: palette.accentRed,
    marginBottom: '15px',
    fontWeight: '700',
  }), [palette.accentRed]);

  const subtitleStyle = useMemo(() => ({
    fontSize: '1.05em',
    color: palette.accentRed,
    marginBottom: '35px',
    lineHeight: '1.6',
  }), [palette.accentRed]);

  const sectionTitleStyle = useMemo(() => ({
    fontSize: '1.5em',
    color: palette.accentRed,
    marginBottom: '20px',
    marginTop: '30px',
    fontWeight: '600',
  }), [palette.accentRed]);

  const contactGridStyle = useMemo(() => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '15px',
    marginBottom: '30px',
  }), []);

  const contactItemStyle = useMemo(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.05em',
    color: palette.accentRed,
  }), [palette.accentRed]);

  const contactIconStyle = useMemo(() => ({
    fontSize: '1.2em',
    color: palette.primaryText,
    marginRight: '15px',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: 'rgba(229, 62, 62, 0.2)',
  }), [palette.primaryText]);

  const linkStyle = useMemo(() => ({
    color: palette.primaryText,
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.2s ease, text-decoration 0.2s ease',
  }), [palette.primaryText]);

  const hoverLinkStyle = useMemo(() => ({
    color: palette.accentRed,
    textDecoration: 'underline',
  }), [palette.accentRed]);

  const mapFrameStyle = useMemo(() => ({
    width: '100%',
    height: '350px',
    border: `1px solid ${palette.borderColor}`,
    borderRadius: '10px',
    marginTop: '30px',
    marginBottom: '15px',
    boxShadow: `0 4px 10px ${palette.shadow}`,
  }), [palette.borderColor, palette.shadow]);

  const [isPhoneHovered, setIsPhoneHovered] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [isMapsLinkHovered, setIsMapsLinkHovered] = useState(false);
  const [isNavHomeHovered, setIsNavHomeHovered] = useState(false);
  const [isNavAboutHovered, setIsNavAboutHovered] = useState(false);
  const [isNavContactHovered, setIsNavContactHovered] = useState(false);

  const applyHoverStyle = (baseStyle, hoverStyle, isHovered) => ({
    ...baseStyle,
    ...(isHovered ? hoverStyle : {}),
  });

  return (
    <div style={containerStyle}>
      <nav style={navStyle}>
        <a href="#" style={navBrandStyle}>Basen AGH</a>
        <div>
          <a
            href="#"
            style={applyHoverStyle(navLinkStyle, {color: palette.accentRed}, isNavHomeHovered)}
            onMouseEnter={() => setIsNavHomeHovered(true)}
            onMouseLeave={() => setIsNavHomeHovered(false)}
          >
            Home
          </a>
          <a
            href="#"
            style={applyHoverStyle(navLinkStyle, {color: palette.accentRed}, isNavAboutHovered)}
            onMouseEnter={() => setIsNavAboutHovered(true)}
            onMouseLeave={() => setIsNavAboutHovered(false)}
          >
            About
          </a>
          <a
            href="#"
            style={applyHoverStyle(navLinkStyle, {color: palette.accentRed}, isNavContactHovered)}
            onMouseEnter={() => setIsNavContactHovered(true)}
            onMouseLeave={() => setIsNavContactHovered(false)}
          >
            Contact
          </a>
        </div>
      </nav>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Kontakt: Basen AGH</h2>
        <p style={subtitleStyle}>
          Nasz zespół chętnie odpowie na Twoje pytania. Poniżej znajdziesz wszystkie niezbędne dane kontaktowe oraz mapę dojazdu.
        </p>

        <h3 style={sectionTitleStyle}>Dane Kontaktowe</h3>
        <div style={contactGridStyle}>
          <div style={contactItemStyle}>
            <div style={contactIconStyle}>📞</div>
            <span>Telefon: <a
              href="tel:+48126173000"
              style={applyHoverStyle(linkStyle, hoverLinkStyle, isPhoneHovered)}
              onMouseEnter={() => setIsPhoneHovered(true)}
              onMouseLeave={() => setIsPhoneHovered(false)}
            >+48 12 617 30 00</a></span>
          </div>
          <div style={contactItemStyle}>
            <div style={contactIconStyle}>✉️</div>
            <span>E-mail: <a
              href="mailto:basen@agh.edu.pl"
              style={applyHoverStyle(linkStyle, hoverLinkStyle, isEmailHovered)}
              onMouseEnter={() => setIsEmailHovered(true)}
              onMouseLeave={() => setIsEmailHovered(false)}
            >basen@agh.edu.pl</a></span>
          </div>
          <div style={contactItemStyle}>
            <div style={contactIconStyle}>📍</div>
            <span>Adres: Reymonta 17, 30-059 Kraków</span>
          </div>
        </div>

        <h3 style={sectionTitleStyle}>Nasza Lokalizacja</h3>
        <p style={subtitleStyle}>
          Basen znajduje się na terenie kampusu AGH, w dogodnej lokalizacji blisko centrum.
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.852904834898!2d19.91185591571732!3d50.06526977942436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165bb0d9a6c9d5%3A0x6b8d7c4b7b3b9b4d!2sBasen%20AGH!5e0!3m2!1spl!2spl!4v1678901234567!5m2!1spl!2spl"
          width="600"
          height="450"
          style={mapFrameStyle}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokalizacja Basenu AGH"
        ></iframe>
        <a
          href="https://www.google.com/maps/place/Basen+AGH/@50.06527,19.9118559,17z/data=!3m1!4b1!4m6!3m5!1s0x47165bb0d9a6c9d5:0x6b8d7c4b7b3b9b4d!8m2!3d50.06527!4d19.9144308!16s%2Fg%2F1tdw1v42?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          style={applyHoverStyle(linkStyle, hoverLinkStyle, isMapsLinkHovered)}
          onMouseEnter={() => setIsMapsLinkHovered(true)}
          onMouseLeave={() => setIsMapsLinkHovered(false)}
        >
          Otwórz w Google Maps
        </a>
      </div>
    </div>
  );
}

export default SecondBasenAGHContactInfo;