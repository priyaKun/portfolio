import React, { useEffect, useState } from 'react';
import Skills from '../components/Skills';

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

function useResponsiveStyles(baseStyles) {
  const [responsive, setResponsive] = useState(baseStyles);
  useEffect(() => {
    function handleResize() {
      setResponsive({
        ...baseStyles,
        contentWrapper: {
          ...baseStyles.contentWrapper,
          ...(window.innerWidth <= 900 && {
            gridTemplateColumns: '1fr',
            gap: '2rem',
          }),
        },
        container: {
          ...baseStyles.container,
          ...(window.innerWidth <= 600 && {
            padding: '1.2rem',
          }),
        },
        title: {
          ...baseStyles.title,
          ...(window.innerWidth <= 600 && {
            fontSize: '2rem',
          }),
        },
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [baseStyles]);
  return responsive;
}

const About = () => {
  const responsiveStyles = useResponsiveStyles(styles);
  return (
    <section style={responsiveStyles.section} id="about">
      <div style={responsiveStyles.container}>
        {/* Gradient Header */}
        <div style={responsiveStyles.header} data-aos="fade-up">
          <h2 style={responsiveStyles.title}>About Me</h2>
          <p style={responsiveStyles.subtitle}>
            I’m a passionate developer who loves solving real-world problems with clean, efficient code.
          </p>
        </div>

        {/* Content */}
        <div style={responsiveStyles.contentWrapper}>
          {/* LEFT: Bio */}
          <div style={responsiveStyles.left} data-aos="fade-right" data-aos-delay="100">
            <h3 style={responsiveStyles.subHeading}>My Background</h3>
            <p style={responsiveStyles.paragraph}>
              I'm an aspiring full-stack developer currently pursuing my Bachelor's in Computer Science from VIT-AP University.
              I specialize in building responsive, scalable applications using React and FastAPI.
            </p>

            <p style={responsiveStyles.paragraph}>
              I've contributed to team projects like <strong>StudyKart</strong> and <strong>Smart Power Prediction</strong>, 
              and completed a internship as a Software Development Intern at iQuadra Technologies.
              I'm also an <strong>AWS Certified Cloud Practitioner</strong> who enjoys participating in coding events and technical clubs.
            </p>

            <div style={responsiveStyles.highlightBox}>
              <h4 style={responsiveStyles.highlightTitle}>My Approach</h4>
              <p style={responsiveStyles.highlightText}>
                I focus on writing clean, maintainable code and creating accessible, user-friendly interfaces.
                I'm a fast learner who enjoys solving real-world problems and continuously evolving with the latest tech trends.
              </p>
            </div>
          </div>

          {/* RIGHT: Skills */}
          <div style={responsiveStyles.right} data-aos="fade-left" data-aos-delay="200">
            <div style={responsiveStyles.skillsCard}>
              <h3 style={responsiveStyles.subHeading}>My Skills</h3>
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
