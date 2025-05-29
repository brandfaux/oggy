'use client';

import { useEffect, useState } from 'react';

export default function CursorReveal() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="reveal-wrapper">
      {/* Grayscale image */}
      <div className="background grayscale" />

      {/* Color image masked by cursor */}
      <div
        className="background color"
        style={{
          WebkitMaskImage: `radial-gradient(circle 200px at ${coords.x}px ${coords.y}px, black 0%, black 30%, transparent 100%)`,
          maskImage: `radial-gradient(circle 200px at ${coords.x}px ${coords.y}px, black 0%, black 40%, transparent 100%)`,
        }}
        
      />
    </div>
  );
}