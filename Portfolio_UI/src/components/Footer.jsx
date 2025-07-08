import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="pt-5 pb-3 mt-auto" style={{background: 'linear-gradient(90deg, #1f2937 60%, #b34aba 100%)'}}>
      <Container>
        <Row className="gy-4 align-items-start text-light">
          {/* Left: About & CTA */}
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h3 className="fw-bold mb-2" style={{color:'#fff'}}>Keerthipriya</h3>
            <p className="mb-2 text-secondary" style={{color:'#e0e0e0'}}>Full Stack Developer & Cloud Enthusiast</p>
            <div className="fw-semibold" style={{color:'#fff'}}>Let’s Connect!</div>
          </Col>
          {/* Center: Quick Links */}
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h6 className="fw-bold mb-2" style={{color:'#fff'}}>Quick Links</h6>
            <ul className="list-unstyled mb-0">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item} className="mb-1">
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-secondary text-decoration-none fw-semibold"
                    style={{color:'#e0e0e0'}}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          {/* Right: Socials */}
          <Col md={4} className="text-center text-md-end">
            <h6 className="fw-bold mb-2" style={{color:'#fff'}}>Social</h6>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a
                href="https://github.com/priyakun"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-3 text-light social-icon"
                aria-label="GitHub"
                style={{transition:'color 0.2s'}}
                onMouseOver={e=>e.currentTarget.style.color='#b34aba'}
                onMouseOut={e=>e.currentTarget.style.color='#fff'}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/keerthypriya-kunapareddy-808434311"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-3 text-light social-icon"
                aria-label="LinkedIn"
                style={{transition:'color 0.2s'}}
                onMouseOver={e=>e.currentTarget.style.color='#b34aba'}
                onMouseOut={e=>e.currentTarget.style.color='#fff'}
              >
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="border-secondary my-4 opacity-50" />
        <div className="text-center text-secondary small" style={{color:'#e0e0e0'}}>
          &copy; {new Date().getFullYear()} Keerthipriya. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
