'use client';

import React from 'react';
import { MOCK_INTERVIEW_DEMO } from '../../lib/data';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { SkillBar } from '../ui/SkillBar';
import { CheckCircle2, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { AnimatedCard } from '../ui/AnimatedCard';

export function MockInterview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const featureList = [
    'Expert Interviewers',
    'Real-time Feedback',
    'Improvement Roadmap',
  ];

  return (
    <section className="bg-[var(--canvas)] py-20 md:py-28 w-full transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Left Column */}
        <div className="flex flex-col items-start text-left">
          <div className="inline-block bg-[#E9D5FF] text-black font-bold uppercase tracking-wider text-xs px-4 py-1.5 rounded-full border-2 border-[var(--border-color)] mb-6 shadow-[2px_2px_0px_0px_var(--shadow-color)]">
            Practice & Improve
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--ink)] mb-6 leading-[1.1] uppercase">
            Mock Interviews That Feel Real
          </h2>
          <p className="text-base md:text-lg text-[var(--ink-muted)] font-medium leading-relaxed mb-8 max-w-md">
            Practice with engineers from top companies. Get scored on Technical Skills, Communication, and Problem Solving. Know exactly what to fix before the real interview.
          </p>
          
          <ul className="flex flex-col gap-4 mb-10">
            {featureList.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[var(--ink)] font-extrabold">
                <CheckCircle2 className="text-[#2D5BE3] w-6 h-6 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          
          <Button variant="custom" size="lg" className="bg-[#FFD5B3] text-black hover:bg-[#FFD5B3] border-[var(--border-color)] hover:shadow-[4px_4px_0px_0px_var(--shadow-color)] border-2">
            Schedule a Mock Interview
          </Button>
        </div>

        {/* Right Column */}
        <AnimatedCard className="w-full">
          <div ref={ref} className="bg-[var(--canvas)] border-[3px] border-[var(--border-color)] rounded-3xl p-8 shadow-[8px_8px_0px_0px_var(--shadow-color)] max-w-md mx-auto lg:mr-0 w-full relative transition-colors">
            
            {/* Header Row */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-2xl font-extrabold text-[var(--ink)] uppercase tracking-tight">
                Mock Interview
              </h3>
              <div className="flex items-center gap-1 bg-[#FFE8D6] border-2 border-[var(--border-color)] text-black px-2 py-1 rounded-full font-bold text-sm shadow-[2px_2px_0px_0px_var(--shadow-color)]">
                <span>{MOCK_INTERVIEW_DEMO.rating}</span>
                <Star size={14} className="fill-black" />
              </div>
            </div>
            
            {/* Meta Row */}
            <div className="text-sm font-bold text-[var(--ink-muted)] mb-6 uppercase tracking-wider">
              {MOCK_INTERVIEW_DEMO.duration} · {MOCK_INTERVIEW_DEMO.difficulty} · {MOCK_INTERVIEW_DEMO.type}
            </div>
            
            <div className="h-[3px] w-full bg-[var(--border-color)] mb-6" />
            
            {/* Skill Bars Section */}
            <div className="mb-8">
              <h4 className="text-xs font-extrabold text-[var(--ink)] uppercase tracking-widest mb-6">
                Your Performance
              </h4>
              <div className="flex flex-col gap-5">
                {MOCK_INTERVIEW_DEMO.skills.map((skill, index) => (
                  <SkillBar 
                    key={skill.label} 
                    label={skill.label} 
                    value={skill.value} 
                    inView={inView} 
                    delay={index * 0.2} 
                  />
                ))}
              </div>
            </div>
            
            {/* CTA Button */}
            <Button variant="custom" className="w-full justify-center mb-4 text-base bg-[#2D5BE3] text-white hover:bg-[#2044B0] border-[var(--border-color)] hover:shadow-[4px_4px_0px_0px_var(--shadow-color)] py-3 border-2">
              Schedule Mock Interview →
            </Button>
            
            {/* Students Count */}
            <p className="text-center text-xs text-[var(--ink-muted)] font-bold uppercase tracking-widest">
              Join 2,500+ students practicing
            </p>
          </div>
        </AnimatedCard>

      </div>
    </section>
  );
}
