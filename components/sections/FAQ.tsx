'use client';

import React, { useState } from 'react';
import { FAQS } from '../../lib/data';
import { Badge } from '../ui/Badge';
import { Accordion } from '../ui/Accordion';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="max-w-3xl mx-auto px-4 md:px-8 py-20 md:py-28">
      <div className="flex flex-col items-center mb-12 text-center">
        <div className="inline-block bg-[#E9D5FF] text-black font-bold uppercase tracking-wider text-xs px-4 py-1.5 rounded-full border-2 border-[var(--border-color)] mb-4 shadow-[2px_2px_0px_0px_var(--shadow-color)]">
          Got Questions?
        </div>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--ink)] mb-4 uppercase">
          Frequently Asked Questions
        </h2>
        <p className="text-base md:text-lg text-[var(--ink-muted)] font-medium">
          Everything you need to know about the product and billing.
        </p>
      </div>

      <div className="flex flex-col border-t-2 border-[var(--border-color)]">
        {FAQS.map((f, i) => (
          <Accordion
            key={i}
            question={f.q}
            answer={f.a}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
