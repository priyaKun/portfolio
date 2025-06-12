import React from 'react';

const ProjectCard = ({ title, description, technologies }) => (
  <div style={{
    background: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.2s, box-shadow 0.2s',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
    }
  }}>
    <div style={{ padding: '1.5rem' }}>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '0.5rem',
        color: '#2d3748'
      }}>{title}</h3>
      <p style={{
        color: '#4a5568',
        marginBottom: '1rem',
        fontSize: '0.9rem'
      }}>{description}</p>
      
      {technologies && (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginTop: '1rem'
        }}>
          {technologies.map(tech => (
            <span key={tech} style={{
              background: '#edf2f7',
              color: '#2d3748',
              padding: '0.25rem 0.5rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: 500
            }}>
              {tech}
            </span>
          ))}
        </div>
      )}
      
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginTop: '1.5rem'
      }}>
        <button style={{
          background: '#3182ce',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '0.9rem',
          transition: 'background 0.2s',
          ':hover': {
            background: '#2c5282'
          }
        }}>
          View Project
        </button>
        <button style={{
          background: 'transparent',
          color: '#3182ce',
          border: '1px solid #3182ce',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '0.9rem',
          transition: 'all 0.2s',
          ':hover': {
            background: '#ebf8ff'
          }
        }}>
          Source Code
        </button>
      </div>
    </div>
  </div>
);

export default ProjectCard;