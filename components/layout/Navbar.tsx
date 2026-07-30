'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Mentors', href: '#' },
    { name: 'FAQs', href: '#' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-canvas/80 dark:bg-canvas-dark/80 backdrop-blur-md border-b border-border dark:border-border-dark h-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 text-ink dark:text-ink-dark z-50 relative">
            <Zap className="text-accent dark:text-accent-dark" size={24} fill="currentColor" />
            <span className="font-display font-bold text-xl tracking-tight">CodeHurdle</span>
          </Link>
          
          {/* Center: Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-ink-muted hover:text-ink dark:text-ink-muted-dark dark:hover:text-ink-dark transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button variant="secondary" size="sm">Sign In</Button>
            <Button variant="primary" size="sm">Get Started</Button>
          </div>
          
          {/* Mobile Toggle & Actions */}
          <div className="flex md:hidden items-center gap-4 z-50 relative">
            <ThemeToggle />
            <button 
              className="relative w-8 h-8 flex flex-col items-center justify-center gap-[4.5px] focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {/* CSS Morphed Hamburger Icon */}
              <div 
                className={`w-5 h-[1.5px] bg-ink dark:bg-ink-dark rounded-full transition-transform origin-center`}
                style={{
                  transitionDuration: '350ms',
                  transitionTimingFunction: 'cubic-bezier(.34,1.56,.64,1)',
                  transform: isMenuOpen ? 'translateY(6px) rotate(45deg)' : 'translateY(0) rotate(0)',
                }}
              />
              <div 
                className={`w-5 h-[1.5px] bg-ink dark:bg-ink-dark rounded-full transition-all origin-center`}
                style={{
                  transitionDuration: '350ms',
                  transitionTimingFunction: 'cubic-bezier(.34,1.56,.64,1)',
                  opacity: isMenuOpen ? 0 : 1,
                  transform: isMenuOpen ? 'scaleX(0)' : 'scaleX(1)',
                }}
              />
              <div 
                className={`w-5 h-[1.5px] bg-ink dark:bg-ink-dark rounded-full transition-transform origin-center`}
                style={{
                  transitionDuration: '350ms',
                  transitionTimingFunction: 'cubic-bezier(.34,1.56,.64,1)',
                  transform: isMenuOpen ? 'translateY(-6px) rotate(-45deg)' : 'translateY(0) rotate(0)',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Custom Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} // Expo Out
              className="relative w-[75vw] max-w-[300px] h-full bg-canvas dark:bg-[#0A0A0A] shadow-2xl flex flex-col justify-between pt-28 pb-10 px-8 overflow-y-auto"
            >
              {/* Web Strand Line (Left Edge) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 dark:via-accent-dark/30 to-transparent"
              />

              {/* Menu Links — vertically spread */}
              <nav className="flex flex-col gap-10">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.18 + (i * 0.05),
                      ease: "easeOut"
                    }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-display font-medium text-ink dark:text-ink-dark hover:text-accent dark:hover:text-accent-dark transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Actions — pushed to bottom */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.18 + (navLinks.length * 0.05) }}
                className="flex flex-col gap-4 mt-auto"
              >
                <Button variant="secondary" size="md" className="w-full justify-center">Sign In</Button>
                <Button variant="primary" size="md" className="w-full justify-center">Get Started</Button>
              </motion.div>
              
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
