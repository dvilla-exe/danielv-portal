import React from 'react';
import placeholderImage from '../assets/photo-placeholder.jpg';

const AboutMe = () => {
  return (
    <section className="flex flex-col items-start border-l-4 border-[#7f1fb8] p-6">
      <h2 className="text-3xl font-bold text-left mb-4">About Me</h2>
      <img
        src={placeholderImage} 
        alt="Developer"
        className="w-32 h-32 rounded-full mb-4" 
      />
      <p className="text-lg text-left">
        Hello, my name is Daniel. Welcome to my page! Here is a short description about me.
      </p>
    </section>
  );
};

export default AboutMe;
