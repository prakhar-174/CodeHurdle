'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Search, Sparkles, BookOpen, GraduationCap, ChevronRight } from 'lucide-react';

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-start pt-20 pb-16 px-5 overflow-hidden bg-[var(--canvas)] transition-colors">
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl mx-auto flex flex-col items-center z-10 relative"
      >
        
        {/* Floating elements */}
        <motion.div 
          animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[5%] top-[10%] hidden lg:flex flex-col items-center bg-[#E9D5FF] border-2 border-[var(--border-color)] rounded-2xl p-4 shadow-[4px_4px_0px_0px_var(--shadow-color)]"
        >
          <div className="w-16 h-16 bg-[#FFE8D6] rounded-full border-2 border-[var(--border-color)] flex items-center justify-center mb-2 overflow-hidden">
            <img src="https://i.pravatar.cc/150?img=32" alt="Student" className="w-full h-full object-cover" />
          </div>
          <span className="font-display font-extrabold text-xl tracking-tighter text-black">12M+</span>
          <span className="font-body text-xs font-bold uppercase tracking-wider text-black">STUDENT</span>
        </motion.div>

        <motion.div 
          animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[5%] top-[30%] hidden lg:flex items-center justify-center"
        >
          <img src="https://illustrations.popsy.co/amber/student-going-to-school.svg" alt="Globe" className="w-32 h-32 opacity-80 mix-blend-multiply dark:mix-blend-normal dark:bg-white dark:rounded-full dark:border-4 dark:border-[var(--border-color)]" />
        </motion.div>


        {/* HEADLINE */}
        <div className="w-full text-center max-w-[1000px] relative">
          
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-2 mb-10">
            {/* LINE 1 */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-5xl md:text-7xl lg:text-[100px] font-display font-extrabold leading-[0.9] tracking-tighter uppercase text-[var(--ink)]">
              <span>FIND YOUR BEST</span>
            </div>
            
            {/* LINE 2 */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-5xl md:text-7xl lg:text-[100px] font-display font-extrabold leading-[0.9] tracking-tighter uppercase text-[var(--ink)]">
              <span>COURSE</span>
              
              <div className="inline-flex items-center gap-3 bg-[#FFF1E6] border-[3px] border-[var(--border-color)] rounded-full px-6 py-2 shadow-[4px_4px_0px_0px_var(--shadow-color)] -translate-y-2">
                <BookOpen className="text-black w-8 h-8 md:w-12 md:h-12" strokeWidth={2} />
                <div className="w-16 md:w-24 h-1 bg-black rounded-full relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 border-t-4 border-r-4 border-black rotate-45 rounded-sm origin-center translate-x-1" />
                </div>
              </div>
              
              <span>LEARN</span>
            </div>
            
            {/* LINE 3 */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-5xl md:text-7xl lg:text-[100px] font-display font-extrabold leading-[0.9] tracking-tighter uppercase text-[var(--ink)] relative">
              <Sparkles className="text-[#FFD5B3] w-12 h-12 md:w-20 md:h-20 fill-[#FFD5B3] stroke-[var(--border-color)] stroke-2 -rotate-12" />
              <span>SKILL FASTER</span>
              
              <div className="hidden md:flex flex-col text-left ml-4 -translate-y-2">
                <span className="font-body text-xs leading-snug font-bold max-w-[160px] text-[var(--ink-muted)] capitalize">
                  Simplified and straight to the point courses created for you.
                </span>
              </div>
            </div>

          </motion.div>

          {/* Search Bar / CTA Pill */}
          <motion.div variants={itemVariants} className="flex justify-center mt-12 mb-12 relative z-20">
            <div className="flex items-center w-full max-w-[700px] bg-[var(--canvas-alt)] border-[3px] border-[var(--border-color)] rounded-full p-2 shadow-[8px_8px_0px_0px_var(--shadow-color)]">
              <input 
                type="text" 
                placeholder="SEARCH" 
                className="flex-1 bg-transparent border-none outline-none px-6 font-display font-bold text-2xl placeholder:text-[var(--ink)] uppercase tracking-wider text-[var(--ink)]"
                readOnly
              />
              <button className="w-14 h-14 md:w-16 md:h-16 bg-[#E9D5FF] border-2 border-[var(--border-color)] rounded-full flex items-center justify-center hover:bg-[#D8B4FE] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--shadow-color)] transition-all cursor-pointer group">
                <Search className="w-6 h-6 md:w-8 md:h-8 text-black group-hover:scale-110 transition-transform" strokeWidth={3} />
              </button>
            </div>
            
            {/* Decorative dashes */}
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 rotate-12">
              <div className="w-8 h-1.5 bg-[var(--border-color)] rounded-full rotate-[-20deg] origin-left" />
              <div className="w-10 h-1.5 bg-[var(--border-color)] rounded-full" />
              <div className="w-8 h-1.5 bg-[var(--border-color)] rounded-full rotate-[20deg] origin-left" />
            </div>
          </motion.div>

        </div>

      </motion.div>

      {/* Decorative Bottom Arch container for future content */}
      <div className="w-full absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-[var(--canvas-alt)] to-transparent pointer-events-none z-0 transition-colors" />
      
    </section>
  );
}
