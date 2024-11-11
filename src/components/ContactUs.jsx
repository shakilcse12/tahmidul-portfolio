import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section id="contact" className="py-16 bg-white-50">
      <div className="container mx-auto px-6 lg:px-12">
        
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 text-center mb-8">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10">
          
          {/* Contact Form */}
          <form className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex flex-col items-center space-y-4">
            <p className="text-gray-700 text-center mb-4">Or reach out through my social profiles:</p>
            
            <div className="flex space-x-6 text-indigo-600 text-3xl">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-700">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-700">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-700">
                <FaTwitter />
              </a>
              <a href="mailto:yourname@example.com" className="hover:text-indigo-700">
                <FaEnvelope />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
