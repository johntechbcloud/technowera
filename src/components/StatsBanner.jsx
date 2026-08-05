import React from 'react';
import { COMPANY_INFO, PARTNERS } from '../data/technoweraData';
import { Shield, Award, Cpu, Server, Database, Cloud, Zap } from 'lucide-react';

export default function StatsBanner() {
  const getPartnerIcon = (iconName) => {
    switch(iconName) {
      case 'Cloud': return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-amber-400" />;
      case 'Database': return <Database className="w-5 h-5 text-red-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-orange-400" />;
      default: return <Award className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section className="py-12 border-y border-white/10 bg-[#0c1220]/60 relative z-10">
      <div className="max-w-container">
        
        {/* Core Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          {COMPANY_INFO.metrics.map((m, idx) => (
            <div key={idx} className="space-y-1 text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight gradient-text">
                {m.value}
              </div>
              <div className="text-sm font-semibold text-gray-200">
                {m.label}
              </div>
              <div className="text-xs text-gray-400">
                {m.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Ecosystem Partners Slider Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-400 shrink-0 flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-400" /> Strategic Enterprise Partners & Certifications
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6">
            {PARTNERS.map((partner, pIdx) => (
              <div 
                key={pIdx}
                className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5 text-xs text-gray-300 hover:border-cyan-500/40 hover:bg-white/10 transition-all cursor-default"
              >
                {getPartnerIcon(partner.icon)}
                <div>
                  <div className="font-bold text-white">{partner.name}</div>
                  <div className="text-[10px] text-gray-400">{partner.badge}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
