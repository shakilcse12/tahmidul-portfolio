import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Make sure to install react-scroll with 'npm install react-scroll'
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logos-food3.jpeg'; // Replace this with the path to your logo

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-2xl font-bold text-indigo-600">Tahmidul Shakil</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-indigo-600 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-indigo-600 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-indigo-600 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-indigo-600 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-indigo-600 cursor-pointer"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-indigo-600 cursor-pointer"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-indigo-600 cursor-pointer"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-indigo-600 cursor-pointer"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-indigo-600 cursor-pointer"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-indigo-600 cursor-pointer"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
