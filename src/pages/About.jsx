import React from 'react';
import Skills from '../components/Skills';

const About = () => (
  <section style={styles.section} id="about">
    <div style={styles.container}>
      {/* Gradient Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>About Me</h2>
        <p style={styles.subtitle}>
          I’m a passionate developer who loves solving real-world problems with clean, efficient code.
        </p>
      </div>

      {/* Content */}
      <div style={styles.contentWrapper}>
        {/* LEFT: Bio */}
        <div style={styles.left}>
          <h3 style={styles.subHeading}>My Background</h3>
          <p style={styles.paragraph}>
            I'm an aspiring full-stack developer currently pursuing my Bachelor's in Computer Science from VIT-AP University.
            I specialize in building responsive, scalable applications using React and FastAPI.
          </p>

          <p style={styles.paragraph}>
            I've contributed to team projects like <strong>StudyKart</strong> and <strong>Smart Power Prediction</strong>, 
            and completed a internship as a Software Development Intern at iQuadra Technologies.
            I'm also an <strong>AWS Certified Cloud Practitioner</strong> who enjoys participating in coding events and technical clubs.
          </p>

          <div style={styles.highlightBox}>
            <h4 style={styles.highlightTitle}>My Approach</h4>
            <p style={styles.highlightText}>
              I focus on writing clean, maintainable code and creating accessible, user-friendly interfaces.
              I'm a fast learner who enjoys solving real-world problems and continuously evolving with the latest tech trends.
            </p>
          </div>
        </div>

        {/* RIGHT: Skills */}
        <div style={styles.right}>
          <div style={styles.skillsCard}>
            <h3 style={styles.subHeading}>My Skills</h3>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const styles = {
  section: {
    padding: '5rem 1rem',
    background: 'radial-gradient(circle at top left, #f3c1f7, #d0e5fc)',
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
    fontSize: '2.75rem',
    fontWeight: 700,
    color: '#1e293b',
    marginBottom: '0.75rem',
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#4b5563',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    alignItems: 'flex-start',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  subHeading: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#2563eb',
    marginBottom: '0.5rem',
  },
  paragraph: {
    fontSize: '1.05rem',
    lineHeight: 1.7,
    color: '#4b5563',
  },
  highlightBox: {
    backgroundColor: '#e0f2fe',
    padding: '1.5rem',
    borderLeft: '4px solid #2563eb',
    borderRadius: '8px',
    marginTop: '1rem',
  },
  highlightTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#1e3a8a',
    marginBottom: '0.5rem',
  },
  highlightText: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '#1e293b',
  },
  right: {
    width: '100%',
  },
  skillsCard: {
    backgroundColor: '#f9fafb',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  },
};

export default About;
