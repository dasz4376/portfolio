import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleButtonClick = () => {
    toggleMenu();
  };

  const handleMenuMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMenuMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      closeMenu();
    }, 300); // Adjust the delay as needed
  };

  const handleButtonMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleButtonMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      closeMenu();
    }, 300); // Adjust the delay as needed
  };

  return (
    <nav className="fixed w-full z-50 backdrop-blur-lg bg-gray-900/90 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link 
            to="/home" 
            className="text-xl font-bold text-white hover:text-primary transition-colors duration-300"
          >
            MD
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={handleButtonClick}
              className="text-white p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 right-0 w-48 py-2 mt-2 bg-gray-900/95 backdrop-blur-lg rounded-lg shadow-xl border border-gray-800/50"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          <Link 
            to="/about" 
            className="block px-4 py-2 text-sm text-white hover:bg-primary/20 transition-colors duration-300"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/projects" 
            className="block px-4 py-2 text-sm text-white hover:bg-primary/20 transition-colors duration-300"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            to="/connections" 
            className="block px-4 py-2 text-sm text-white hover:bg-primary/20 transition-colors duration-300"
            onClick={closeMenu}
          >
            Connections
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
