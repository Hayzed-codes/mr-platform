import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-teal-500">Welcome Back</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
            <input id="email" name="email" type="email" required className="block w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500" placeholder="johndoe@example.com" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password *</label>
            <input id="password" name="password" type="password" required className="block w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500" placeholder="****************" />
            <a href="#" className="text-sm text-red-600 hover:underline">Forgot your password?</a>
          </div>
          <div>
            <button type="submit" className="w-full py-2 font-medium text-white bg-purple-500 rounded-md hover:bg-purple-700">Sign in</button>
          </div>
          <p className="text-sm text-center text-gray-600">Don&apos;t have an account? <Link to="/register" className="text-blue-600 hover:underline">Create an account</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
