import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import Card from './ui/Card';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { title, description, image, tags, githubLink, liveLink } = project;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="group h-full flex flex-col">
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <motion.img
            src={image}
            alt={title}
            className="h-48 w-full object-cover transition-transform duration-500"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-300/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
            <div className="flex space-x-4">
              {githubLink && (
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-200/80 text-white backdrop-blur-sm hover:bg-accent-500"
                >
                  <Github size={20} />
                </motion.a>
              )}
              {liveLink && (
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-200/80 text-white backdrop-blur-sm hover:bg-primary-500"
                >
                  <ExternalLink size={20} />
                </motion.a>
              )}
            </div>
          </div>
        </div>
        
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="mb-4 text-gray-300 flex-grow">{description}</p>
        
        <div className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="inline-block rounded-full bg-accent-500/20 px-3 py-1 text-xs font-medium text-accent-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;