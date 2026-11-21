import React, { useState } from 'react';
import { Eye, Box, Cpu, Sparkles, Layers, Sliders, ChevronRight } from 'lucide-react';

export default function WireframeBreakdownViewer({ 
  project, 
  onOpenCaseStudy 
}) {
  const [wireframeOpacity, setWireframeOpacity] = useState(0); // 0 = final, 100 = wireframe
  const [activePass, setActivePass] = useState('final'); // 'final' | 'clay' | 'blend'

  const finalImg = project?.breakdown?.finalImage || "/assets/cyber_sculpture_final.jpg";
  const clayImg = project?.breakdown?.wireframeImage || "/assets/cyber_sculpture_wireframe.jpg";

  const handlePassChange = (pass) => {
    setActivePass(pass);
    if (pass === 'final') setWireframeOpacity(0);
    else if (pass === 'clay') setWireframeOpacity(100);
    else setWireframeOpacity(50);
  };

  return (
    <div className="w-full my-8 bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-8 shadow-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-0.5 text-xs font-mono font-bold rounded-full bg-blue-100 text-blue-700 border border-blue-200 flex items-center gap-1.5">
              <Box className="w-3.5 h-3.5" />
              <span>3D DIGITAL IMAGING BREAKDOWN</span>
            </span>
            <span className="text-xs text-red-600 font-mono font-bold bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
              14.2M QUADS // OCTANE 8K
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
            Cybernetic Chrysalis // Topology & Render Passes
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Inspect the underlying quad topology, ambient occlusion clay pass, and final multi-pass CGI composite.
          </p>
        </div>

        {/* Pass Selector Buttons */}
        <div className="flex items-center gap-1.5 bg-slate-100 border border-slate-200 p-1.5 rounded-2xl">
          <button
            onClick={() => handlePassChange('clay')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
              activePass === 'clay'
                ? 'bg-blue-600 text-white font-semibold shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>Clay / Wireframe</span>
          </button>
          <button
            onClick={() => handlePassChange('blend')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
              activePass === 'blend'
                ? 'bg-red-600 text-white font-semibold shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>50/50 X-Ray</span>
          </button>
          <button
            onClick={() => handlePassChange('final')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
              activePass === 'final'
                ? 'bg-slate-900 text-white font-semibold shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Final Octane Comp</span>
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative mt-6 rounded-2xl overflow-hidden aspect-[16/9] border border-slate-300 bg-slate-900 group shadow-md">
        {/* Final Render Layer */}
        <img 
          src={finalImg} 
          alt="Final Octane 3D Render" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Clay & Wireframe Layer with Opacity Control */}
        <div 
          className="absolute inset-0 transition-opacity duration-300"
          style={{ opacity: wireframeOpacity / 100 }}
        >
          <img 
            src={clayImg} 
            alt="Wireframe Topology Pass" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Badges Overlay */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <div className="px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full text-xs font-mono font-bold text-blue-800 flex items-center gap-1.5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>
              {wireframeOpacity === 100 
                ? 'Clay & AO Topology Wireframe' 
                : wireframeOpacity === 0 
                ? 'Final Multi-Pass Lighting & Shading' 
                : `X-Ray Blend (${wireframeOpacity}% Topology)`}
            </span>
          </div>
        </div>

        <div className="absolute top-4 right-4">
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="px-4 py-2 bg-white hover:bg-red-600 hover:text-white backdrop-blur-md border border-slate-200 rounded-full text-xs font-bold text-slate-800 transition-all flex items-center gap-1.5 shadow-xl group"
          >
            <span>Full Case Study</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Realtime Opacity Control Slider on Bottom */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-xs font-mono font-bold text-slate-800 uppercase shrink-0">Topology X-Ray:</span>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={wireframeOpacity}
              onChange={(e) => {
                const val = Number(e.target.value);
                setWireframeOpacity(val);
                if (val === 0) setActivePass('final');
                else if (val === 100) setActivePass('clay');
                else setActivePass('blend');
              }}
              className="w-full sm:w-60 accent-red-600 cursor-pointer"
            />
            <span className="text-xs font-mono font-bold text-red-600 w-10 text-right">{wireframeOpacity}%</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono font-semibold text-slate-600 shrink-0">
            <span>ZBrush Sculpt</span>
            <span>•</span>
            <span>Blender Sub-D</span>
            <span>•</span>
            <span>Octane ACEScg</span>
          </div>
        </div>
      </div>

      {/* Tech Breakdown Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-200">
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
          <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">Polygon Complexity</span>
          <span className="text-sm font-extrabold text-blue-700">14.2M Quad Mesh</span>
        </div>
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
          <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">Shading Engine</span>
          <span className="text-sm font-extrabold text-red-600">Spectral Dual-Lobe SSS</span>
        </div>
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
          <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">Master Output</span>
          <span className="text-sm font-extrabold text-slate-900">8K (7680 × 4320 px)</span>
        </div>
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
          <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">Pass Breakdown</span>
          <span className="text-sm font-extrabold text-blue-700">16 Multi-Exr Channels</span>
        </div>
      </div>
    </div>
  );
}
