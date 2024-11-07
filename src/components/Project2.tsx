// Project2.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Project2: React.FC = () => {
  return (
    <section className="min-h-screen flex justify-center items-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <div className="bg-[#1f2937] p-8 rounded-lg text-white shadow-xl">
          {/* Project Title */}
          <h2 className="text-3xl font-bold mb-8"
              style={{ 
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
              }}>
            Project 2
          </h2>

          {/* Project Image */}
          <div className="bg-[#2d3748] p-6 rounded-lg shadow-lg mb-8">
            <div className="flex justify-center">
              <img 
                src="https://via.placeholder.com/300" 
                alt="Project 2" 
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-4 mb-8 text-gray-300">
            <p>Project 2 description...</p>
          </div>

          {/* Button */}
          <div className="flex justify-center">
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

export default Project2;
