import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import symmetryPreview from '../assets/symmetry-preview.png';

const PortfolioProject: React.FC = () => {
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
      className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-b from-slate-900/95 to-slate-800/90"
    >
      <div className="max-w-6xl mx-auto">
        <div className="card card-hover p-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Portfolio Website
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A modern, responsive portfolio built with React and TypeScript
            </p>
          </motion.div>

          {/* Project Image */}
          <motion.div variants={itemVariants} className="relative w-full h-[400px] image-zoom mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 to-slate-800/30 z-10"></div>
            <img 
              src={symmetryPreview}
              alt="Portfolio Website Preview" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Project Overview</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  This portfolio website showcases my skills and projects in a modern, interactive way. Built with React and TypeScript, it features smooth animations, responsive design, and a clean user interface.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-primary mt-1"></i>
                    <span className="text-gray-300 text-base">Responsive design that works on all devices</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-primary mt-1"></i>
                    <span className="text-gray-300 text-base">Smooth animations and transitions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-primary mt-1"></i>
                    <span className="text-gray-300 text-base">Modern glass-morphism design</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-primary mt-1"></i>
                    <span className="text-gray-300 text-base">Interactive project showcase</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Technologies Used</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/20 p-4 rounded-lg">
                    <h4 className="text-white font-medium mb-2">Frontend</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>React</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                      <li>Framer Motion</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/20 p-4 rounded-lg">
                    <h4 className="text-white font-medium mb-2">Development</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>Vite</li>
                      <li>Git</li>
                      <li>VS Code</li>
                      <li>Chrome DevTools</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Project Links</h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/dasz4376/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg bg-slate-800/20 hover:bg-slate-700/20 transition-all duration-300 group"
                  >
                    <i className="fab fa-github text-xl text-primary mr-3"></i>
                    <div>
                      <h4 className="text-white font-medium">GitHub Repository</h4>
                      <p className="text-gray-300 text-sm">View the source code</p>
                    </div>
                  </a>
                  <a
                    href="https://matthewdarabasz.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg bg-slate-800/20 hover:bg-slate-700/20 transition-all duration-300 group"
                  >
                    <i className="fas fa-globe text-xl text-primary mr-3"></i>
                    <div>
                      <h4 className="text-white font-medium">Live Website</h4>
                      <p className="text-gray-300 text-sm">Visit the deployed site</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8"
          >
            <Link
              to="/projects"
              className="inline-block px-6 py-3 bg-primary/80 text-white font-medium rounded-lg hover:bg-primary transition-all duration-300"
            >
              Back to Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioProject; 