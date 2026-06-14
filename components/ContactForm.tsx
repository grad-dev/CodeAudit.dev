import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const services = [
    { value: '', label: 'Select a Service' },
    { value: 'web-app', label: 'Web Application Development' },
    { value: 'landing-page', label: 'Landing Page Design' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'ui-ux', label: 'UI/UX Design' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'other', label: 'Other' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-[#C1C2D3] text-lg">Let&apos;s discuss your next project</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#0A0C1F] p-8 rounded-2xl border border-white/[0.1] shadow-[0_0_15px_rgba(0,0,0,0.2)] backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#C1C2D3] mb-2">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#10132E] border border-white/[0.1] text-white placeholder-[#C1C2D3] focus:outline-none focus:ring-2 focus:ring-white/[0.2] focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#C1C2D3] mb-2">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#10132E] border border-white/[0.1] text-white placeholder-[#C1C2D3] focus:outline-none focus:ring-2 focus:ring-white/[0.2] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-[#C1C2D3] mb-2">Service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 rounded-lg bg-[#10132E] border border-white/[0.1] text-white focus:outline-none focus:ring-2 focus:ring-white/[0.2] focus:border-transparent transition-all appearance-none ${styles['custom-select']}`}
            >
              {services.map((service) => (
                <option key={service.value} value={service.value} className="bg-[#10132E]">
                  {service.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#C1C2D3] mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-[#10132E] border border-white/[0.1] text-white placeholder-[#C1C2D3] focus:outline-none focus:ring-2 focus:ring-white/[0.2] focus:border-transparent transition-all resize-none"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#04071D] to-[#0C0E23] text-white font-medium border border-white/[0.1] hover:border-white/[0.2] transition-all shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/[0.2] focus:ring-offset-2 focus:ring-offset-[#0A0C1F]"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
