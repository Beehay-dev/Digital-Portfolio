import React, { useEffect } from 'react';
import { X, Download, Printer, MapPin, Mail, Globe, Award, Briefcase, GraduationCap } from 'lucide-react';
import { artistProfile } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || '';
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <span className="text-xs font-mono text-red-600 uppercase tracking-wider font-bold">
            Artist Curriculum Vitae // Alex Vance
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 text-slate-500 hover:text-slate-900 rounded-xl hover:bg-slate-200 transition-colors"
              title="Print CV"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 rounded-xl hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-white text-slate-800 font-sans">
          {/* CV Top Profile */}
          <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 font-display">
                ALEX VANCE
              </h1>
              <p className="text-base text-red-600 font-mono font-bold mt-1">
                Senior Digital Artist & Commercial Imaging Specialist
              </p>
              <p className="text-xs text-slate-600 mt-2 max-w-xl leading-relaxed font-medium">
                {artistProfile.bio}
              </p>
            </div>

            <div className="text-xs font-mono text-slate-600 space-y-1.5 shrink-0 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                <span>Berlin // London // Remote</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>alex.vance.imaging@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-red-600" />
                <span>vance-digital.art</span>
              </div>
            </div>
          </div>

          {/* Section: Experience */}
          <div>
            <h3 className="text-sm font-mono text-slate-900 uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-red-600" />
              <span>Professional Experience</span>
            </h3>

            <div className="space-y-6">
              <div className="border-l-2 border-red-500 pl-4 py-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-slate-900 text-sm">Lead Digital Imaging Artist // Aura Studio Berlin</span>
                  <span className="text-slate-500 font-semibold">2021 – Present</span>
                </div>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-medium">
                  Directing high-end CGI product rendering, 3D world creation, and beauty editorial photo retouching for European and American commercial clients. Authored ACEScg color workflows and non-destructive frequency separation pipelines.
                </p>
              </div>

              <div className="border-l-2 border-blue-600 pl-4 py-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-slate-900 text-sm">Senior Retoucher & 3D Generalist // Apex Visuals London</span>
                  <span className="text-slate-500 font-semibold">2018 – 2021</span>
                </div>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-medium">
                  Delivered 80+ print and digital campaigns for global brands including Vogue Beauty, Sony Entertainment, and Nike. Specialized in complex glass caustics, cloth simulation in Marvelous Designer, and 61MP portrait grading.
                </p>
              </div>

              <div className="border-l-2 border-slate-300 pl-4 py-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-slate-900 text-sm">Graphic Designer & Matte Painter // Nexus Media</span>
                  <span className="text-slate-500 font-semibold">2016 – 2018</span>
                </div>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-medium">
                  Crafted Swiss-style poster typography, cinematic concept art, and brand identity systems for independent cinema and contemporary art galleries.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Education */}
          <div>
            <h3 className="text-sm font-mono text-slate-900 uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Education & Honors</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900">MA in Digital Arts & CGI</h4>
                <p className="text-xs text-blue-700 font-mono font-bold mt-0.5">Royal College of Art, London</p>
                <p className="text-[11px] text-slate-600 mt-1 font-medium">Graduated with Distinction in 3D Procedural Shading & Photorealistic Rendering.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-900">BA (Hons) in Graphic Design & Visual Communication</h4>
                <p className="text-xs text-red-600 font-mono font-bold mt-0.5">Zurich University of the Arts (ZHdK)</p>
                <p className="text-[11px] text-slate-600 mt-1 font-medium">Specialized in International Typographic Style and Color Science.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500 font-medium">Last updated: 2025</span>
          <button
            onClick={() => alert('Simulated PDF Download: "Alex_Vance_Digital_Artist_CV.pdf"')}
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold text-xs font-mono hover:from-red-500 hover:to-blue-500 transition-colors flex items-center gap-2 shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Official PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
