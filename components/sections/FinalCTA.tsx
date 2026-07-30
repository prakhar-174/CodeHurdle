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
          <div className="bg-accent-soft dark:bg-accent-dark/10 border border-accent/20 rounded-3xl px-8 py-16 md:py-20 text-center shadow-lg relative overflow-hidden">
            
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-accent/10 dark:bg-accent-dark/10 blur-[80px] rounded-full -z-10 pointer-events-none" />

            <div className="flex justify-center mb-6">
              <Badge>✦ Start Today</Badge>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink dark:text-ink-dark mb-6 tracking-tight">
              Ready to Crack Your Dream Company?
            </h2>
            
            <p className="text-base md:text-xl text-ink-muted dark:text-ink-muted-dark max-w-2xl mx-auto mb-10 leading-relaxed">
              Join 5000+ engineers who chose the structured path. First session is free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">Get Started Now →</Button>
              <Button variant="secondary" size="lg">Explore Features</Button>
            </div>
            
            <p className="text-xs font-medium text-ink-muted dark:text-ink-muted-dark mt-8 tracking-wide">
              No credit card required · Free forever plan · 14-day money-back guarantee
            </p>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
