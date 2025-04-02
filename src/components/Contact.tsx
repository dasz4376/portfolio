import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  company?: string;
  preferredContact: 'email' | 'phone';
};

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [availability, setAvailability] = useState<string>('Available');

  // Simulate real-time availability status


  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a more detailed email body
      const emailBody = `
From: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
${data.company ? `Company: ${data.company}` : ''}
Preferred Contact Method: ${data.preferredContact}

Message:
${data.message}
      `;
      
      const mailtoLink = `mailto:mattdarabasz@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setShowSuccessModal(true);
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const contactMethods = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "mattdarabasz@gmail.com",
      link: "mailto:mattdarabasz@gmail.com"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "(215) 303-7737",
      link: "tel:2153037737"
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/matthew-d-758a27168/"
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      value: "View my repositories",
      link: "https://github.com/dasz4376"
    }
  ];

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen pt-24 pb-12 px-4 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <div className="glass-effect rounded-xl p-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Let's discuss how I can help with your next project
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              
              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    target={method.icon.includes('fa-') ? "_blank" : undefined}
                    rel={method.icon.includes('fa-') ? "noopener noreferrer" : undefined}
                    className="group flex items-center p-4 rounded-lg glass-effect hover:bg-primary/5 transition-all duration-300"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-bg transition-colors duration-300">
                      <i className={`${method.icon} text-xl text-primary`}></i>
                    </div>
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-medium">{method.title}</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-900 dark:text-white text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: true })}
                      className="w-full px-4 py-2 rounded-lg glass-effect text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                    {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-900 dark:text-white text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                      className="w-full px-4 py-2 rounded-lg glass-effect text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your email"
                    />
                    {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-900 dark:text-white text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject', { required: true })}
                    className="w-full px-4 py-2 rounded-lg glass-effect text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Message subject"
                  />
                  {errors.subject && <span className="text-red-500 text-sm">Subject is required</span>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-900 dark:text-white text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    {...register('message', { required: true })}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg glass-effect text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message"
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-circle-notch fa-spin mr-2"></i>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-paper-plane mr-2"></i>
                      Send Message
                    </span>
                  )}
                </button>
              </form>

              {/* Success Message */}
              <AnimatePresence>
                {showSuccessModal && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-green-500/10 text-green-400 p-4 rounded-lg border border-green-500/20"
                  >
                    <p className="flex items-center">
                      <i className="fas fa-check-circle mr-2"></i>
                      Message sent successfully!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact; 