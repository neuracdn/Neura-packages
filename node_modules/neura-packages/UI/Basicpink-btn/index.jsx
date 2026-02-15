import React from 'react';
import './index.css';

const Index = ({ children, className = '', text = 'Click Me', icon = '✓', ...props }) => {
  return (
    <button className={`organic-button ${className}`} {...props}>
      <span className="icon">{icon}</span>
      {text}
    </button>
  );
};

const Blob = ({ className = '', ...props }) => {
  return <div className={`blob ${className}`} {...props} />;
};

export { Index, Blob };