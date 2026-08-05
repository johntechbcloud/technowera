import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Send, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    serviceInterest: 'Execution-Led AI & Agentic Automation',
    timeline: 'Immediate (1-2 Weeks)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.5 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-xl bg-[#0f172a] border-cyan-500/50 rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-[#090d16] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white">
                Schedule Technowera Architecture Consultation
              </h3>
              <p className="text-xs text-gray-400">
                Connect with an Enterprise AI & Cloud Solutions Lead.
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

        {/* Form Body */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 flex-1 text-xs text-gray-200">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-bold text-gray-400">Full Name *</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-gray-400">Work Email *</label>
                <input 
                  type="email"
                  required
                  placeholder="s.jenkins@enterprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-bold text-gray-400">Company Name *</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Acme Health Systems"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-gray-400">Target Timeline</label>
                <select 
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="Immediate (1-2 Weeks)" className="bg-[#0f172a]">Immediate (1-2 Weeks)</option>
                  <option value="1-3 Months" className="bg-[#0f172a]">1-3 Months</option>
                  <option value="Q3/Q4 Planning" className="bg-[#0f172a]">Q3/Q4 Planning</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-gray-400">Primary Domain Interest</label>
              <select 
                value={formData.serviceInterest}
                onChange={(e) => setFormData({...formData, serviceInterest: e.target.value})}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="Execution-Led AI & Agentic Automation" className="bg-[#0f172a]">Execution-Led AI & Agentic Automation</option>
                <option value="AI-Ready Data Foundations & Microsoft Fabric" className="bg-[#0f172a]">AI-Ready Data Foundations & Microsoft Fabric</option>
                <option value="Cloud Modernization & Multi-Cloud FinOps" className="bg-[#0f172a]">Cloud Modernization & Multi-Cloud FinOps</option>
                <option value="Solution Accelerators Licensing" className="bg-[#0f172a]">Solution Accelerators Licensing</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-gray-400">Brief Project Context</label>
              <textarea 
                rows="3"
                placeholder="Outline legacy constraints, cloud platforms, or key business objectives..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
              ></textarea>
            </div>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-gray-400">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>NDA protected. Your project scope remains strictly confidential under Technowera Enterprise Policy.</span>
            </div>

            <div className="pt-3 border-t border-white/10">
              <button 
                type="submit"
                className="w-full btn-primary justify-center font-bold text-sm py-3"
              >
                Submit Consultation Request <Send className="w-4 h-4" />
              </button>
            </div>

          </form>
        ) : (
          <div className="p-10 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Consultation Scheduled!
            </h3>
            <p className="text-sm text-gray-300 max-w-md mx-auto">
              Thank you, <strong className="text-cyan-400">{formData.fullName}</strong>. A Technowera Solution Architect from our team has received your request and will contact you at <span className="underline text-white">{formData.email}</span> within 4 business hours.
            </p>
            <button 
              onClick={onClose}
              className="btn-secondary text-xs font-bold px-6 py-2.5 mt-2"
            >
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
