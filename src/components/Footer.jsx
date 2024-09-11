import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <div className="text-3xl font-bold mb-2">
            <span className="text-blue-400">sk</span>tech
          </div>
          <p className="text-sm text-gray-300">
            Copyright © 2012. <span className="font-semibold">SK Teck, Inc.</span> All Rights Reserved
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <Link to="/" className="hover:text-gray-400 transition-colors duration-300">Home</Link>
          <Link to="/about" className="hover:text-gray-400 transition-colors duration-300">About Us</Link>
          <Link to="/solutions" className="hover:text-gray-400 transition-colors duration-300">Solutions</Link>
          <Link to="/mobile-applications" className="hover:text-gray-400 transition-colors duration-300">Mobile Applications</Link>
          <Link to="/careers" className="hover:text-gray-400 transition-colors duration-300">Careers</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
