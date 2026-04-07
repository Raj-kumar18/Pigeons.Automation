import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', glowColor = 'purple' }) {
  const glowMap = {
    purple: 'group-hover:shadow-[0_0_40px_rgba(124,58,237,0.3)] group-hover:border-purple-500/30',
    magenta: 'group-hover:shadow-[0_0_40px_rgba(219,39,119,0.3)] group-hover:border-pink-500/30',
  };

  return (
    <motion.div 
      className={`relative group bg-[#ffffff0a] backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 ${glowMap[glowColor]} ${className}`}
      whileHover={{ y: -8 }}
    >
      {/* Subtle under-glow blob */}
      <div 
        className={`absolute -bottom-10 -right-10 w-32 h-32 blur-[50px] opacity-20 transition-opacity duration-500 group-hover:opacity-40 
        ${glowColor === 'purple' ? 'bg-purple-600' : 'bg-pink-600'}`} 
      />
      
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
