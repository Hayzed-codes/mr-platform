import React from 'react';
import { useLocation } from 'react-router-dom';

const Registration = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const role = query.get('role'); // Get the role from the URL

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        {role === 'admin' ? 'Admin Registration' : 'User Registration'}
      </h2>
      {/* Registration form goes here */}
    </div>
  );
};

export default Registration;
