import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{
    background: '#ffffff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    padding: '1rem 2rem',
    position: 'sticky',
    top: 0,
    zIndex: 100
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <Link to="/" style={{
        textDecoration: 'none',
        color: '#2d3748',
        fontWeight: 700,
        fontSize: '1.25rem'
      }}>Kirru</Link>
      <div style={{
        display: 'flex',
        gap: '2rem'
      }}>
        <Link to="/about" style={{
          textDecoration: 'none',
          color: '#4a5568',
          fontWeight: 500,
          transition: 'color 0.2s',
          ':hover': {
            color: '#3182ce'
          }
        }}>About</Link>
        <Link to="/projects" style={{
          textDecoration: 'none',
          color: '#4a5568',
          fontWeight: 500,
          transition: 'color 0.2s',
          ':hover': {
            color: '#3182ce'
          }
        }}>Projects</Link>
        <Link to="/contact" style={{
          textDecoration: 'none',
          color: '#4a5568',
          fontWeight: 500,
          transition: 'color 0.2s',
          ':hover': {
            color: '#3182ce'
          }
        }}>Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;