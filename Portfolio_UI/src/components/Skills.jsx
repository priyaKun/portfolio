import React, { useState, useEffect } from 'react';

// Font Awesome + Simple Icons
import { FaJava, FaPython, FaReact, FaGithub, FaHtml5, FaCss3Alt, FaCode } from 'react-icons/fa';
import { SiFastapi, SiPycharm, SiIntellijidea, SiBootstrap } from 'react-icons/si';

const Skills = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skillGroups = {
    Languages: ['Java', 'Python'],
    'Web Development': ['HTML', 'CSS', 'Bootstrap', 'React', 'FastAPI'],
    Tools: ['GitHub', 'VS Code', 'PyCharm', 'IntelliJ IDEA'],
    'Soft Skills': ['Problem Solving', 'Teamwork', 'Communication', 'Presentation'],
  };

  const iconMap = {
    Java: <FaJava color="#f89820" />,
    Python: <FaPython color="#3776AB" />,
    HTML: <FaHtml5 color="#E34F26" />,
    CSS: <FaCss3Alt color="#1572B6" />,
    Bootstrap: <SiBootstrap color="#563d7c" />,
    React: <FaReact color="#61DAFB" />,
    FastAPI: <SiFastapi color="#05998b" />,
    GitHub: <FaGithub color="#333" />,
    'VS Code': <FaCode color="#007ACC" />,
    PyCharm: <SiPycharm color="#1fda4c" />,
    'IntelliJ IDEA': <SiIntellijidea color="#000" />,
  };

  return (
    <div style={{ ...styles.container, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>
      {Object.entries(skillGroups).map(([category, skills], index) => (
        <div key={index} style={styles.group}>
          <h4 style={styles.heading}>{category}</h4>
          <ul style={styles.list}>
            {skills.map((skill, idx) => (
              <li key={idx} style={styles.item}>
                <span style={styles.icon}>
                  {iconMap[skill] || '•'}
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// === Inline Styles (Responsive via useState + useEffect) ===
const styles = {
  container: {
    display: 'grid',
    gap: '1.5rem',
    padding: '2rem',
    fontFamily: "'Inter', sans-serif",
  },
  group: {
    backgroundColor: '#edf2f7',
    padding: '1.25rem',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  },
  heading: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
    color: '#2b6cb0',
  },
  list: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  item: {
    marginBottom: '0.6rem',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    color: '#2d3748',
  },
  icon: {
    marginRight: '0.5rem',
    fontSize: '1.2rem',
    display: 'inline-flex',
    alignItems: 'center',
  },
};

export default Skills;