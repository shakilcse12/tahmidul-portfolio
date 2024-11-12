import React from 'react';
import project1 from "../assets/learnwithtahmid.png";
import project2 from "../assets/foodies-p2.png";
import project3 from "../assets/rokomari.png";
import project4 from "../assets/mysnaps.png";
import project5 from "../assets/discoverbd.png";
const projects = [
  {
    title: 'Learn With Tahmid',
    description: 'Learn with Tahmid is an interactive platform offering a wide range of web and app development courses. Users can easily browse and purchase courses from various categories. With a seamless social login system, users can register and sign in using Google, Facebook, or GitHub. The site features an admin dashboard for managing user roles, adding categories and courses, and updating user profiles. Users can track their purchased courses and payment history, as well as update their personal profiles. Built using the MERN stack and styled with Tailwind CSS, Learn with Tahmid provides a modern and intuitive learning experience.',
    image: project1,
    link: 'https://react-product-frontend.web.app/',
  },
  {
    title: 'Foodies Paradise',
    description: 'A responsive website for a famous restaurant built with React and Tailwind CSS .This project is a dynamic, user-friendly website designed for a restaurant, offering a seamless browsing experience for food enthusiasts. The website features a full menu display where users can explore a variety of dishes and filter by categories to find specific items quickly.',
    image: project2,
    link: 'https://shakilcse12.github.io/Food-Website/',
  },
  {
    title: 'Rokomari Bookshop',
    description: 'A responsive e-commerce website built with React and Tailwind CSS.Rokomari Bookshop is an engaging online platform that brings the joy of book shopping to users’ fingertips. This website allows users to browse a vast selection of book categories, explore their favorite genres, and discover new titles',
    image: project3,
    link: 'https://kaleidoscopic-chebakia-1f824f.netlify.app/',
  },

  {
    title: 'MySnaps',
    description: 'An android app where users can learn the art of photography. Users can read articles, uplaod photos and participate in photo contests as well.',
    image: project4,
    link: 'https://drive.google.com/file/d/1-xvTotqRioCjATEBTXLu4pdySRmaF34x/view?usp=sharing',
  },
  {
    title: 'Discover Bangladesh',
    description: 'An android app developed for Robi Axiata ltd where users can learn find different tourist attractions which are usually not famous.',
    image: project5,
    link: 'https://drive.google.com/file/d/1qzC8H7o-AJ6Os66qPsmdh2-2u_dZkuQy/view?usp=sharing',
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
