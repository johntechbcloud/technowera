import React, { useState } from 'react';
import { SERVICES } from '../data/technoweraData';
import { Bot, Database, Cloud, Code2, ArrowRight, Check, Sparkles, TrendingUp } from 'lucide-react';

export default function CapabilitiesSection({ openContactModal }) {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);

  const activeService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  const getServiceIcon = (iconName, isSelected) => {
    const cls = `w-6 h-6 transition-colors ${isSelected ? 'text-cyan-400' : 'text-gray-400'}`;
    switch(iconName) {
      case 'Bot': return <Bot className={cls} />;
      case 'Database': return <Database className={cls} />;
      case 'Cloud': return <Cloud className={cls} />;
      case 'Code2': return <Code2 className={cls} />;
      default: return <Sparkles className={cls} />;
    }
  };

  return (
    <section id="capabilities" className="py-24 relative overflow-hidden">
      <div className="max-w-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            End-to-End Enterprise <span className="gradient-text">Transformation Pillars</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            From autonomous AI agents to multi-cloud FinOps, we help global enterprises modernize legacy core systems and build sustainable competitive advantage.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {SERVICES.map((service) => {
            const isSelected = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`p-5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-[#0f172a] border-cyan-500/60 shadow-xl shadow-cyan-500/10 text-white translate-y-[-2px]' 
                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${isSelected ? 'bg-cyan-500/20 border border-cyan-500/30' : 'bg-white/5'}`}>
                    {getServiceIcon(service.icon, isSelected)}
                  </div>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
                </div>

                <div>
                  <h3 className={`font-bold text-base mb-1 ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                    {service.title.split('&')[0]}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2">
                    {service.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab Detail Card */}
        <div className="glass-panel p-8 sm:p-12 border-cyan-500/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left side detail */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Pillar Deep-Dive</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeService.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {activeService.subtitle}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                {activeService.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 text-sm text-gray-200">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Metric Banner */}
              <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center gap-3 text-cyan-300 text-sm font-semibold">
                <TrendingUp className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Impact Benchmark: {activeService.highlightMetric}</span>
              </div>

              <div className="pt-2">
                <button 
                  onClick={openContactModal}
                  className="btn-primary text-sm font-bold"
                >
                  Consult Capabilities Team <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right side visual showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="images/solutions.jpg" 
                  alt={activeService.title}
                  onError={(e) => { e.currentTarget.src = 'public/images/solutions.jpg'; }}
                  className="w-full h-72 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#090d16]/90 backdrop-blur-md border border-white/10 text-xs">
                  <div className="font-bold text-white mb-1">Production Governance Ready</div>
                  <div className="text-gray-400">Includes Technowera automated compliance blueprints and security SLAs.</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
