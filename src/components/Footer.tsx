import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "fab fa-github", url: "https://github.com/dasz4376", label: "GitHub" },
    { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/matthew-d-758a27168/", label: "LinkedIn" },
    { icon: "fas fa-envelope", url: "mailto:mattdarabasz@gmail.com", label: "Email" },
    { icon: "fas fa-phone", url: "tel:2153037737", label: "Phone" }
  ];

  const quickLinks = [
    { text: "Home", path: "/home" },
    { text: "About", path: "/about" },
    { text: "Projects", path: "/projects" },
    { text: "Contact", path: "/contact" }
  ];

  return (
    <footer className="w-full py-12 px-4 bg-gray-900/95 backdrop-blur-xl border-t border-gray-800">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/home" className="flex items-center space-x-2">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-primary to-info bg-clip-text text-transparent"
              >
                MD
              </motion.span>
            </Link>
            <p className="text-sm text-gray-300">
              Building innovative solutions across multiple industries with a focus on modern technologies
              and exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center space-x-2"
                  >
                    <i className="fas fa-chevron-right text-xs"></i>
                    <span>{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
                  whileHover={{ y: -3 }}
                  aria-label={link.label}
                >
                  <i className={`${link.icon} text-lg`}></i>
                </motion.a>
              ))}
            </div>
            <div className="text-sm space-y-2">
              <p className="flex items-center space-x-2 text-gray-300">
                <i className="fas fa-envelope text-primary"></i>
                <span>mattdarabasz@gmail.com</span>
              </p>
              <p className="flex items-center space-x-2 text-gray-300">
                <i className="fas fa-phone text-primary"></i>
                <span>(215) 303-7737</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              &copy; {currentYear} Matthew Darabasz. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

