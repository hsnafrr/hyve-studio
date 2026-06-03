'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/lib/translations';
import { ExternalLink, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">{t.portfolio.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.portfolio.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.portfolio.projects.map((project) => (
            <div
              key={project.id}
              className="glass dark:glass-dark rounded-xl p-6 hover:glow-primary transition-all duration-300 hover:-translate-y-1"
            >
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">
                        {language === 'id' ? 'Industri' : 'Industry'}
                      </p>
                      <p className="text-sm">{project.industry}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">
                        {language === 'id' ? 'Tujuan' : 'Goal'}
                      </p>
                      <p className="text-sm">{project.goal}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-semibold text-accent">
                      {language === 'id' ? 'Highlight:' : 'Highlights:'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.slice(0, 3).map((highlight, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
                  >
                    {language === 'id' ? 'Lihat Proyek' : 'View Project'}
                    <ExternalLink className="w-4 h-4" />
                  </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity glow-primary"
          >
            {language === 'id' ? 'Lihat Lebih Banyak' : 'View More'}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
