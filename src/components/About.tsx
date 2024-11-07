import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about-section" className="py-20 text-left min-h-screen overflow-y-auto flex justify-center" style={{ paddingTop: '10rem' }}>
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 px-4">
        <div className="about-me bg-gray-700 p-8 rounded-lg text-white">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Matthew Darabasz</h2>
          <h3 className="text-2xl font-bold mb-6 text-primary">Chief Technology Officer | Full-Stack Developer</h3>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-customTextColorHome">Professional Summary</h3>
              <p className="text-lg">
                Chief Technology Officer at Paragon Wellness Center with expertise in full-stack development
                and IT infrastructure management. Experienced in leading technical initiatives and developing
                innovative solutions in healthcare technology.
              </p>
            </div>

            <div className="skills-section mt-8">
              <h3 className="text-xl font-bold mb-4 text-customTextColorHome">Technical Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Languages</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>C++, C#</li>
                    <li>Lua, MySQL</li>
                    <li>Java, JavaScript</li>
                    <li>HTML, CSS, TypeScript</li>
                    <li>TailwindCSS</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Tools & Frameworks</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Microsoft SharePoint</li>
                    <li>Git & GitHub</li>
                    <li>Visual Studio Code</li>
                    <li>Microsoft Office Suite</li>
                    <li>React Framework</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-customTextColorHome">Professional Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold">Paragon Wellness Center — Chief Technology Officer</h4>
                  <p className="text-sm text-gray-300">Philadelphia, PA | Sep 2024 – Present</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Lead strategic and technical direction for healthcare technology initiatives</li>
                    <li>Oversee full-cycle development projects and IT infrastructure</li>
                    <li>Drive integration of third-party platforms and ensure security compliance</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold">FiveM — Full-Stack Developer</h4>
                  <p className="text-sm text-gray-300">Dec 2022 – Sep 2023</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Developed applications using Lua, React, and TailwindCSS</li>
                    <li>Managed database integration and user interface design</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-customTextColorHome">Certifications</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Foundational C# Microsoft Certification</li>
                  <li>Responsive Web Development Certification</li>
                  <li>IT Fundamentals Micro-Credential</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-customTextColorHome">Education</h3>
                <p className="font-bold">Purdue University</p>
                <p className="text-sm text-gray-300">West Lafayette, IN</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Associate of Applied Science in Information Technology</li>
                  <li>Pursuing BS in Information Technology</li>
                  <li>GPA: 3.5</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
