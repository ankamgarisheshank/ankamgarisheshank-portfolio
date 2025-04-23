import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      onClick={toggleTheme}
      className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotateZ: theme === 'dark' ? 0 : 180,
          opacity: theme === 'dark' ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon size={18} />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{ 
          rotateZ: theme === 'light' ? 0 : -180,
          opacity: theme === 'light' ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun size={18} />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;