// src/components/ui/Card.jsx
import React from 'react';

const Card = ({ children, title, customStyle }) => (
  <div style={{ ...defaultStyle, ...customStyle }}>
    {title && <h4 style={{ marginBottom: '0.5rem' }}>{title}</h4>}
    {children}
  </div>
);

const defaultStyle = {
  backgroundColor: '#fff',
  borderRadius: '1rem',
  padding: '1.5rem',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
};

export default Card;
