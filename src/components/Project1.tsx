import React from 'react';
import { Link } from 'react-router-dom';
import Camber from './Camber'; // Import the Camber component
import PresetsTab from './Presets'; // Import the Presets component


const Project1: React.FC = () => {
  return (
    <section className="min-h-screen flex justify-center items-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <div className="bg-[#1f2937] p-8 rounded-lg text-white shadow-xl">
          {/* Project Title */}
          <h2 className="text-3xl font-bold mb-8"
              style={{ 
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
              }}>
            FiveM Vehicle Tuning Interface
          </h2>

          {/* Interactive Demo */}
          <div className="bg-[#2d3748] p-6 rounded-lg shadow-lg mb-8">
            <div className="flex justify-center mb-6">
              <Camber />
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-4 mb-8 text-gray-300">
            <p>
              The project displayed is an NUI that I have created for FiveM. It is a fully
              responsive application developed in React with TypeScript and TailwindCSS
              that is meant to alter changes to individual player's vehicles within the parent
              application.
            </p>
            <p>
              It is fully developed in the back-end, which is developed in Lua on
              both the client and server side. It also has a database that I have created in MySQL.
            </p>
            <p className="text-white font-semibold">
              View the full repository below and play around with it above! 😄
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://github.com/MatthewD24/tuning-menu/tree/main/tuner-menu" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#6c63ff] text-white font-semibold rounded-md hover:bg-[#5b54d6] transition-colors duration-300"
            >
              View Repository
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

export default Project1;
