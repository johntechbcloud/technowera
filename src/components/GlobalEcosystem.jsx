import React, { useState } from 'react';
import { LOCATIONS, PARTNERS } from '../data/technoweraData';
import { Globe, MapPin, Mail, Phone, ExternalLink, ShieldCheck } from 'lucide-react';

export default function GlobalEcosystem() {
  const [activeLoc, setActiveLoc] = useState(LOCATIONS[0].city);

  const selectedLoc = LOCATIONS.find(l => l.city === activeLoc) || LOCATIONS[0];

  return (
    <section className="py-24 bg-[#0c1220]/80 border-t border-white/10 relative">
      <div className="max-w-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Globe className="w-3.5 h-3.5" /> Global Network & Alliances
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Seamless Global Delivery & <span className="gradient-text">Partner Ecosystem</span>
          </h2>
          <p className="text-gray-300 text-base">
            With 8 delivery hubs across the Americas, EMEA, and APAC, Technowera delivers 24/7 continuous engineering and cloud operations.
          </p>
        </div>

        {/* Global Map & Office Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Office Selector */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">
              Select Innovation Hub
            </h3>

            {LOCATIONS.map((loc) => {
              const isSelected = activeLoc === loc.city;
              return (
                <button
                  key={loc.city}
                  onClick={() => setActiveLoc(loc.city)}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                    isSelected 
                      ? 'bg-cyan-950/60 border-cyan-500/60 text-white shadow-lg shadow-cyan-500/15' 
                      : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-gray-500'}`} />
                    <span className="font-bold text-sm">{loc.city}</span>
                  </div>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
                </button>
              );
            })}
          </div>

          {/* Right: Selected Office Details & Visual */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 border-cyan-500/30 space-y-6">
              
              <div className="relative rounded-xl overflow-hidden border border-white/10 h-52">
                <img 
                  src="images/global.jpg" 
                  alt="Technowera Global Delivery Hub"
                  onError={(e) => { e.currentTarget.src = 'public/images/global.jpg'; }}
                  className="w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 font-bold text-white text-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" /> {selectedLoc.city}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-gray-400 flex items-center gap-1 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Physical Address
                  </div>
                  <div className="font-bold text-white text-sm">{selectedLoc.address}</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-gray-400 flex items-center gap-1 font-semibold">
                    <Mail className="w-3.5 h-3.5 text-purple-400" /> Direct Inquiry Email
                  </div>
                  <div className="font-bold text-cyan-400 text-sm">{selectedLoc.email}</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
