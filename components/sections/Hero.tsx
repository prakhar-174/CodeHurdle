'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Target, CheckCircle2, Clock, Flame, ChevronRight, Play } from 'lucide-react';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const h1Words = ["Stop", "Grinding.", "Start", "Cracking."];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-16 md:pb-10 overflow-hidden bg-canvas dark:bg-[#080808]">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 dark:bg-accent-dark/30 rounded-full blur-[120px] opacity-60 mix-blend-screen" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,#E2DDD6_1px,transparent_1px)] dark:bg-[radial-gradient(circle,#2A2A2A_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10 w-full">
        
        {/* Left Column (Text) */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group cursor-pointer"
          >
            <Badge className="bg-accent-soft/50 dark:bg-accent-dark/10 border-accent/20 dark:border-accent-dark/30 hover:border-accent dark:hover:border-accent-dark transition-colors">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent dark:bg-accent-dark animate-pulse" />
                Trusted by 5000+ Engineers
              </span>
            </Badge>
          </motion.div>
          
          {/* H1 */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mt-6 mb-5 flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1 text-ink dark:text-ink-dark">
            {h1Words.map((word, i) => (
              <motion.span
                key={i}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={word === "Start" || word === "Cracking." 
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 dark:from-accent-dark dark:to-purple-400 drop-shadow-sm" 
                  : ""}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="text-base md:text-xl text-ink-muted dark:text-ink-muted-dark/90 max-w-lg leading-relaxed font-medium"
          >
            CodeHurdle's structured DSA program has helped <strong className="text-ink dark:text-ink-dark">2,500+ students</strong> crack Google, Amazon, Flipkart, and more. Join live sessions. Practice smart. Get placed.
          </motion.p>
          
          {/* CTA Row */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto"
          >
            <Button variant="primary" size="lg" className="w-full sm:w-auto group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Get Started Free <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto group">
              <span className="flex items-center gap-2">
                <Play size={18} className="text-accent dark:text-accent-dark" fill="currentColor" /> Watch How It Works
              </span>
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            className="mt-8 pt-5 border-t border-border/50 dark:border-border-dark/30 text-sm text-ink-muted dark:text-ink-muted-dark flex items-center justify-center lg:justify-start gap-4 font-medium"
          >
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-canvas dark:border-canvas-dark bg-gray-300 dark:bg-gray-700 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span><strong className="text-ink dark:text-ink-dark">4.9/5</strong> from 2.5k+ reviews</span>
          </motion.div>
        </div>

        {/* Right Column (Dashboard Mockup Card) */}
        <div className="relative w-full max-w-lg mx-auto lg:mx-0 mt-14 lg:mt-0 perspective-1000 z-20">
          
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9, y: 30, rotateX: 10 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {/* Continuous Float Animation */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-500 rounded-[2rem] blur-lg opacity-30 dark:opacity-40" />
              
              {/* Card Container */}
              <div className="relative bg-white/70 dark:bg-[#121212]/80 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-[2rem] p-6 shadow-2xl text-ink dark:text-ink-dark font-body text-left overflow-hidden">
                
                {/* Shine Effect */}
                <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-[shine_4s_infinite]" />

                {/* Header Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-ink-muted dark:text-ink-muted-dark">
                    <Target size={18} className="text-accent dark:text-accent-dark" />
                    <span>Daily Challenge</span>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20">
                    Medium
                  </span>
                </div>
                
                {/* Problem Title */}
                <h3 className="text-xl font-bold mb-4 font-display tracking-tight text-ink dark:text-white">Two Sum &mdash; Array Hash Map</h3>
                
                {/* Tags Row */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Array', 'Hash Map', 'Easy\u2013Medium'].map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1.5 rounded-md bg-canvas dark:bg-white/5 border border-border dark:border-white/10 text-ink-muted dark:text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Code Block */}
                <div className="bg-[#0D0D0D] border border-white/10 rounded-2xl p-5 mb-6 font-mono text-sm overflow-x-auto text-gray-300 leading-loose shadow-inner relative group">
                  {/* Top Bar for Code Block */}
                  <div className="absolute top-0 left-0 w-full h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-1.5 rounded-t-2xl">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="mt-6">
                    <div><span className="text-pink-400">def</span> <span className="text-blue-400">two_sum</span>(nums, target):</div>
                    <div className="pl-4 text-green-300">seen = {'{}'}</div>
                    <div className="pl-4"><span className="text-pink-400">for</span> i, n <span className="text-pink-400">in</span> enumerate(nums):</div>
                  </div>
                </div>
                
                {/* Submit Button */}
                <button className="w-full relative overflow-hidden group bg-accent dark:bg-accent-dark text-white font-bold py-3.5 rounded-xl hover:shadow-lg hover:shadow-accent/30 transition-all mb-6 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Submit Solution <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                {/* Footer Stats Row */}
                <div className="flex items-center justify-between text-xs font-semibold text-ink-muted dark:text-gray-400 pt-4 border-t border-border dark:border-white/10">
                  <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-green-500" /> 847 solved</div>
                  <div className="flex items-center gap-1.5"><Clock size={16} /> avg 12 min</div>
                  <div className="flex items-center gap-1.5"><Flame size={16} className="text-orange-500" /> 3-day streak</div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
