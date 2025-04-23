import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hoverEffect = true,
}) => {
  const baseClasses = 'relative overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur-lg border border-white/10 shadow-xl';
  
  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hoverEffect ? { 
        y: -5, 
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
      } : undefined}
    >
      <div className="relative z-10">
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-30" />
    </motion.div>
  );
};

export default Card;