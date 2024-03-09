// Connections.tsx
import React from 'react';
import './App.css';


const Connections: React.FC = () => {
  return (
    <>
      <section id="connections" className="py-20 text-center min-h-screen overflow-y-auto flex justify-center" style={{ paddingTop: '400px' }}>
        <div className="connections bg-gray-700 p-8 mx-4 mb-8 rounded-lg text-white w-max h-max" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 1)' }}>
          <h2 className="text-4xl font-bold mb-8">Connections</h2>
          <div className="connection-links flex justify-center items-center flex-wrap">
            <a href="https://www.linkedin.com/in/matthew-d-758a27168/" target="_blank" className="inline-block py-2 px-4 bg-gray-900 text-white font-bold text-lg rounded-lg mx-2 my-2 hover:bg-blue-700 hover:text-white link-animation">LinkedIn</a>
            <a href="https://github.com/MatthewD24" target="_blank" className="inline-block py-2 px-4 bg-gray-900 text-white font-bold text-lg rounded-lg mx-2 my-2 hover:bg-blue-700 hover:text-white link-animation">GitHub</a>
            {/* Add more connection links as needed */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Connections;
