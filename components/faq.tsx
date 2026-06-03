'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/lib/translations';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const { language } = useLanguage();
  const t = translations[language];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">{t.faq.title}</h2>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((item, index) => (
            <div
              key={index}
              className="glass dark:glass-dark rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-left font-semibold text-lg">{item.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 border-t border-border pt-4">
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 glass dark:glass-dark p-8 rounded-lg text-center glow-primary">
          <h3 className="text-2xl font-bold mb-4">
            {language === 'id' ? 'Tidak menemukan jawaban?' : 'Didn&apos;t find an answer?'}
          </h3>
          <p className="text-muted-foreground mb-6">
            {language === 'id'
              ? 'Hubungi kami melalui form kontak atau langsung via WhatsApp untuk bantuan lebih lanjut.'
              : 'Contact us via the contact form or reach out on WhatsApp for further assistance.'}
          </p>
          <a
            href="https://wa.me/6289620928296"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
