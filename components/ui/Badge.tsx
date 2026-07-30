import React from 'react';

export function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-block bg-[#FFE8D6] text-black border-2 border-[var(--border-color)] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[2px_2px_0px_0px_var(--shadow-color)] ${className}`}>
      {children}
    </span>
  );
}
