import React from 'react';

const Resume = () => {
  const skills = [
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'CSS (TailwindCSS, Bootstrap)',
    'HTML5',
    'MongoDB',
    'Git & GitHub',
    'APIs (REST, GraphQL)',
    'Express.js',
    'SQL (MySQL, PostgreSQL)',
  ];

  return (
    <section className="flex flex-col items-start border-l-4 border-[#7f1fb8] p-6">
      <h2 className="text-3xl font-bold text-left mb-4">Resume</h2>
      
      <a
        href="../assets/Sample-Resume.rtf"
        download="Test_Resume"
        className="bg-[#7f1fb8] text-white px-6 py-2 rounded-full mb-6 hover:bg-[#9d32cf]"
      >
        Download My Resume
      </a>

      <div className="w-full max-w-md">
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <ul className="list-disc pl-5">
          {skills.map((skill, index) => (
            <li key={index} className="text-lg">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;