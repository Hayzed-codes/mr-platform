import React, { useContext } from 'react';
import { UserContext } from '../../../context/useContext';

const Header = () => {
  const { user } = useContext(UserContext); 

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-4">
        {user && user.name ? ( 
          <>
            <img 
              src="Hayzed.jpg" 
              alt="User" 
              className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
            />
            <span className="bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-teal-500 transition duration-300 ease-in-out">
              Hello, {user.name} 👋 
            </span>
          </>
        ) : (
          <span className="bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-500 transition duration-300 ease-in-out">
            Guest 🤗 
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
