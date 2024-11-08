import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [typedText, setTypedText] = useState('');
  const fullText = "Building innovative solutions across multiple industries";
  const [showHighlight, setShowHighlight] = useState(false);

  const [activeTab, setActiveTab] = useState('all');
  const [ref2] = useInView({ threshold: 0.1, triggerOnce: true });

  const highlights = [
    {
      icon: "fas fa-code",
      title: "Technical Leadership",
      description: "Leading development teams and architecting solutions across various industries, from healthcare to gaming.",
      tags: ["Team Leadership", "System Architecture", "Project Management", "Agile"]
    },
    {
      icon: "fas fa-desktop",
      title: "Full-Stack Development",
      description: "Creating scalable applications using modern frameworks and technologies for web, mobile, and desktop platforms.",
      tags: ["React", "TypeScript", "Node.js", "C#", "SQL", "Lua"]
    },
    {
      icon: "fas fa-gamepad",
      title: "Game Development",
      description: "Developing interactive experiences and custom systems for gaming platforms using modern engines and frameworks.",
      tags: ["FiveM", "Game Logic", "UI/UX", "Multiplayer Systems"]
    }
  ];

  const achievements = [
    {
      title: "Healthcare Technology Innovation",
      role: "Paragon Wellness Center",
      content: "Led development of integrated healthcare systems, improving patient care efficiency and data management.",
      icon: "fas fa-hospital-user"
    },
    {
      title: "Gaming Platform Development",
      role: "FiveM Development",
      content: "Architected and implemented custom gaming systems serving multiple concurrent users with real-time interactions.",
      icon: "fas fa-gamepad"
    }
  ];

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
        setShowHighlight(true);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: '4+', label: 'Years in Tech' },
    { number: '20+', label: 'Projects Completed' },
    { number: '10+', label: 'Technologies Mastered' },
    { number: '2+', label: 'Industries Served' }
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col items-center justify-center px-4 space-y-16 pt-20 md:pt-0"
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-8 animate-fadeIn">
            <motion.h1 
              className="text-4xl md:text-7xl font-bold animate-slideDown tracking-tight"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-clip-text text-white">
                Matthew Darabasz
              </span>
            </motion.h1>
            
            <div className="flex justify-center">
              <motion.div 
                className="w-48 h-1 bg-gradient-to-r from-primary to-purple rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "12rem" }}
                transition={{ duration: 1 }}
              />
            </div>
            
            <motion.div 
              className="space-y-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-customTextColorHome to-info bg-clip-text text-transparent">
                Chief Technology Officer
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 font-bold">
                Full-Stack Developer
              </p>
              <div className="h-16">
                <p className="text-lg text-gray-300">
                  {typedText}
                  <span className={`${showHighlight ? 'animate-pulse' : ''} inline-block w-0.5 h-5 bg-primary ml-1`}>|</span>
                </p>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4 glass-effect rounded-xl hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-3xl font-bold text-primary">{stat.number}</h3>
                  <p className="text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/about"
                className="px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/50 bg-gradient-to-r from-primary to-secondary relative overflow-hidden group"
              >
                <span className="relative z-10">View Experience</span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple/50 bg-gradient-to-r from-purple to-secondary relative overflow-hidden group"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="mt-12 flex justify-center gap-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a 
                href="mailto:mattdarabasz@gmail.com"
                className="text-white hover:text-primary transition-all duration-300 hover:scale-110 transform hover:-translate-y-1"
                title="Email"
              >
                <i className="fas fa-envelope text-3xl"></i>
              </a>
              <a 
                href="tel:215-303-7737"
                className="text-white hover:text-primary transition-all duration-300 hover:scale-110 transform hover:-translate-y-1"
                title="Phone"
              >
                <i className="fas fa-phone text-3xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/matthew-d-758a27168/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-all duration-300 hover:scale-110 transform hover:-translate-y-1"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin text-3xl"></i>
              </a>
              <a 
                href="https://github.com/dasz4376"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-all duration-300 hover:scale-110 transform hover:-translate-y-1"
                title="GitHub"
              >
                <i className="fab fa-github text-3xl"></i>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="text-white text-sm">
            Scroll Down
            <div className="mt-2">
              <i className="fas fa-chevron-down animate-bounce"></i>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* New content sections */}
      <motion.section 
        ref={ref2}
        className="min-h-screen py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Core Competencies */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Core Competencies
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="glass-effect p-6 rounded-xl hover:shadow-glow transition-all duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <i className={`${item.icon} text-4xl text-primary mb-4`}></i>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Professional Achievements
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="glass-effect p-6 rounded-xl relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <i className={`${achievement.icon} text-4xl text-primary mb-4`}></i>
                  <div>
                    <h4 className="text-white font-bold">{achievement.title}</h4>
                    <p className="text-gray-400 text-sm">{achievement.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{achievement.content}"</p>
                <div className="absolute -top-4 -left-4 text-4xl text-primary opacity-20">
                  <i className="fas fa-quote-left"></i>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-effect p-12 rounded-xl">
            <h2 className="text-3xl font-bold text-white mb-6">Looking for a Versatile Technical Leader?</h2>
            <p className="text-gray-300 mb-8">
              From healthcare systems to gaming platforms, I bring extensive experience in 
              building scalable solutions across multiple industries. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 
                  transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/50 
                  bg-gradient-to-r from-primary to-purple relative overflow-hidden group inline-block"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full 
                  group-hover:translate-x-full transition-transform duration-500" />
              </Link>
              <a
                href={process.env.PUBLIC_URL + '/Matthew R. Darabasz Resume.pdf'}
                download="Matthew_Darabasz_Resume.pdf"
                className="px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 
                  transform hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/50 
                  bg-gradient-to-r from-secondary to-info relative overflow-hidden group inline-block"
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full 
                  group-hover:translate-x-full transition-transform duration-500" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default Home;