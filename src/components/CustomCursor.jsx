import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import useMousePosition from '../hooks/useMousePosition';

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);

  // Smooth springs for cursor followers
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const dotX = useSpring(0, { damping: 25, stiffness: 700, mass: 0.2 });
  const dotY = useSpring(0, { damping: 25, stiffness: 700, mass: 0.2 });

  useEffect(() => {
    cursorX.set(x - 20);
    cursorY.set(y - 20);
    dotX.set(x - 4);
    dotY.set(y - 4);
  }, [x, y, cursorX, cursorY, dotX, dotY]);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  // Hide on mobile devices or touch screens
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accentGlow rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{ x: dotX, y: dotY }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border rounded-full pointer-events-none z-[99]"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0 : 0.8,
          borderColor: isHovering ? '#db2777' : '#a855f7',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
