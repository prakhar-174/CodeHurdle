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
      <div className="flex justify-between items-center mb-2 text-sm font-bold text-[var(--ink)]">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-3 w-full bg-[var(--canvas-alt)] rounded-full overflow-hidden border-2 border-[var(--border-color)]">
        {shouldReduceMotion ? (
          <div className="h-full bg-[#2D5BE3] border-r-2 border-[var(--border-color)]" style={{ width: `${value}%` }} />
        ) : (
          <motion.div
            className="h-full bg-[#2D5BE3] border-r-2 border-[var(--border-color)]"
            initial={{ width: 0 }}
            animate={{ width: inView ? `${value}%` : 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay }}
          />
        )}
      </div>
    </div>
  );
}
