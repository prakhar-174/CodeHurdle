'use client';

import React from 'react';
import { STATS } from '../../lib/data';
import { StatCounter } from '../ui/StatCounter';
import { AnimatedCard } from '../ui/AnimatedCard';
import { Badge } from '../ui/Badge';

export function Stats() {
  return (
    <section className="bg-[var(--canvas-alt)] border-y-2 border-[var(--border-color)] overflow-hidden py-16 px-4 md:px-8 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block bg-[#E9D5FF] text-black font-bold uppercase tracking-wider text-xs px-4 py-1.5 rounded-full border-2 border-black mb-4">
            By The Numbers
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--ink)] leading-none uppercase">
            Thousands of Engineers. <br/>
            <span className="text-[var(--ink)] opacity-50 drop-shadow-[2px_2px_0px_var(--border-color)] dark:text-black">One Community.</span>
          </h2>
        </div>

        {/* Right: Stats Grid */}
        <div className="flex-1 w-full grid grid-cols-2 gap-4">
          {STATS.map((s, idx) => {
            const bgColors = ['bg-[var(--canvas)] text-[var(--ink)]', 'bg-[#FFE8D6] text-black', 'bg-[#E9D5FF] text-black', 'bg-[#FFD5B3] text-black'];
            return (
              <div 
                key={s.label} 
                className={`flex items-center justify-center py-10 px-4 rounded-3xl border-2 border-[var(--border-color)] ${bgColors[idx % bgColors.length]} shadow-[4px_4px_0px_0px_var(--shadow-color)] hover:-translate-y-1 transition-transform`}
              >
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
