import React from 'react';

function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-100 text-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-indigo-600 mb-8">About Me</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          I'm Tahmidul Shakil, a full-stack developer with over 3+ years of experience delivering high-quality solutions for global clients. Passionate about creating efficient and visually stunning applications.
        </p>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          {/* Years of Experience */}
          <div className="flex flex-col items-center p-6 bg-indigo-600 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-5xl font-extrabold">+3</p>
            <p className="text-lg mt-2 uppercase tracking-wide font-semibold">Years of<br />Experience</p>
          </div>

          {/* Projects Completed */}
          <div className="flex flex-col items-center p-6 bg-yellow-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-5xl font-extrabold">+10</p>
            <p className="text-lg mt-2 uppercase tracking-wide font-semibold">Projects<br />Completed</p>
          </div>

          {/* Worldwide Clients */}
          <div className="flex flex-col items-center p-6 bg-purple-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-5xl font-extrabold">+5</p>
            <p className="text-lg mt-2 uppercase tracking-wide font-semibold">Worldwide<br />Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
