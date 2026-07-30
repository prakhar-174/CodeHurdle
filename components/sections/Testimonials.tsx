'use client';

import React from 'react';
import { TESTIMONIALS } from '../../lib/data';
import { AnimatedCard } from '../ui/AnimatedCard';
import { Badge } from '../ui/Badge';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 max-w-6xl mx-auto px-4 md:px-8">
      <div className="flex flex-col items-center mb-12 text-center">
        <Badge className="mb-4">✦ Social Proof</Badge>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink dark:text-ink-dark">
          Don&apos;t take our word for it.
        </h2>
      </div>

      {/* Simple responsive grid — stacks on mobile, 3-col on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <AnimatedCard key={testimonial.name} delay={index * 0.1}>
            <div className="bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-2xl p-6 md:p-8 flex flex-col gap-4 h-full shadow-sm hover:shadow-md transition-shadow">
              
              {/* Stars */}
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              {/* Quote */}
              <div className="flex-grow">
                <span className="font-accent text-5xl md:text-6xl text-accent dark:text-accent-dark opacity-60 leading-none block mb-2 -ml-1">
                  &ldquo;
                </span>
                <p className="text-ink dark:text-ink-dark text-base leading-relaxed italic -mt-4">
                  {testimonial.quote}
                </p>
              </div>
              
              {/* Footer Row */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/50 dark:border-border-dark/50">
                <div className="w-10 h-10 rounded-full bg-accent-soft dark:bg-accent-dark/20 flex items-center justify-center text-accent dark:text-accent-dark font-semibold text-sm flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-ink dark:text-ink-dark text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-ink-muted dark:text-ink-muted-dark text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>

            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
