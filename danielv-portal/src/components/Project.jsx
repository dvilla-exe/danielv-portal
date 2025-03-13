import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa'; 
import linkImage from '../assets/link-image.jpeg'; 

const Project = ({ title, demoLink, repoLink, image }) => {

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true); 
  };

  return (
    <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-md">
      <div className={`relative overflow-hidden mb-6 ${isImageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        <img
          src={image}
          alt={title}
          onLoad={handleImageLoad}
          className="w-full h-auto rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex justify-around w-full">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cover bg-center text-white py-2 px-6 rounded-full text-center hover:bg-opacity-75"
          style={{
            backgroundImage: `url(${linkImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          Live Demo
        </a>

        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white py-2 px-6 rounded-full text-center hover:bg-gray-700 flex items-center justify-center"
        >
          <FaGithub className="mr-2" size={20} />
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Project;



