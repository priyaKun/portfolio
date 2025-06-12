import React from 'react';

const Card = ({ title, children }) => (
  <div style={{
    border: '2px dashed #ffa07a',
    padding: '20px',
    margin: '10px 0',
    borderRadius: '15px',
    backgroundColor: '#fffaf0'
  }}>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
);

export default Card;