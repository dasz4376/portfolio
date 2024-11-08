// Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import tunermenucamber from './tuner-menu-camber.png';
import paragonPreview from '../assets/paragon-preview.png';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex justify-center items-center px-4 py-20"
    >
      <div className="max-w-6xl w-full">
        <div className="bg-[#1f2937] p-8 rounded-lg text-white shadow-xl">
          {/* Header */}
          <h2 className="text-4xl font-bold mb-4"
              style={{ 
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
              }}>
            Projects
          </h2>
          
          <p className='text-gray-300 mb-8'>
            Click the "View Project" buttons below to see full project details
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Paragon Wellness Project */}
            <motion.div variants={itemVariants} className="bg-[#2d3748] p-6 rounded-lg hover-card">
              <div className="flex justify-center mb-6">
                <img 
                  src={paragonPreview}
                  alt="Paragon Wellness Website" 
                  className="rounded-lg shadow-md object-cover w-full h-64" 
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Paragon Wellness Center Website</h3>
                <Link 
                  to='/paragon-project' 
                  className="inline-block px-6 py-3 bg-[#6c63ff] text-white font-semibold rounded-md hover:bg-[#5b54d6] transition-colors duration-300"
                >
                  View Project
                </Link>
              </div>
            </motion.div>

            {/* FiveM Project */}
            <motion.div variants={itemVariants} className="bg-[#2d3748] p-6 rounded-lg hover-card">
              <div className="flex justify-center mb-6">
                <img 
                  src={tunermenucamber} 
                  alt="FiveM Project" 
                  className="rounded-lg shadow-md" 
                  style={{ width: '190px', height: '380px' }}
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">FiveM Vehicle Tuning Interface</h3>
                <Link 
                  to='/project1' 
                  className="inline-block px-6 py-3 bg-[#6c63ff] text-white font-semibold rounded-md hover:bg-[#5b54d6] transition-colors duration-300"
                >
                  View Project
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Portfolio Repository Link */}
          <div className="text-center border-t border-gray-600 pt-8">
            <p className='font-semibold mb-4'>
              View the repository for this Website Portfolio
            </p>
            <a 
              href="https://github.com/dasz4376/portfolio" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#6c63ff] text-white font-semibold rounded-md hover:bg-[#5b54d6] transition-colors duration-300"
            >
              View Repository
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
