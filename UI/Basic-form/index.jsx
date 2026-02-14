import React from 'react';

const Index = ({ children, className = '', label, text, placeholder, type, rows, ...props }) => {
  return (
    <div className={`container-fluid flex items-center justify-center min-h-screen p-4 ${className}`} {...props}>
      <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">{label || 'Contact Us'}</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-200" id="name" type="text" placeholder={placeholder || 'Your Name'} required={true} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-200" id="email" type="email" placeholder={placeholder || 'Your Email'} required={true} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-200" id="message" rows={rows || 4} placeholder={placeholder || 'Your Message'} required={true}></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-200" type="submit">{text || 'Send Message'}</button>
        </div>
      </form>
    </div>
  );
};

export default Index;