import React from 'react';
import './index.css';

const Index = ({ children, className = '', ...props }) => {
  return (
    <div className={`main-container ${className}`} {...props}>
      {children || <button className="playful-button">Click Me!</button>}
    </div>
  );
};

export default Index;