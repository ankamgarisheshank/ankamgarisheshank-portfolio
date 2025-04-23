import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  const { name, level } = skill;
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-white font-medium"
        >
          {name}
        </motion.span>
        <motion.span 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-700">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default SkillBar;