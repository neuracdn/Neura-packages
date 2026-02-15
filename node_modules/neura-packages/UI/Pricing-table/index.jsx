import React from 'react';
import './index.css';

const PricingCard = ({ plan, price, features, children, className = '', ...props }) => {
  return (
    <div className={`pricing-card ${className}`} {...props}>
      <h3>{plan}</h3>
      <p className='price'>{price}</p>
      <ul className='features'>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      {children}
    </div>
  );
};

const Index = ({ children, className = '', ...props }) => {
  return (
    <div className={`pricing-table ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Index;