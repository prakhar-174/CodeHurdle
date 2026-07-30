'use client';

import React from 'react';
import { AnimatedCard } from '../ui/AnimatedCard';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export function FinalCTA() {
  return (
    <section className="py-12 px-4 w-full mb-12">
      <div className="max-w-4xl mx-auto">
        <AnimatedCard>
          <div className="bg-[var(--canvas)] border-[3px] border-[var(--border-color)] rounded-3xl px-8 py-16 md:py-20 text-center shadow-[8px_8px_0px_0px_var(--shadow-color)] relative overflow-hidden transition-colors">
            
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-[#2D5BE3]/10 dark:bg-white/5 blur-[80px] rounded-full -z-10 pointer-events-none" />

            <div className="flex justify-center mb-6">
              <Badge>✦ Start Today</Badge>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-[var(--ink)] mb-6 tracking-tight uppercase">
              Ready to Crack Your Dream Company?
            </h2>
            
            <p className="text-base md:text-xl text-[var(--ink-muted)] max-w-2xl mx-auto mb-10 leading-relaxed font-bold">
              Join 5000+ engineers who chose the structured path. First session is free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="custom" size="lg" className="bg-[#2D5BE3] text-white hover:bg-[#2044B0] border-[var(--border-color)]">Get Started Now →</Button>
              <Button variant="custom" size="lg" className="bg-[#FFF1E6] text-black border-[var(--border-color)] hover:bg-[#FFE8D6] hover:text-black">Explore Features</Button>
            </div>
            
            <p className="text-xs font-bold text-[var(--ink)] opacity-50 uppercase mt-8 tracking-widest">
              No credit card required · Free forever plan · 14-day money-back guarantee
            </p>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
