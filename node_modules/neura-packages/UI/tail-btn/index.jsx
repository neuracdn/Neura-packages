import React from 'react';

const Index = ({ children, className = '', text = 'Click Me', ...props }) => {
  return (
    <div className={`container-fluid flex items-center justify-center min-h-screen ${className}`} {...props}>
      <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        {text}
      </button>
    </div>
  );
};

export default Index;