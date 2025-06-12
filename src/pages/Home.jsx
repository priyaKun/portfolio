import React from 'react';
import Typewriter from '../components/Typewriter';
import Button from '../components/ui/Button';

const Home = () => (
  <section style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    textAlign: 'center',
    padding: '2rem'
  }}>
    <h1 style={{
      fontSize: '3rem',
      fontWeight: 700,
      marginBottom: '1.5rem',
      color: '#2d3748'
    }}>Hey there, I'm Kirru</h1>
    <Typewriter text="Full Stack Developer specializing in React and modern web technologies" />
    <p style={{
      maxWidth: '600px',
      margin: '2rem auto',
      color: '#4a5568',
      fontSize: '1.1rem'
    }}>
      I build performant, accessible, and responsive web applications with clean, maintainable code.
    </p>
    <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
      <Button onClick={() => window.location.href = '#projects'}>View My Work</Button>
      <Button onClick={() => window.location.href = '#contact'} style={{
        background: 'transparent',
        border: '2px solid #3182ce',
        color: '#3182ce'
      }}>Contact Me</Button>
    </div>
  </section>
);

export default Home;