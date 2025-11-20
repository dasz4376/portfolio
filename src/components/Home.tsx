import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const skills = [
    "React", "TypeScript", "JavaScript", "Node.js", "TailwindCSS",
    "Python", "C#", "PostgreSQL", "MongoDB", "SQL",
    "AWS", "Docker", "Git", "GitHub Actions", "REST APIs",
    "PyTorch", "TensorFlow", "OpenCV", "Express", "HTML5", "CSS3"
  ];

  const stats = [
    { value: '3', label: 'Years Professional' },
    { value: '3', label: 'Complete Systems Built' },
    { value: '15+', label: 'Technologies' },
    { value: '100%', label: 'Commitment' }
  ];

  const expertise = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Full-Stack Development',
      desc: 'React, TypeScript, Node.js - Building complete web applications from database to UI'
    },
    {
      icon: 'fas fa-database',
      title: 'Database & Backend',
      desc: 'PostgreSQL, RESTful APIs - Designing schemas and building secure, scalable backends'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Secure Applications',
      desc: 'Building data management systems with encryption, authentication, and compliance standards'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Startup Experience',
      desc: 'Solo developer at early-stage companies - Comfortable wearing multiple hats and shipping fast'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-block">
                <span className="badge">
                  <i className="fas fa-circle text-green-400 text-xs mr-2 animate-pulse"></i>
                  Available for opportunities
                </span>
              </div>
              
              <h1 className="display-1">
                Matthew Darabasz
              </h1>
              
              <div className="space-y-2">
                <h2 className="heading-1">
                  Full-Stack Developer
                </h2>
                <p className="body-lg">
                  React, TypeScript, Node.js & PostgreSQL
                </p>
              </div>

              <p className="body max-w-xl">
                Full-stack developer with 3 years building complete web applications from 
                scratch. I've worked as the sole technical resource at early-stage startups, 
                where I built public-facing websites, custom management systems, and cloud 
                infrastructure. Passionate about writing clean, maintainable code and solving 
                complex technical problems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn btn-primary">
                <i className="fas fa-rocket"></i>
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <i className="fas fa-envelope"></i>
                Get in Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: 'fab fa-github', url: 'https://github.com/dasz4376' },
                { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/matthew-d-758a27168/' },
                { icon: 'fas fa-envelope', url: 'mailto:mattdarabasz@gmail.com' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-primary hover:scale-110 transition-all duration-200"
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div key={i} className="card card-hover text-center p-6">
                <div className="text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="body-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">Tech Stack</h2>
          <p className="body text-text-muted">Technologies I work with daily</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="badge"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">Areas of Expertise</h2>
          <p className="body text-text-muted">What I specialize in</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card card-hover card-interactive text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                <i className={`${item.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="heading-2 text-lg mb-2">{item.title}</h3>
              <p className="body-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="glass-strong rounded-2xl p-12 text-center max-w-3xl mx-auto">
          <h2 className="heading-1 mb-4">Let's Build Something Amazing</h2>
          <p className="body mb-8 text-text-muted">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i>
              Start a Conversation
            </Link>
            <a
              href="/Matthew R. Darabasz Resume.pdf"
              download
              className="btn btn-ghost"
            >
              <i className="fas fa-download"></i>
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
