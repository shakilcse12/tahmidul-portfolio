import React from 'react';
import profileImage from "../assets/tahmidul.jpg"
import { Link } from 'react-scroll';
function Banner() {
  return (
    <section id="home" className="relative flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Profile Image */}
      

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center p-5 flex flex-col items-center">
      
        <img
          src={profileImage}
          alt="Profile"
          className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-indigo-400 shadow-lg"
        />
      
        <h1 className="text-5xl font-bold md:text-6xl">
          Hi, I'm <span className="text-yellow-400">Tahmidul</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          A passionate <span className="font-semibold text-yellow-400">Full-Stack Developer</span> with a knack for building efficient and visually stunning web applications.
        </p>
        <p className="mt-2 text-sm md:text-md">
          Crafting beautiful digital experiences to help you achieve your goals.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-6 py-3 text-lg font-semibold bg-yellow-400 text-black rounded-lg shadow-lg hover:bg-yellow-500 hover:shadow-xl transition duration-300 cursor-pointer"
          >
            View My Work
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-6 py-3 text-lg font-semibold bg-transparent border-2 border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black hover:shadow-xl transition duration-300 cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
