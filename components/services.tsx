'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/lib/translations';
import { Zap, Globe, ShoppingCart, Calendar, Package, Settings } from 'lucide-react';

const iconMap = {
  1: <Globe className="w-8 h-8" />,
  2: <Globe className="w-8 h-8" />,
  3: <Settings className="w-8 h-8" />,
  4: <ShoppingCart className="w-8 h-8" />,
  5: <Package className="w-8 h-8" />,
  6: <Calendar className="w-8 h-8" />,
  7: <Zap className="w-8 h-8" />,
  8: <Settings className="w-8 h-8" />,
};

const imageMap: Record<number, string> = {
  1: '/images/service-landing.png',
  2: '/images/service-company.png',
  3: '/images/service-business.png',
  4: '/images/service-ecommerce.png',
  5: '/images/service-cafe.png',
  6: '/images/service-book.png',
  7: '/images/service-pos.png',
  8: '/images/service-morfosa.png',
};

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">{t.services.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service) => (
            <div
              key={service.id}
              className="glass dark:glass-dark overflow-hidden rounded-xl hover:glow-primary transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Service Image */}
              <div className="relative w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <Image
                  src={imageMap[service.id] || '/images/logo.png'}
                  alt={service.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg text-primary">
                    {iconMap[service.id as keyof typeof iconMap]}
                  </div>
                  <h3 className="text-xl font-bold">{service.name}</h3>
                </div>

                <p className="text-muted-foreground mb-4">{service.description}</p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-primary mb-2">
                  {language === 'id' ? 'Manfaat:' : 'Benefits:'}
                </p>
                <ul className="space-y-1">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 border-t border-border pt-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {language === 'id' ? 'Cocok untuk:' : 'Best for:'}
                  </p>
                  <p className="text-sm font-medium">{service.use}</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-primary">{service.price}</p>
                </div>
              </div>

                <Link
                  href="#contact"
                  className="mt-4 w-full px-4 py-2 bg-primary/20 text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-center"
                >
                  {language === 'id' ? 'Hubungi Kami' : 'Contact Us'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
