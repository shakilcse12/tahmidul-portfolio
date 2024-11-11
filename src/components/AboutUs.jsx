import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          {/* Profile Image */}
          <img 
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" 
            alt="Profile" 
            className="rounded-lg w-40 h-40 md:w-64 md:h-64 shadow-lg mb-6 md:mb-0"
          />

          {/* About Me Text */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Hello! I’m <span className="font-semibold text-indigo-600">Tahmidul Shakil</span>, a passionate web developer with experience in building dynamic and responsive websites. I specialize in using modern web technologies like <span className="font-semibold">React, Node.js,</span> and <span className="font-semibold">MongoDB</span> to create user-centric solutions.
            </p>
            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              I’m constantly learning and improving my skills, with a particular focus on creating seamless user experiences and efficient, clean code. When I’m not coding, you’ll likely find me exploring new tech trends or working on personal projects to further hone my expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
