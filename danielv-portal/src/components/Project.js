import React from 'react';

const Project = ({ title, image, demoLink, repoLink }) => {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <a href={demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
};

export default Project;
