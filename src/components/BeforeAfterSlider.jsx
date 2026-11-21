import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sliders, Eye, SplitSquareVertical, Columns, Info, CheckCircle2, Sparkles, Layers, ZoomIn } from 'lucide-react';

export default function BeforeAfterSlider({ 
  beforeImage = "/assets/portrait_raw_before.jpg", 
  afterImage = "/assets/portrait_retouched_after.jpg",
  beforeLabel = "Raw Unprocessed Capture",
  afterLabel = "Vogue Master Editorial Grade"
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState("slider"); // 'slider' | 'side-by-side' | 'hold'
  const [holdingBefore, setHoldingBefore] = useState(false);
  const [activeStep, setActiveStep] = useState(null);
  const [showMetadata, setShowMetadata] = useState(true);

  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const retouchSteps = [
    {
      title: "01. RAW Neutralization",
      desc: "Recovered 1.4 EV blown highlights in Capture One, calibrated neutral skin tone curve, reduced lens chromatic fringing."
    },
    {
      title: "02. Micro-Frequency Separation",
      desc: "Separated high-frequency surface texture (pores, eyelashes) from low-frequency color transitions to retain 100% skin anatomy."
    },
    {
      title: "03. Non-Destructive Dodge & Burn",
      desc: "Hand-sculpted facial bone geometry with 50% neutral gray overlay curves. Sharpened hazel iris catchlights."
    },
    {
      title: "04. Editorial Color Grading",
      desc: "Infused warm amber rim lighting, sculpted emerald shadow tones, applied 35mm optical grain profile and Vogue masthead."
    }
  ];

  return (
    <div className="w-full my-8 bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-8 shadow-xl">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-0.5 text-xs font-mono font-bold rounded-full bg-red-100 text-red-700 border border-red-200">
              COMMERCIAL PHOTO RETOUCHING
            </span>
            <span className="text-xs text-blue-700 font-mono font-semibold bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
              16-BIT PROPHOTO RGB
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
            High-End Editorial Beauty Retouch & Color Science
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Drag the interactive divider to inspect natural skin micro-texture preservation vs magazine color grading.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          <button
            onClick={() => { setViewMode('slider'); setHoldingBefore(false); }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
              viewMode === 'slider'
                ? 'bg-red-600 text-white shadow-md font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <SplitSquareVertical className="w-3.5 h-3.5" />
            <span>Split Slider</span>
          </button>
          
          <button
            onClick={() => { setViewMode('side-by-side'); setHoldingBefore(false); }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
              viewMode === 'side-by-side'
                ? 'bg-blue-600 text-white shadow-md font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Columns className="w-3.5 h-3.5" />
            <span>Side-by-Side</span>
          </button>

          <button
            onMouseDown={() => setHoldingBefore(true)}
            onMouseUp={() => setHoldingBefore(false)}
            onTouchStart={() => setHoldingBefore(true)}
            onTouchEnd={() => setHoldingBefore(false)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
              holdingBefore
                ? 'bg-slate-900 text-white shadow-md font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Press and hold to view original RAW capture"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Hold to Compare</span>
          </button>
        </div>
      </div>

      {/* Main Comparison Area */}
      <div className="mt-6 select-none">
        {viewMode === 'slider' && (
          <div 
            ref={containerRef}
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
            className="relative w-full aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/10] max-h-[640px] rounded-2xl overflow-hidden cursor-ew-resize border border-slate-300 shadow-inner group"
          >
            {/* After Image (Background) */}
            <img 
              src={afterImage} 
              alt="Retouched Vogue Master" 
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full text-xs font-mono font-bold text-red-600 flex items-center gap-1.5 shadow-lg">
              <Sparkles className="w-3 h-3 text-red-500" />
              <span>{afterLabel}</span>
            </div>

            {/* Before Image (Clipped Layer) */}
            <div 
              className="absolute inset-0 overflow-hidden pointer-events-none transition-all duration-75"
              style={{ width: `${holdingBefore ? 100 : sliderPosition}%` }}
            >
              <img 
                src={beforeImage} 
                alt="Unprocessed RAW" 
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  height: '100%'
                }}
              />
              <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full text-xs font-mono font-bold text-blue-700 flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>{beforeLabel}</span>
              </div>
            </div>

            {/* Draggable Divider Line & Knob with Red styling */}
            {!holdingBefore && (
              <div 
                className="absolute top-0 bottom-0 z-20 pointer-events-none transition-all duration-75"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-1 h-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.9)]"></div>
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white border-3 border-red-500 shadow-[0_4px_20px_rgba(239,68,68,0.5)] flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                  <Sliders className="w-4 h-4 rotate-90" />
                </div>
              </div>
            )}

            {/* Hint overlay at bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-xs font-mono font-semibold text-slate-800 pointer-events-none shadow-md">
              ↔ Drag anywhere to slide ({Math.round(sliderPosition)}%)
            </div>
          </div>
        )}

        {viewMode === 'side-by-side' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-slate-300 shadow-md">
              <img src={beforeImage} alt={beforeLabel} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full text-xs font-mono font-bold text-blue-700">
                {beforeLabel}
              </div>
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/90 backdrop-blur-md rounded-xl text-xs text-slate-700 border border-slate-200 font-medium">
                Sony A7R V // 61 MP RAW // Natural ambient studio light // Uncompressed 14-bit
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-red-500 shadow-xl">
              <img src={afterImage} alt={afterLabel} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 px-3 py-1 bg-red-600 text-white rounded-full text-xs font-mono font-bold shadow-md">
                {afterLabel}
              </div>
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/90 backdrop-blur-md rounded-xl text-xs text-red-900 border border-red-200 font-medium">
                Frequency separation + non-destructive dodge/burn + custom editorial color grade
              </div>
            </div>
          </div>
        )}

        {/* Retouching Breakdown Stages */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-red-600" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Retouching & Color Pipeline Breakdown
              </h4>
            </div>
            <button
              onClick={() => setShowMetadata(!showMetadata)}
              className="text-xs font-mono text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
            >
              <Info className="w-3.5 h-3.5" />
              {showMetadata ? 'Hide Camera Specs' : 'Show Camera Specs'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {retouchSteps.map((step, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeStep === idx 
                    ? 'bg-red-50 border-red-400 text-slate-900 shadow-md' 
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono text-red-600 font-bold">{step.title}</span>
                  <CheckCircle2 className={`w-4 h-4 ${activeStep === idx ? 'text-red-600' : 'text-slate-400'}`} />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Technical metadata drawer */}
          {showMetadata && (
            <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Camera & Lens</span>
                <span className="text-slate-900 font-semibold">Sony A7R V + 85mm GM f/1.4</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Exposure Parameters</span>
                <span className="text-slate-900 font-semibold">1/160s • f/2.8 • ISO 100</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Software Suite</span>
                <span className="text-slate-900 font-semibold">Capture One + Photoshop CC</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Layer Stack</span>
                <span className="text-red-600 font-bold">84 Non-destructive Layers</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
