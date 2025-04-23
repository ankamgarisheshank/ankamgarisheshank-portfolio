import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { TimelineItem as TimelineItemType } from '../types';

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, isLast }) => {
  const { title, organization, date, description, type } = item;
  
  const isLeft = index % 2 === 0;
  
  return (
    <div className={`relative flex w-full items-center justify-between ${isLeft ? 'flex-row' : 'flex-row-reverse'} md:mx-auto`}>
      {/* Line */}
      {!isLast && (
        <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary-500 to-accent-500" />
      )}
      
      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`relative w-full md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}
      >
        <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm border border-white/10 shadow-lg">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white">
              {type === 'experience' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
            </span>
            <span className="rounded-full bg-accent-500/20 px-3 py-1 text-xs font-medium text-accent-300">
              {date}
            </span>
          </div>
          
          <h3 className="mb-1 text-xl font-bold text-white">{title}</h3>
          <p className="mb-2 text-gray-400">{organization}</p>
          <p className="text-gray-300">{description}</p>
        </div>
      </motion.div>
      
      {/* Circle */}
      <div className="absolute left-1/2 z-10 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-accent-500 bg-dark-200" />
    </div>
  );
};

export default TimelineItem;