import React from 'react';
import { ArrowUp, Sparkles, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { artistProfile } from '../data/portfolioData';

export default function Footer({ onOpenCalculator }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-600 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Call to Action with vibrant red-to-blue gradient */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-blue-700 text-white shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-rose-200 font-bold flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>READY TO INITIATE A PROJECT?</span>
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight">
              Let's create breathtaking 2D & 3D imagery.
            </h3>
            <p className="text-xs text-rose-100 mt-2 max-w-lg font-sans">
              Accepting select commercial photo retouching, 3D CGI product renders, and graphic design commissions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/2349150778437`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs font-mono transition-all shadow-lg flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>

            <button
              onClick={onOpenCalculator}
              className="px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs font-mono transition-all shadow-xl"
            >
              Scope Estimator
            </button>
          </div>
        </div>

        {/* Footer Direct Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-slate-200">
          {/* Col 1: Bio & Location */}
          <div className="space-y-3">
            <span className="font-black text-slate-900 font-display text-base uppercase">
              {artistProfile.name}
            </span>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              Precision digital imaging, high-end commercial photo retouching, procedural 3D CGI worlds, and Swiss vector typography.
            </p>
            <div className="flex items-center gap-2 text-slate-700 text-xs font-medium pt-1">
              <MapPin className="w-3.5 h-3.5 text-red-600" />
              <span>{artistProfile.location} (WAT / GMT+1)</span>
            </div>
          </div>

          {/* Col 2: Direct Contact Channels */}
          <div className="space-y-3">
            <span className="text-slate-900 uppercase font-bold text-[11px] block">Direct Contact</span>
            <div className="space-y-2">
              <a 
                href={`mailto:${artistProfile.email}`} 
                className="text-red-600 font-bold hover:underline flex items-center gap-2 text-xs"
              >
                <Mail className="w-4 h-4" />
                <span>{artistProfile.email}</span>
              </a>
              <a 
                href={`tel:${artistProfile.phone.replace(/\s+/g, '')}`} 
                className="text-blue-700 font-bold hover:underline flex items-center gap-2 text-xs"
              >
                <Phone className="w-4 h-4" />
                <span>{artistProfile.phone}</span>
              </a>
              <a 
                href={`https://wa.me/2349150778437`} 
                target="_blank" 
                rel="noreferrer"
                className="text-emerald-700 font-bold hover:underline flex items-center gap-2 text-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: +234 915 077 8437</span>
              </a>
            </div>
          </div>

          {/* Col 3: Disciplines */}
          <div className="space-y-2">
            <span className="text-slate-900 uppercase font-bold text-[11px] block">Specializations</span>
            <ul className="space-y-1.5 text-slate-600">
              <li>• 3D Digital Art & CGI Product Rendering</li>
              <li>• High-End Commercial Photo Retouching (RAW/16-bit)</li>
              <li>• 2D Digital Matte Painting & Concept Illustration</li>
              <li>• Brand Identity & Swiss Typographic Systems</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {artistProfile.name}. All rights reserved. Lagos, Nigeria.
          </div>

          <div className="flex items-center gap-6">
            <span>West Africa Time (WAT)</span>
            <button 
              onClick={scrollToTop} 
              className="hover:text-red-600 flex items-center gap-1 transition-colors font-bold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
