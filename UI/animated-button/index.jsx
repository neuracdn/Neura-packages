import React from 'react';

const Index = ({ children, className = '', text = 'Click Me', ...props }) => {
  return (
    <div className={`flex items-center justify-center h-screen ${className}`} {...props}>
      <button className='neobrutalism bg-blue-500 text-white px-6 py-3 font-bold text-lg'>{text}</button>
    </div>
  );
};

export default Index;