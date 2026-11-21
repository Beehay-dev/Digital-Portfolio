import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import WireframeBreakdownViewer from './components/WireframeBreakdownViewer';
import ProjectGrid from './components/ProjectGrid';
import SkillsMatrix from './components/SkillsMatrix';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import CommissionCalculator from './components/CommissionCalculator';
import { portfolioProjects } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  // Find the primary 3D breakdown project
  const cyberProject = portfolioProjects.find(p => p.id === 'cybernetic-chrysalis') || portfolioProjects[0];

  const scrollToRetouch = () => {
    const el = document.getElementById('retouch-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBreakdown = () => {
    const el = document.getElementById('breakdown-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-slate-900 relative">
      {/* Decorative ambient artistic background orbs */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-red-400/15 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="fixed top-20 right-0 w-[550px] h-[550px] bg-blue-500/15 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="fixed bottom-10 left-1/3 w-[450px] h-[450px] bg-rose-300/20 rounded-full blur-[130px] -z-10 pointer-events-none" />

      {/* Navigation */}
      <Navbar 
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onScrollToRetouch={scrollToRetouch}
        onScrollToBreakdown={scrollToBreakdown}
      />

      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero 
          onOpenCalculator={() => setIsCalculatorOpen(true)}
          onScrollToRetouch={scrollToRetouch}
        />

        {/* 2. Interactive Showcases Container (Photo Retouching & 3D Breakdown) */}
        <section className="py-16 bg-white/70 backdrop-blur-md border-y border-slate-200/80 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-mono uppercase tracking-widest text-red-600 font-bold mb-3">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span>INTERACTIVE LAB</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display tracking-tight">
                Photo Retouching & 3D Topology Analysis
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Inspect raw sensor captures vs high-end frequency separation grades, and switch between quad clay passes and Octane multi-pass renders.
              </p>
            </div>

            {/* Retouching Section */}
            <div id="retouch-section">
              <BeforeAfterSlider />
            </div>

            {/* 3D Wireframe Breakdown Section */}
            <div id="breakdown-section" className="mt-14">
              <WireframeBreakdownViewer 
                project={cyberProject}
                onOpenCaseStudy={setSelectedProject}
              />
            </div>
          </div>
        </section>

        {/* 3. Works Archive (Filterable 2D & 3D Gallery) */}
        <ProjectGrid 
          projects={portfolioProjects} 
          onSelectProject={setSelectedProject} 
        />

        {/* 4. Skills & Software Matrix */}
        <SkillsMatrix />
      </main>

      {/* 5. Footer with Direct WhatsApp / Call / Email */}
      <Footer onOpenCalculator={() => setIsCalculatorOpen(true)} />

      {/* Modals - Cleanly mounted only when triggered */}
      {selectedProject && (
        <CaseStudyModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {isCalculatorOpen && (
        <CommissionCalculator 
          isOpen={isCalculatorOpen} 
          onClose={() => setIsCalculatorOpen(false)} 
        />
      )}
    </div>
  );
}
