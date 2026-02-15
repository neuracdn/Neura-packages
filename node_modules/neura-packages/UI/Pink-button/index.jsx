import React from 'react';
import './index.css';

const Index = ({ className = '', children, text = 'Click me', src, ...props }) => {
  return (
    <button className={`organic-button ${className}`} {...props}>
      <span className="hand-drawn-icon"></span>
      {children || text}
    </button>
  );
};

export default Index;