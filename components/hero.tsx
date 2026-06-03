'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/lib/translations';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg -z-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animation-float -z-10" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animation-float -z-10" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animation-float -z-10" style={{ animationDelay: '4s' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text leading-tight">
          {t.hero.title}
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="#contact"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 glow-primary"
          >
            {t.hero.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#services"
            className="px-8 py-3 bg-secondary/20 text-secondary border border-secondary/50 rounded-lg font-semibold hover:bg-secondary/30 transition-all glass"
          >
            {t.hero.explore}
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { icon: '⚡', label: language === 'id' ? 'Cepat' : 'Fast' },
            { icon: '🎨', label: language === 'id' ? 'Modern' : 'Modern' },
            { icon: '📱', label: language === 'id' ? 'Responsive' : 'Responsive' },
            { icon: '🚀', label: language === 'id' ? 'Scalable' : 'Scalable' },
          ].map((feature, index) => (
            <div
              key={index}
              className="glass dark:glass-dark p-4 rounded-lg text-center hover:glow-primary transition-all"
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <p className="text-sm font-medium">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
