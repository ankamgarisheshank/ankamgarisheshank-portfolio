import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-dark-300 to-transparent opacity-40" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-primary-300 to-accent-300 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            What others have to say about working with me.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;