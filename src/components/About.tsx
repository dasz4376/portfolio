import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const skills = {
    languages: ['C++, C#', 'Lua, MySQL', 'Java, JavaScript', 'HTML, CSS, TypeScript', 'TailwindCSS'],
    tools: ['Microsoft SharePoint', 'Git & GitHub', 'Visual Studio Code', 'Microsoft Office Suite', 'React Framework']
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-20 text-left min-h-screen overflow-y-auto flex justify-center"
      style={{ paddingTop: '10rem' }}
    >
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 px-4">
        <motion.div 
          className="about-me bg-gray-800/80 p-8 rounded-2xl text-white shadow-2xl backdrop-blur-lg border border-gray-700/50"
          variants={itemVariants}
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.h2 
              className="text-5xl font-bold mb-4 gradient-text"
              variants={itemVariants}
            >
              Matthew Darabasz
            </motion.h2>
            <motion.h3 
              className="text-2xl font-bold text-primary inline-block relative"
              variants={itemVariants}
            >
              Chief Technology Officer | Full-Stack Developer
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-info opacity-50"></div>
            </motion.h3>
          </div>

          {/* Professional Summary */}
          <motion.div 
            className="mb-12 p-6 bg-gray-900/50 rounded-xl hover:shadow-glow transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-4 text-customTextColorHome">Professional Summary</h3>
            <p className="text-lg leading-relaxed">
              Chief Technology Officer at Paragon Wellness Center with expertise in full-stack development
              and IT infrastructure management. Experienced in leading technical initiatives and developing
              innovative solutions in healthcare technology.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            variants={itemVariants}
          >
            {/* Languages */}
            <div className="p-6 bg-gray-900/50 rounded-xl hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-customTextColorHome">Languages</h3>
              <div className="space-y-3">
                {skills.languages.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-gray-300 hover:text-white transition-colors">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="p-6 bg-gray-900/50 rounded-xl hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-customTextColorHome">Tools & Frameworks</h3>
              <div className="space-y-3">
                {skills.tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-info"></div>
                    <span className="text-gray-300 hover:text-white transition-colors">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div 
            className="mb-12 p-6 bg-gray-900/50 rounded-xl hover:shadow-glow transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-6 text-customTextColorHome">Professional Experience</h3>
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-primary">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl font-bold">Paragon Wellness Center</h4>
                <p className="text-info mb-2">Chief Technology Officer | Sep 2024 – Present</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Lead strategic and technical direction for healthcare technology initiatives</li>
                  <li>Oversee full-cycle development projects and IT infrastructure</li>
                  <li>Drive integration of third-party platforms and ensure security compliance</li>
                </ul>
              </div>

              <div className="relative pl-6 border-l-2 border-info">
                <div className="absolute w-4 h-4 bg-info rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl font-bold">FiveM</h4>
                <p className="text-primary mb-2">Full-Stack Developer | Dec 2022 – Sep 2023</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Developed applications using Lua, React, and TailwindCSS</li>
                  <li>Managed database integration and user interface design</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={itemVariants}
          >
            <div className="p-6 bg-gray-900/50 rounded-xl hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-customTextColorHome">Education</h3>
              <div className="space-y-4">
                <h4 className="text-lg font-bold">Purdue University</h4>
                <p className="text-info">West Lafayette, IN</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Associate of Applied Science in Information Technology</li>
                  <li>Pursuing BS in Information Technology</li>
                  <li>GPA: 3.5</li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-gray-900/50 rounded-xl hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-customTextColorHome">Certifications</h3>
              <ul className="space-y-3">
                {['Foundational C# Microsoft Certification', 'Responsive Web Development Certification', 'IT Fundamentals Micro-Credential'].map((cert, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <i className="fas fa-certificate text-primary"></i>
                    <span className="text-gray-300">{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
