import React from 'react';
import Hero3DCanvas from './Hero3DCanvas';
import { ArrowDown, Sparkles, Layers, Box, Sliders, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import { artistProfile } from '../data/portfolioData';

export default function Hero({ onOpenCalculator, onScrollToRetouch }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Sleek, Compact 3D WebGL Canvas in background */}
      <Hero3DCanvas />

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Availability & Direct Location Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-slate-200/90 backdrop-blur-md text-xs font-mono text-slate-700 mb-6 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-emerald-700 font-bold">AVAILABLE FOR COMMISSIONS</span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1 font-semibold text-slate-800">
            <MapPin className="w-3.5 h-3.5 text-red-600" />
            <span>{artistProfile.location}</span>
          </span>
          <span className="text-slate-300">•</span>
          <a 
            href={`mailto:${artistProfile.email}`} 
            className="text-blue-600 hover:underline font-semibold flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span>{artistProfile.email}</span>
          </a>
        </div>

        {/* Artist Name & Discipline Display */}
        <div className="mb-3">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-red-600 font-black">
            PORTFOLIO OF {artistProfile.name}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.04] font-display">
          DIGITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-blue-600">IMAGING</span> & <span className="italic font-light text-slate-700">3D ART</span>
        </h1>

        {/* Tagline */}
        <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          {artistProfile.tagline} Delivering photorealistic 3D digital imaging, editorial photo retouching, and Swiss 2D graphic design worldwide from Lagos, Nigeria.
        </p>

        {/* Direct Contact Bar */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
          <a 
            href={`https://wa.me/2349150778437`} 
            target="_blank" 
            rel="noreferrer"
            className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition-colors flex items-center gap-1.5 font-bold"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direct / WhatsApp: {artistProfile.phone}</span>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#works"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold text-sm transition-all shadow-[0_10px_25px_-5px_rgba(239,68,68,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(239,68,68,0.5)] flex items-center gap-2"
          >
            <span>Explore Works Archive</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <button
            onClick={onScrollToRetouch}
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm border border-slate-300 hover:border-red-400 backdrop-blur-md transition-all flex items-center gap-2 shadow-sm"
          >
            <Sliders className="w-4 h-4 text-red-500" />
            <span>Interactive Retouch Slider</span>
          </button>

          <button
            onClick={onOpenCalculator}
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-blue-200" />
            <span>Scope Estimator</span>
          </button>
        </div>

        {/* Streamlined Metric Badges */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {artistProfile.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white/85 border border-slate-200/90 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow">
              <span className={`text-2xl sm:text-3xl font-black font-display block ${
                idx % 2 === 0 ? 'text-red-600' : 'text-blue-600'
              }`}>
                {stat.value}
              </span>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1 block font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Down arrow anchor */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce pointer-events-none">
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
