import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Button from '../components/ui/Button';
import profileImage from '../assets/images/photo.png'; 

const Home = () => {
  const navigate = useNavigate();
  return (
    <section style={styles.section} id="home">
      <div style={styles.container}>
        {/* LEFT: Text Block */}
        <div style={styles.left}>
          <p style={styles.greeting}>Hello 👋</p>
          <h1 style={styles.heading}>
            I’m <span style={styles.name}>Keerthipriya</span>,<br />
            Full Stack Developer &<br />
            Cloud Enthusiast
          </h1>

          <p style={styles.subheading}>
            Passionate about building scalable web apps with React, FastAPI, and AWS. I focus on clean UI, efficient backend, and end-to-end product delivery.
          </p>

          <div style={styles.buttonGroup}>
            <Button style={styles.primaryButton} onClick={() => navigate('/contact')}>
              Hire Me
            </Button>
            <a
              href="https://wa.me/918309515583"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.secondaryButton}
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT: Image Block */}
        <div style={styles.right}>
          <div style={styles.imageWrapper}>
            <img src={profileImage} alt="Keerthipriya" style={styles.image} />
            <span style={styles.badge1}>Full Stack Dev</span>
            <span style={styles.badge2}>Cloud Learner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const accentColor = '#b34aba'; 

const styles = {
  section: {
    padding: '5rem 2rem',
    background: 'radial-gradient(circle at top left, #f3c1f7, #d0e5fc)',
    fontFamily: "'Inter', sans-serif",
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    gap: '3rem',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flex: 1,
    minWidth: '300px',
  },
  greeting: {
    fontSize: '1.25rem',
    color: accentColor,
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  heading: {
    fontSize: '2.75rem',
    fontWeight: 800,
    lineHeight: 1.3,
    marginBottom: '1rem',
    color: '#111827',
  },
  name: {
    color: accentColor,
    textDecoration: 'underline',
    textDecorationThickness: '2px',
  },
  subheading: {
    fontSize: '1.125rem',
    color: '#4b5563',
    marginBottom: '2rem',
    maxWidth: '500px',
    lineHeight: 1.6,
  },
  buttonGroup: {
    display: 'flex',
    gap: '1.25rem',
    flexWrap: 'wrap',
  },
  primaryButton: {
    backgroundColor: accentColor,
    color: '#ffffff',
    fontWeight: 600,
    padding: '0.75rem 1.75rem',
    borderRadius: '8px',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
  },
  secondaryButton: {
    backgroundColor: '#ffffff',
    border: `2px solid ${accentColor}`,
    color: accentColor,
    fontWeight: 600,
    padding: '0.75rem 1.75rem',
    borderRadius: '8px',
    fontSize: '1rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
  right: {
    flex: 1,
    position: 'relative',
    minWidth: '300px',
    textAlign: 'center',
  },
  imageWrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  image: {
    width: '100%',
    maxWidth: '360px',
    borderRadius: '16px',
    objectFit: 'cover',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
  badge1: {
    position: 'absolute',
    top: '10%',
    left: '-10%',
    backgroundColor: accentColor,
    color: '#fff',
    padding: '0.4rem 1rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: 600,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
  },
  badge2: {
    position: 'absolute',
    bottom: '8%',
    right: '-10%',
    backgroundColor: '#fce7f3',
    color: accentColor,
    padding: '0.4rem 1rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: 600,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
  },
};

export default Home;
