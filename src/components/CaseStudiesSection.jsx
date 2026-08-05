import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/technoweraData';
import { TrendingUp, ArrowRight, Award, ChevronDown, ChevronUp } from 'lucide-react';

export default function CaseStudiesSection({ openContactModal }) {
  const [expandedId, setExpandedId] = useState(CASE_STUDIES[0].id);

  return (
    <section id="case-studies" className="py-24 bg-[#0c1220]/80 relative border-t border-white/10">
      <div className="max-w-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" /> Client Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proven Outcomes, <span className="gradient-text">Quantifiable Impact</span>
          </h2>
          <p className="text-gray-300 text-base">
            See how Fortune 500 enterprises partner with Technowera to solve complex data, AI, and cloud challenges.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-6">
          {CASE_STUDIES.map((cs) => {
            const isExpanded = expandedId === cs.id;
            return (
              <div 
                key={cs.id}
                className="glass-panel p-6 sm:p-8 border-white/10 transition-all hover:border-cyan-500/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Info Left */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-bold">
                        {cs.industry}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">
                        {cs.client}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                      {cs.title}
                    </h3>

                    {/* Metrics Banner */}
                    <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                      {cs.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="space-y-0.5">
                          <div className="text-lg sm:text-xl font-extrabold text-cyan-400">
                            {m.value}
                          </div>
                          <div className="text-[10px] sm:text-xs text-gray-400 font-medium leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Collapsible Details */}
                    {isExpanded && (
                      <div className="space-y-3 pt-2 text-xs text-gray-300 animate-fadeIn">
                        <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/20">
                          <span className="font-bold text-red-400">The Challenge:</span> {cs.challenge}
                        </div>
                        <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20">
                          <span className="font-bold text-emerald-400">The Technowera Solution:</span> {cs.solution}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-4 pt-2">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : cs.id)}
                        className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                      >
                        {isExpanded ? 'Hide Architectural Breakdown' : 'Read Full Architectural Case Study'} 
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      <button 
                        onClick={openContactModal}
                        className="text-xs font-bold text-gray-400 hover:text-white flex items-center gap-1"
                      >
                        Schedule Strategy Session <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                  {/* Thumbnail Right */}
                  <div className="lg:col-span-5 hidden lg:block">
                    <div className="rounded-xl overflow-hidden border border-white/10 relative h-60">
                      <img 
                        src={cs.image} 
                        alt={cs.title} 
                        className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent"></div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
