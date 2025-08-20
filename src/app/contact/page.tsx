'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { 
  FiMail, 
  FiPhone, 
  FiLinkedin, 
  FiMapPin, 
  FiSend 
} from 'react-icons/fi';

const contactDetails = [
  {
    icon: FiMail,
    label: 'Email Address',
    value: 'sameer@automatethis.ca',
    href: 'mailto:sameer@automatethis.ca'
  },
  {
    icon: FiPhone,
    label: 'Phone Number',
    value: '+1-905-7829601',
    href: 'tel:+19057829601'
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn Profile',
    value: 'www.linkedin.com/in/sameerzaheer',
    href: 'https://www.linkedin.com/in/sameerzaheer/'
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Toronto, Canada',
    href: '#'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create email body content for mailto (URL encoded)
    const emailBodyMailto = `Name: ${formData.name}%0D%0A` +
                           `Email: ${formData.email}%0D%0A` +
                           `Company: ${formData.company}%0D%0A` +
                           `Service: ${formData.service}%0D%0A%0D%0A` +
                           `Message:%0D%0A${formData.message}`;
    
    // Create email body content for Gmail (regular text)
    const emailBodyGmail = `Name: ${formData.name}\n` +
                          `Email: ${formData.email}\n` +
                          `Company: ${formData.company}\n` +
                          `Service: ${formData.service}\n\n` +
                          `Message:\n${formData.message}`;
    
    const emailSubject = `New Consultation Request from ${formData.name}`;
    
    // Try Gmail with a better URL format
    const gmailLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=sameer@automatethis.ca&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBodyGmail)}`;
    const mailtoLink = `mailto:sameer@automatethis.ca?subject=${encodeURIComponent(emailSubject)}&body=${emailBodyMailto}`;
    
    // First try Gmail
    const gmailWindow = window.open(gmailLink, '_blank');
    
    // Check if Gmail window opened successfully
    setTimeout(() => {
      if (!gmailWindow || gmailWindow.closed || gmailWindow.location === 'about:blank') {
        // Gmail failed, try mailto
        window.location.href = mailtoLink;
        
        setTimeout(() => {
          alert(
            "Your default email client should open.\n\n" +
            "If it doesn't work, contact me directly:\n\n" +
            "📧 Email: sameer@automatethis.ca\n" +
            "📱 Phone: +1-905-7829601\n" +
            "💼 LinkedIn: https://www.linkedin.com/in/sameerzaheer/"
          );
        }, 2000);
      } else {
        // Gmail opened successfully
        setTimeout(() => {
          const userConfirm = confirm(
            "Gmail should have opened with your message.\n\n" +
            "Click 'OK' if it worked, or 'Cancel' to try your default email client."
          );
          
          if (!userConfirm) {
            // User wants to try default email client
            window.location.href = mailtoLink;
          }
        }, 1500);
      }
    }, 1000);
    
    // Log for debugging
    console.log('Form submitted:', formData);
  };

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get in <span className="text-blue-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm here to help you navigate your most complex challenges and achieve 
              your strategic goals. Let's start a conversation.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Contact Form & Details Section */}
      <Section className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-20 h-20 bg-blue-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-200 rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg border border-white/40 rounded-xl p-8 shadow-xl h-fit"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Details</h2>
              <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                      <detail.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{detail.label}</div>
                      <a 
                        href={detail.href} 
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                        target={detail.label === 'LinkedIn Profile' ? '_blank' : undefined}
                        rel={detail.label === 'LinkedIn Profile' ? 'noopener noreferrer' : undefined}
                      >
                        {detail.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg border border-white/40 rounded-xl p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/80 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/80 backdrop-blur-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/80 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/80 backdrop-blur-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="Strategy Consulting">Strategy Consulting</option>
                    <option value="Operations Management">Operations Management</option>
                    <option value="Digital Transformation">Digital Transformation</option>
                    <option value="Project Management">Project Management</option>
                    <option value="Organizational Development">Organizational Development</option>
                    <option value="Performance Improvement">Performance Improvement</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/80 backdrop-blur-sm resize-none"
                  ></textarea>
                </div>
                <div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message <FiSend className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}
