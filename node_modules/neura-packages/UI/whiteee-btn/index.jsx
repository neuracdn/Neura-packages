import React from 'react';
import './index.css';

const Index = ({ children, className = '', text = 'Click Me', ...props }) => {
  return (
    <div className={`main-container ${className}`} {...props}>
      <button className='button'>{text}</button>
      {children}
    </div>
  );
};

export default Index;