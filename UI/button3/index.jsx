import React from 'react';
import './index.css';

const Index = ({ children, className = '', text = 'Click Me', ...props }) => {
  return (
    <button className={`neo-brutalism-btn ${className}`} {...props}>{children || text}</button>
  );
};

export default Index;