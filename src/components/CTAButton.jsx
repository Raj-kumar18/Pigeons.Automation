import React from 'react';
import { motion } from 'framer-motion';

export default function CTAButton({ children, size = 'md', variant = 'primary', className = '', ...props }) {
  const baseStyles = "relative inline-flex items-center justify-center font-body font-semibold rounded-lg overflow-hidden transition-all duration-300";
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const variants = {
    primary: "bg-primary-gradient text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(219,39,119,0.5)] border border-white/10",
    ghost: "bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white/40",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center space-x-2">
        {children}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      )}
    </motion.button>
  );
}
