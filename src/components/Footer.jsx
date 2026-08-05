import React, { useState } from 'react';
import { Sparkles, Shield, ArrowRight, CheckCircle2, Globe, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../data/technoweraData';

export default function Footer({ openRoiModal, openContactModal }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#050810] border-t border-white/10 text-gray-400 text-xs py-16 relative">
      <div className="max-w-container space-y-12">
        
        {/* Top CTA Row */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-blue-950/60 to-purple-950/60 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              Ready to Accelerate Your Enterprise AI & Cloud Strategy?
            </h3>
            <p className="text-gray-300">
              Schedule a 1-on-1 architecture review with Technowera solution leads today.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={openRoiModal}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition-all"
            >
              AI ROI Calculator
            </button>
            <button 
              onClick={openContactModal}
              className="btn-primary text-xs font-bold px-5 py-2.5"
            >
              Book Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-xl text-white">Technowera</span>
            </div>

            <p className="text-gray-400 leading-relaxed text-xs max-w-sm">
              Technowera is a global technology consulting and digital transformation partner delivering Agentic AI, modern data fabrics, multi-cloud FinOps, and 65+ domain solution accelerators.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-cyan-400 font-semibold">
              <Shield className="w-4 h-4" /> ISO 27001 | SOC 2 Type II | HIPAA Compliant
            </div>
          </div>

          {/* Core Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Capabilities</h4>
            <ul className="space-y-2">
              <li><a href="#capabilities" className="hover:text-cyan-400 transition-colors">Agentic AI & Automation</a></li>
              <li><a href="#capabilities" className="hover:text-cyan-400 transition-colors">Data Foundations & Fabric</a></li>
              <li><a href="#capabilities" className="hover:text-cyan-400 transition-colors">Cloud Modernization & MSP</a></li>
              <li><a href="#capabilities" className="hover:text-cyan-400 transition-colors">Digital Product Engineering</a></li>
            </ul>
          </div>

          {/* Solution Accelerators */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Accelerators</h4>
            <ul className="space-y-2">
              <li><a href="#accelerators" className="hover:text-cyan-400 transition-colors">AgenticOps Hub™</a></li>
              <li><a href="#accelerators" className="hover:text-cyan-400 transition-colors">FabricData Sphere™</a></li>
              <li><a href="#accelerators" className="hover:text-cyan-400 transition-colors">CloudFinOps Guard™</a></li>
              <li><a href="#accelerators" className="hover:text-cyan-400 transition-colors">OmniHealth AI Copilot™</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Enterprise Briefing</h4>
            <p className="text-[11px] text-gray-400">
              Receive monthly executive reports on GenAI trends, cloud cost benchmarks, and security frameworks.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input 
                  type="email" 
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 text-xs"
                />
                <button 
                  type="submit" 
                  className="w-full py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition-colors"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Subscribed! Check your inbox.
              </div>
            )}
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <div>
            © {new Date().getFullYear()} Technowera Inc. (technowera.com). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Security Overview</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
