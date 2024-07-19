import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">
            <a href="#" className="text-teal-600">MR Platform</a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-800 hover:text-teal-600">Resources</a>
            <a href="#" className="text-gray-800 hover:text-teal-600">About</a>
            <a href="#" className="text-gray-800 hover:text-teal-600">Contact us</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to='/login' className="text-gray-800 hover:text-teal-600">Login</Link>
            <Link to='/register' className="px-4 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700">Sign up</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
