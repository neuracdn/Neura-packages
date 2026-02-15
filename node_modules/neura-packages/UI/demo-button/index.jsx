import React from 'react';
import './index.css';

const Index = ({ children, className = '', ...props }) => {
  return (
    <button className={`neo-button ${className}`} {...props}>{children || 'Click Me'}</button>
  );
};

export default Index;