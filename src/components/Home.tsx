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
  const fullText = "Transforming Healthcare Technology & Building Innovative Solutions";
  const [showHighlight, setShowHighlight] = useState(false);

  const [activeTab, setActiveTab] = useState('all');
  const [ref2] = useInView({ threshold: 0.1, triggerOnce: true });

  const highlights = [
    {
      icon: "fas fa-laptop-medical",
      title: "Healthcare Technology",
      description: "Leading digital transformation in healthcare with secure, compliant, and user-friendly solutions.",
      tags: ["HIPAA Compliance", "EHR Integration", "Patient Care", "Healthcare IT"]
    },
    {
      icon: "fas fa-code",
      title: "Full-Stack Development",
      description: "Building scalable applications with modern technologies and best practices.",
      tags: ["React", "TypeScript", "C#", "SQL", "REST APIs"]
    },
    {
      icon: "fas fa-project-diagram",
      title: "Technical Leadership",
      description: "Driving innovation and leading development teams to deliver high-impact solutions.",
      tags: ["Team Leadership", "Project Management", "System Architecture", "Agile"]
    }
  ];

  const achievements = [
    {
      title: "Full-Stack Development",
      role: "Software Engineer",
      content: "Developed and maintained multiple web applications focusing on user experience and system performance.",
      icon: "fas fa-code"
    },
    {
      title: "Gaming Platform Development",
      role: "FiveM Development",
      content: "Architected and implemented custom gaming systems serving multiple concurrent users with real-time interactions.",
      icon: "fas fa-gamepad"
    }
  ];

  const featuredProjects = [
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio showcasing professional experience and projects.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      icon: "fas fa-code",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Gaming Systems",
      description: "Custom gaming platform features with real-time multiplayer interactions.",
      tech: ["Lua", "JavaScript", "React", "MySQL"],
      icon: "fas fa-gamepad",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Web Applications",
      description: "Various web applications built with modern technologies and best practices.",
      tech: ["React", "Node.js", "SQL", "REST APIs"],
      icon: "fas fa-globe",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const services = [
    {
      title: "Web Development",
      description: "Creating modern, responsive web applications with cutting-edge technologies.",
      icon: "fas fa-globe"
    },
    {
      title: "Technical Leadership",
      description: "Leading development teams and architecting scalable solutions across industries.",
      icon: "fas fa-users-cog"
    },
    {
      title: "Full-Stack Development",
      description: "Building end-to-end applications with modern technologies and best practices.",
      icon: "fas fa-layer-group"
    },
    {
      title: "System Integration",
      description: "Seamlessly connecting different platforms and ensuring efficient data flow.",
      icon: "fas fa-network-wired"
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
    }, 75);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: '4+', label: 'Years Experience', icon: 'fas fa-clock' },
    { number: '20+', label: 'Projects Delivered', icon: 'fas fa-tasks' },
    { number: '10+', label: 'Technologies', icon: 'fas fa-code-branch' },
    { number: '2+', label: 'Industries', icon: 'fas fa-industry' }
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col items-center justify-center px-4 space-y-16 pt-20 md:pt-0 relative overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-transparent"></div>
        
        <div className="relative text-center max-w-4xl mx-auto z-10">
          <div className="space-y-8">
            <motion.h1 
              className="text-4xl md:text-7xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Matthew Darabasz
            </motion.h1>
            
            <div className="h-1 w-48 bg-gradient-to-r from-primary via-purple to-info rounded-full mx-auto"></div>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Chief Technology Officer
              </h2>
              <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-300">
                Full-Stack Developer
              </p>
              <div className="h-16 flex justify-center items-center">
                <p className="text-lg text-gray-800 dark:text-gray-300 max-w-2xl">
                  {typedText}
                  <span className={`${showHighlight ? 'animate-pulse' : ''} inline-block w-0.5 h-5 bg-primary ml-1`}>|</span>
                </p>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-effect p-6 rounded-xl transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center"
                >
                  <i className={`${stat.icon} text-2xl text-primary mb-2`}></i>
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-info">{stat.number}</h3>
                  <p className="text-gray-300 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/about"
                className="px-8 py-4 rounded-lg font-bold text-white transition-transform duration-300 hover:-translate-y-1 bg-gradient-to-r from-primary to-purple flex items-center justify-center gap-2"
              >
                <i className="fas fa-user-circle"></i>
                View Experience
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 rounded-lg font-bold text-white transition-transform duration-300 hover:-translate-y-1 bg-gradient-to-r from-purple to-info flex items-center justify-center gap-2"
              >
                <i className="fas fa-project-diagram"></i>
                View Projects
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="mt-12 flex justify-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <a 
                href="mailto:mattdarabasz@gmail.com"
                className="text-gray-700 hover:text-primary dark:text-white/80 dark:hover:text-primary transition-colors duration-300"
                title="Email"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
              <a 
                href="tel:215-303-7737"
                className="text-gray-700 hover:text-primary dark:text-white/80 dark:hover:text-primary transition-colors duration-300"
                title="Phone"
              >
                <i className="fas fa-phone text-2xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/matthew-d-758a27168/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary dark:text-white/80 dark:hover:text-primary transition-colors duration-300"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a 
                href="https://github.com/dasz4376"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary dark:text-white/80 dark:hover:text-primary transition-colors duration-300"
                title="GitHub"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <p className="text-sm mb-2">Scroll Down</p>
          <i className="fas fa-chevron-down animate-bounce"></i>
        </div>
      </motion.section>

      {/* Highlights Section */}
      <motion.section 
        ref={ref2}
        className="py-20 px-4 bg-transparent relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Areas of Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-effect p-8 rounded-xl transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <i className={`${item.icon} text-4xl text-primary`}></i>
                </div>
                <h3 className="text-xl font-bold dark:text-white text-gray-800 mb-4 text-center">{item.title}</h3>
                <p className="dark:text-gray-300 text-gray-600 mb-6 text-center">{item.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 dark:bg-primary/20 bg-primary/10 dark:text-white text-primary font-medium rounded-full text-sm border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="glass-effect p-8 rounded-xl transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <div className={`inline-block p-4 rounded-full bg-gradient-to-r ${project.color} mb-4`}>
                    <i className={`${project.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-gray-900 dark:text-white font-medium rounded-full text-sm border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Services & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-xl transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="text-center mb-4">
                  <i className={`${service.icon} text-3xl text-primary mb-4`}></i>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect p-12 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to Collaborate?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
              Looking for a technical leader who can drive innovation and deliver results? 
              Let's discuss how I can help transform your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-lg font-bold text-white transition-transform duration-300 hover:-translate-y-1 bg-gradient-to-r from-primary to-purple flex items-center justify-center gap-2"
              >
                <i className="fas fa-paper-plane"></i>
                Get in Touch
              </Link>
              <a
                href="/Matthew R. Darabasz Resume.pdf"
                download="Matthew R. Darabasz Resume.pdf"
                className="px-8 py-4 rounded-lg font-bold text-white transition-transform duration-300 hover:-translate-y-1 bg-gradient-to-r from-purple to-primary flex items-center justify-center gap-2"
              >
                <i className="fas fa-folder-open"></i>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;