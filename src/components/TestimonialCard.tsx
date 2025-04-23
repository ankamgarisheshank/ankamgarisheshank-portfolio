import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';
import Card from './ui/Card';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  const { name, company, quote, image } = testimonial;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <div className="mb-4 text-accent-400">
          <Quote size={28} />
        </div>
        
        <p className="mb-6 text-gray-300 italic">{quote}</p>
        
        <div className="flex items-center">
          <img 
            src={image} 
            alt={name} 
            className="h-12 w-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-bold text-white">{name}</h4>
            <p className="text-sm text-gray-400"> {company}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;