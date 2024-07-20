import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" bg-teal-600 text-white text-lg">
      <div className="container mx-auto px-6 py-16">
        <div className="flex -mx-6">
          <div className="w-full md:w-1/3 px-6 mb-6 md:mb-0 ">
            <h3 className="text-lg font-bold mb-12">MR Platform</h3>
            <p>© 2024 My Platform, Inc.</p>
            <p>All rights reserved!</p>
          </div>
          <div className="w-full md:w-1/3 px-6 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul>
              <li><Link to='/' className="hover:underline">Home</Link></li>
              <li><Link to='/resource' className="hover:underline">Resource</Link></li>
              <li><Link to='/about' className="hover:underline">About</Link></li>
              <li><Link to='/contact' className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-6">
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-6">
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <ul>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
