import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const experiences = [
    {
      title: "Full-Stack Developer & Technical Lead",
      company: "Symmetry EAP",
      location: "Philadelphia, PA (Early-stage Startup)",
      period: "Feb 2025 - Present",
      description: "Sole technical resource building all digital infrastructure for early-stage company",
      highlights: [
        "Built company website from scratch using React, TypeScript, and TailwindCSS with full responsive design",
        "Developed custom management system with appointment scheduling, secure data storage, and compliance features",
        "Implemented user authentication and authorization system with PostgreSQL database and encrypted data storage",
        "Set up AWS infrastructure (EC2, S3, RDS) with automated backups and 99.9% uptime",
        "Configured IT systems including workstations, security protocols, and communication systems",
        "Deployed CI/CD pipeline using GitHub Actions reducing deployment time from hours to minutes"
      ]
    },
    {
      title: "Full-Stack Developer & IT Consultant",
      company: "Paragon Wellness Center",
      location: "Philadelphia, PA (Early-stage Startup)",
      period: "Jun 2024 - Feb 2025",
      description: "Initially contracted to build company website, role expanded to handle all technical operations as sole technical resource",
      highlights: [
        "Designed and developed company website from scratch using React with modern UI/UX best practices",
        "Transitioned from contractor to technical lead as business grew and technology needs expanded",
        "Managed IT infrastructure setup including workstations, software licensing, and security systems",
        "Maintained and iterated on web platform based on user feedback and business requirements",
        "Collaborated directly with leadership on technology strategy and vendor selection",
        "Provided technical support and training to administrative team"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "FiveM Gaming Community",
      location: "Remote",
      period: "Dec 2022 - Jun 2024",
      description: "Developed custom gaming applications and user interfaces for multiplayer servers as part of 3-person development team",
      highlights: [
        "Built custom UIs using React, JavaScript, and Lua for high-traffic multiplayer gaming servers",
        "Built custom scripts using Lua for high-traffic gaming servers",
        "Created real-time vehicle customization system with WebSocket connections and instant feedback",
        "Optimized UI rendering performance reducing frame drops by 40% during high-load scenarios",
        "Collaborated with team using Git, conducting code reviews and pair programming sessions",
        "Conducted QA testing and bug fixes, improving system stability by 60%"
      ]
    }
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "JavaScript", "TailwindCSS", "Framer Motion", "HTML5", "CSS3", "Responsive Design"],
    "Backend": ["Node.js", "Express", "Python", "RESTful APIs", "WebSocket", "C#", "Lua"],
    "Databases": ["PostgreSQL", "MongoDB", "SQL", "Database Design", "Query Optimization"],
    "Cloud & DevOps": ["AWS (EC2, S3, RDS)", "Docker", "GitHub Actions", "CI/CD", "Linux", "Nginx"],
    "ML & AI": ["PyTorch", "TensorFlow", "OpenCV", "YOLO", "Computer Vision"],
    "Tools & Practices": ["Git", "VS Code", "Agile", "Code Review", "Testing", "Documentation"]
  };

  const education = [
    {
      degree: "Associate of Applied Science in Information Technology",
      school: "Purdue University",
      specialization: "Software Development Specialization",
      gpa: "3.5 GPA",
      status: "Completed Fall 2023",
      coursework: ["Data Structures & Algorithms", "Object-Oriented Programming (C#)", "Database Design & SQL", "Software Engineering", "Web Application Development"]
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
              Full-stack developer with 3 years building web applications from scratch. 
              I've worked as the sole technical resource at three early-stage companies, 
              developing websites, custom management systems, and cloud infrastructure.
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
          <div className="max-w-2xl mx-auto">
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
                <div className="flex items-center gap-3 mb-3">
                  <span className="badge">{edu.status}</span>
                  {edu.gpa && <span className="body-sm">{edu.gpa}</span>}
                </div>
                {edu.coursework && (
                  <div>
                    <p className="body-sm font-medium mb-2">Key Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, j) => (
                        <span key={j} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
