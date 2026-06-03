'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { translations } from '@/lib/translations';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('submitting');
    
    // Simulate form submission (no backend)
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const contactLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: t.contact.info.email,
      value: 'hyvestudio1504@gmail.com',
      href: 'mailto:hyvestudio1504@gmail.com',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      label: t.contact.info.whatsapp,
      value: '+62 896-209-28296',
      href: 'https://wa.me/6289620928296',
    },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/hy.vestudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      icon: '🅾',
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@hyve.studio?_r=1&_t=ZS-96sOOrgwGm4',
      icon: '♪',
    },
    {
      name: 'Twitter',
      href: 'https://x.com/hsnafrr15',
      icon: '𝕏',
    },
    {
      name: 'Github',
      href: 'https://github.com/hsnafrr?tab=repositories',
      icon: '𝐆',
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass dark:glass-dark p-8 rounded-lg glow-primary">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t.contact.form.name}</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder={language === 'id' ? 'Nama lengkap Anda' : 'Your full name'}
                  className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  disabled={status === 'submitting'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t.contact.form.email}</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder={language === 'id' ? 'Email Anda' : 'Your email'}
                  className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  disabled={status === 'submitting'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t.contact.form.message}</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder={language === 'id' ? 'Pesan Anda' : 'Your message'}
                  rows={5}
                  className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  disabled={status === 'submitting'}
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="p-4 bg-green-500/20 text-green-700 dark:text-green-300 rounded-lg border border-green-500/50">
                  ✓ {t.contact.form.success}
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-500/20 text-red-700 dark:text-red-300 rounded-lg border border-red-500/50">
                  ✗ {t.contact.form.error}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2 glow-primary"
              >
                <Send className="w-4 h-4" />
                {status === 'submitting' ? t.contact.form.sending : t.contact.form.send}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Direct Contact */}
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass dark:glass-dark p-6 rounded-lg hover:glow-accent transition-all group block"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{link.label}</h3>
                    <p className="text-muted-foreground">{link.value}</p>
                  </div>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="glass dark:glass-dark p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">{t.contact.info.instagram}</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-all text-center"
                    title={social.name}
                  >
                    <div className="text-3xl mb-2">{social.icon}</div>
                    <p className="text-xs font-medium">{social.name}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Why Us */}            <div className="glass dark:glass-dark p-6 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5">
              <h3 className="font-bold text-lg mb-4">{language === 'id' ? 'Mengapa Hyve Studio?' : 'Why Hyve Studio?'}</h3>
              <ul className="space-y-2">
                {t.whyUs.items.slice(0, 4).map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
