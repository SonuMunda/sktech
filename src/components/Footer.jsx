import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-around items-center px-4">
        {/* Left Side: Logo and Copyright */}
        <div className="flex items-center space-x-2">
        <div className="text-2xl font-bold">
              <span className="text-blue-500">e</span>ceans edge
            </div>
          <p className="text-sm">
            Copyright © 2012. <span className="font-semibold">Oceans' Edge, Inc.</span>, All Rights Reserved
          </p>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About Us</a>
          <a href="#" className="hover:text-gray-300">Solutions</a>
          <a href="#" className="hover:text-gray-300">Mobile Applications</a>
          <a href="#" className="hover:text-gray-300">Careers</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
