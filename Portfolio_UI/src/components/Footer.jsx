import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer style={styles.footer}>
      <div style={{ ...styles.container, flexDirection: isMobile ? 'column' : 'row', textAlign: isMobile ? 'center' : 'left' }}>
        
        {/* Left Column */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Keerthipriya</h3>
          <p style={styles.text}>
            Full Stack Developer crafting modern web apps with React, FastAPI, and cloud tools.
          </p>
        </div>

        {/* Center Column */}
        <div style={styles.column}>
          <h4 style={styles.subheading}>Quick Links</h4>
          <ul style={styles.list}>
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  style={styles.link}
                >
                  {item}
                </link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div style={styles.column}>
          <h4 style={styles.subheading}>Connect</h4>
          <div style={{ ...styles.socials, justifyContent: isMobile ? 'center' : 'flex-start' }}>
            <a
              href="https://github.com/priyakun"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconLink}
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/keerthypriya-kunapareddy-808434311"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconLink}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        <p>© {new Date().getFullYear()} Keerthipriya. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#1f2937',
    color: '#a0aec0',
    padding: '3rem 1rem 2rem',
    fontFamily: "'Inter', sans-serif",
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  column: {
    flex: '1 1 250px',
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '1rem',
    color: '#ffffff',
  },
  subheading: {
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: '1rem',
    color: '#e2e8f0',
  },
  text: {
    fontSize: '0.95rem',
    lineHeight: 1.6,
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  link: {
    color: '#a0aec0',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.2s ease',
  },
  iconLink: {
    color: '#a0aec0',
    textDecoration: 'none',
    marginRight: '1rem',
    transition: 'color 0.2s ease',
  },
  socials: {
    display: 'flex',
    gap: '1rem',
  },
  bottom: {
    marginTop: '2rem',
    textAlign: 'center',
    fontSize: '0.875rem',
    paddingTop: '1rem',
    borderTop: '1px solid #4b5563',
  },
};

export default Footer;
