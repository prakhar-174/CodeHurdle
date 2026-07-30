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
    <div className="border-b border-border dark:border-border-dark last:border-b-0 overflow-hidden">
      <button
        className="w-full py-6 px-2 flex justify-between items-center text-left focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 outline-none cursor-pointer group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-ink dark:text-ink-dark text-lg md:text-xl pr-4 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${isOpen ? 'bg-accent/10 text-accent dark:bg-accent-dark/20 dark:text-accent-dark' : 'text-ink-muted dark:text-ink-muted-dark bg-transparent'}`}
        >
          <ChevronDown size={20} />
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
            <div className="pb-6 px-2 text-ink-muted dark:text-ink-muted-dark text-base md:text-lg leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
