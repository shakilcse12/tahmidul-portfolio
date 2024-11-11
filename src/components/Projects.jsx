import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A responsive e-commerce website built with React and Tailwind CSS.',
    image: 'https://via.placeholder.com/250',
    link: 'https://example.com/project1',
  },
  {
    title: 'Project Two',
    description: 'A chat application with real-time messaging and notifications.',
    image: 'https://via.placeholder.com/250',
    link: 'https://example.com/project2',
  },
  {
    title: 'Project Three',
    description: 'A chat application with real-time messaging and notifications.',
    image: 'https://via.placeholder.com/250',
    link: 'https://example.com/project2',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">Projects</h2>
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-600 hover:underline font-semibold"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
