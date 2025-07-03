import React from 'react';
import Card from './ui/Card';

const ProjectCard = ({ title, description, technologies, github, demo }) => (
  <Card title={title} customStyle={styles.card}>
    <p style={styles.description}>{description}</p>

    <p style={styles.tech}>
      <strong>Tech Stack:</strong> {technologies.join(', ')}
    </p>

    <div style={styles.linkGroup}>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          onMouseOver={(e) => (e.currentTarget.style.borderBottomColor = '#2563eb')}
          onMouseOut={(e) => (e.currentTarget.style.borderBottomColor = 'transparent')}
        >
          🔗 GitHub Repo
        </a>
      )}
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.link, marginLeft: '1.5rem' }}
          onMouseOver={(e) => (e.currentTarget.style.borderBottomColor = '#2563eb')}
          onMouseOut={(e) => (e.currentTarget.style.borderBottomColor = 'transparent')}
        >
          🌐 Live Demo
        </a>
      )}
    </div>
  </Card>
);

const styles = {
  card: {
    padding: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: '#f9fafb',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    fontFamily: "'Inter', sans-serif",
    color: '#1f2937',
  },
  description: {
    marginBottom: '1rem',
    lineHeight: 1.6,
    fontSize: '1rem',
    color: '#374151',
  },
  tech: {
    fontSize: '0.95rem',
    marginBottom: '1rem',
    color: '#475569',
  },
  linkGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  link: {
    display: 'inline-block',
    color: '#2563eb',
    fontWeight: 600,
    textDecoration: 'none',
    borderBottom: '1px solid transparent',
    transition: 'border-color 0.3s ease',
    fontSize: '0.95rem',
  },
};

export default ProjectCard;
