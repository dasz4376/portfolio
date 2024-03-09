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
    <nav className="bg-gray-800 bg-opacity-90 p-4 fixed w-full z-10" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 1)' }}>
      <div className="pl-6 max-w-full container flex justify-between items-center">
        <Link to="/home" className="text-white text-lg font-bold">Home</Link>
        <div className="flex items-center pr-4">
          <div className="hidden md:flex"> {/* Hide on small screens */}
            <Link to="/about" className="text-white text-lg mx-4 font-bold">About</Link>
            <Link to="/projects" className="text-white text-lg mx-4 font-bold">Projects</Link>
            <Link to="/connections" className="text-white text-lg mx-4 font-bold">Connections</Link>
          </div>
          <div className="md:hidden"> {/* Show on small screens */}
            <button onClick={handleButtonClick} onMouseEnter={handleButtonMouseEnter} onMouseLeave={handleButtonMouseLeave} className="text-white text-xl mx-4 font-bold hover:text-customHoverColor">&#9776;</button>
          </div>
        </div>
      </div>
      {/* Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 right-4 bg-gray-800 text-white p-2 rounded shadow-md"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          <Link to="/about" className="block text-lg py-1 px-4 hover:text-customHoverColor" onClick={closeMenu}>About</Link>
          <Link to="/projects" className="block text-lg py-1 px-4 hover:text-customHoverColor" onClick={closeMenu}>Projects</Link>
          <Link to="/connections" className="block text-lg py-1 px-4 hover:text-customHoverColor" onClick={closeMenu}>Connections</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
