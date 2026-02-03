import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="text-rurikon-500">
      <h1 className="font-semibold mb-7 text-rurikon-600 text-balance text-2xl">Projects</h1>
      
      <p className="mt-7 leading-7">
        Here are some of the projects I've worked on.
      </p>

      {/* Placeholder for projects list - can be expanded later */}
      <ul className="mt-7 list-disc list-outside marker:text-rurikon-200 pl-5">
        <li className="pl-1.5 leading-7">
          <a href="#" className="break-words decoration-from-font underline underline-offset-2 decoration-rurikon-300 hover:decoration-rurikon-600 focus-visible:outline focus-visible:outline-rurikon-400 focus-visible:rounded-xs focus-visible:outline-offset-1 focus-visible:outline-dotted">
            Project 1
          </a>
          : A brief description of project 1.
        </li>
        <li className="pl-1.5 leading-7">
          <a href="#" className="break-words decoration-from-font underline underline-offset-2 decoration-rurikon-300 hover:decoration-rurikon-600 focus-visible:outline focus-visible:outline-rurikon-400 focus-visible:rounded-xs focus-visible:outline-offset-1 focus-visible:outline-dotted">
            Project 2
          </a>
          : A brief description of project 2.
        </li>
      </ul>
    </div>
  );
};

export default Projects;
