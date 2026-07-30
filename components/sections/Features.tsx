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
  return (
    <section className="py-20 md:py-28 max-w-6xl mx-auto px-4 md:px-8">
      <div className="flex flex-col items-center mb-14 text-center">
        <Badge className="mb-4">✦ Everything You Need</Badge>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink dark:text-ink-dark mb-4">
          One Platform. Every Skill.
        </h2>
        <p className="text-base md:text-lg text-ink-muted dark:text-ink-muted-dark max-w-2xl">
          From foundational arrays to advanced system design patterns, everything you need to crack the hardest technical interviews.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map((feature, index) => (
          <AnimatedCard key={feature.title} delay={index * 0.08}>
            <div className="group h-full bg-card dark:bg-card-dark border border-border dark:border-border-dark rounded-2xl p-6 md:p-8 hover:border-accent/30 dark:hover:border-accent-dark/30 hover:shadow-lg transition-all duration-200 cursor-default flex flex-col hover:scale-[1.01]">
              <div className="w-10 h-10 rounded-xl bg-accent-soft dark:bg-accent-dark/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                {getIcon(feature.icon)}
              </div>
              <h3 className="font-display font-semibold text-lg text-ink dark:text-ink-dark mb-2 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed flex-grow">
                {feature.description}
              </p>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
