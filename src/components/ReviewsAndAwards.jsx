import React from 'react';
import { clientReviews, artistProfile } from '../data/portfolioData';
import { Quote, Award, CheckCircle, ExternalLink, Star } from 'lucide-react';

export default function ReviewsAndAwards() {
  return (
    <section id="press" className="py-20 sm:py-28 bg-white/70 border-t border-slate-250 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-red-600 font-bold mb-2 block">
            REPUTATION & RECOGNITION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display tracking-tight">
            Client Voices & Industry Honors
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Trusted by global fashion publishers, high-end perfumeries, robotics research labs, and contemporary galleries.
          </p>
        </div>

        {/* Testimonials 3-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {clientReviews.map((rev, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6 font-medium">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-sm font-extrabold text-slate-900 block font-display">{rev.author}</span>
                <span className="text-xs text-red-600 font-mono font-bold block">{rev.role}</span>
                <span className="text-[11px] text-slate-500 font-mono block mt-0.5">{rev.company}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Features Row */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <Award className="w-6 h-6 text-red-600" />
            <h3 className="text-xl font-black text-slate-900 font-display">Recognitions & Selected Press</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {artistProfile.awards.map((award, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors">
                <span className="text-xs font-mono text-blue-700 font-black block mb-1">
                  {award.year}
                </span>
                <h4 className="text-sm font-bold text-slate-900">{award.title}</h4>
                <span className="text-xs text-slate-600 font-mono mt-1 block">
                  {award.category}
                </span>
              </div>
            ))}
          </div>

          {/* Trusted Brand Marks */}
          <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-6 opacity-75">
            <span className="font-display font-black text-xl tracking-widest text-slate-800">VOGUE</span>
            <span className="font-display font-black text-xl tracking-widest text-slate-800">AURA PARFUMS</span>
            <span className="font-display font-black text-xl tracking-widest text-slate-800">NEUROFORM</span>
            <span className="font-display font-black text-xl tracking-widest text-slate-800">BAUHAUS 100</span>
            <span className="font-display font-black text-xl tracking-widest text-slate-800">TERRAFORM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
