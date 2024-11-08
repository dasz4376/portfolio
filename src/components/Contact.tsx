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
  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 9 && hour < 17) {
      setAvailability('Available');
    } else if (hour >= 17 && hour < 22) {
      setAvailability('Available with delayed response');
    } else {
      setAvailability('Away - will respond within 24 hours');
    }
  }, []);

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
      className="min-h-screen pt-24 pb-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="glass-effect rounded-xl p-8">
          {/* Availability Badge */}
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`px-4 py-2 rounded-full ${
                availability === 'Available' 
                  ? 'bg-green-500/20 text-green-400'
                  : availability.includes('delayed')
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-red-500/20 text-red-400'
              } flex items-center space-x-2`}
            >
              <span className="relative flex h-3 w-3">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  availability === 'Available' ? 'bg-green-400' : 'bg-yellow-400'
                }`}></span>
                <span className={`relative inline-flex rounded-full h-3 w-3 ${
                  availability === 'Available' ? 'bg-green-500' : 'bg-yellow-500'
                }`}></span>
              </span>
              <span>{availability}</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Contact Methods */}
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h2>
              
              <div className="grid gap-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    target={method.icon.includes('fa-') ? "_blank" : undefined}
                    rel={method.icon.includes('fa-') ? "noopener noreferrer" : undefined}
                    className="flex items-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className={`${method.icon} text-2xl text-primary mr-4`}></i>
                    <div>
                      <h3 className="text-white font-semibold">{method.title}</h3>
                      <p className="text-gray-300">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="bg-gray-800/30 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <input
                    {...register('subject', { required: 'Subject is required' })}
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <div>
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder="Phone (optional)"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <input
                    {...register('company')}
                    type="text"
                    placeholder="Company (optional)"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white">Preferred Contact Method</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        {...register('preferredContact')}
                        type="radio"
                        value="email"
                        defaultChecked
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-gray-300">Email</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        {...register('preferredContact')}
                        type="radio"
                        value="phone"
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-gray-300">Phone</span>
                    </label>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <p className="text-green-400 text-center mt-4">
                    Message sent successfully!
                  </p>
                )}

                {submitStatus === 'error' && (
                  <p className="text-red-400 text-center mt-4">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="bg-gray-800 p-6 rounded-xl max-w-md mx-4"
              onClick={e => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-check text-2xl text-green-500"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300 mb-4">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Contact; 