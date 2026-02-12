import React from 'react';
import './index.css';

const Index = ({ className = '', children, text = 'Download', ...props }) => {
  return (
    <div className={`download-button ${className}`} {...props}>
      <div className="icon"></div>
      <div className="text">{children || text}</div>
    </div>
  );
};

export default Index;