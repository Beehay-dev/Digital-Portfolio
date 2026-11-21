import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Sliders, Calculator, Mail, Phone, MapPin } from 'lucide-react';
import { artistProfile } from '../data/portfolioData';

export default function Navbar({ onOpenCalculator, onScrollToRetouch, onScrollToBreakdown }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' 
          : 'bg-white/60 backdrop-blur-sm py-4 border-b border-slate-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-red-600 via-rose-500 to-blue-600 flex items-center justify-center text-white font-mono font-black text-sm shadow-sm group-hover:scale-105 transition-transform">
            <span>B</span>
          </div>
          <div>
            <span className="font-extrabold tracking-tight text-slate-900 font-display text-sm sm:text-base group-hover:text-red-600 transition-colors uppercase">
              {artistProfile.name}
            </span>
            <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
              <span>Lagos, Nigeria</span>
              <span>•</span>
              <span className="text-red-600 font-semibold">Digital Imaging & 3D</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7 text-xs font-mono font-medium">
          <a href="#works" className="text-slate-600 hover:text-red-600 transition-colors">
            Selected Works
          </a>
          <button 
            onClick={onScrollToRetouch}
            className="text-slate-600 hover:text-red-600 transition-colors flex items-center gap-1"
          >
            <Sliders className="w-3.5 h-3.5 text-red-500" />
            <span>Retouch Lab</span>
          </button>
          <button 
            onClick={onScrollToBreakdown}
            className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span>3D Breakdown</span>
          </button>
          <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">
            Skills & Stack
          </a>
        </div>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`mailto:${artistProfile.email}`}
            className="px-3.5 py-1.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-xs font-mono text-slate-700 hover:text-slate-900 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Mail className="w-3.5 h-3.5 text-red-600" />
            <span>Contact</span>
          </a>

          <button
            onClick={onOpenCalculator}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white font-semibold text-xs font-mono transition-all shadow-md hover:shadow-lg flex items-center gap-1.5"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Scope Estimator</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-4 font-mono text-sm shadow-xl">
          <div className="pb-3 border-b border-slate-100 text-xs text-slate-500">
            <p className="font-bold text-slate-800">{artistProfile.name}</p>
            <p>{artistProfile.location} • {artistProfile.phone}</p>
          </div>

          <a 
            href="#works" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-700 hover:text-red-600 font-medium"
          >
            Selected Works (2D & 3D)
          </a>
          <button 
            onClick={() => { setIsMobileMenuOpen(false); onScrollToRetouch(); }}
            className="block text-left text-slate-700 hover:text-red-600 font-medium"
          >
            Before & After Retouching
          </button>
          <button 
            onClick={() => { setIsMobileMenuOpen(false); onScrollToBreakdown(); }}
            className="block text-left text-slate-700 hover:text-blue-600 font-medium"
          >
            3D Wireframe Breakdown
          </button>
          <a 
            href="#skills" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-700 hover:text-blue-600"
          >
            Skills & Software Stack
          </a>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={`https://wa.me/2349150778437`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-xl border border-slate-300 bg-white text-xs font-mono text-slate-800 text-center font-medium shadow-sm flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp: +234 915 077 8437</span>
            </a>
            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenCalculator(); }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-blue-600 text-white font-semibold text-xs font-mono text-center shadow-md"
            >
              Scope Estimator & Inquire
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
