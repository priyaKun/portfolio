import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.brand}>
          Home
        </Link>
        <div style={styles.links}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                ...styles.link,
                ...(location.pathname === item.path ? styles.activeLink : {})
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    background: '#ffffff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)',
    padding: '1rem 2rem',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    fontWeight: 700,
    fontSize: '1.5rem',
    color: '#1f2937',
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    textDecoration: 'none',
    color: '#4b5563',
    fontWeight: 500,
    fontSize: '1rem',
    transition: 'color 0.2s ease',
  },
  activeLink: {
    color: '#2563eb',
    borderBottom: '2px solid #2563eb',
    paddingBottom: '2px',
  }
};

export default Navbar;
