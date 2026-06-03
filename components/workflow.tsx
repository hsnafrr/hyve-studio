'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/lib/translations';

export default function Workflow() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="workflow" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">{t.workflow.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.workflow.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.workflow.steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < t.workflow.steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-6 h-1 bg-gradient-to-r from-primary to-secondary" />
              )}

              <div className="glass dark:glass-dark p-6 rounded-lg hover:glow-primary transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold">{step.name}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
