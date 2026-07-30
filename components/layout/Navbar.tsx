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
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Mentors', href: '#mentors' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[var(--canvas)]/90 backdrop-blur-md border-b-2 border-[var(--border-color)] h-20 transition-colors">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 text-[var(--ink)] z-50 relative">
            <Zap className="text-[#2D5BE3]" size={28} fill="currentColor" />
            <span className="font-display font-extrabold text-2xl tracking-tighter">CodeHurdle</span>
          </Link>
          
          {/* Center: Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-bold text-[var(--ink)] hover:text-[#2D5BE3] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="font-bold border-0 hover:-translate-y-1 text-[var(--ink)]">Login</Button>
            <Button variant="custom" size="sm" className="bg-[#E9D5FF] text-black hover:bg-[#E9D5FF] border-[var(--border-color)] hover:shadow-[4px_4px_0px_0px_var(--shadow-color)]">Sign Up</Button>
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
                className={`w-5 h-[2px] bg-[var(--ink)] rounded-full transition-transform origin-center`}
                style={{
                  transitionDuration: '350ms',
                  transitionTimingFunction: 'cubic-bezier(.34,1.56,.64,1)',
                  transform: isMenuOpen ? 'translateY(6px) rotate(45deg)' : 'translateY(0) rotate(0)',
                }}
              />
              <div 
                className={`w-5 h-[2px] bg-[var(--ink)] rounded-full transition-all origin-center`}
                style={{
                  transitionDuration: '350ms',
                  transitionTimingFunction: 'cubic-bezier(.34,1.56,.64,1)',
                  opacity: isMenuOpen ? 0 : 1,
                  transform: isMenuOpen ? 'scaleX(0)' : 'scaleX(1)',
                }}
              />
              <div 
                className={`w-5 h-[2px] bg-[var(--ink)] rounded-full transition-transform origin-center`}
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
              className="relative w-[75vw] max-w-[300px] h-full bg-[var(--canvas)] shadow-[-8px_0px_0px_0px_var(--shadow-color)] border-l-2 border-[var(--border-color)] flex flex-col justify-between pt-28 pb-10 px-8 overflow-y-auto transition-colors"
            >
              {/* Web Strand Line (Left Edge) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2D5BE3]/30 to-transparent"
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
                      className="text-3xl font-display font-extrabold text-[var(--ink)] hover:text-[#2D5BE3] transition-colors inline-block"
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
                <Button variant="ghost" size="md" className="w-full justify-center text-[var(--ink)] border-[var(--border-color)]">Login</Button>
                <Button variant="custom" size="md" className="w-full justify-center bg-[#E9D5FF] text-black border-[var(--border-color)] border-2">Sign Up</Button>
              </motion.div>
              
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
