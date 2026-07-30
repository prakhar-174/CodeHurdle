'use client';

import { useState, useEffect } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  inView: boolean;
}

export function useCountUp({ end, duration = 1500, inView }: UseCountUpOptions) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const fraction = Math.min(progress / duration, 1);
      
      const easedFraction = easeOutQuart(fraction);
      const currentCount = Math.floor(easedFraction * end);
      
      setCount(currentCount);

      if (fraction < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure exact end value
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, inView]);

  return count;
}
