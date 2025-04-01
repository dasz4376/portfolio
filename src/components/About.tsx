import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences = [
    {
      title: "Chief Technology Officer",
      company: "Paragon Wellness Center",
      location: "Philadelphia, PA",
      period: "Sep 2024 - Present",
      responsibilities: [
        "Lead the strategic and technical direction for all technology and IT initiatives within a medical/behavioral health organization.",
        "Oversee full-cycle development projects, spanning both front-end and back-end work, to support various healthcare services.",
        "Supervise and mentor IT staff, providing training on the latest technologies and ensuring consistent technical support across departments.",
        "Drive integration of third-party platforms, coordinating with external tech companies to enhance interoperability with in-house systems.",
        "Administer and manage IT infrastructure, ensuring security, compliance, and high operational standards across all platforms.",
        "Facilitate regular cross-functional meetings to align technology strategies with the company's broader goals, fostering collaboration and innovation."
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "FiveM",
      location: "",
      period: "Dec 2022 - Sep 2023",
      responsibilities: [
        "Developed and deployed Lua, HTML, CSS, JavaScript, and React applications with TailwindCSS, enhancing user experiences and interface designs.",
        "Conducted rigorous testing, debugging, and quality assurance to ensure stability and usability in final products.",
        "Built user-friendly interfaces, managed database integration, and collaborated on innovative product enhancements."
      ]
    },
    {
      title: "Software Development Intern",
      company: "PGIP-Tech",
      location: "Remote",
      period: "June 2023 - Sep 2023",
      responsibilities: [
        "Contributed to weekly projects utilizing JavaScript, Java, C#, and Python, developing full-stack capabilities.",
        "Actively participated in team presentations and collaborated on software solutions, enhancing technical and teamwork skills."
      ]
    }
  ];

  const education = {
    university: "Purdue University",
    location: "West Lafayette, IN",
    degrees: [
      {
        title: "Associate of Applied Science in Information Technology",
        specialization: "Software Development",
        gpa: "3.5",
        status: "Completed Fall 2023"
      },
      {
        title: "Bachelor of Science in Information Technology",
        specialization: "Software Development using C#",
        status: "Currently pursuing"
      }
    ]
  };

  const skills = {
    languages: ["C++", "C#", "Lua", "MySQL", "Java", "JavaScript", "HTML", "CSS", "TypeScript", "TailwindCSS"],
    operatingSystems: ["Windows 10", "Windows 11"],
    softwareAndTools: ["Microsoft SharePoint", "Git", "Microsoft Office", "Adobe", "Visual Studio Code", "GitHub"],
    frameworks: ["React"],
    additional: ["IT infrastructure management", "systems integration", "hardware troubleshooting", "desktop maintenance", "networking"]
  };

  const certifications = [
    "Foundational C# Microsoft Certification",
    "Responsive Web Development Certification",
    "IT Fundamentals Micro-Credential"
  ];

  const achievements = [
    "National Society of Collegiate Scholars",
    "National Society of Leadership and Success",
    "Dean's List"
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen py-20 px-4 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Full-Stack Developer specializing in modern web technologies and healthcare solutions
          </p>
        </motion.div>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Experience</h2>
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect p-6 rounded-xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{experience.company}</p>
                    {experience.location && <p className="text-gray-700 dark:text-gray-300">{experience.location}</p>}
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">{experience.period}</span>
                </div>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <i className="fas fa-check text-primary mt-1"></i>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Education</h2>
          <div className="space-y-6">
            {education.degrees.map((degree, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect p-6 rounded-xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{degree.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{degree.specialization}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">{degree.status}</span>
                </div>
                {degree.gpa && <p className="text-gray-700 dark:text-gray-300">GPA: {degree.gpa}</p>}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="glass-effect p-4 rounded-xl text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 dark:bg-primary/20 bg-primary/10 dark:text-white text-primary font-medium rounded-full text-sm border border-primary/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section className="grid md:grid-cols-2 gap-6">
          <div
            className="glass-effect p-6 rounded-xl transition-transform duration-300 hover:-translate-y-2"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Certifications</h2>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="mr-2">•</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="glass-effect p-6 rounded-xl transition-transform duration-300 hover:-translate-y-2"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Achievements</h2>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="mr-2">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
