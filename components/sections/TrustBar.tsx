'use client';

import React from 'react';
import { TRUST_COMPANIES } from '../../lib/data';

export function TrustBar() {
  // Duplicate array for seamless looping
  const marqueeItems = [...TRUST_COMPANIES, ...TRUST_COMPANIES];

  return (
    <section className="w-full py-10 bg-[var(--canvas)] overflow-hidden transition-colors">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="text-center md:text-left text-sm font-display font-extrabold text-[var(--ink-muted)] uppercase tracking-widest leading-tight">
          Featured<br/>Partners
        </div>
        
        <div className="flex-1 overflow-hidden relative">
          {/* Fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--canvas)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--canvas)] to-transparent z-10" />
          
          <div className="flex gap-16 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap w-max opacity-40 mix-blend-multiply dark:mix-blend-normal grayscale dark:grayscale-0">
            {marqueeItems.map((company, index) => (
              <span key={`${company}-${index}`} className="font-display text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-[var(--ink)]">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
