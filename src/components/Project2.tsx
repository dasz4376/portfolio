// Project2.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import paragonPreview from '../assets/paragon-preview.png';

const Project2: React.FC = () => {
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
        <div className="glass-effect rounded-xl p-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold dark:text-white text-gray-900 mb-4">
              Paragon Website
            </h2>
            <p className="dark:text-gray-300 text-gray-600 text-lg max-w-2xl mx-auto">
              A modern, responsive website built with React and TypeScript
            </p>
          </motion.div>

          {/* Project Image */}
          <motion.div
            variants={itemVariants}
            className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 to-slate-800/30 z-10"></div>
            <img 
              src={paragonPreview}
              alt="Paragon Website Preview" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-3">Project Overview</h3>
                <p className="dark:text-gray-300 text-gray-600 text-base leading-relaxed">
                  A modern website built for Paragon, featuring a clean and professional design. The site showcases services, features, and information in an engaging and user-friendly way.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-primary mt-1"></i>
                    <span className="dark:text-gray-300 text-gray-600 text-base">Responsive design for all devices</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-primary mt-1"></i>
                    <span className="dark:text-gray-300 text-gray-600 text-base">Modern UI with smooth animations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-primary mt-1"></i>
                    <span className="dark:text-gray-300 text-gray-600 text-base">Optimized performance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-primary mt-1"></i>
                    <span className="dark:text-gray-300 text-gray-600 text-base">SEO-friendly structure</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-3">Technologies Used</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-effect p-4 rounded-lg">
                    <h4 className="dark:text-white text-gray-900 font-medium mb-2">Frontend</h4>
                    <ul className="space-y-1 dark:text-gray-300 text-gray-600 text-sm">
                      <li>React</li>
                      <li>TypeScript</li>
                      <li>TailwindCSS</li>
                      <li>Framer Motion</li>
                    </ul>
                  </div>
                  <div className="glass-effect p-4 rounded-lg">
                    <h4 className="dark:text-white text-gray-900 font-medium mb-2">Development</h4>
                    <ul className="space-y-1 dark:text-gray-300 text-gray-600 text-sm">
                      <li>Git</li>
                      <li>VS Code</li>
                      <li>Vercel</li>
                      <li>ESLint</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-3">Project Links</h3>
                <div className="space-y-3">
                  <a
                    href="https://paragonwellness.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg glass-effect hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <i className="fas fa-globe text-xl text-primary mr-3"></i>
                    <div>
                      <h4 className="dark:text-white text-gray-900 font-medium">Live Website</h4>
                      <p className="dark:text-gray-300 text-gray-600 text-sm">Visit the website</p>
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

export default Project2;
