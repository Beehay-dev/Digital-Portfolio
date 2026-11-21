import React, { useState } from 'react';
import { artistProfile } from '../data/portfolioData';
import { Cpu, Palette, Sliders, Layers, Sparkles, Terminal, Check } from 'lucide-react';

export default function SkillsMatrix() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSkills = artistProfile.skills.filter(s => {
    if (activeFilter === 'all') return true;
    if (activeFilter === '3d') return s.category === '3D Digital';
    if (activeFilter === 'photo-2d') return s.category === 'Photo & 2D';
    return true;
  });

  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
                TECHNICAL MASTERY & SOFTWARE STACK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
              Creative Toolkit & Disciplines
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md">
            Specialized mastery across high-end 3D rendering engines, commercial photo editing pipelines, and vector design systems.
          </p>
        </div>

        {/* 3 Core Services Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {artistProfile.services.map((service) => (
            <div 
              key={service.id}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-400/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  {service.id === 'photo-editing' && <Sliders className="w-7 h-7 text-red-600" />}
                  {service.id === '3d-imaging' && <Cpu className="w-7 h-7 text-blue-600" />}
                  {service.id === 'graphic-design' && <Palette className="w-7 h-7 text-amber-600" />}
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-2 font-display">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                  {service.desc}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                  Primary Software Suite
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-xs font-mono rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Proficiency Level Meters */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-200 gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-black text-slate-900 font-display">Proficiency Breakdown</h3>
              <p className="text-xs text-slate-600 mt-1 font-medium">Calibrated by commercial delivery volume and advanced certification.</p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-1.5 text-xs font-mono rounded-xl transition-all ${
                  activeFilter === 'all' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Tools
              </button>
              <button
                onClick={() => setActiveFilter('3d')}
                className={`px-4 py-1.5 text-xs font-mono rounded-xl transition-all ${
                  activeFilter === '3d' ? 'bg-blue-600 text-white font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                3D Digital Art
              </button>
              <button
                onClick={() => setActiveFilter('photo-2d')}
                className={`px-4 py-1.5 text-xs font-mono rounded-xl transition-all ${
                  activeFilter === 'photo-2d' ? 'bg-red-600 text-white font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Photo & 2D Design
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {filteredSkills.map((skill, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-800 font-bold">{skill.name}</span>
                  <span className={`font-black ${skill.category === '3D Digital' ? 'text-blue-700' : 'text-red-600'}`}>
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                  <div 
                    className={`h-full rounded-full transition-all duration-700 ${
                      skill.category === '3D Digital' 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-500' 
                        : 'bg-gradient-to-r from-red-600 to-rose-500'
                    }`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
