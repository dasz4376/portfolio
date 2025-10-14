import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "mattdarabasz@gmail.com",
      link: "mailto:mattdarabasz@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "(215) 303-7737",
      link: "tel:2153037737",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/matthew-d-758a27168/",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      value: "View my repositories",
      link: "https://github.com/dasz4376",
      color: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center">
      <section className="section w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="display-2">Get in Touch</h1>
            <p className="body-lg max-w-2xl mx-auto">
              Let's discuss how I can help with your next project
            </p>
          </motion.div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactMethods.map((method, i) => (
            <motion.a
              key={i}
              href={method.link}
              target={method.link.startsWith('http') ? "_blank" : undefined}
              rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card card-hover card-interactive group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0`}>
                  <i className={`${method.icon} text-2xl text-white`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="heading-2 text-lg mb-1">{method.title}</h3>
                  <p className="body-sm">{method.value}</p>
                </div>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-all" style={{color: '#94a3b8'}}></i>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="heading-2 mb-4">Open to Opportunities</h3>
            <p className="body mb-6">
              I'm currently available for freelance projects, full-time positions, and consulting opportunities.
            </p>
            <a
              href="/Matthew R. Darabasz Resume.pdf"
              download
              className="btn btn-primary"
            >
              <i className="fas fa-download"></i>
              Download Resume
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
