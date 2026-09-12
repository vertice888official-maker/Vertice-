
'use client';

import React, { useState, useEffect } from 'react';

const translations = {
  en: {
    badge: "Global digital services & e-commerce holding",
    titleMain: "Building the vertex of the",
    titleHighlight: "digital economy.",
    description: "VÉRTICE creates, scales, and operates digital services and e-commerce companies. One structure, multiple markets, a single standard of excellence.",
    exploreBtn: "Explore divisions",
    contactBtn: "Connect with the team",
    stats: [
      { value: "24", label: "Global markets" },
      { value: "18", label: "Active brands" },
      { value: "$420M", label: "Managed GMV" },
      { value: "900+", label: "Global experts" }
    ]
  },
  es: {
    badge: "Holding global de servicios digitales y e-commerce",
    titleMain: "Construimos el vértice de la",
    titleHighlight: "economía digital.",
    description: "VÉRTICE crea, escala y opera empresas de servicios digitales y comercio electrónico. Una estructura, múltiples mercados, un mismo estándar de excelencia.",
    exploreBtn: "Explorar divisiones",
    contactBtn: "Hablar con el equipo",
    stats: [
      { value: "24", label: "Mercados globales" },
      { value: "18", label: "Marcas activas" },
      { value: "$420M", label: "GMV gestionado" },
      { value: "900+", label: "Expertos globales" }
    ]
  },
  fr: {
    badge: "Holding mondial de services numériques et e-commerce",
    titleMain: "Nous construisons le sommet de",
    titleHighlight: "l'économie numérique.",
    description: "VÉRTICE crée, développe et exploite des entreprises de services numériques et de commerce électronique. Une structure, plusieurs marchés, un seul standard d'excellence.",
    exploreBtn: "Explorer les divisions",
    contactBtn: "Contacter l'équipe",
    stats: [
      { value: "24", label: "Marchés mondiaux" },
      { value: "18", label: "Marques actives" },
      { value: "$420M", label: "GMV géré" },
      { value: "900+", label: "Experts mondiaux" }
    ]
  },
  de: {
    badge: "Globales Holding für digitale Dienste & E-Commerce",
    titleMain: "Wir bauen den Scheitelpunkt der",
    titleHighlight: "digitalen Wirtschaft.",
    description: "VÉRTICE erstellt, skaliert und betreibt digitale Dienstleistungs- und E-Commerce-Unternehmen. Eine Struktur, mehrere Märkte, ein einziger Exzellenzstandard.",
    exploreBtn: "Divisionen erkunden",
    contactBtn: "Team kontaktieren",
    stats: [
      { value: "24", label: "Globale Märkte" },
      { value: "18", label: "Aktive Marken" },
      { value: "$420M", label: "Verwaltetes GMV" },
      { value: "900+", label: "Globale Experten" }
    ]
  }
};

export default function VerticeLanding() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const browserLang = navigator.language || navigator.languages[0];
    const shortLang = browserLang ? browserLang.substring(0, 2).toLowerCase() : 'en';
    
    if (translations[shortLang as keyof typeof translations]) {
      setLang(shortLang);
    } else {
      setLang('en');
    }
  }, []);

  const t = translations[lang as keyof typeof translations] || translations.en;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-between selection:bg-neutral-800 selection:text-white font-sans">
      <header className="w-full py-6 px-8 flex justify-between items-center border-b border-neutral-900">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-widest">VÉRTICE</span>
        </div>
        <div className="flex items-center space-x-6 text-sm text-neutral-400">
          <span className="cursor-pointer hover:text-white transition-colors">Company</span>
          <span className="cursor-pointer hover:text-white transition-colors">Divisions</span>
          <span className="cursor-pointer hover:text-white transition-colors">Contact</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs text-neutral-300 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span>{t.badge}</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mb-8 leading-[1.1]">
          {t.titleMain} <span className="italic font-serif font-normal text-amber-200">{t.titleHighlight}</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 font-light">
          {t.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
          <button className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors shadow-lg">
            {t.exploreBtn} ↗
          </button>
          <button className="px-8 py-4 rounded-full border border-neutral-800 bg-neutral-900/30 text-white font-medium hover:bg-neutral-800/50 transition-colors">
            {t.contactBtn}
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-neutral-900 pt-16 w-full max-w-5xl">
          {t.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</span>
              <span className="text-xs text-neutral-500 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full py-6 px-8 border-t border-neutral-900 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} VÉRTICE. All rights reserved.
      </footer>
    </div>
  );
}
