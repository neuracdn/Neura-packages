import React from 'react';
import './index.css';

const Index = ({ className, children, title = 'Futuristic Card', content = 'This is a card with glassmorphism effect and a neo-brutalism vibe.', buttonLabel = 'Learn More', ...props }) => {
  return (
    <div className={`main-container ${className}`} {...props}>
      <div className="card">
        <div className="card-title">{title}</div>
        <div className="card-content">{content}</div>
        <button className="card-button">{buttonLabel}</button>
      </div>
    </div>
  );
};

export default Index;