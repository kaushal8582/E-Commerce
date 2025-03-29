import React from 'react';
import { FaYoutube, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Big Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Easy Shop
          </h1>
          <p className="mt-3 text-gray-400 max-w-md mx-auto">
            Discover the perfect blend of style, quality, and affordability
          </p>
        </div>
        
        {/* Footer Links */}
        
        
        {/* Social Media Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaYoutube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaInstagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaLinkedinIn className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaGithub className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
          
          {/* Newsletter Signup */}
          
          
          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} ShopWave. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
