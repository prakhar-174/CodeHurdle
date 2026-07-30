'use client';

import React from 'react';
import { TRUST_COMPANIES } from '../../lib/data';

export function TrustBar() {
  // Duplicate array for seamless looping
  const marqueeItems = [...TRUST_COMPANIES, ...TRUST_COMPANIES];

  return (
    <section className="w-full py-10 border-y border-border dark:border-border-dark overflow-hidden bg-canvas dark:bg-canvas-dark">
      <div className="text-center text-xs font-medium text-ink-muted dark:text-ink-muted-dark uppercase tracking-widest mb-6">
        Learners placed at
      </div>
      
      <div className="overflow-hidden">
        <div className="flex gap-12 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap w-max">
          {marqueeItems.map((company, index) => (
            <div key={`${company}-${index}`} className="flex items-center gap-12">
              <span className="text-ink-muted dark:text-ink-muted-dark font-mono text-sm font-medium">
                {company}
              </span>
              <span className="text-ink-muted/30 dark:text-ink-muted-dark/30 select-none">
                ·
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
