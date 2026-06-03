'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/lib/translations';
import { Check } from 'lucide-react';

export default function Pricing() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">{t.pricing.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.pricing.subtitle}</p>
        </div>

        {/* Services Pricing */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.services.items.map((service) => (
              <div
                key={service.id}
                className="glass dark:glass-dark p-6 rounded-lg hover:glow-primary transition-all"
              >
                <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                <p className="text-2xl font-bold text-primary mb-2">{service.price}</p>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support & Hosting */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Monthly Support */}
          <div className="glass dark:glass-dark p-8 rounded-lg glow-primary">
            <h3 className="text-2xl font-bold mb-2">{t.pricing.support}</h3>
            <p className="text-3xl font-bold text-primary mb-4">{t.pricing.supportPrice}</p>
            <p className="text-muted-foreground mb-6">{t.pricing.supportDesc}</p>
            
            <ul className="space-y-3">
              {[
                language === 'id' ? 'Update dan perbaikan berkala' : 'Regular updates and fixes',
                language === 'id' ? 'Technical support 24/7' : '24/7 technical support',
                language === 'id' ? 'Performance monitoring' : 'Performance monitoring',
                language === 'id' ? 'Security patches' : 'Security patches',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </ul>
          </div>

          {/* Hosting & Domain */}
          <div className="glass dark:glass-dark p-8 rounded-lg glow-accent">
            <h3 className="text-2xl font-bold mb-2">{t.pricing.hosting}</h3>
            <p className="text-muted-foreground mb-6">{t.pricing.hostingDesc}</p>
            
            <div className="space-y-3 mb-6">
              {t.pricing.domains.map((domain, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                >
                  <span className="font-semibold">{domain.extension}</span>
                  <div className="text-right">
                    <p className="text-sm">{domain.price}</p>
                    <p className="text-xs text-muted-foreground">
                      {language === 'id' ? 'Perpanjangan' : 'Renewal'}: {domain.renewal}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              {language === 'id'
                ? 'Harga dapat berubah. Hubungi kami untuk penawaran terbaik.'
                : 'Prices may vary. Contact us for the best offers.'}
            </p>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">{language === 'id' ? 'Fitur Unggulan Kami' : 'Our Key Features'}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: '🎨',
                title: language === 'id' ? 'Desain Modern' : 'Modern Design',
                desc: language === 'id' ? 'UI/UX premium dan futuristik' : 'Premium & futuristic UI/UX',
              },
              {
                icon: '📱',
                title: language === 'id' ? 'Responsive' : 'Responsive',
                desc: language === 'id' ? 'Mobile-first & fully responsive' : 'Mobile-first & fully responsive',
              },
              {
                icon: '⚡',
                title: language === 'id' ? 'Performa' : 'Performance',
                desc: language === 'id' ? 'Loading cepat & optimasi SEO' : 'Fast loading & SEO optimized',
              },
              {
                icon: '🔒',
                title: language === 'id' ? 'Aman' : 'Secure',
                desc: language === 'id' ? 'SSL & best practices keamanan' : 'SSL & security best practices',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass dark:glass-dark p-6 rounded-lg text-center hover:glow-primary transition-all"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
