import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Projects from './Projects';
import About from './About';
import Home from './Home';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import ParagonProject from './ParagonProject';
import Camber from './Camber';
import Presets from './Presets';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" id="background"></div>
        {/* Routes */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Home />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/paragon-project" element={<ParagonProject />} />
          <Route path="/camber" element={<Camber />} />
          <Route path="/presetstab" element={<Presets />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
