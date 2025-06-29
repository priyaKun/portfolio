import React from 'react';

const Skills = () => {
  const skillGroups = {
    Languages: ['Java (Proficient)', 'Python (Basic)'],
    'Web Development': ['HTML', 'CSS', 'Bootstrap', 'React', 'FastAPI'],
    Tools: ['Git/GitHub', 'VS Code', 'PyCharm', 'IntelliJ IDEA'],
    'Soft Skills': ['Problem Solving', 'Teamwork', 'Communication', 'Presentation']
  };

  return (
    <div style={containerStyle}>
      {Object.entries(skillGroups).map(([category, skills], index) => (
        <div key={index} style={groupStyle}>
          <h4 style={headingStyle}>{category}</h4>
          <ul style={listStyle}>
            {skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1.5rem',
};

const groupStyle = {
  backgroundColor: '#edf2f7',
  padding: '1rem',
  borderRadius: '8px',
};

const headingStyle = {
  fontSize: '1.2rem',
  marginBottom: '0.5rem',
  color: '#2b6cb0',
};

const listStyle = {
  paddingLeft: '1rem',
  margin: 0,
};

const itemStyle = {
  marginBottom: '0.25rem',
  color: '#2d3748',
};

export default Skills;
