import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => (
  <section style={{
    maxWidth: '1200px',
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
    }}>My Projects</h2>
    
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    }}>
      <ProjectCard 
        title="E-commerce Platform" 
        description="A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include product catalog, cart functionality, and secure checkout."
        technologies={['React', 'Node.js', 'MongoDB', 'Stripe API']}
      />
      <ProjectCard 
        title="Task Management App" 
        description="A collaborative task management application with real-time updates using WebSockets and React hooks."
        technologies={['React', 'FastAPI', 'WebSockets', 'PostgreSQL']}
      />
      <ProjectCard 
        title="Portfolio Website" 
        description="A responsive portfolio website built with React and styled-components to showcase my work and skills."
        technologies={['React', 'Styled Components', 'Framer Motion']}
      />
    </div>
  </section>
);

export default Projects;