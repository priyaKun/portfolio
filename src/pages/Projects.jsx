import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import { Helmet } from 'react-helmet';

const Projects = () => (
  <>
    <Helmet>
      <title>Projects | Keerthipriya - Full Stack Developer</title>
      <meta
        name="description"
        content="Professional projects showcasing my work as a Full Stack Developer"
      />
    </Helmet>

    <section style={styles.section} id="projects">
      <div style={styles.container}>
        <header style={styles.header}>
          <h2 style={styles.title}>My Projects</h2>
          <p style={styles.subtitle}>
            A few highlights of the things I’ve built — combining design, data and functionality.
          </p>
        </header>

        <div style={styles.grid}>
          {projects.map((project, idx) => (
            <article key={idx} style={styles.card}>
              <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>{project.name}</h3>
                <div style={styles.iconGroup}>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} on GitHub`}
                      style={styles.link}
                    >
                      <FaGithub size={18} style={styles.icon} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} demo`}
                      style={styles.link}
                    >
                      <FaExternalLinkAlt size={16} style={styles.icon} />
                    </a>
                  )}
                </div>
              </div>
              <ProjectCard
                description={project.description}
                technologies={project.tech}
                github={project.link}
                demo={project.demo}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

// ✅ Your project data
const projects = [
  {
    name: 'Spotify Clone',
    description:
      'A responsive front-end clone of Spotify with modern UI components and smooth animations, built with React and styled-components.',
    tech: ['React', 'Styled Components', 'Context API'],
    link: 'https://github.com/priyakun/spotifyClone',
    demo: 'https://priyakun.github.io/spotifyClone/',
  },
  {
    name: 'StudyKart – Online Learning Platform',
    description:
      'A collaborative tutoring platform with responsive design, user authentication, and interactive course management features.',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
    link: 'https://github.com/StudyKart-com/',
  },
  {
    name: 'Smart Home Power Prediction',
    description:
      'Machine learning solution using LSTM networks to forecast power consumption patterns from IoT sensor data with 92% accuracy.',
    tech: ['Python', 'TensorFlow', 'LSTM', 'Pandas'],
    link: 'https://github.com/priyaKun/Smart_house_power_consumption_prediction',
  },
];

// ✅ Modern & consistent styles
const styles = {
  section: {
    background: 'radial-gradient(circle at top left, #f3c1f7, #d0e5fc)',
    padding: '5rem 1rem',
    fontFamily: "'Inter', sans-serif",
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '3rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.04)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#1e293b',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#4b5563',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  },
  card: {
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    margin: 0,
    color: '#1f2937',
  },
  iconGroup: {
    display: 'flex',
    gap: '0.75rem',
  },
  link: {
    color: '#64748b',
    textDecoration: 'none',
  },
  icon: {
    transition: 'color 0.3s ease',
  },
};

export default Projects;
