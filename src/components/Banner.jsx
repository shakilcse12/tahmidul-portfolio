import React from 'react';

function Banner() {
  return (
    <section id="home" className="relative flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center p-5">
        <h1 className="text-5xl font-bold md:text-6xl">
          Hi, I'm <span className="text-yellow-400">Tahmidul Shakil</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          A passionate <span className="font-semibold text-yellow-400">Full-Stack Developer</span> with a knack for building efficient and visually stunning web applications.
        </p>
        <p className="mt-2 text-sm md:text-md">
          Crafting beautiful digital experiences to help you achieve your goals.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 text-lg font-semibold bg-yellow-400 text-black rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-lg font-semibold bg-transparent border-2 border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
