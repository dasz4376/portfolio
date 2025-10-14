import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const experiences = [
    {
      title: "Chief Technology Officer",
      company: "Symmetry EAP",
      location: "Philadelphia, PA",
      period: "Sep 2024 - Present",
      description: "Leading technology strategy and development for a healthcare organization",
      highlights: [
        "Oversee full-cycle development projects",
        "Manage IT infrastructure and security",
        "Drive third-party platform integration"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "FiveM",
      period: "Dec 2022 - Sep 2023",
      description: "Developed custom gaming applications and user interfaces",
      highlights: [
        "Built React applications with TailwindCSS",
        "Conducted testing and quality assurance",
        "Enhanced user experiences"
      ]
    }
  ];

  const skills = {
    "Languages": ["Python", "TypeScript", "JavaScript", "C#", "SQL", "Lua"],
    "Frontend": ["React", "TailwindCSS", "Framer Motion"],
    "ML & AI": ["PyTorch", "TensorFlow", "OpenCV", "YOLO", "scikit-learn"],
    "Tools": ["Git", "VS Code", "Jupyter", "Vercel"]
  };

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Purdue University",
      specialization: "Software Development using C#",
      status: "Currently pursuing"
    },
    {
      degree: "Associate of Applied Science in Information Technology",
      school: "Purdue University",
      specialization: "Software Development",
      gpa: "3.5",
      status: "Completed Fall 2023"
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
            <h1 className="display-2">About Me</h1>
            <p className="body-lg max-w-2xl mx-auto">
              Full-Stack Developer specializing in healthcare technology, web applications, and machine learning
            </p>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h2 className="heading-1 mb-8">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="card card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="heading-2 text-xl mb-1">{exp.title}</h3>
                    <p className="body font-medium" style={{color: '#6366f1'}}>{exp.company}</p>
                    {exp.location && (
                      <p className="body-sm">{exp.location}</p>
                    )}
                  </div>
                  <span className="badge mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="body mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="flex items-start body-sm">
                      <i className="fas fa-check mr-3 mt-1" style={{color: '#6366f1'}}></i>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-20">
          <h2 className="heading-1 mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card"
              >
                <h3 className="heading-2 text-lg mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, j) => (
                    <span key={j} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="heading-1 mb-8">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="card card-hover"
              >
                <h3 className="heading-2 text-lg mb-2">{edu.degree}</h3>
                <p className="body font-medium mb-1" style={{color: '#6366f1'}}>{edu.school}</p>
                <p className="body-sm mb-3">{edu.specialization}</p>
                <div className="flex items-center gap-3">
                  <span className="badge">{edu.status}</span>
                  {edu.gpa && <span className="body-sm">GPA: {edu.gpa}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
