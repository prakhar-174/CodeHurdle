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
    <div ref={ref} className="flex flex-col items-center md:items-start text-center md:text-left">
      <div className="font-mono text-4xl font-bold text-accent dark:text-accent-dark">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium text-ink-muted dark:text-ink-muted-dark uppercase tracking-widest mt-1">
        {label}
      </div>
    </div>
  );
}
