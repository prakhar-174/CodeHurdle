import React from 'react';

export function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-block bg-tag-bg dark:bg-tag-bg/20 text-tag-ink dark:text-accent-soft text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide ${className}`}>
      {children}
    </span>
  );
}
