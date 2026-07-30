'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />; // placeholder
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-10 h-10 border-2 border-[var(--border-color)] rounded-full flex items-center justify-center bg-[var(--canvas-alt)] text-[var(--ink)] shadow-[2px_2px_0px_0px_var(--shadow-color)] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--shadow-color)] transition-all cursor-pointer"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <Moon size={20} className="fill-[var(--ink)]" /> : <Sun size={20} className="fill-[var(--ink)]" />}
    </button>
  );
}
