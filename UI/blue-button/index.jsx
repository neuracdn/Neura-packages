import React from 'react';
import './index.css';

const Index = ({ children, className = "", ...props }) => {
  return (
    <button className={`premium-button ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Index;