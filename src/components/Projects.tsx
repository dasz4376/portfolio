import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import symmetryPreview from '../assets/symmetry-preview.png';
import tunermenucamber from './tuner-menu-camber.png';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Symmetry EAP Website',
      description: 'Healthcare-focused public site with modern UX and accessibility features',
      image: symmetryPreview,
      tags: ['React', 'TypeScript', 'Tailwind'],
      link: '/project2',
      external: 'https://www.symmetryeap.org/'
    },
    {
      title: 'FiveM Vehicle Tuning',
      description: 'Custom UI for vehicle modification in FiveM gaming servers',
      image: tunermenucamber,
      tags: ['JavaScript', 'Lua', 'UI/UX'],
      link: '/project1'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="section">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="display-2">Featured Projects</h1>
            <p className="body-lg max-w-2xl mx-auto">
              A selection of my recent work spanning web development, healthcare tech, and interactive applications
            </p>
          </motion.div>
        </div>

        {/* Projects Grid - Equal sized cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="card card-hover card-interactive group flex flex-col"
            >
              {/* Image */}
              <div className="image-container mb-6 h-64 relative z-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="image-overlay flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 flex-1 flex flex-col relative z-10">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Link to={project.link} className="btn btn-secondary text-sm">
                    <i className="fas fa-arrow-right"></i>
                    View Details
                  </Link>
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost text-sm"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="heading-2 mb-4">More on GitHub</h3>
            <p className="body mb-6">
              Check out my other projects and contributions on GitHub
            </p>
            <a
              href="https://github.com/dasz4376"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="fab fa-github"></i>
              Visit GitHub Profile
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
