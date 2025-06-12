import React from 'react';

const Tooltip = ({ text, children }) => (
  <span style={{ position: 'relative', display: 'inline-block' }}>
    {children}
    <span style={{
      visibility: 'hidden',
      width: '120px',
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      borderRadius: '6px',
      padding: '5px 0',
      position: 'absolute',
      zIndex: 1,
      bottom: '125%',
      left: '50%',
      marginLeft: '-60px'
    }}>
      {text}
    </span>
  </span>
);

export default Tooltip;