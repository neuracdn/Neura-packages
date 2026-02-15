import React from 'react';
import './index.css';

const Index = ({ className = '', children, title = 'Contact Us', ...props }) => {
  return (
    <div className={`contact-form ${className}`} {...props}>
      <h2>{title}</h2>
      <input type='text' placeholder='Full Name' required />
      <input type='email' placeholder='Email' required />
      <input type='tel' placeholder='Phone Number (optional)' />
      <textarea rows='4' placeholder='Message' required></textarea>
      <button type='submit'>Submit</button>
      {children}
    </div>
  );
};

export default Index;