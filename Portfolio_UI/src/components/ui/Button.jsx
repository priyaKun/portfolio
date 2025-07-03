import React from 'react';

const Button = ({ children, onClick, type = 'button', style = {} }) => (
  <button
    onClick={onClick}
    type={type}
    style={{
      background: 'linear-gradient(90deg, #b34aba, #1e40af)',
      border: 'none',
      padding: '10px 24px',
      borderRadius: '8px',
      color: '#fff',
      fontWeight: 600,
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
      ...style
    }}
  >
    {children}
  </button>
);

export default Button;
