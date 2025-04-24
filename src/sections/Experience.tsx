import React from 'react';
import { motion } from 'framer-motion';
import { timelineItems } from '../data';
import TimelineItem from '../components/TimelineItem';

const Experience: React.FC = () => {
  const graphicDesigns = [
    {
      id: '1',
      title: 'Poster Design',
      image: 'https://res.cloudinary.com/dnbqgzh4t/image/upload/v1745391518/ixvyxist063slmmecnm3.png',
    },
    {
      id: '2',
      title: 'Modern Business Card',
      image: 'https://res.cloudinary.com/dnbqgzh4t/image/upload/v1745391454/yhw56osyusy9vghj9wqb.png',
    },
    {
      id: '3',
      title: 'Social Media Post',
      image: 'https://res.cloudinary.com/dnbqgzh4t/image/upload/v1745391629/yrfp9wkbahnnzpohovdn.png',
    },
    {
      id: '4',
      title: 'Event Design',
      image: 'https://res.cloudinary.com/dnbqgzh4t/image/upload/v1745392980/jm8o9co77r1vyemvvsfh.png',
    },
    {
      id: '5',
      title: 'Logo Design',
      image: 'https://res.cloudinary.com/dnbqgzh4t/image/upload/v1745393401/eniy2y3hlm5subt1wbez.png',
    },
    {
      id: '6',
      title: 'Brochure Design',
      image: 'https://res.cloudinary.com/dnbqgzh4t/image/upload/v1745390367/u7faeobps3njnxfb3aob.jpg',
    },
    {
      id: '7',
      title: 'Posters',
      image: 'https://res.cloudinary.com/dnbqgzh4t/image/upload/v1745390571/kyod2kjdm2jazutzhh1z.png',
    },
    {
      id: '8',
      title: 'Advertisement Design',
      image: 'https://res.cloudinary.com/dnbqgzh4t/image/upload/v1745393240/c0f6lcgk5ya8s3j2qk97.png',
    },
    {
      id: '9',
      title: 'Website Visit',
      image: 'https://res.cloudinary.com/dnbqgzh4t/image/upload/v1745391871/gbzii71ognotukbkskcc.jpg',
    },
    {
      id: '10',
      title: 'Creative Illustration',
      image: 'https://res.cloudinary.com/dnbqgzh4t/image/upload/v1745393508/ytn1igc13fczobxjp6vz.png',
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-primary-300 to-accent-300 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            My professional journey and educational background that have shaped my skills and expertise.
          </p>
        </motion.div>
        
        <div className="relative space-y-12">
          {timelineItems.map((item, index) => (
            <TimelineItem 
              key={item.id} 
              item={item} 
              index={index}
              isLast={index === timelineItems.length - 1}
            />
          ))}
        </div>

        {/* Graphic Design Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-primary-300 to-accent-300 bg-clip-text text-transparent text-center">
            My Graphic Design Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {graphicDesigns.map((design) => (
              <div key={design.id} className="relative group">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-64 object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                  <p className="text-white text-sm sm:text-base md:text-lg font-semibold text-center px-2">
                    {design.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;