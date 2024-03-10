// Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import tunermenucamber from './tuner-menu-camber.png';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 text-center min-h-screen overflow-y-auto flex justify-center" style={{ paddingTop: '10rem' }}>
      <div className="w-max h-max">
        <div className="project-tile bg-gray-700 p-8 mx-4 mb-8 rounded-lg text-white" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 1)' }}>
          <h2 className="text-4xl font-bold mb-3">Projects</h2>
          <p className='text-sm text-gray-300 font-bold mb-6'>Click the "View Project" buttons below the projects to view the full details!</p>
          <div className="project-container grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Project 1 */}
            <div className="project">
              <div className="project-img-container mb-8 flex justify-center">
                <img src={tunermenucamber} alt="Project 1" className="mx-2 rounded-lg" style={{ width: '190px', height: '380px' }} />
              </div>
              <div className="project-description text-center">
                <Link to='/project1' className="inline-block py-2 px-4 bg-gray-900 text-white font-bold text-md rounded-lg mx-2 my-2 hover:bg-blue-700 hover:text-white link-animation">View Project</Link>
              </div>
            </div>
            {/* Project 2 */}
            <div className="project">
              <div className="project-img-container mb-8">
                {/* <img src="https://via.placeholder.com/300" alt="Project 2" className="w-auto h-64 mx-2 rounded-lg" /> */}
              </div>
              <div className="project-description text-center mt-40">
                <p className='font-bold'>More Projects Coming</p>
                <p className='font-bold'>Soon...</p>
                {/* <Link to='/project2' className="inline-block py-2 px-4 bg-gray-900 text-white font-bold text-md rounded-lg mx-2 my-2 hover:bg-blue-700 hover:text-white link-animation">View Project</Link> */}
              </div>
            </div>
            {/* Project 3 */}
            <div className="project">
              <div className="project-img-container mb-8">
                {/* <img src="https://via.placeholder.com/300" alt="Project 3" className="w-auto h-64 mx-2 rounded-lg" /> */}
              </div>
              <div className="project-description text-center">
              {/* <p className='font-bold mb-4'>Project Coming Soon..</p> */}
                {/* <Link to='/project3' className="inline-block py-2 px-4 bg-gray-900 text-white font-bold text-md rounded-lg mx-2 my-2 hover:bg-blue-700 hover:text-white link-animation">View Project</Link> */}
              </div>
            </div>
          </div>
          <div>
            <p className='text-center font-bold'>View the repository for this Website Portfolio!</p>
            <a href="https://github.com/dasz4376/portfolio" target="_blank" className="inline-block py-2 px-4 bg-gray-900 text-white font-bold text-md rounded-lg mx-2 my-2 hover:bg-blue-700 hover:text-white link-animation">View Repository</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
