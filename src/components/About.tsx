import React from 'react';

const About: React.FC = () => {
  return (
    <>
      <section id="about-section" className="py-20* text-left min-h-screen overflow-y-auto flex justify-center" style={{ paddingTop: '10rem', marginLeft: '1rem', marginRight: '1rem' }}>
        <div className="w-full md:w-max h-max">
          <div className="about-me bg-gray-700 p-8 pl-12 pr-12 mb-8 rounded-lg text-white" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 1)' }}>
            <h2 className="text-4xl font-bold mb-8">Hello,</h2>
            <p className="text-white text-lg font-bold">
            My name is Matthew Darabasz and I am an ambitious Information Technology professional specializing in Software Development.
              <p>
              With a background in Full-Stack Development at FiveM and a recent internship at PGIP-Tech, I've honed my skills in languages like C#, Java, 
              <p>
              and JavaScript, along with frameworks including React. This website portfolio, which I have built from scratch, is also an example of my
              <p>skills in Web Development using React with TypeScript and TailwindCSS.</p>
              </p>
              </p>
            </p>
            <br></br>
            <p className="text-white text-lg font-bold">
              Proficient in Windows OS and software tools like Git and Visual Studio Code, I bring a blend of technical expertise and academic achievements 
              <p>
              including a growing number of certifications and Dean's List recognition.
              </p>
            </p>
            <br></br>
            <p className="text-white text-lg font-bold">
              Driven by a passion for innovation and a commitment to excellence, I'm excited about the opportunity to contribute to your team's success. 
              <p>
              Let's connect and discuss how I can add value to your organization.
              </p>
            </p>
            <br></br>
            <br></br>
            {/* Skills section */}
            <div className="skills-section mt-8 font-bold">
              <h2 className="text-3xl font-bold mb-4">Skills</h2>
              <ul className="list-disc text-lg pl-6">
                <li>Full-Stack Development</li>
                <li>Front-End Development</li>
                <li>Back-End Development</li>
                <li>Responsive Web Development & Design</li>
                <li>Programming Languages:
                  <ul>
                    <li>(Familiar) C++, C#, Lua, MySQL, HeidiSQL, Java, JavaScript, HTML, CSS, TypeScript, TailwindCSS.</li>
                  </ul>
                </li>
                <li>Operating Systems:
                  <ul>
                    <li>(Proficient) Windows 10, Windows 11.</li>
                  </ul>
                </li>
                <li>Software:
                  <ul>
                    <li>(Proficient) Microsoft SharePoint, Git, Microsoft Office Applications, Adobe, Visual Studio Code, GitHub.</li>
                  </ul>
                </li>
                <li>Frameworks:
                  <ul>
                    <li>Experienced in REACT</li>
                  </ul>
                </li>
                <li>Other:
                  <ul>
                    <li>Skilled in hardware Troubleshooting, Building & Maintaining Desktops, Networking.</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div className="w-full h-max">
          <div className="project-container text-left grid grid-cols-1 font-bold lg:grid-cols-2 overflow-hidden py-14  overflow-y-auto justify-center">
            {/* Project 1 */}
            <div className="project">
              <div className="project-img-container mb-8 flex justify-between">
              </div>
              <div className="project-description text-left">
              <div className="accomplishments-column flex-wrap">
                <h2 className="text-3xl font-bold mb-4">Accomplishments</h2>
                
                <ul className="list-disc text-lg pl-6">
                  <li>National Society of Collegiate Scholars</li>
                  <li>National Society of Leadership and Success</li>
                  <li>Dean's List</li>
                </ul>
              </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="project">
              <div className="project-img-container mb-8">
              </div>
              <div className="project-description text-left">
              <div className="accomplishments-column">
              <h2 className="text-3xl font-bold mb-4">Certifications</h2>
                <ul className="list-disc text-lg pl-6">
                  <li>Foundational C# Microsoft Certification</li>
                  <li>Responsive Web Design Certification</li>
                  <li>IT Fundamentals Micro-Credential</li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>


          </div>
        </div>
        
      </section>
    </>
  );
}

export default About;
