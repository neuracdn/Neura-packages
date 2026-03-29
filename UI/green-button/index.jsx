import React from 'react';
import './index.css';

const Index = ({ children, className = '', text = 'Click Me', ...props }) => {
  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rippleCircle = document.createElement('span');
    rippleCircle.className = 'ripple-circle';
    ripple.appendChild(rippleCircle);
    button.appendChild(ripple);
    const x = event.clientX - button.offsetLeft;
    const y = event.clientY - button.offsetTop;
    rippleCircle.style.top = `${y}px`;
    rippleCircle.style.left = `${x}px`;
    setTimeout(() => {
      ripple.remove();
    }, 1000);
  };

  return (
    <button className={`button ${className}`} onClick={createRipple} {...props}>
      {children || text}
    </button>
  );
};

export default Index;