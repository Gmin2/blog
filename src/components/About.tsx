import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="text-rurikon-500">
      <h1 className="font-semibold mb-7 text-rurikon-600 text-balance text-2xl">Gmin2</h1>
      
      <p className="mt-7 leading-7">
        Welcome to my blog. I write about web development, programming, and technology. 
        This is a space where I share my thoughts, learnings, and experiences.
      </p>

      <p className="mt-7 leading-7">
        You can explore my <Link to="/blog" className="break-words decoration-from-font underline underline-offset-2 decoration-rurikon-300 hover:decoration-rurikon-600 focus-visible:outline focus-visible:outline-rurikon-400 focus-visible:rounded-xs focus-visible:outline-offset-1 focus-visible:outline-dotted">thoughts</Link> to read about various topics 
        including modern web development, clean code practices, and more.
      </p>

      <p className="mt-7 leading-7">
        Find me on <a href="https://github.com/Gmin2" target="_blank" rel="noopener noreferrer" className="break-words decoration-from-font underline underline-offset-2 decoration-rurikon-300 hover:decoration-rurikon-600 focus-visible:outline focus-visible:outline-rurikon-400 focus-visible:rounded-xs focus-visible:outline-offset-1 focus-visible:outline-dotted">GitHub</a> and <a href="https://x.com/Min2_gg" target="_blank" rel="noopener noreferrer" className="break-words decoration-from-font underline underline-offset-2 decoration-rurikon-300 hover:decoration-rurikon-600 focus-visible:outline focus-visible:outline-rurikon-400 focus-visible:rounded-xs focus-visible:outline-offset-1 focus-visible:outline-dotted">X/Twitter</a>.
      </p>
    </div>
  );
};

export default About;


