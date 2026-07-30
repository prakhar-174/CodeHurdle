'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function Accordion({ question, answer, isOpen, onToggle }: AccordionProps) {
  return (
    <div className="border-b-2 border-[var(--border-color)] last:border-b-0 overflow-hidden transition-colors">
      <button
        className="w-full py-6 px-2 flex justify-between items-center text-left focus-visible:ring-2 focus-visible:ring-[#2D5BE3] focus-visible:ring-offset-2 outline-none cursor-pointer group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-extrabold text-[var(--ink)] text-lg md:text-xl pr-4 group-hover:text-[#2D5BE3] transition-colors uppercase tracking-tight">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border-2 border-transparent transition-colors ${isOpen ? 'bg-[#FFE8D6] text-black border-[var(--border-color)] shadow-[2px_2px_0px_0px_var(--shadow-color)]' : 'text-[var(--ink-muted)] bg-transparent'}`}
        >
          <ChevronDown size={24} className="stroke-[3px]" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
            role="region"
          >
            <div className="pb-6 px-2 text-[var(--ink-muted)] font-medium text-base md:text-lg leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
