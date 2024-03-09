import React from 'react';
import { Link } from 'react-router-dom';
import Camber from './Camber'; // Import the Camber component
import PresetsTab from './Presets'; // Import the Presets component


const Project1: React.FC = () => {
  return (
    <section id="projects" className="py-20 text-center min-h-screen overflow-y-auto flex justify-center" style={{ paddingTop: '10rem',}}>
      <div className="w-full h-max">
        <div className="project-tile bg-gray-700 mx-4 mb-8 rounded-lg text-white pt-4" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 1)' }}>
          <div className="project flex flex-col justify-center items-center bg-gray-700 rounded-lg p-8">
            <div className="project-img-container mb-8 flex justify-center">
              {/* Integrate the Camber component here */}
              <Camber />
            </div>
            <div className="project-description text-center font-bold">
              <p>The project displayed is an NUI that I have created for FiveM. It is a fully</p>
              <p> responsive application developed in React with TypeScript and TailwindCSS </p>
              <p>that is meant to alter changes to individual player's vehicles within the parent </p>
              <p>application. It is fully developed in the back-end, which is developed in Lua on</p>
              <p>both the client and server side. It also has a database that I have created in MySQL.</p>
              <p className="pb-5">View the full repository below and play around with it above! 😄</p>
            <a href="https://github.com/MatthewD24/tuning-menu/tree/main/tuner-menu" target="_blank" className="inline-block py-2 px-4 bg-gray-900 text-white font-bold text-md rounded-lg mx-2 my-2 hover:bg-blue-700 hover:text-white link-animation">View Repository</a>
            </div>
          </div>
        </div>
        <Link to='/projects' className="inline-block py-2 px-4 bg-gray-700 text-white font-bold text-md rounded-lg mx-2 my-2 hover:bg-blue-700 hover:text-white link-animation">Back to Projects</Link>
      </div>
    </section>
  );
}

export default Project1;
