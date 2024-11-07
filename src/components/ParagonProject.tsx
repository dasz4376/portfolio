import React from 'react';
import { Link } from 'react-router-dom';
import paragonPreview from '../assets/paragon-preview.png';

const ParagonProject: React.FC = () => {
  return (
    <section className="min-h-screen flex justify-center items-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <div className="bg-[#1f2937] p-8 rounded-lg text-white shadow-xl">
          {/* Project Title */}
          <h2 className="text-3xl font-bold mb-8"
              style={{ 
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
              }}>
            Paragon Wellness Center Website
          </h2>

          {/* Project Image */}
          <div className="bg-[#2d3748] p-6 rounded-lg shadow-lg mb-8">
            <div className="flex justify-center">
              <img 
                src={paragonPreview}
                alt="Paragon Wellness Website" 
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-4 mb-8 text-gray-300">
            <p>
              As the Chief Technology Officer at Paragon Wellness Center, I developed their official website
              from scratch. The website serves as a comprehensive platform for the medical and behavioral
              health organization, showcasing their services and providing essential information to clients.
            </p>
            <p>
              Built using modern web technologies, the site features a clean, professional design that
              emphasizes user experience and accessibility. It includes various functionalities such as
              service information, contact forms, and an EAP member portal.
            </p>
            <p>
              The website maintains HIPAA compliance while providing a seamless experience for both
              patients and healthcare providers.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://paragonwellness.org" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#6c63ff] text-white font-semibold rounded-md hover:bg-[#5b54d6] transition-colors duration-300"
            >
              Visit Website
            </a>
            <Link 
              to='/projects'
              className="px-6 py-3 bg-[#4a5568] text-white font-semibold rounded-md hover:bg-[#2d3748] transition-colors duration-300"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParagonProject; 