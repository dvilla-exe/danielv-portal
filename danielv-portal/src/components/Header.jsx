import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <nav className="flex bg-gradient-to-r from-[#a5fff9] to-[#7f1fb8] p-4 items-center justify-between">
      <div className="container px-6 mx-auto relative text-sm"></div>
      <h1 className="text-xl font-bold text-black">Daniel Villavicencio</h1>
      <Navigation />
    </nav>
  );
};

export default Header;

