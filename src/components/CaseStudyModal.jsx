import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Layers, Cpu, Award, CheckCircle, FileText, Download, Sparkles } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Safely save original overflow
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/90 shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-red-100 text-red-700 border border-red-200 uppercase">
              {project.categoryBadge}
            </span>
            <span className="text-xs font-mono text-slate-500 font-semibold">
              {project.client} • {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-1">
          {/* Main Media Preview */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner group">
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full max-h-[480px] object-contain mx-auto"
            />
            <div className="absolute bottom-3 right-3 px-3.5 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-mono font-bold text-slate-700 border border-slate-200 shadow-sm">
              {project.aspect === '16:9' ? '16:9 Cinematic Canvas' : '3:4 Editorial Portrait Canvas'}
            </div>
          </div>

          {/* Title & Role */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-display tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm text-red-600 font-mono font-bold mt-1">
                Role: {project.role}
              </p>
            </div>
            
            {/* Tab navigation */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-xl transition-all ${
                  activeTab === 'overview'
                    ? 'bg-red-600 text-white font-bold shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('process')}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-xl transition-all ${
                  activeTab === 'process'
                    ? 'bg-red-600 text-white font-bold shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Production Process
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-xl transition-all ${
                  activeTab === 'specs'
                    ? 'bg-blue-600 text-white font-bold shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Technical Specs
              </button>
            </div>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">Project Brief & Concept</h4>
                <p className="text-slate-700 leading-relaxed text-base font-normal">{project.summary}</p>
              </div>

              {project.challenges && (
                <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Creative Challenge Solved</span>
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{project.challenges}</p>
                </div>
              )}

              {/* Software stack pills */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">Software & Hardware Pipeline</h4>
                <div className="flex flex-wrap gap-2">
                  {project.specs.software ? (
                    project.specs.software.map((sw, i) => (
                      <span key={i} className="px-3.5 py-1 bg-slate-100 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800">
                        {sw}
                      </span>
                    ))
                  ) : (
                    <span className="px-3.5 py-1 bg-slate-100 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800">
                      Adobe Creative Cloud / 3D Pipeline
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Production Process */}
          {activeTab === 'process' && (
            <div className="space-y-4 animate-fadeIn">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">Step-by-Step Production Breakdown</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.process.map((p, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-400 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-red-600 font-mono text-xs font-bold">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                      <span>{p.step}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">{p.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Technical Specs */}
          {activeTab === 'specs' && (
            <div className="space-y-6 animate-fadeIn">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">Technical Specifications & Deliverables</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(project.specs).map(([key, val], idx) => {
                  if (key === 'software') return null;
                  return (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 font-mono">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold block mb-1">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="text-xs font-bold text-slate-900">
                        {Array.isArray(val) ? val.join(', ') : val}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-blue-600 shrink-0" />
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">Commercial License Deliverables</h5>
                    <p className="text-xs text-slate-600">Includes layered 16-bit TIFF master, vector assets, and multi-pass 32-bit EXR channels.</p>
                  </div>
                </div>
                <button
                  onClick={() => alert(`Simulated download: "${project.title} - Technical Sheet & Color Profile"`)}
                  className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl flex items-center gap-2 shrink-0 transition-colors shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Spec Sheet</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs font-mono text-slate-500 shrink-0">
          <span>Project ID: {project.id}</span>
          <button
            onClick={onClose}
            className="hover:text-slate-900 font-bold transition-colors"
          >
            Close (Esc)
          </button>
        </div>
      </div>
    </div>
  );
}
