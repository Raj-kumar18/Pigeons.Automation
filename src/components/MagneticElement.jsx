import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export default function MagneticElement({ children, className = '', strength = 40 }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Spring configurations for smooth recovery
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    // Get bounding box of the element
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance away from center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Map to tension
    x.set(distanceX * (strength / 100));
    y.set(distanceY * (strength / 100));
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ x, y }}
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      {React.cloneElement(children, {
        style: {
          ...children.props.style,
        }
      })}
    </motion.div>
  );
}
