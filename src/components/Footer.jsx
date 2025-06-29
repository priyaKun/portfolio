import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.container}>
      {/* Branding */}
      <div style={styles.column}>
        <h3 style={styles.heading}>Keerthipriya</h3>
        <p style={styles.text}>
          Full Stack Developer crafting modern web apps with React, FastAPI, and cloud tools.
        </p>
      </div>

      {/* Navigation */}
      <div style={styles.column}>
        <h4 style={styles.subheading}>Quick Links</h4>
        <ul style={styles.list}>
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                style={styles.link}
                onMouseOver={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#a0aec0')}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Socials */}
      <div style={styles.column}>
        <h4 style={styles.subheading}>Connect</h4>
        <div style={styles.socials}>
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
            href="https://linkedin.com/in/your-link"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </div>

    <div style={styles.bottom}>
      <p>© {new Date().getFullYear()} Keerthipriya. All rights reserved.</p>
    </div>
  </footer>
);
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
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '2rem',
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
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  link: {
    color: '#a0aec0',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    fontSize: '0.95rem',
  },
  socials: {
    display: 'flex',
    gap: '1rem',
  },
  iconLink: {
    color: '#a0aec0',
    transition: 'color 0.2s ease',
    textDecoration: 'none',
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
