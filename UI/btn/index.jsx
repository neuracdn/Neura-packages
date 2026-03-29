import React from 'react';
import './index.css';

const Index = ({ children, className = '', text = 'Click Mew', ...props }) => {
  return (
    <button className={`animated-button ${className}`} {...props}>{text || children}</button>
  );
};

export default Index;