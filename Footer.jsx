import React from 'react';

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
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Resources</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
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
