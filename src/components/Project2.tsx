// Project2.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Project2: React.FC = () => {
  return (
    <section id="projects" className="py-20 text-center min-h-screen overflow-y-auto flex justify-center" style={{ paddingTop: '14rem' }}>
      <div className="w-max h-max">
        <div className="project-tile bg-gray-700 p-8 mx-4 mb-8 rounded-lg text-white" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 1)' }}>
          <div className="project flex flex-col justify-center items-center bg-gray-700 rounded-lg p-8">
            <div className="project-img-container mb-8">
            <img src="https://via.placeholder.com/300" alt="Project 2" className="w-auto h-64 mx-2 rounded-lg" />
            </div>
            <div className="project-description text-left">
              <p className="mb-4">Project 2 description...</p>
            </div>
          </div>
        </div>
        <Link to='/projects' className="inline-block py-2 px-4 bg-gray-700 text-white font-bold text-md rounded-lg mx-2 my-2 hover:bg-blue-700 hover:text-white link-animation">Back to Projects</Link>
      </div>
    </section>
  );
}

export default Project2;
