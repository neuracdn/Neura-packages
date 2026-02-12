import React from 'react';
import './index.css';

const Index = ({ children, className = '', text = 'Discover More', ...props }) => {
  return (
    <div className={`button-container ${className}`} {...props}>
      <button className="modern-button">{children || text}</button>
    </div>
  );
};

export default Index;