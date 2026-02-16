import React from 'react';
import './index.css';

const Index = ({ className = '', children, title = 'Contact', ...props }) => {
  return (
    <div className={`contact-form ${className}`} {...props}>
      <h2>{title}</h2>
      <input type="text" placeholder="Full Name" required={true} />
      <input type="email" placeholder="Email" required={true} />
      <input type="tel" placeholder="Phone Number (optional)" />
      <textarea rows="4" placeholder="Message" required={true} />
      <button type="submit">Submit</button>
      {children}
    </div>
  );
};

export default Index;