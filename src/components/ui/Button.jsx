import React from 'react';

const Button = ({ children, onClick }) => (
  <button onClick={onClick} style={{
    background: '#ff69b4',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    color: 'white',
    fontWeight: 'bold'
  }}>
    {children}
  </button>
);

export default Button;