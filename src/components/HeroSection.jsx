import React from 'react';
import { ArrowRight, Bot, ShieldCheck, Zap, Layers, ChevronRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/technoweraData';

export default function HeroSection({ openRoiModal, openContactModal }) {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background ambient light gradients */}
      <div className="glow-orb glow-cyan w-[500px] h-[500px] top-10 -left-40"></div>
      <div className="glow-orb glow-purple w-[600px] h-[600px] top-20 right-0"></div>

      <div className="max-w-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Execution-Led Enterprise AI & Multi-Cloud Transformation</span>
              <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              Architecting <br />
              <span className="gradient-text">Autonomous AI</span> & <br />
              Enterprise Fabrics
            </h1>

            {/* Hero Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed">
              {COMPANY_INFO.heroSubtitle}
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>65+ Production Solution Accelerators</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Microsoft Azure Expert Managed Service Provider</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Databricks & Snowflake Elite Data Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero-Trust Security & HIPAA/SOC2 Certified</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button 
                onClick={openRoiModal}
                className="btn-primary text-base px-6 py-3.5 font-bold shadow-lg shadow-cyan-500/25"
              >
                Estimate AI & Cloud ROI <Zap className="w-5 h-5 fill-cyan-300" />
              </button>

              <a 
                href="#accelerators"
                className="btn-secondary text-base px-6 py-3.5 font-semibold"
              >
                Browse Accelerators <Layers className="w-5 h-5 text-purple-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-cyan-500/40 via-blue-500/20 to-purple-500/40 shadow-2xl shadow-cyan-500/10">
              <div className="relative rounded-[15px] overflow-hidden bg-[#0f172a]/90 backdrop-blur-xl border border-white/10">
                <img 
                  src="images/hero.jpg" 
                  alt="Technowera Enterprise AI Network" 
                  onError={(e) => { e.currentTarget.src = 'public/images/hero.jpg'; }}
                  className="w-full h-80 sm:h-96 object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Glassmorphism Stat Cards */}
                <div className="absolute top-4 left-4 glass-panel p-3 text-xs flex items-center gap-3 border-cyan-500/30">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">AgenticOps 4.0</div>
                    <div className="text-gray-400">Autonomous Workflow Active</div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 glass-panel p-3 text-xs flex items-center gap-3 border-purple-500/30">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">$180M+ Enterprise ROI</div>
                    <div className="text-gray-400">Verified Client Impact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
