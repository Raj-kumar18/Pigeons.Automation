import { useState, useEffect } from 'react';

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, normalizedX: 0, normalizedY: 0 });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({
        x: ev.clientX,
        y: ev.clientY,
        normalizedX: (ev.clientX / window.innerWidth) * 2 - 1,
        normalizedY: -(ev.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
}
