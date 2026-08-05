import React, { useState } from 'react';
import { INDUSTRIES } from '../data/technoweraData';
import { HeartPulse, Building2, ShoppingBag, Factory, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

export default function IndustriesSection({ openContactModal }) {
  const [activeInd, setActiveInd] = useState(INDUSTRIES[0].id);

  const selectedInd = INDUSTRIES.find(i => i.id === activeInd) || INDUSTRIES[0];

  const getIndIcon = (iconName, isSelected) => {
    const cls = `w-5 h-5 ${isSelected ? 'text-cyan-400' : 'text-gray-400'}`;
    switch(iconName) {
      case 'HeartPulse': return <HeartPulse className={cls} />;
      case 'Building2': return <Building2 className={cls} />;
      case 'ShoppingBag': return <ShoppingBag className={cls} />;
      case 'Factory': return <Factory className={cls} />;
      default: return <Building2 className={cls} />;
    }
  };

  return (
    <section id="industries" className="py-24 relative overflow-hidden">
      <div className="max-w-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" /> Industry Verticals
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tailored Domain Expertise for <span className="gradient-text">Regulated Sectors</span>
          </h2>
          <p className="text-gray-300 text-base">
            Deep vertical knowledge engineered into every solution, ensuring 100% regulatory compliance, security, and measurable ROI.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {INDUSTRIES.map((ind) => {
            const isSelected = activeInd === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveInd(ind.id)}
                className={`px-5 py-3 rounded-xl border text-sm font-bold flex items-center gap-2.5 transition-all ${
                  isSelected 
                    ? 'bg-gradient-to-r from-cyan-950 to-blue-950 border-cyan-500/60 text-white shadow-lg shadow-cyan-500/15' 
                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
                }`}
              >
                {getIndIcon(ind.icon, isSelected)}
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Industry Showcase Card */}
        <div className="glass-panel p-8 sm:p-12 border-blue-500/30 relative">
          <div className="space-y-6 max-w-3xl">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-300 text-xs font-bold border border-cyan-500/20">
              <ShieldCheck className="w-4 h-4 text-cyan-400" /> {selectedInd.stats}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {selectedInd.tagline}
            </h3>

            <p className="text-gray-300 text-base leading-relaxed">
              {selectedInd.description}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              {selectedInd.highlights.map((h, hIdx) => (
                <div key={hIdx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-200 flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button 
                onClick={openContactModal}
                className="btn-primary text-sm font-bold"
              >
                Explore Industry Case Studies <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
