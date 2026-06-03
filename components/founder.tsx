'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/lib/translations';
import { User } from 'lucide-react';

export default function Founder() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="founder" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">{t.founder.title}</h2>
        </div>

        <div className="glass dark:glass-dark p-8 sm:p-12 rounded-xl glow-primary">
          <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
            {/* Avatar */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 overflow-hidden">
              <Image
                src="/images/founder.png"
                alt="Hasan Aufar"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">{t.founder.name}</h3>
              <p className="text-lg sm:text-xl text-primary font-semibold mb-4">{t.founder.role}</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">{t.founder.description}</p>

              {/* Expertise */}
              <div>
                <p className="font-semibold mb-3">
                  {language === 'id' ? 'Keahlian:' : 'Expertise:'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {t.founder.expertise.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
