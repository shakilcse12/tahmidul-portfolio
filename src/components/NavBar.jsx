import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from '../assets/logos-food3.jpeg';
import { ROUTES } from '../routes';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo and Site Name */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <NavLink to={ROUTES.HOME} className="ml-2 text-2xl font-bold">
              Tahmidul <span className="text-blue-500">Shakil</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            <NavLink to={ROUTES.HOME} className="text-gray-700 hover:text-blue-500">Home</NavLink>
            <NavLink to={ROUTES.PROJECT} className="text-gray-700 hover:text-blue-500">Projects</NavLink>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <HiX className="text-2xl" />
              ) : (
                <HiMenuAlt3 className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <NavLink
              to={ROUTES.HOME}
              className="text-gray-700 hover:text-blue-500"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to={ROUTES.PROJECT}
              className="text-gray-700 hover:text-blue-500"
              onClick={toggleMenu}
            >
              Projects
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
