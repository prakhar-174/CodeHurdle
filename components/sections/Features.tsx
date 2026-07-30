import React from 'react';
import { FEATURES } from '../../lib/data';
import { AnimatedCard } from '../ui/AnimatedCard';
import { Badge } from '../ui/Badge';
import { Code2, Target, CheckCircle, BookOpen, BarChart2, Users, Mic, Globe } from 'lucide-react';

const getIcon = (name: string) => {
  const icons: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-accent dark:text-accent-dark" />,
    Target: <Target className="w-5 h-5 text-accent dark:text-accent-dark" />,
    CheckCircle: <CheckCircle className="w-5 h-5 text-accent dark:text-accent-dark" />,
    BookOpen: <BookOpen className="w-5 h-5 text-accent dark:text-accent-dark" />,
    BarChart2: <BarChart2 className="w-5 h-5 text-accent dark:text-accent-dark" />,
    Users: <Users className="w-5 h-5 text-accent dark:text-accent-dark" />,
    Mic: <Mic className="w-5 h-5 text-accent dark:text-accent-dark" />,
    Globe: <Globe className="w-5 h-5 text-accent dark:text-accent-dark" />
  };
  return icons[name] || <Code2 className="w-5 h-5 text-accent dark:text-accent-dark" />;
};

export function Features() {
  const bgColors = ['bg-[#FFE8D6]', 'bg-[#E9D5FF]', 'bg-[#FFD5B3]', 'bg-[#FFF1E6]', 'bg-[#F3E8FF]', 'bg-[#FFFBF2]'];

  return (
    <section id="features" className="py-20 md:py-28 max-w-6xl mx-auto px-4 md:px-8 bg-[var(--canvas)] transition-colors">
      <div className="flex flex-col items-center mb-14 text-center">
        <div className="inline-block bg-[#FFE8D6] text-black font-bold uppercase tracking-wider text-xs px-4 py-1.5 rounded-full border-2 border-[var(--border-color)] mb-4">
          Everything You Need
        </div>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--ink)] mb-4 uppercase">
          One Platform. Every Skill.
        </h2>
        <p className="text-base md:text-lg text-[var(--ink-muted)] max-w-2xl font-medium">
          From foundational arrays to advanced system design patterns, everything you need to crack the hardest technical interviews.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((feature, index) => {
          const bgColors = ['bg-[#FFE8D6] text-black', 'bg-[#E9D5FF] text-black', 'bg-[#FFD5B3] text-black', 'bg-[#FFF1E6] text-black', 'bg-[#F3E8FF] text-black', 'bg-[var(--canvas-alt)] text-[var(--ink)]'];
          const currentBg = bgColors[index % bgColors.length];
          return (
          <AnimatedCard key={feature.title} delay={index * 0.08}>
            <div className={`group h-full ${currentBg} border-[3px] border-[var(--border-color)] rounded-3xl p-6 md:p-8 shadow-[4px_4px_0px_0px_var(--shadow-color)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_var(--shadow-color)] transition-all duration-300 cursor-default flex flex-col`}>
              <div className="w-12 h-12 rounded-full bg-white dark:bg-black border-2 border-[var(--border-color)] flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_var(--shadow-color)] group-hover:scale-110 transition-transform">
                {React.cloneElement(getIcon(feature.icon) as React.ReactElement, { className: 'w-6 h-6 text-black dark:text-white' })}
              </div>
              <h3 className="font-display font-extrabold text-xl mb-3 uppercase tracking-tight text-inherit">
                {feature.title}
              </h3>
              <p className="text-sm font-medium opacity-80 leading-relaxed flex-grow text-inherit">
                {feature.description}
              </p>
            </div>
          </AnimatedCard>
        )})}
      </div>
    </section>
  );
}
