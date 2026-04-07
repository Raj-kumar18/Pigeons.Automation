import React from 'react';
import useScrollProgress from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-50 bg-surface">
      <div 
        className="h-full bg-primary-gradient shadow-[0_0_10px_rgba(168,85,247,0.5)]"
        style={{ width: `${progress}%`, transition: 'width 0.1s ease-out' }}
      ></div>
    </div>
  );
}
