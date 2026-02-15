import React from 'react';
import './index.css';

const Index = ({ children, className = '', text = 'Click me', ...props }) => {
  return (
    <button className={`button ${className}`} {...props}>{children || text}</button>
  );
};

export default Index;