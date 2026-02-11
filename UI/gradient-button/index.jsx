import React from 'react';
import './index.css';

const Index = ({ children, className = '', text = 'Click Me', ...props }) => {
  return (
    <div className={`main-container ${className}`} {...props}>
      <button className="cyberpunk-button">
        <span>{text}</span>
      </button>
      {children}
    </div>
  );
};

export default Index;