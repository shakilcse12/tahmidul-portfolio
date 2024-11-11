import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa'; 
import { SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact size={40} className="text-blue-500" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-600" /> },
  { name: 'Express', icon: <SiExpress size={40} className="text-gray-800" /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-500" /> },
  { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-600" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJsSquare size={40} className="text-yellow-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-blue-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={40} className="text-black" /> },
  { name: 'Databases', icon: <FaDatabase size={40} className="text-purple-600" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-8">Skills</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
