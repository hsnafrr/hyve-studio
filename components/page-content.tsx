'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Workflow from '@/components/workflow';
import Portfolio from '@/components/portfolio';
import Founder from '@/components/founder';
import Pricing from '@/components/pricing';
import FAQ from '@/components/faq';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function PageContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="bg-background text-foreground min-h-screen">
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Workflow />
      <Portfolio />
      <Founder />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
