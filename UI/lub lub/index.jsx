import React from 'react';
import './index.css';

const PricingTable = ({ className, header, price, features, button, ...props }) => {
  return (
    <div className={`pricing-table ${className}`} {...props}>
      <div className="header">
        <h2>{header}</h2>
      </div>
      <div className="price">{price}</div>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="button">{button}</button>
    </div>
  );
};

const Index = ({ children, className = "", ...props }) => {
  return (
    <div className={`container ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Index;