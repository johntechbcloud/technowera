import React, { useState } from 'react';
import { X, Calculator, TrendingUp, CheckCircle, Zap, ArrowRight, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RoiCalculatorModal({ isOpen, onClose, openContactModal }) {
  const [industry, setIndustry] = useState('Healthcare & Life Sciences');
  const [cloudSpend, setCloudSpend] = useState(2500000); // $2.5M
  const [teamSize, setTeamSize] = useState(250);
  const [painPoints, setPainPoints] = useState(['High Cloud Infrastructure Spend', 'Manual IT Workflows']);
  const [calculated, setCalculated] = useState(false);

  if (!isOpen) return null;

  const painPointOptions = [
    'High Cloud Infrastructure Spend',
    'Slow Data Ingestion Pipelines',
    'Manual IT & Customer Workflows',
    'Legacy Data Silos',
    'High Regulatory Compliance Costs'
  ];

  const togglePainPoint = (point) => {
    if (painPoints.includes(point)) {
      setPainPoints(painPoints.filter(p => p !== point));
    } else {
      setPainPoints([...painPoints, point]);
    }
  };

  // Calculations
  const estimatedSavingsPercent = Math.min(42, 18 + painPoints.length * 5);
  const annualSavingsDollar = Math.round(cloudSpend * (estimatedSavingsPercent / 100));
  const timeSavedHoursMonth = Math.round(teamSize * 18);

  const handleCalculate = () => {
    setCalculated(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-2xl bg-[#0f172a] border-cyan-500/50 rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-[#090d16] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white">
                Enterprise AI & Cloud ROI Estimator
              </h3>
              <p className="text-xs text-gray-400">
                Calculate your projected savings using Technowera's 65+ Solution Accelerators.
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-gray-200">
          
          {/* Industry Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Select Primary Industry Vertical
            </label>
            <select 
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="Healthcare & Life Sciences" className="bg-[#0f172a]">Healthcare & Life Sciences</option>
              <option value="Financial Services & Banking" className="bg-[#0f172a]">Financial Services & Banking</option>
              <option value="Retail & Omnichannel Commerce" className="bg-[#0f172a]">Retail & Omnichannel Commerce</option>
              <option value="Manufacturing & Supply Chain" className="bg-[#0f172a]">Manufacturing & Supply Chain</option>
              <option value="Technology & Telecom" className="bg-[#0f172a]">Technology & Telecom</option>
            </select>
          </div>

          {/* Cloud Spend Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold uppercase tracking-wider text-gray-400">Annual Cloud & IT Operations Spend</span>
              <span className="text-cyan-400 font-extrabold text-base">${(cloudSpend / 1000000).toFixed(2)}M</span>
            </div>
            <input 
              type="range" 
              min="500000" 
              max="20000000" 
              step="500000"
              value={cloudSpend} 
              onChange={(e) => setCloudSpend(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

          {/* Pain Points Multi-select */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Identify Target Modernization Pain Points
            </label>
            <div className="flex flex-wrap gap-2">
              {painPointOptions.map((option) => {
                const isSelected = painPoints.includes(option);
                return (
                  <button
                    key={option}
                    onClick={() => togglePainPoint(option)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      isSelected 
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50' 
                        : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '} {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Calculation Output Box */}
          {calculated && (
            <div className="p-5 rounded-xl bg-gradient-to-r from-cyan-950/80 to-purple-950/80 border border-cyan-500/50 space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-400" /> Projected Technowera ROI Summary
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold">
                  {estimatedSavingsPercent}% Cost Reduction
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-2xl font-extrabold text-emerald-400">
                    ${(annualSavingsDollar / 1000).toLocaleString()}k
                  </div>
                  <div className="text-[10px] text-gray-400 uppercase font-bold">Estimated Annual Savings</div>
                </div>

                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-2xl font-extrabold text-cyan-400">
                    {timeSavedHoursMonth.toLocaleString()} Hrs
                  </div>
                  <div className="text-[10px] text-gray-400 uppercase font-bold">Monthly Hours Reclaimed</div>
                </div>
              </div>

              <p className="text-xs text-gray-300">
                Recommended Solution: <strong className="text-white">Technowera CloudFinOps Guard™</strong> & <strong className="text-white">AgenticOps Hub™</strong> framework deployment in 14 business days.
              </p>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#090d16] border-t border-white/10 flex items-center justify-between">
          <button 
            onClick={handleCalculate}
            className="btn-primary text-xs font-bold px-5 py-2.5"
          >
            Calculate Projected Savings <TrendingUp className="w-4 h-4" />
          </button>

          {calculated && (
            <button 
              onClick={() => { onClose(); openContactModal(); }}
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              Get Custom Proposal <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
