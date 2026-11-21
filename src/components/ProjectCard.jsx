import React from 'react';
import { Sparkles, Eye, ArrowUpRight, Box, Layers, Image as ImageIcon } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  const getCategoryIcon = () => {
    switch (project.category) {
      case '3d':
        return <Box className="w-3.5 h-3.5 text-blue-600" />;
      case 'photo':
        return <ImageIcon className="w-3.5 h-3.5 text-red-600" />;
      case '2d':
        return <Layers className="w-3.5 h-3.5 text-amber-600" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-slate-600" />;
    }
  };

  const getCategoryBorder = () => {
    switch (project.category) {
      case '3d':
        return 'hover:border-blue-400 hover:shadow-[0_15px_35px_-10px_rgba(37,99,235,0.2)]';
      case 'photo':
        return 'hover:border-red-400 hover:shadow-[0_15px_35px_-10px_rgba(239,68,68,0.2)]';
      case '2d':
        return 'hover:border-amber-400 hover:shadow-[0_15px_35px_-10px_rgba(245,158,11,0.2)]';
      default:
        return 'hover:border-slate-400';
    }
  };

  return (
    <div 
      onClick={() => onSelect(project)}
      className={`group relative rounded-3xl overflow-hidden bg-white border border-slate-200 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-sm hover:-translate-y-1 ${getCategoryBorder()}`}
    >
      {/* Media Container */}
      <div className={`relative w-full overflow-hidden bg-slate-100 ${project.aspect === '3:4' ? 'aspect-[3/4]' : 'aspect-[16/9]'}`}>
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <span className="px-3 py-1 text-[11px] font-mono font-bold rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-900 flex items-center gap-1.5 shadow-md">
            {getCategoryIcon()}
            <span>{project.categoryBadge}</span>
          </span>

          <span className="px-2.5 py-1 text-[11px] font-mono font-semibold text-slate-700 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full shadow-md">
            {project.year}
          </span>
        </div>

        {/* Interactive hover prompt pill */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
          <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold text-xs flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform">
            <span>Inspect Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Card Content Footer */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-white">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-mono font-medium text-slate-500">{project.client}</span>
            {project.hasBreakdown && (
              <span className="text-[10px] font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full font-bold">
                Topology Pass
              </span>
            )}
            {project.isComparison && (
              <span className="text-[10px] font-mono text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full font-bold">
                RAW vs Grade
              </span>
            )}
          </div>

          <h3 className="text-lg font-black text-slate-900 group-hover:text-red-600 transition-colors tracking-tight line-clamp-1 font-display">
            {project.title}
          </h3>

          <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Tool pills */}
        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
          <div className="flex items-center gap-1.5 overflow-hidden text-slate-600 font-medium">
            {project.specs.software ? (
              <span>{project.specs.software.slice(0, 2).join(' • ')}</span>
            ) : (
              <span>Adobe Creative Cloud</span>
            )}
          </div>
          <span className="text-red-600 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
            Details →
          </span>
        </div>
      </div>
    </div>
  );
}
