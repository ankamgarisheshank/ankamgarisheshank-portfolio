import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'www.linkedin.com/in/ankamgari-sheshank', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://x.com/sheshankinnov?s=21', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:ankamgarisheshank@gmail.com', label: 'Email' },
  ];
  
  return (
    <footer className="relative overflow-hidden bg-dark-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="text-xl font-bold text-white">
              <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
                Sheshank Goud
              </span>
            </a>
            <p className="mt-1 text-sm text-gray-400">
              Building the future, one pixel at a time.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary-500 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          <p>© {currentYear} ANKAMGARI SHESHANK GOUD. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;