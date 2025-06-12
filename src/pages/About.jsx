import React from 'react';
import Skills from '../components/Skills';

const About = () => (
  <section style={{
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem 1rem'
  }}>
    <h2 style={{
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: '2rem',
      color: '#2d3748',
      position: 'relative',
      display: 'inline-block',
      ':after': {
        content: '""',
        position: 'absolute',
        bottom: '-10px',
        left: 0,
        width: '50px',
        height: '3px',
        background: '#3182ce'
      }
    }}>About Me</h2>
    
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      marginTop: '3rem',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr'
      }
    }}>
      <div>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#2d3748'
        }}>Background</h3>
        <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
          I'm a passionate full-stack developer with 5+ years of experience building web applications.
          My journey in tech started with a degree in Computer Science and has evolved through various roles
          in startups and tech companies.
        </p>
        <p style={{ color: '#4a5568' }}>
          When I'm not coding, you can find me contributing to open-source projects,
          writing technical articles, or exploring new technologies.
        </p>
      </div>
      
      <div>
        <Skills />
      </div>
    </div>
  </section>
);

export default About;