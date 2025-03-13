import React from 'react';
import Project from '../components/Project'; 

const projects = [
  {
    title: '5D Weather',
    demoLink: 'https://fived-weather.onrender.com',
    repoLink: 'https://github.com/dvilla-exe/5D-Weather',
    image: '../assets/weather.jpg',
  },
  {
    title: 'Project 2',
    demoLink: 'https://demo2.com',
    repoLink: 'https://github.com/dvilla-exe',
    image: '../assets/demo-placeholder.jpg', 
  },
  {
    title: 'Project 3',
    demoLink: 'https://demo3.com',
    repoLink: 'https://github.com/dvilla-exe',
    image: '../assets/demo-placeholder.jpg', 
  },
];

const Portfolio = () => {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold text-left mb-6">Portfolio</h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
          >
            <Project
              title={project.title}
              demoLink={project.demoLink}
              repoLink={project.repoLink}
              image={project.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
