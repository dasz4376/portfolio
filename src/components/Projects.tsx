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
        duration: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen pt-24 pb-12 px-4 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my portfolio of web applications and development projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Paragon Website Project */}
          <motion.div 
            variants={itemVariants} 
            className="group glass-effect p-6 rounded-xl hover:bg-primary/5 transition-all duration-300"
          >
            <Link to="/project2" className="block">
              <div className="flex justify-center mb-6">
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 to-slate-800/30 z-10"></div>
                  <img 
                    src={paragonPreview}
                    alt="Paragon Website" 
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]" 
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Paragon Website</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-base">A modern, responsive website built with React and TypeScript</p>
                <span 
                  className="inline-block px-6 py-3 bg-primary/80 text-white font-medium rounded-lg hover:bg-primary transition-all duration-300"
                >
                  View Project
                </span>
              </div>
            </Link>
          </motion.div>

          {/* FiveM Project */}
          <motion.div 
            variants={itemVariants} 
            className="group glass-effect p-6 rounded-xl hover:bg-primary/5 transition-all duration-300"
          >
            <Link to="/project1" className="block">
              <div className="flex justify-center mb-6">
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 to-slate-800/30 z-10"></div>
                  <img 
                    src={tunermenucamber}
                    alt="FiveM Project" 
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]" 
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">FiveM Vehicle Tuning</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-base">A custom UI for vehicle tuning in FiveM servers</p>
                <span 
                  className="inline-block px-6 py-3 bg-primary/80 text-white font-medium rounded-lg hover:bg-primary transition-all duration-300"
                >
                  View Project
                </span>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Portfolio Repository Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center border-t border-slate-700/20 pt-8"
        >
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
            View the repository for this Website Portfolio
          </p>
          <a 
            href="https://github.com/dasz4376/portfolio" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary/80 text-white font-medium rounded-lg hover:bg-primary transition-all duration-300"
          >
            View Repository
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;
