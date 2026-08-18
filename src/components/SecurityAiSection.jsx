import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  Cpu, 
  Activity, 
  FolderCheck, 
  ArrowUpRight, 
  Lock, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  Shield,
  Layers,
  FileCheck2
} from 'lucide-react';
import { SECURITY_AI_DATA } from '../data/technoweraData';

export default function SecurityAiSection({ openContactModal }) {
  const [activeTab, setActiveTab] = useState(0);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-rose-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'FolderCheck': return <FolderCheck className="w-5 h-5 text-purple-400" />;
      default: return <Shield className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="security-ai" className="py-24 relative overflow-hidden bg-[#080d1a] border-t border-b border-white/10">
      {/* Background glow accents */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            {SECURITY_AI_DATA.hero.tagline}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Secure the Enterprise. <br />
            <span className="bg-gradient-to-r from-rose-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Govern the AI.
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {SECURITY_AI_DATA.hero.subtitle}
          </p>
        </div>

        {/* Feature Spotlight Card: Speed of AI */}
        <div className="glass-panel p-8 sm:p-12 mb-16 border-rose-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-rose-950/20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" /> Next-Gen Threat Posture
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Security Must Evolve at the{' '}
                <span className="text-rose-400 underline decoration-rose-500/40 underline-offset-8">
                  Speed of AI
                </span>
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {SECURITY_AI_DATA.hero.speedDesc1}
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                {SECURITY_AI_DATA.hero.speedDesc2}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button 
                  onClick={openContactModal}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-sm shadow-lg shadow-rose-600/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  Request a Security Consultation <ArrowUpRight className="w-4 h-4" />
                </button>
                <a 
                  href="#sec-pillars"
                  className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 text-sm font-semibold flex items-center gap-2 transition-all"
                >
                  Explore Security Catalog <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Graphic Banner */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-rose-500/30 shadow-2xl group">
                <img 
                  src="/images/security-ai.jpg" 
                  alt="Technowera Security AI Operations Center" 
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating Badges */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-rose-500/40 text-xs text-rose-300 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-rose-400" /> AI Defense Active
                </div>
                
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-cyan-400" /> Microsoft Security Gold Tier
                    </div>
                    <div className="text-[11px] text-gray-400">Defender XDR • Purview DLP • Intune</div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
                    24/7 SOC
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Counter Metrics: The Enterprise Security Perimeter Has Changed */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              The Enterprise <span className="text-rose-400">Security Perimeter Has Changed</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECURITY_AI_DATA.metrics.map((metric, idx) => (
              <div 
                key={idx}
                className="glass-panel p-6 text-center border-white/10 hover:border-rose-500/40 transition-all group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-cyan-400 mb-2 group-hover:scale-105 transition-transform">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-300">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars Interactive Matrix */}
        <div id="sec-pillars" className="space-y-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {SECURITY_AI_DATA.pillars.map((pillar, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${
                  activeTab === idx 
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30 border border-rose-400' 
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 hover:text-white'
                }`}
              >
                {getIcon(pillar.icon)}
                {pillar.category}
              </button>
            ))}
          </div>

          {/* Active Pillar Services Grid */}
          <div className="glass-panel p-8 border-rose-500/20 bg-slate-900/60">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  {getIcon(SECURITY_AI_DATA.pillars[activeTab].icon)}
                  {SECURITY_AI_DATA.pillars[activeTab].category}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  {SECURITY_AI_DATA.pillars[activeTab].description}
                </p>
              </div>
              <button
                onClick={openContactModal}
                className="px-4 py-2 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 font-bold text-xs flex items-center gap-1.5 self-start sm:self-auto transition-colors"
              >
                Schedule Consultation <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SECURITY_AI_DATA.pillars[activeTab].services.map((srv, sIdx) => (
                <div 
                  key={sIdx}
                  className="p-5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-rose-500/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-rose-400">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <h5 className="font-bold text-white text-sm group-hover:text-rose-300 transition-colors">
                        {srv.name}
                      </h5>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-semibold">
                    <span className="text-cyan-400 font-mono">Enterprise Ready</span>
                    <span className="group-hover:translate-x-1 transition-transform text-rose-400">Deploy →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
