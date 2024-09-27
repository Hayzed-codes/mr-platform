import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [role, setRole] = useState('user'); // Default role is 'user'

  const handleRoleChange = (event) => {
    setRole(event.target.value); // Update the role based on selection
  };

  return (
    <header className="bg-gradient-to-r from-teal-500 via-indigo-600 to-purple-700 text-white shadow-xl py-5 border-b-4 border-indigo-300">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-white">
          <Link to="/" className="hover:text-teal-200 transition duration-300">
            Boostify
          </Link>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/resources" 
            className="hover:bg-white hover:text-teal-600 px-4 py-2 rounded transition duration-300"
          >
            Resources
          </Link>
          <Link 
            to="/about" 
            className="hover:bg-white hover:text-teal-600 px-4 py-2 rounded transition duration-300"
          >
            About us
          </Link>
          <Link 
            to="/contact" 
            className="hover:bg-white hover:text-teal-600 px-4 py-2 rounded transition duration-300"
          >
            Contact us
          </Link>
        </div>
        
        {/* Role Selection and Login Button */}
        <div className="hidden md:flex items-center space-x-4">
          <select
            value={role}
            onChange={handleRoleChange}
            className="bg-white text-teal-600 p-2 rounded-md shadow-md focus:outline-none"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <Link 
            to={role === 'admin' ? "/login" : "/user-log"} // Adjust the link based on the selected role
            className="px-6 py-2 bg-white text-teal-600 font-semibold rounded-md shadow-lg hover:bg-teal-700 hover:text-white transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
