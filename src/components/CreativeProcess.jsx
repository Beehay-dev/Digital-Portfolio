import React, { useState } from 'react';
import { Palette, Box, Sun, Layers, CheckCircle, ArrowRight } from 'lucide-react';

export default function CreativeProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "ideation",
      icon: <Palette className="w-5 h-5 text-amber-600" />,
      number: "01",
      title: "Art Direction & 2D Ideation",
      subtitle: "Moodboards, Concept Thumbnails & Color Scripting",
      desc: "Every project initiates with meticulous visual research. For 2D concept art or branding, we construct modular geometric grids and value studies. For 3D or photo shoots, we define physical lighting maps, chromatic palettes, and photographic reference plates.",
      deliverables: ["Curated Moodboard", "Value & Lighting Sketches", "Pantone / Hex Palette", "Compositional Wireframes"]
    },
    {
      id: "modeling",
      icon: <Box className="w-5 h-5 text-blue-600" />,
      number: "02",
      title: "3D Digital Sculpting & Modeling",
      subtitle: "Topology, Hard-Surface Schematics & Organic Anatomy",
      desc: "Using ZBrush and Blender, base volumetric shapes are sculpted before undergoing clean quad re-topology for sub-division surface modeling. This guarantees deformation-free glass reflections, razor-sharp bevels, and production-ready mesh integrity.",
      deliverables: ["Clean Quad Topology", "Sub-D Bevel Schematics", "Clay / AO Viewport Proofs", "CAD Conversion"]
    },
    {
      id: "shading",
      icon: <Sun className="w-5 h-5 text-red-600" />,
      number: "03",
      title: "Physically-Based Shading & Lighting",
      subtitle: "Dielectrics, Glass Caustics & Volumetric Atmosphere",
      desc: "Shaders are authored using physically-based principles: dual-lobe microfacet specular distribution, Abbe dispersion for faceted crystals, and true volumetric absorption. Multi-light studio rigs simulate actual Broncolor softboxes and parabolic reflectors.",
      deliverables: ["PBR Material Textures", "Spectral Caustic Simulation", "Multi-pass EXR Channels", "HDR Environment Mapping"]
    },
    {
      id: "retouching",
      icon: <Layers className="w-5 h-5 text-emerald-600" />,
      number: "04",
      title: "Retouching, Compositing & Color Science",
      subtitle: "Frequency Separation, Dodge/Burn & Print Mastering",
      desc: "The composite stage is where 2D and 3D converge. Whether retouching 61MP RAW portrait captures or blending 16-channel 3D EXRs, we apply non-destructive frequency separation, manual bone contour sculpting, and ACEScg color mastering.",
      deliverables: ["Non-destructive 16-Bit PSD", "300 DPI CMYK Print Proofs", "Color Space Conform (Display P3)", "Commercial Licensing"]
    }
  ];

  return (
    <section id="process" className="py-20 sm:py-28 bg-white/60 border-y border-slate-200 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-bold mb-3">
            <span>METHODOLOGY & PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display tracking-tight">
            How Digital Imaging & 3D Art Converge
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            A battle-tested production pipeline developed across 140+ commercial campaigns for luxury brands, editorial titles, and entertainment worlds.
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={s.id}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-3xl border transition-all cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-white border-red-500 shadow-xl'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-blue-600" />
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                    {s.icon}
                  </div>
                  <span className="font-mono text-sm font-bold text-slate-400">{s.number}</span>
                </div>
                <h3 className={`text-base font-extrabold mb-1 font-display ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                  {s.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-1 font-medium">{s.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-red-600 font-mono text-xs font-bold mb-1">
                <span>PHASE {steps[activeStep].number}</span>
                <span>•</span>
                <span>{steps[activeStep].subtitle}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                {steps[activeStep].title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeStep === i ? 'bg-red-600 w-8' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
            <div className="lg:col-span-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">Technical Execution</h4>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {steps[activeStep].desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold mb-3 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span>Phase Deliverables</span>
              </h4>
              <ul className="space-y-2.5">
                {steps[activeStep].deliverables.map((item, i) => (
                  <li key={i} className="text-xs font-mono text-slate-700 flex items-center gap-2 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
