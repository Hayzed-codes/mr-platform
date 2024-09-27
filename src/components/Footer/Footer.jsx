import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-500 via-indigo-600 to-purple-700 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to='/' className="hover:underline">Home</Link></li>
            <li><Link to='/resource' className="hover:underline">Resource</Link></li>
            <li><Link to='/about' className="hover:underline">About</Link></li>
            <li><Link to='/contact' className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Connect</h4>
          <ul className="space-y-2">
            <li><Link to='' className="hover:underline">Twitter</Link></li>
            <li><Link to='' className="hover:underline">LinkedIn</Link></li>
            <li><Link to='' className="hover:underline">Instagram</Link></li>
            <li><Link to='' className="hover:underline">Facebook</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p>© 2024 Boostify, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
