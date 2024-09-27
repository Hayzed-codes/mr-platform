import React from 'react';

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-24 w-24 border-8 border-transparent border-t-teal-500 border-b-indigo-600 rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;
