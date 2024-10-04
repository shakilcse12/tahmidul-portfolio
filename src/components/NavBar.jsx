import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { ROUTES } from "../routes";
import logo from '../assets/logos-food3.jpeg';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white-500 p-4 shadow-md z-10 relative">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:px-8">
        {/* Brand Name */}
        <div className="w-full lg:w-1/2 flex item-center">
        <img 
    src={logo}  // Replace with your actual logo path
    alt="Logo"
    className="w-10 h-10 mr-3"
  />
          <NavLink to={ROUTES.HOME} className="text-2xl font-bold">
            LearnWith<span className="text-blue-500">Tahmid</span>
          </NavLink>

          {/* Hamburger Icon for Small Screens */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <HiX className="text-2xl" />
              ) : (
                <HiMenuAlt3 className="text-2xl" />
              )}
            </button>
          </div>
        </div>
        {/* Menu Items */}
        <div className={`w-full lg:w-1/2 ${isOpen ? "block" : "hidden"} lg:block lg:flex items-center justify-between border shadow-md lg:border-none lg:shadow-none`}>
          <ul
            className={`lg:flex flex-col lg:flex-row lg:space-x-12 justify-between lg:-ml-16 ${
              isOpen ? "block" : "hidden"
            } lg:block lg:static w-full lg:w-auto bg-white lg:bg-transparent space-y-4 lg:space-y-0 py-4 lg:py-0`}
          >
            <li>
              <NavLink
                exact="true"
                to={ROUTES.HOME}
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ROUTES.PRODUCT}
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-600"
                }
              >
                Product
              </NavLink>
            </li>
          </ul>

          {/* Buttons (stacked below menu items in mobile, side by side in large screens) */}
          <div
            className={`flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 ${
              isOpen ? "block" : "hidden"
            } lg:block lg:static top-auto left-0 w-full lg:w-auto bg-white py-4 lg:py-0 flex items-center`}
          >
            <button className="px-4 py-2 bg-blue-500 text-white rounded w-3/4 lg:w-auto">
              Login
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded w-3/4 lg:w-auto">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
