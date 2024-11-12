import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Logo and Brief Intro */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-4 md:mb-0">Tahmidul's Portfolio</h3>
          <p className="text-center md:text-left text-gray-400 max-w-md">
            A passionate developer ready to bring your ideas to life. Let’s connect and create something amazing together!
          </p>
        </div>
        
        {/* Links and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          
          {/* Navigation Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4 text-gray-400 text-2xl">
            <a href="https://github.com/shakilcse12" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/tahmidul-shakil-8aa5b1b9" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/tahmidul_shakil" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="mailto:tahmidul.work@gmail.com" className="hover:text-white">
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Tahmidul Shakil. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
