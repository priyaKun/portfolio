import React from 'react';

const Footer = () => (
  <footer style={{
    background: '#2d3748',
    color: '#ffffff',
    padding: '2rem 1rem',
    textAlign: 'center',
    marginTop: '3rem'
  }}>
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      textAlign: 'left'
    }}>
      <div>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          marginBottom: '1rem'
        }}>Kirru</h3>
        <p style={{ color: '#a0aec0', lineHeight: 1.6 }}>
          Full Stack Developer creating modern web applications with clean, efficient code.
        </p>
      </div>
      
      <div>
        <h4 style={{
          fontSize: '1rem',
          fontWeight: 600,
          marginBottom: '1rem'
        }}>Quick Links</h4>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          <li><a href="/" style={{
            color: '#a0aec0',
            textDecoration: 'none',
            transition: 'color 0.2s',
            ':hover': {
              color: '#ffffff'
            }
          }}>Home</a></li>
          <li><a href="/about" style={{
            color: '#a0aec0',
            textDecoration: 'none',
            transition: 'color 0.2s',
            ':hover': {
              color: '#ffffff'
            }
          }}>About</a></li>
          <li><a href="/projects" style={{
            color: '#a0aec0',
            textDecoration: 'none',
            transition: 'color 0.2s',
            ':hover': {
              color: '#ffffff'
            }
          }}>Projects</a></li>
          <li><a href="/contact" style={{
            color: '#a0aec0',
            textDecoration: 'none',
            transition: 'color 0.2s',
            ':hover': {
              color: '#ffffff'
            }
          }}>Contact</a></li>
        </ul>
      </div>
      
      <div>
        <h4 style={{
          fontSize: '1rem',
          fontWeight: 600,
          marginBottom: '1rem'
        }}>Connect</h4>
        <div style={{
          display: 'flex',
          gap: '1rem'
        }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{
            color: '#a0aec0',
            transition: 'color 0.2s',
            ':hover': {
              color: '#ffffff'
            }
          }}>GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
            color: '#a0aec0',
            transition: 'color 0.2s',
            ':hover': {
              color: '#ffffff'
            }
          }}>LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{
            color: '#a0aec0',
            transition: 'color 0.2s',
            ':hover': {
              color: '#ffffff'
            }
          }}>Twitter</a>
        </div>
      </div>
    </div>
    
    <div style={{
      marginTop: '2rem',
      paddingTop: '1rem',
      borderTop: '1px solid #4a5568',
      color: '#a0aec0',
      fontSize: '0.875rem'
    }}>
      <p>© {new Date().getFullYear()} Kirru. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;