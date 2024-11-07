import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="space-y-8 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold animate-slideDown tracking-tight">
            <span className="bg-clip-text text-white">
              Matthew Darabasz
            </span>
          </h1>
          
          <div className="flex justify-center">
            <div className="w-48 h-1 bg-gradient-to-r from-primary to-purple rounded-full animate-expand"></div>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl md:text-4xl font-bold animate-slideUp bg-gradient-to-r from-customTextColorHome to-info bg-clip-text text-transparent">
              Chief Technology Officer
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-bold animate-slideUp">
              Full-Stack Developer
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <Link
              to="/about"
              className="px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/50 bg-gradient-to-r from-primary to-secondary"
            >
              View Experience
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple/50 bg-gradient-to-r from-purple to-secondary"
            >
              View Projects
            </Link>
          </div>

          <div className="mt-12 flex justify-center gap-8">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;