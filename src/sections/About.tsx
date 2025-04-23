import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';
import Card from '../components/ui/Card';
import SkillBar from '../components/SkillBar';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-primary-300 to-accent-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <h3 className="text-2xl font-bold mb-4 text-white">Who I Am</h3>
              
              <p className="text-gray-300 mb-4">
              I’m Ankamgari Sheshank, a passionate creator blending technology, creativity, and vision into everything I do.
              My academic path began at Nagarjuna High School (2020), then Sri Medhavi Junior College (2021), and now I’m pursuing B.Tech in Artificial Intelligence at Anurag University, Hyderabad.
              I specialize in AI, but my curiosity doesn’t stop there—I also develop websites that are functional, sleek, and user-focused.
              </p>
              
              <p className="text-gray-300 mb-4">
              As a certified Canva designer and creative editor, I craft stunning posters and digital designs that communicate with impact.
              </p>
              
              <p className="text-gray-300">
              When I'm not coding, I'm exploring new tech, contributing to open-source, or designing bold posters and ad creatives. I'm also a passionate musician, channeling rhythm into everything I create. I thrive at the intersection of code, design, and sound—where innovation meets imagination. I'm not just learning tech; I'm mastering the art of solving real problems and telling stories that matter. I'm a future-ready creator with purpose, passion, and a creative soul.
              </p>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">My Skills</h3>
              
              <div>
                {skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;