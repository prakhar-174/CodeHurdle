'use client';

import React from 'react';
import { TESTIMONIALS } from '../../lib/data';
import { AnimatedCard } from '../ui/AnimatedCard';
import { Badge } from '../ui/Badge';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="mentors" className="py-20 md:py-28 max-w-6xl mx-auto px-4 md:px-8 bg-[var(--canvas)] transition-colors">
      <div className="flex flex-col items-start mb-12 text-left">
        <div className="inline-block bg-[#FFD5B3] text-black font-bold uppercase tracking-wider text-xs px-4 py-1.5 rounded-full border-2 border-[var(--border-color)] mb-4 shadow-[2px_2px_0px_0px_var(--shadow-color)]">
          Social Proof
        </div>
        <h2 className="font-display text-5xl md:text-7xl font-extrabold text-[var(--ink)] uppercase leading-none tracking-tighter">
          Don't take our<br/>word for it.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial, index) => {
          const bgColors = ['bg-[#FFE8D6]', 'bg-[#E9D5FF]', 'bg-[#FFF1E6]'];
          return (
            <AnimatedCard key={testimonial.name} delay={index * 0.1}>
              <div className={`group ${bgColors[index % bgColors.length]} border-[3px] border-[var(--border-color)] rounded-3xl p-6 md:p-8 flex flex-col gap-4 h-full shadow-[4px_4px_0px_0px_var(--shadow-color)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_var(--shadow-color)] transition-all`}>
                
                {/* Stars */}
                <div className="flex items-center gap-1 text-black">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={18} className="fill-black" />
                  ))}
                </div>
                
                {/* Quote */}
                <div className="flex-grow">
                  <span className="font-display font-extrabold text-6xl md:text-7xl text-black opacity-20 leading-none block mb-2 -ml-1">
                    "
                  </span>
                  <p className="text-black font-medium text-lg leading-relaxed -mt-6">
                    {testimonial.quote}
                  </p>
                </div>
                
                {/* Footer Row */}
                <div className="flex items-center gap-3 mt-4 pt-4 border-t-2 border-black/20">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-black border-2 border-[var(--border-color)] flex items-center justify-center text-black dark:text-white font-extrabold text-sm flex-shrink-0 shadow-[2px_2px_0px_0px_var(--shadow-color)]">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-black text-sm uppercase">
                      {testimonial.name}
                    </h4>
                    <p className="text-black/60 font-bold text-xs uppercase tracking-wider">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          );
        })}
      </div>
    </section>
  );
}
