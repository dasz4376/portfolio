import React from 'react';
import { Link } from 'react-router-dom';
import symmetryPreview from '../assets/symmetry-preview.png';

const SymmetryEAPProject: React.FC = () => {
  return (
    <section className="min-h-screen flex justify-center items-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <div className="card card-hover p-8 text-white">
          {/* Project Title */}
          <h2 className="text-3xl font-bold mb-8"
              style={{ 
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
              }}>
            Symmetry EAP Website
          </h2>

          {/* Project Image */}
          <div className="p-1 rounded-lg mb-8">
            <div className="flex justify-center image-zoom">
              <img src={symmetryPreview} alt="Symmetry EAP Website" className="max-w-full h-auto" />
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-4 mb-8 text-gray-300">
            <p>
              I built the public website for <a className="underline text-[#9ca3af] hover:text-white" href="https://www.symmetryeap.org/" target="_blank" rel="noopener noreferrer">Symmetry EAP</a>, a healthcare-focused Employee Assistance Program. The site provides a clear overview of services, simple navigation for members and organizations, and direct access to support and contact options.
            </p>
            <p>
              The experience emphasizes clarity and accessibility with a modern visual design, responsive layouts, and performant media handling. Content is organized into service pages, program information, and member resources to reduce friction and improve discoverability.
            </p>
            <p>
              Tech highlights: React + TypeScript for component architecture, Tailwind CSS for design system and theming, and Framer Motion for subtle UI animations. The build is optimized for performance and SEO.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://www.symmetryeap.org/" 
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

export default SymmetryEAPProject;


