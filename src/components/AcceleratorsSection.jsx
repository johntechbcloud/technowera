import React, { useState } from 'react';
import { ACCELERATORS } from '../data/technoweraData';
import { Layers, Clock, Cpu, Search, ArrowRight, Zap, Filter } from 'lucide-react';

export default function AcceleratorsSection({ openContactModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI & Automation', 'Data & AI', 'Cloud Modernization', 'Healthcare', 'Financial Services', 'Manufacturing'];

  const filteredAccelerators = ACCELERATORS.filter(acc => {
    const matchesCat = selectedCategory === 'All' || acc.category === selectedCategory;
    const matchesSearch = acc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          acc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          acc.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="accelerators" className="py-24 bg-[#0c1220]/80 relative border-t border-white/10">
      <div className="max-w-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
              <Layers className="w-3.5 h-3.5" /> 65+ Pre-Built Frameworks
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technowera <span className="gradient-text-alt">Solution Accelerators</span>
            </h2>
            <p className="text-gray-300 text-base">
              Pre-engineered modular codebases and architectural blueprints designed to slash enterprise deployment timelines from 6 months to 2 weeks.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search accelerators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-cyan-500 transition-all"
            />
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <Filter className="w-4 h-4 text-gray-400 shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat 
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400' 
                  : 'bg-white/5 text-gray-300 border border-white/10 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accelerators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAccelerators.map((acc) => (
            <div 
              key={acc.id}
              className="glass-panel p-6 border-white/10 flex flex-col justify-between hover:border-purple-500/40 group"
            >
              <div className="space-y-4">
                
                {/* Header tag */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[11px] font-bold">
                    {acc.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-cyan-400">
                    <Clock className="w-3 h-3" /> Deploy in {acc.timeToDeploy}
                  </span>
                </div>

                {/* Name & Description */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                    {acc.name} <Zap className="w-4 h-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                    {acc.description}
                  </p>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {acc.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Footer Impact & CTA */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
                <div className="text-gray-300 font-semibold truncate max-w-[65%]">
                  <span className="text-cyan-400 font-bold">Impact:</span> {acc.impact}
                </div>
                <button 
                  onClick={openContactModal}
                  className="text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Request Spec <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredAccelerators.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            No accelerators found matching "{searchQuery}". Try selecting another category.
          </div>
        )}

      </div>
    </section>
  );
}
