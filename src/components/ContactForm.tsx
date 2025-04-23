import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import Button from './ui/Button';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration
    const serviceID = 'service_4f5yanh'; // Replace with your EmailJS Service ID
    const templateID = 'template_nryo4av'; // Replace with your EmailJS Template ID
    const publicKey = 'dd0rkUnPcREMEKLjs'; // Replace with your EmailJS Public Key

    emailjs
      .send(serviceID, templateID, formState, publicKey)
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch(() => {
        setIsSubmitting(false);
        setError(true);

        // Reset error message after 5 seconds
        setTimeout(() => {
          setError(false);
        }, 5000);
      });
  };

  const inputClasses =
    'w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white backdrop-blur-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all duration-300';

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-lg bg-green-500/20 p-4 text-center text-green-400"
        >
          <p className="font-medium">Message sent successfully! I'll get back to you soon.</p>
        </motion.div>
      ) : error ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-lg bg-red-500/20 p-4 text-center text-red-400"
        >
          <p className="font-medium">Failed to send the message. Please try again later.</p>
        </motion.div>
      ) : (
        <>
          <div>
            <label htmlFor="name" className="mb-1 block text-gray-300">
              Your Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="sheshank"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-gray-300">
              Your Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="sheshank@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-gray-300">
              Message
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              className={`${inputClasses} min-h-[150px] resize-none`}
              placeholder="Your message here..."
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            icon={<Send size={18} />}
            iconPosition="right"
            variant="primary"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </>
      )}
    </motion.form>
  );
};

export default ContactForm;