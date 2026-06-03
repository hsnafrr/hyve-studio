'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/lib/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  const quickLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/logo.png"
                  alt="Hyve Studio"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg gradient-text">Hyve Studio</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">{t.footer.links}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hyvestudio1504@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  hyvestudio1504@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6289620928296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +62 896-209-28296
                </a>
              </li>
            </ul>
          </div>


        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>{t.footer.copyright}</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link
                href="#"
                className="hover:text-primary transition-colors"
              >
                {language === 'id' ? 'Privasi' : 'Privacy'}
              </Link>
              <Link
                href="#"
                className="hover:text-primary transition-colors"
              >
                {language === 'id' ? 'Syarat & Ketentuan' : 'Terms & Conditions'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
