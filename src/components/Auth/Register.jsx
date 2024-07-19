import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-100  ">
      <div className=" min-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
        <h2 className="text-center	text-teal-500 text-xl	font-bold	">
          Get Started with us Today!
        </h2>
        <p className="text-center	text-teal-500 text-sm">
          You are just a few clicks away from turning your community into a
          growth engine.
        </p>

        <form className=" flex flex-col space-y-8 ">
          <div className="flex-col">
            <label htmlFor="firstname" className="text-sm font-medium text-gray-700">First name *</label>
            <input type="text" required placeholder="John" className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:border-teal-500" />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</label>
            <input type="email" required placeholder="johndoe@gmail.com" className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:border-teal-500"/>
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700"> Password *</label>
            <input type="password" required placeholder="**********" className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:border-teal-500"/>
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Confirm password *</label>
            <input type="password" required placeholder="**********" className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:border-teal-500"/>
          </div>
        </form>
        <div>
        <button type="submit" className="mt-1  w-full font-medium py-2 text-white bg-purple-500 rounded-md hover:bg-purple-700">Create an account</button>
        </div>
        
        <p className="text-sm text-center text-gray-600">Already have an account? <Link to='/login' className="text-blue-600 hover:underline">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
