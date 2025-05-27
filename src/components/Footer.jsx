import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 text-center md:text-left">&copy; {new Date().getFullYear()} Rizkyano. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="https://www.linkedin.com/in/rizkyano/" className="text-sm text-gray-600 hover:text-indigo-600 transition">
              LinkedIn
            </a>
            <a href="https://github.com/Rizkyano" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-indigo-600 transition">
              GitHub
            </a>
            <Link to="/about" className="text-sm text-gray-600 hover:text-indigo-600 transition">
              About
            </Link>
            <Link to="/contact" className="text-sm text-gray-600 hover:text-indigo-600 transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
