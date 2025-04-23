import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className = '',
  onClick,
  href,
  type = 'button',
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-accent-500 to-primary-500 text-white hover:opacity-90 focus:ring-primary-500',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500',
    outline: 'bg-transparent border-2 border-primary-500 text-primary-500 dark:text-white hover:bg-primary-500/10 focus:ring-primary-500',
    ghost: 'bg-transparent text-primary-500 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-100 focus:ring-primary-500',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 },
  };
  
  if (href) {
    return (
      <motion.a 
        href={href} 
        className={classes} 
        onClick={onClick}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    );
  }
  
  return (
    <motion.button 
      type={type} 
      className={classes} 
      onClick={onClick}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;