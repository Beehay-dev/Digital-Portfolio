import React, { useState, useEffect } from 'react';
import { Calculator, Send, CheckCircle2, Sparkles, Clock, ShieldCheck, HelpCircle } from 'lucide-react';

export default function CommissionCalculator({ isOpen, onClose }) {
  const [projectType, setProjectType] = useState('3d');
  const [deliverablesCount, setDeliverablesCount] = useState(3);
  const [urgency, setUrgency] = useState('standard'); // 'standard' | 'rush'
  const [usage, setUsage] = useState('commercial'); // 'digital' | 'commercial' | 'global'
  
  // Form states
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

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

  // Cost calculation logic
  const baseRates = {
    'photo': 250, // per image
    '3d': 650,    // per image
    '2d': 400,    // per image
    'hybrid': 900 // per image
  };

  const urgencyMultiplier = urgency === 'rush' ? 1.4 : 1.0;
  
  const usageMultipliers = {
    'digital': 1.0,
    'commercial': 1.35,
    'global': 1.8
  };

  const estimatedTotal = Math.round(
    baseRates[projectType] * deliverablesCount * urgencyMultiplier * usageMultipliers[usage]
  );

  const estimatedDays = urgency === 'rush' 
    ? Math.max(3, deliverablesCount * 2) 
    : Math.max(7, deliverablesCount * 4);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!clientEmail) return;
    const ref = `VNC-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceCode(ref);
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-y-auto z-10 p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-mono text-red-600 font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <Calculator className="w-4 h-4" />
              <span>Project Commission & Scope Estimator</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              Calculate Your Custom Production Scope
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-900 text-xs font-mono px-3 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-100 transition-colors font-semibold"
          >
            Close (Esc)
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 font-display">Inquiry Successfully Registered!</h3>
            <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
              Thank you, <span className="text-red-600 font-bold">{clientName || 'fellow creator'}</span>. Your custom scope inquiry has been generated under ticket reference:
            </p>
            <div className="inline-block px-5 py-2.5 rounded-2xl bg-slate-900 text-white font-mono text-xl font-black tracking-wider shadow-md">
              {referenceCode}
            </div>
            <p className="text-xs text-slate-500 pt-4">
              We typically reply with full contract specifications within 6 to 12 business hours.
            </p>
            <div className="pt-6">
              <button
                onClick={() => { setIsSubmitted(false); onClose(); }}
                className="px-6 py-3 rounded-2xl bg-red-600 text-white font-bold text-xs hover:bg-red-500 transition-colors shadow-md"
              >
                Return to Portfolio
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-8">
            {/* Step 1: Discipline Selector */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block mb-3">
                1. Select Primary Discipline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { id: '3d', title: '3D CGI Imaging', desc: 'Product renders, environments, hard-surface' },
                  { id: 'photo', title: 'Photo Retouching', desc: 'Editorial beauty, non-destructive comp, grading' },
                  { id: '2d', title: '2D Graphic Design', desc: 'Swiss typography, branding, matte painting' },
                  { id: 'hybrid', title: 'Integrated 2D/3D', desc: 'Full-service campaign from concept to 3D & print' }
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setProjectType(item.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      projectType === item.id
                        ? 'bg-red-50 border-red-500 shadow-md text-slate-900'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Deliverables & Sliders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono text-slate-800 uppercase font-bold">
                    Deliverables Count:
                  </label>
                  <span className="text-sm font-bold font-mono text-red-600">
                    {deliverablesCount} {deliverablesCount === 1 ? 'Asset' : 'Assets'}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={deliverablesCount}
                  onChange={(e) => setDeliverablesCount(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                  <span>1 Single Hero</span>
                  <span>5 Campaign Set</span>
                  <span>10+ Full Suite</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-800 uppercase font-bold block mb-2">
                  Turnaround Urgency:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setUrgency('standard')}
                    className={`p-2.5 rounded-xl border text-xs font-mono transition-all ${
                      urgency === 'standard'
                        ? 'bg-blue-600 text-white font-bold shadow-md'
                        : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Standard (~{estimatedDays} Days)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('rush')}
                    className={`p-2.5 rounded-xl border text-xs font-mono transition-all ${
                      urgency === 'rush'
                        ? 'bg-red-600 text-white font-bold shadow-md'
                        : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Priority Rush (+40%)
                  </button>
                </div>
              </div>
            </div>

            {/* Step 3: Licensing Scope */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block mb-3">
                3. Commercial Usage Rights
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'digital', title: 'Digital & Web Only', desc: 'Social media, web hero, press releases' },
                  { id: 'commercial', title: 'Commercial Print & POS', desc: 'Magazines, packaging, retail point of sale' },
                  { id: 'global', title: 'Global OOH & Broadcast', desc: 'Billboards, worldwide transit, television' }
                ].map((u) => (
                  <div
                    key={u.id}
                    onClick={() => setUsage(u.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      usage === u.id
                        ? 'bg-blue-50 border-blue-600 text-slate-900 shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}
                  >
                    <span className="text-xs font-bold block text-slate-900">{u.title}</span>
                    <span className="text-[10px] text-slate-500 mt-1 block">{u.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Estimation Summary Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-red-50 via-rose-50 to-blue-50 border border-red-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase font-bold">Estimated Production Bracket:</span>
                <div className="text-3xl font-black text-slate-900 font-display mt-0.5">
                  €{estimatedTotal.toLocaleString()} <span className="text-xs font-mono font-normal text-slate-500">EUR</span>
                </div>
                <div className="text-xs text-blue-700 font-mono font-bold mt-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Estimated Delivery: ~{estimatedDays} Business Days</span>
                </div>
              </div>

              <div className="text-xs text-slate-500 max-w-xs sm:text-right font-medium">
                <span className="block font-bold text-slate-800">Non-binding guideline.</span>
                <span>Final contracts adjusted based on specific technical complexity and custom 3D asset sourcing.</span>
              </div>
            </div>

            {/* Direct Inquiry Contact Form */}
            <div className="pt-4 border-t border-slate-200 space-y-4">
              <h4 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider">
                Lock in Your Timeline & Submit Inquiry
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono text-slate-600 font-bold block mb-1">Your Name / Agency *</label>
                  <input 
                    type="text" 
                    required 
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Elena Rostova / Vogue Creative"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-slate-600 font-bold block mb-1">Business Email *</label>
                  <input 
                    type="email" 
                    required 
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="elena@vogue-creative.com"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-600 font-bold block mb-1">Project Details or Reference Links (Optional)</label>
                <textarea 
                  rows="3" 
                  value={projectNotes}
                  onChange={(e) => setProjectNotes(e.target.value)}
                  placeholder="Share a brief overview of your visual goals, resolution requirements, or style references..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:bg-white"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Strict NDA guaranteed upon request</span>
                </span>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white font-bold text-xs transition-colors flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
