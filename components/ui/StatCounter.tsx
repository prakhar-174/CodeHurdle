'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useCountUp } from '../../hooks/useCountUp';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function StatCounter({ value, suffix = '', label }: StatCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const count = useCountUp({ end: value, duration: 1500, inView });

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center">
      <div className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-inherit">
        {count}{suffix}
      </div>
      <div className="text-xs md:text-sm font-bold opacity-60 uppercase tracking-widest mt-2 text-inherit">
        {label}
      </div>
    </div>
  );
}
