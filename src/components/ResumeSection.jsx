import React from 'react';
import resume from '../assets/tahmidul.pdf'; // If hosted locally in your public folder

const ResumeSection = () => {
  return (
    <section id="resume" className="my-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <p className="text-lg mb-6">Download my resume or view it online.</p>
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        // download="YourName_Resume.pdf"
        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Download/View Resume
      </a>
    </section>
  );
};

export default ResumeSection;
