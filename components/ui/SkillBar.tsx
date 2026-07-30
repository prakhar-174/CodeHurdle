'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SkillBarProps {
  label: string;
  value: number; // 0-100
  inView: boolean;
  delay?: number;
}

export function SkillBar({ label, value, inView, delay = 0 }: SkillBarProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2 text-sm font-medium text-ink dark:text-ink-dark">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 w-full bg-border dark:bg-border-dark rounded-full overflow-hidden">
        {shouldReduceMotion ? (
          <div className="h-full bg-accent dark:bg-accent-dark rounded-full" style={{ width: `${value}%` }} />
        ) : (
          <motion.div
            className="h-full bg-accent dark:bg-accent-dark rounded-full"
            initial={{ width: 0 }}
            animate={{ width: inView ? `${value}%` : 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay }}
          />
        )}
      </div>
    </div>
  );
}
