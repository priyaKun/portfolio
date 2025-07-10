import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext.jsx';
import { FaMoon, FaSun } from 'react-icons/fa';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  // Removed Resume button to avoid duplication
];

const CustomNavbar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const handleNavClick = () => setExpanded(false);

  return (
    <Navbar bg={isDark ? 'dark' : 'light'} variant={isDark ? 'dark' : 'light'} expand="md" sticky="top" className="shadow-sm" expanded={expanded} onToggle={setExpanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4" onClick={handleNavClick}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            {navItems.map((item) => (
              <Nav.Link
                key={item.path}
                as={Link}
                to={item.path}
                className={`fw-semibold ${location.pathname === item.path ? 'active text-primary border-bottom border-primary' : ''}`}
                onClick={handleNavClick}
              >
                {item.name}
              </Nav.Link>
            ))}
            {/* Download Resume Button */}
            <Nav.Link
              href="https://drive.google.com/file/d/1_rTc8LSEAZLltEQN_cr5vXKnWOq5SA6r/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-2"
              onClick={handleNavClick}
            >
              <Button variant="primary" size="sm" className="fw-bold shadow-sm px-3">
                Download Resume
              </Button>
            </Nav.Link>
            {/* Dark Mode Toggle */}
            <Button
              variant={isDark ? 'light' : 'dark'}
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="ms-2 d-flex align-items-center justify-content-center"
              style={{ borderRadius: '50%', width: 36, height: 36 }}
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;