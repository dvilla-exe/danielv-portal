import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-gradient-to-r from-[#a5fff9] to-[#7f1fb8] p-4 mt-auto">
      <div className="flex space-x-8">
        <a href="https://github.com/dvilla-exe" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
          <FaLinkedin size={30} />
        </a>
        <a href="https://stackoverflow.com/users/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
          <FaStackOverflow size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
