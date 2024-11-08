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
    <footer id="footer" className="w-full dark:text-white text-gray-800 bg-gray-100 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 py-8">
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
            <p className="text-sm dark:text-gray-300 text-gray-600">
              Building innovative solutions across multiple industries with a focus on modern technologies
              and exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="dark:text-gray-300 text-gray-600 hover:text-primary transition-colors duration-300 flex items-center space-x-2"
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
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-10 h-10 rounded-full dark:bg-gray-700 bg-gray-200 flex items-center justify-center hover:bg-primary transition-all duration-300"
                  whileHover={{ y: -3 }}
                  aria-label={link.label}
                >
                  <i className={`${link.icon} text-lg`}></i>
                </motion.a>
              ))}
            </div>
            <div className="text-sm dark:text-gray-300 text-gray-600">
              <p className="flex items-center space-x-2">
                <i className="fas fa-envelope text-primary"></i>
                <span>mattdarabasz@gmail.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <i className="fas fa-phone text-primary"></i>
                <span>(215) 303-7737</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t dark:border-gray-700 border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm dark:text-gray-300 text-gray-600">
              &copy; {currentYear} Matthew Darabasz. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm dark:text-gray-300 text-gray-600">
              <motion.a 
                href="#" 
                className="hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

