export type Language = 'id' | 'en';

export const translations = {
  id: {
    // Navigation
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      services: 'Layanan',
      portfolio: 'Portofolio',
      pricing: 'Harga',
      faq: 'FAQ',
      contact: 'Kontak',
    },
    // Hero Section
    hero: {
      title: 'Bangun Masa Depan Digital Anda Bersama Hyve Studio',
      subtitle: 'Kami membangun website modern dan sistem digital yang scalable untuk bisnis dan brand Indonesia dengan fokus pada desain premium, performa tinggi, dan arsitektur yang dapat dimelihara.',
      cta: 'Mulai Sekarang',
      explore: 'Jelajahi Layanan',
    },
    // About Section
    about: {
      title: 'Tentang Hyve Studio',
      description: 'Hyve Studio didirikan pada 15 April 2025 oleh Hasan Aufar dengan visi untuk membantu bisnis berpindah ke era digital melalui website modern, sistem yang scalable, dan pengalaman digital yang user-focused.',
      vision: 'Visi kami adalah menjadi partner terpercaya untuk transformasi digital di Indonesia.',
      mission: 'Misi kami adalah menciptakan solusi digital yang premium, performan, dan berkelanjutan untuk setiap klien.',
    },
    // Services Section
    services: {
      title: 'Layanan Kami',
      subtitle: 'Solusi digital komprehensif untuk setiap kebutuhan bisnis Anda',
      items: [
        {
          id: 1,
          name: 'Landing Page Website',
          description: 'Website satu halaman untuk memperkenalkan bisnis dan mendorong konversi cepat',
          benefits: ['Desain modern', 'Mobile responsive', 'Performa cepat', 'Optimasi SEO'],
          use: 'Bisnis kecil, UMKM, Personal branding',
          price: 'Rp1.000.000 – Rp1.500.000',
        },
        {
          id: 2,
          name: 'Company Profile Website',
          description: 'Website profesional untuk membangun kredibilitas dan identitas digital perusahaan',
          benefits: ['Desain premium', 'Multi-page structure', 'Portfolio showcase', 'Blog section'],
          use: 'Agensi, Startup, Distributor, Institusi',
          price: 'Rp2.000.000 – Rp6.000.000',
        },
        {
          id: 3,
          name: 'Business Website Pro',
          description: 'Website advanced dengan fitur operasional dan manajemen konten',
          benefits: ['Admin dashboard', 'Booking system', 'Multi-language', 'Analytics'],
          use: 'Restoran, Gym, Klinik, Salon, Hotel',
          price: 'Rp3.500.000 – Rp8.000.000',
        },
        {
          id: 4,
          name: 'E-Commerce Website',
          description: 'Toko online lengkap untuk menjual produk dengan fitur transaksi modern',
          benefits: ['Product catalog', 'Payment gateway', 'Order management', 'Shipping automation'],
          use: 'Fashion, Skincare, Digital products, Brand lokal',
          price: 'Rp4.000.000 – Rp15.000.000',
        },
        {
          id: 5,
          name: 'Restaurant / Cafe Website',
          description: 'Website khusus untuk bisnis F&B dengan menu digital dan pemesanan online',
          benefits: ['Digital menu', 'Online ordering', 'Table reservation', 'Promo banners'],
          use: 'Restoran, Kafe, Coffee shop, Cloud kitchen',
          price: 'Rp2.500.000 – Rp7.500.000',
        },
        {
          id: 6,
          name: 'Booking & Reservation System',
          description: 'Sistem booking online untuk mengurangi beban admin dan meningkatkan kenyamanan pelanggan',
          benefits: ['Booking calendar', 'Time slot selection', 'Auto reminders', 'Admin dashboard'],
          use: 'Klinik, Salon, Studio, Gym, Konsultan',
          price: 'Rp2.000.000 – Rp6.000.000',
        },
        {
          id: 7,
          name: 'POS / Cashier System',
          description: 'Sistem kasir digital untuk mengelola transaksi penjualan dan operasional bisnis',
          benefits: ['Digital cashier', 'Discount & tax handling', 'QRIS payment', 'Sales reports'],
          use: 'Restoran, Kafe, Toko retail, Laundry',
          price: 'Rp3.000.000 – Rp12.000.000',
        },
        {
          id: 8,
          name: 'Custom Solution',
          description: 'Solusi custom sesuai kebutuhan unik bisnis Anda dengan teknologi terkini',
          benefits: ['Fully customizable', 'Scalable architecture', 'Technical support', 'Long-term partnership'],
          use: 'Enterprise, Complex requirements',
          price: 'Konsultasi gratis',
        },
      ],
    },
    // Workflow Section
    workflow: {
      title: 'Proses Kerja Kami',
      subtitle: 'Kami mengikuti metodologi profesional untuk setiap proyek',
      steps: [
        {
          number: 1,
          name: 'Discovery',
          description: 'Memahami tujuan bisnis dan kebutuhan proyek Anda secara mendalam.',
        },
        {
          number: 2,
          name: 'Planning',
          description: 'Merancang struktur proyek, sitemap, dan strategi implementasi.',
        },
        {
          number: 3,
          name: 'UI/UX Design',
          description: 'Mendesain interface yang user-friendly dan secara visual menarik.',
        },
        {
          number: 4,
          name: 'Development',
          description: 'Membangun website menggunakan teknologi modern dan best practices.',
        },
        {
          number: 5,
          name: 'Testing',
          description: 'Memastikan fungsionalitas, responsivitas, dan performa optimal.',
        },
        {
          number: 6,
          name: 'Launch',
          description: 'Meluncurkan website ke production dengan monitoring penuh.',
        },
        {
          number: 7,
          name: 'Support',
          description: 'Memberikan maintenance dan update berkelanjutan setelah launch.',
        },
      ],
    },
    // Portfolio Section
    portfolio: {
      title: 'Portofolio Kami',
      subtitle: 'Proyek-proyek nyata yang telah kami kerjakan dengan hasil yang memuaskan',
      projects: [
        {
          id: 1,
          name: 'Morfosa Transport',
          image: '/images/project-morfosa.jpg',
          description: 'Website modern untuk bisnis transportasi dan rental yang meningkatkan presentasi digital dan streamline customer inquiries.',
          highlights: ['Professional company profile', 'Service showcase', 'Mobile-responsive design', 'Contact integration'],
          industry: 'Transportasi & Rental Services',
          goal: 'Membangun kehadiran online yang kuat dan meningkatkan aksesibilitas pelanggan',
          url: 'https://morfosatransportrent.netlify.app/',
        },
        {
          id: 2,
          name: 'Morph3D Studio',
          image: '/images/project-morph3d.jpg',
          description: 'Pengalaman digital modern berfokus 3D dengan interface futuristik dan presentasi interaktif.',
          highlights: ['Modern UI', 'Interactive design', 'Responsive layout', 'High-performance frontend', 'Creative portfolio'],
          industry: 'Creative Technology & Digital Experience',
          goal: 'Mendemonstrasikan prinsip-prinsip web design modern dengan user experience yang immersive',
          url: 'https://morph3d.vercel.app/studio',
        },
        {
          id: 3,
          name: 'Forum Anak Mlati',
          image: '/images/project-forum.jpg',
          description: 'Website organisasi untuk mendukung komunikasi, sharing informasi, dan engagement komunitas youth initiatives.',
          highlights: ['Organization profile', 'Program showcase', 'News pages', 'Responsive design', 'Community-focused'],
          industry: 'Government & Community Organization',
          goal: 'Menyediakan platform digital yang accessible untuk mendukung engagement pemuda',
          url: 'https://forumanakmlati.vercel.app/',
        },
      ],
    },
    // Pricing Section
    pricing: {
      title: 'Paket Harga',
      subtitle: 'Harga kompetitif untuk setiap jenis layanan digital',
      support: 'Monthly Support',
      supportPrice: 'Rp150.000 – Rp250.000/bulan',
      supportDesc: 'Maintenance dan update berkala untuk performa optimal',
      hosting: 'Hosting & Domain',
      hostingDesc: 'Biaya terpisah dari development (contoh Hostinger):',
      domains: [
        { extension: '.com', price: 'Rp165.900', renewal: 'Rp209.900/tahun' },
        { extension: '.org', price: 'Rp215.900', renewal: 'Rp297.900/tahun' },
        { extension: '.de', price: 'Rp82.900', renewal: 'Rp231.900/tahun' },
        { extension: '.fr', price: 'Rp132.900', renewal: 'Rp204.900/tahun' },
      ],
    },
    // Why Choose Us
    whyUs: {
      title: 'Mengapa Memilih Hyve Studio',
      items: [
        'Desain modern dan premium',
        'Layout mobile-first responsive',
        'Arsitektur yang scalable',
        'Workflow development yang cepat',
        'Harga terjangkau untuk bisnis Indonesia',
        'Sistem yang clean dan maintainable',
        'Production-ready practices',
        'Support untuk pertumbuhan jangka panjang',
      ],
    },
    // Founder Section
    founder: {
      title: 'Founder Kami',
      name: 'Hasan Aufar',
      role: 'Frontend Engineer, Web Developer & Digital System Builder',
      description: 'Fokus dalam menciptakan scalable web applications, business systems, dan modern digital experiences yang dapat dimelihara dan berkinerja tinggi.',
      expertise: [
        'SaaS system architectures',
        'E-commerce platforms',
        'Productivity web applications',
        'Educational ticketing systems',
        'Business websites',
        'Dashboard systems',
      ],
    },
    // FAQ Section
    faq: {
      title: 'Pertanyaan Umum',
      items: [
        {
          question: 'Berapa lama waktu pembuatan project?',
          answer: 'Biasanya 1–4 minggu tergantung kompleksitas project dan kebutuhan spesifik.',
        },
        {
          question: 'Apakah hosting dan domain termasuk?',
          answer: 'Hosting dan domain adalah biaya terpisah kecuali sudah dikonfirmasi dalam paket khusus.',
        },
        {
          question: 'Dapatkah saya meminta revisi?',
          answer: 'Ya, revisi termasuk dalam paket berdasarkan tahap project yang telah disepakati.',
        },
        {
          question: 'Apakah website akan mobile-friendly?',
          answer: 'Tentu saja. Setiap project kami dirancang dengan mobile-first approach dan fully responsive.',
        },
        {
          question: 'Apakah Anda menyediakan maintenance?',
          answer: 'Ya, kami menyediakan paket maintenance bulanan dengan harga yang kompetitif dan layanan support berkelanjutan.',
        },
      ],
    },
    // Contact Section
    contact: {
      title: 'Hubungi Kami',
      subtitle: 'Siap membantu mewujudkan visi digital Anda',
      form: {
        name: 'Nama Lengkap',
        email: 'Email',
        message: 'Pesan',
        send: 'Kirim Pesan',
        sending: 'Mengirim...',
        success: 'Pesan berhasil dikirim!',
        error: 'Terjadi kesalahan. Silakan coba lagi.',
      },
      info: {
        email: 'Email',
        whatsapp: 'WhatsApp',
        instagram: 'Instagram',
        twitter: 'Twitter',
        tiktok: 'TikTok',
      },
    },
    // Technologies Section
    tech: {
      title: 'Teknologi yang Kami Gunakan',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      infrastructure: 'Infrastructure',
    },
    // Footer
    footer: {
      description: 'Hyve Studio membangun website modern dan sistem digital untuk bisnis, startup, dan brand Indonesia.',
      links: 'Tautan Cepat',
      contact: 'Kontak',
      followUs: 'Ikuti Kami',
      copyright: 'Hak cipta © 2025 Hyve Studio. Semua hak dilindungi.',
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      title: 'Build Your Digital Future with Hyve Studio',
      subtitle: 'We create modern websites and scalable digital systems for Indonesian businesses and brands with focus on premium design, high performance, and maintainable architecture.',
      cta: 'Get Started',
      explore: 'Explore Services',
    },
    // About Section
    about: {
      title: 'About Hyve Studio',
      description: 'Founded on April 15, 2025 by Hasan Aufar, Hyve Studio was created to help businesses move into the digital era through modern websites, scalable systems, and user-focused digital experiences.',
      vision: 'Our vision is to become a trusted partner for digital transformation in Indonesia.',
      mission: 'Our mission is to create premium, high-performance, and sustainable digital solutions for every client.',
    },
    // Services Section
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive digital solutions for every business need',
      items: [
        {
          id: 1,
          name: 'Landing Page Website',
          description: 'Simple one-page website to introduce a business and encourage quick conversions',
          benefits: ['Modern design', 'Mobile responsive', 'Fast loading', 'SEO optimized'],
          use: 'Small businesses, UMKM, Personal branding',
          price: 'Rp1.000.000 – Rp1.500.000',
        },
        {
          id: 2,
          name: 'Company Profile Website',
          description: 'Professional website to establish credibility and digital company identity',
          benefits: ['Premium design', 'Multi-page structure', 'Portfolio showcase', 'Blog section'],
          use: 'Agencies, Startups, Distributors, Institutions',
          price: 'Rp2.000.000 – Rp6.000.000',
        },
        {
          id: 3,
          name: 'Business Website Pro',
          description: 'Advanced website with operational features and content management',
          benefits: ['Admin dashboard', 'Booking system', 'Multi-language', 'Analytics'],
          use: 'Restaurants, Gyms, Clinics, Salons, Hotels',
          price: 'Rp3.500.000 – Rp8.000.000',
        },
        {
          id: 4,
          name: 'E-Commerce Website',
          description: 'Complete online store for selling products with modern transaction features',
          benefits: ['Product catalog', 'Payment gateway', 'Order management', 'Shipping automation'],
          use: 'Fashion, Skincare, Digital products, Local brands',
          price: 'Rp4.000.000 – Rp15.000.000',
        },
        {
          id: 5,
          name: 'Restaurant / Cafe Website',
          description: 'Website designed for F&B businesses with digital menu and online ordering',
          benefits: ['Digital menu', 'Online ordering', 'Table reservation', 'Promo banners'],
          use: 'Restaurants, Cafes, Coffee shops, Cloud kitchens',
          price: 'Rp2.500.000 – Rp7.500.000',
        },
        {
          id: 6,
          name: 'Booking & Reservation System',
          description: 'Online booking system to reduce admin work and improve customer convenience',
          benefits: ['Booking calendar', 'Time slot selection', 'Auto reminders', 'Admin dashboard'],
          use: 'Clinics, Salons, Studios, Gyms, Consultants',
          price: 'Rp2.000.000 – Rp6.000.000',
        },
        {
          id: 7,
          name: 'POS / Cashier System',
          description: 'Digital cashier system for managing sales transactions and business records',
          benefits: ['Digital cashier', 'Discount & tax handling', 'QRIS payment', 'Sales reports'],
          use: 'Restaurants, Cafes, Retail stores, Laundry',
          price: 'Rp3.000.000 – Rp12.000.000',
        },
        {
          id: 8,
          name: 'Custom Solution',
          description: 'Custom solutions tailored to your unique business needs with latest technologies',
          benefits: ['Fully customizable', 'Scalable architecture', 'Technical support', 'Long-term partnership'],
          use: 'Enterprise, Complex requirements',
          price: 'Free consultation',
        },
      ],
    },
    // Workflow Section
    workflow: {
      title: 'Our Workflow',
      subtitle: 'We follow professional methodology for every project',
      steps: [
        {
          number: 1,
          name: 'Discovery',
          description: 'Understanding your business goals and project requirements deeply.',
        },
        {
          number: 2,
          name: 'Planning',
          description: 'Creating project structure, sitemap, and implementation strategy.',
        },
        {
          number: 3,
          name: 'UI/UX Design',
          description: 'Designing user-friendly and visually appealing interface.',
        },
        {
          number: 4,
          name: 'Development',
          description: 'Building website using modern technologies and best practices.',
        },
        {
          number: 5,
          name: 'Testing',
          description: 'Ensuring functionality, responsiveness, and optimal performance.',
        },
        {
          number: 6,
          name: 'Launch',
          description: 'Deploying website to production with full monitoring.',
        },
        {
          number: 7,
          name: 'Support',
          description: 'Providing ongoing maintenance and updates after launch.',
        },
      ],
    },
    // Portfolio Section
    portfolio: {
      title: 'Our Portfolio',
      subtitle: 'Real projects we have worked on with satisfying results',
      projects: [
        {
          id: 1,
          name: 'Morfosa Transport',
          image: '/images/project-morfosa.jpg',
          description: 'Modern website for transportation and rental business designed to improve digital presence and streamline customer inquiries.',
          highlights: ['Professional company profile', 'Service showcase', 'Mobile-responsive design', 'Contact integration'],
          industry: 'Transportation & Rental Services',
          goal: 'To establish strong online presence and improve customer accessibility',
          url: 'https://morfosatransportrent.netlify.app/',
        },
        {
          id: 2,
          name: 'Morph3D Studio',
          image: '/images/project-morph3d.jpg',
          description: 'Modern 3D-focused digital experience with futuristic interface and interactive presentation style.',
          highlights: ['Modern UI', 'Interactive design', 'Responsive layout', 'High-performance frontend', 'Creative portfolio'],
          industry: 'Creative Technology & Digital Experience',
          goal: 'To demonstrate modern web design principles with immersive user experiences',
          url: 'https://morph3d.vercel.app/studio',
        },
        {
          id: 3,
          name: 'Forum Anak Mlati',
          image: '/images/project-forum.jpg',
          description: 'Organizational website developed to support communication, information sharing, and community engagement for youth initiatives.',
          highlights: ['Organization profile', 'Program showcase', 'News pages', 'Responsive design', 'Community-focused'],
          industry: 'Government & Community Organization',
          goal: 'To provide accessible digital platform that supports youth engagement and public communication',
          url: 'https://forumanakmlati.vercel.app/',
        },
      ],
    },
    // Pricing Section
    pricing: {
      title: 'Pricing Plans',
      subtitle: 'Competitive pricing for every type of digital service',
      support: 'Monthly Support',
      supportPrice: 'Rp150.000 – Rp250.000/month',
      supportDesc: 'Regular maintenance and updates for optimal performance',
      hosting: 'Hosting & Domain',
      hostingDesc: 'Cost separate from development (example Hostinger):',
      domains: [
        { extension: '.com', price: 'Rp165.900', renewal: 'Rp209.900/year' },
        { extension: '.org', price: 'Rp215.900', renewal: 'Rp297.900/year' },
        { extension: '.de', price: 'Rp82.900', renewal: 'Rp231.900/year' },
        { extension: '.fr', price: 'Rp132.900', renewal: 'Rp204.900/year' },
      ],
    },
    // Why Choose Us
    whyUs: {
      title: 'Why Choose Hyve Studio',
      items: [
        'Modern and premium design',
        'Mobile-first responsive layout',
        'Scalable architecture',
        'Fast development workflow',
        'Affordable pricing for Indonesian businesses',
        'Clean and maintainable systems',
        'Production-ready practices',
        'Long-term growth support',
      ],
    },
    // Founder Section
    founder: {
      title: 'Our Founder',
      name: 'Hasan Aufar',
      role: 'Frontend Engineer, Web Developer & Digital System Builder',
      description: 'Focused on creating scalable web applications, business systems, and modern digital experiences that are maintainable and high-performing.',
      expertise: [
        'SaaS system architectures',
        'E-commerce platforms',
        'Productivity web applications',
        'Educational ticketing systems',
        'Business websites',
        'Dashboard systems',
      ],
    },
    // FAQ Section
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'How long does a project take?',
          answer: 'Typically 1–4 weeks depending on complexity and specific requirements.',
        },
        {
          question: 'Is hosting and domain included?',
          answer: 'Hosting and domain are separate costs unless specified in custom package.',
        },
        {
          question: 'Can I request revisions?',
          answer: 'Yes, revisions are included based on the selected package and project stage.',
        },
        {
          question: 'Will the website be mobile-friendly?',
          answer: 'Absolutely. Every project is designed with mobile-first approach and fully responsive.',
        },
        {
          question: 'Do you provide maintenance?',
          answer: 'Yes, we offer monthly maintenance plans with competitive pricing and continuous support.',
        },
      ],
    },
    // Contact Section
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to help realize your digital vision',
      form: {
        name: 'Full Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Something went wrong. Please try again.',
      },
      info: {
        email: 'Email',
        whatsapp: 'WhatsApp',
        instagram: 'Instagram',
        twitter: 'Twitter',
        tiktok: 'TikTok',
      },
    },
    // Technologies Section
    tech: {
      title: 'Technologies We Use',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      infrastructure: 'Infrastructure',
    },
    // Footer
    footer: {
      description: 'Hyve Studio builds modern websites and digital systems for Indonesian businesses, startups, and brands.',
      links: 'Quick Links',
      contact: 'Contact',
      followUs: 'Follow Us',
      copyright: 'Copyright © 2025 Hyve Studio. All rights reserved.',
    },
  },
};

export const useTranslation = (language: Language) => {
  return translations[language] || translations.id;
};
