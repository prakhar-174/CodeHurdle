'use client';

import React, { useState } from 'react';
import { FAQS } from '../../lib/data';
import { Badge } from '../ui/Badge';
import { Accordion } from '../ui/Accordion';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-3xl mx-auto px-4 md:px-8 py-20 md:py-28">
      <div className="flex flex-col items-center mb-12 text-center">
        <Badge className="mb-4">✦ Got Questions?</Badge>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink dark:text-ink-dark mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-base md:text-lg text-ink-muted dark:text-ink-muted-dark">
          Everything you need to know about the product and billing.
        </p>
      </div>

      <div className="flex flex-col border-t border-border dark:border-border-dark">
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
