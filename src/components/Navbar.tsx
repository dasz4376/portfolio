import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/home', label: 'Home', icon: 'fas fa-home' },
    { path: '/about', label: 'About', icon: 'fas fa-user' },
    { path: '/projects', label: 'Projects', icon: 'fas fa-code' },
    { path: '/contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`glass-strong rounded-2xl px-6 py-4 flex items-center justify-between ${
            scrolled ? 'shadow-xl' : ''
          }`}>
            {/* Logo */}
            <Link to="/home" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">MD</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  <i className={`${item.icon} mr-2`}></i>
                  {item.label}
                </Link>
              ))}
              {/* Resume Button - Desktop */}
              <a
                href={`${process.env.PUBLIC_URL}/Matthew Darabasz Resume.pdf`}
                download="Matthew Darabasz Resume.pdf"
                className="btn btn-primary text-sm ml-2"
              >
                <i className="fas fa-download"></i>
                <span>Resume</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors relative z-50"
              >
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>

              {/* Mobile Menu Popup */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <>
                    {/* Backdrop */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="fixed inset-0 bg-black/10 rounded-lg backdrop-blur-sm z-30"
                      onClick={() => setMobileMenuOpen(false)}
                    />
                    
                    {/* Menu Popup */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full right-0 mt-2 w-64 glass-strong rounded-2xl shadow-2xl overflow-hidden z-40"
                      style={{ transformOrigin: 'top right' }}
                    >
                      <div className="p-2">
                        {navItems.map((item, index) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                              location.pathname === item.path
                                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                                : 'text-white hover:bg-white/10'
                            }`}
                          >
                            <i className={`${item.icon} w-5`}></i>
                            <span>{item.label}</span>
                          </Link>
                        ))}
                        
                        <div className="h-px bg-white/10 my-2"></div>
                        
                        <a
                          href={`${process.env.PUBLIC_URL}/Matthew Darabasz Resume.pdf`}
                          download="Matthew Darabasz Resume.pdf"
                          className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all"
                        >
                          <i className="fas fa-download w-5"></i>
                          <span>Download Resume</span>
                        </a>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
