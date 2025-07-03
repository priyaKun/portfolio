import React from 'react';

const Tooltip = ({ text, children }) => (
  <span style={styles.wrapper}>
    {children}
    <span style={styles.tooltip}>{text}</span>
  </span>
);

const styles = {
  wrapper: {
    position: 'relative',
    display: 'inline-block'
  },
  tooltip: {
    visibility: 'hidden',
    backgroundColor: '#1f2937', // slate-800
    color: '#fff',
    textAlign: 'center',
    borderRadius: '6px',
    padding: '6px 8px',
    position: 'absolute',
    zIndex: 1,
    bottom: '125%',
    left: '50%',
    transform: 'translateX(-50%)',
    whiteSpace: 'nowrap',
    fontSize: '0.875rem',
    opacity: 0,
    transition: 'opacity 0.3s',
    pointerEvents: 'none'
  }
};

// Inject hover logic via CSS (optional) or use styled-components or CSS modules
// For quick fix, wrap Tooltip in a class with :hover logic using real CSS

export default Tooltip;
