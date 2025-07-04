import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    {
      name: 'Resume',
      external: true,
      path: 'https://drive.google.com/file/d/1_rTc8LSEAZLltEQN_cr5vXKnWOq5SA6r/view?usp=sharing', // Replace with your file ID
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.brand}>Keerthipriya</Link>

        {isMobile ? (
          <>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={styles.hamburger}
              aria-label="Toggle navigation"
            >
              ☰
            </button>

            {isOpen && (
              <div style={styles.mobileMenu}>
                {navItems.map((item) =>
                  item.external ? (
                    <a
                      key={item.name}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.mobileLink}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.path}
                      to={item.path}
                      style={{
                        ...styles.mobileLink,
                        ...(location.pathname === item.path ? styles.activeLink : {}),
                      }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            )}
          </>
        ) : (
          <div style={styles.links}>
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    ...styles.link,
                    ...(location.pathname === item.path ? styles.activeLink : {}),
                  }}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
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
    flexWrap: 'wrap',
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
  },
  hamburger: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#1f2937',
  },
  mobileMenu: {
    width: '100%',
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  mobileLink: {
    textDecoration: 'none',
    color: '#4b5563',
    fontWeight: 500,
    fontSize: '1.1rem',
    textAlign: 'left',
  },
};

export default Navbar;
