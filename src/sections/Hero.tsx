import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import Button from '../components/ui/Button';

const Hero: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleDownloadClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Hide the message after 3 seconds
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Circular Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <img
                src="https://res.cloudinary.com/dnbqgzh4t/image/upload/v1744905193/g4h54ozwfoce1kljfugs.jpg"
                alt="Ankamgari Sheshank Goud"
                className="w-48 h-48 rounded-full border-4 border-primary-500 shadow-lg"
              />
            </motion.div>

            {/* Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-4 inline-block rounded-lg bg-accent-500/20 px-4 py-2 text-accent-400"
            >
              <span>
                <Typewriter
                  words={["Hello, I'm"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                />
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-primary-300 to-accent-300 bg-clip-text text-transparent"
            >
              ANKAMGARI SHESHANK GOUD
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl md:text-2xl mb-6 text-gray-300"
            >
              I Build Experiences, Not Just Websites
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-400 mb-8 max-w-xl"
            >
              Turning vision into vibrant digital realities. Passionate about creating 
              intuitive, engaging, and visually stunning digital experiences that merge 
              creativity with technical excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                href="#projects" 
                icon={<ExternalLink size={18} />}
                variant="primary"
              >
                Explore My Work
              </Button>
              
              <Button 
                onClick={handleDownloadClick} // Trigger the message
                icon={<Download size={18} />}
                variant="outline"
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Section: Code Snippet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 opacity-75 blur-lg" />
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-dark-200 p-8">
                <pre className="font-mono text-sm text-gray-300 overflow-x-auto">
                  <code>
{`class Developer {
  constructor() {
    this.name = "Ankamgari Sheshank Goud";
    this.traits = ["creative", "analytical", "detail-oriented"];
    this.skills = {
      languages: ["JavaScript", "TypeScript", "Python"],
      frontend: ["React", "Vue", "HTML/CSS"],
      backend: ["Node.js", "Express", "Django"],
      other: ["UI/UX Design", "Data Science", "Problem Solving"]
    };
  }

  code() {
    return "Building something amazing...";
  }
}

// Let's create something together!
const sheshank = new Developer();
sheshank.code();`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <span className="mb-2 text-sm">Scroll down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>

        {/* Message Modal */}
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark-200 text-white p-6 rounded-lg shadow-lg z-50"
          >
            <p>Resume is not available right now. I will be uploading it soon!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;