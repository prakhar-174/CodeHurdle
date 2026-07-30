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
    <section className="bg-canvas dark:bg-canvas-dark py-20 md:py-28 w-full border-t border-border dark:border-border-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Left Column */}
        <div className="flex flex-col items-start text-left">
          <Badge className="mb-4">✦ Practice & Improve</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink dark:text-ink-dark mb-6 leading-tight">
            Mock Interviews That Feel Real
          </h2>
          <p className="text-base md:text-lg text-ink-muted dark:text-ink-dark/80 leading-relaxed mb-8 max-w-md">
            Practice with engineers from top companies. Get scored on Technical Skills, Communication, and Problem Solving. Know exactly what to fix before the real interview.
          </p>
          
          <ul className="flex flex-col gap-4 mb-10">
            {featureList.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-ink dark:text-ink-dark font-medium">
                <CheckCircle2 className="text-success w-5 h-5 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          
          <Button variant="primary" size="lg">Schedule a Mock Interview</Button>
        </div>

        {/* Right Column */}
        <AnimatedCard className="w-full">
          <div ref={ref} className="bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-2xl p-8 shadow-lg max-w-md mx-auto lg:mr-0 w-full">
            
            {/* Header Row */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-xl font-bold text-ink dark:text-ink-dark">
                Mock Interview
              </h3>
              <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500 px-2 py-1 rounded font-bold text-sm">
                <span>{MOCK_INTERVIEW_DEMO.rating}</span>
                <Star size={14} fill="currentColor" />
              </div>
            </div>
            
            {/* Meta Row */}
            <div className="text-sm font-medium text-ink-muted dark:text-ink-muted-dark mb-6">
              {MOCK_INTERVIEW_DEMO.duration} · {MOCK_INTERVIEW_DEMO.difficulty} · {MOCK_INTERVIEW_DEMO.type}
            </div>
            
            <div className="h-px w-full bg-border dark:bg-border-dark mb-6" />
            
            {/* Skill Bars Section */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-ink dark:text-ink-dark uppercase tracking-widest mb-6">
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
            <Button variant="primary" className="w-full justify-center mb-4 text-base">
              Schedule Mock Interview →
            </Button>
            
            {/* Students Count */}
            <p className="text-center text-xs text-ink-muted dark:text-ink-muted-dark font-medium">
              Join 2,500+ students already practicing
            </p>
          </div>
        </AnimatedCard>

      </div>
    </section>
  );
}
