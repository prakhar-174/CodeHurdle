'use client';

import React from 'react';
import { STATS } from '../../lib/data';
import { StatCounter } from '../ui/StatCounter';
import { AnimatedCard } from '../ui/AnimatedCard';
import { Badge } from '../ui/Badge';

export function Stats() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-20">
      <div className="flex flex-col items-center mb-12">
        <Badge className="mb-4">✦ By The Numbers</Badge>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-ink dark:text-ink-dark">
          Thousands of engineers. One community.
        </h2>
      </div>

      <AnimatedCard>
        <div className="bg-accent-soft dark:bg-accent-dark/10 rounded-3xl p-8 md:p-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {STATS.map((s, idx) => (
              <div key={s.label} className="relative text-center flex flex-col items-center justify-center gap-2">
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
                
                {/* Vertical Divider on Desktop */}
                {idx < STATS.length - 1 && (
                  <div className="hidden lg:block absolute right-[-1.25rem] top-1/2 -translate-y-1/2 w-px h-12 bg-border dark:bg-border-dark" />
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedCard>
    </section>
  );
}
