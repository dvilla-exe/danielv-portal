import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className="flex space-x-6">
        <li><Link to="/about" className="text-white hover:text-gray-200">About Me</Link></li>
        <li><Link to="/portfolio" className="text-white hover:text-gray-200">Portfolio</Link></li>
        <li><Link to="/resume" className="text-white hover:text-gray-200">Resume</Link></li>
        <li><Link to="/contact" className="text-white hover:text-gray-200">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;

