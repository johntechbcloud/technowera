import React, { useState, useEffect } from 'react';
import { Sparkles, Bot, Calculator, Sun, Moon, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/technoweraData';

export default function Navbar({ theme, toggleTheme, openRoiModal, openContactModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#090d16]/90 dark:bg-[#090d16]/90 bg-white/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-container flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl tracking-tight text-white flex items-center gap-1">
              Technowera <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">Enterprise</span>
            </span>
            <span className="text-[10px] text-gray-400 font-medium tracking-wide">technowera.com</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#capabilities" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            Capabilities
          </a>
          <a href="#accelerators" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            Accelerators <span className="bg-purple-500/20 text-purple-300 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-purple-500/30">65+</span>
          </a>
          <a href="#industries" className="hover:text-cyan-400 transition-colors">
            Industries
          </a>
          <a href="#case-studies" className="hover:text-cyan-400 transition-colors">
            Case Studies
          </a>
          <a href="#agent-simulator" className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-cyan-400 font-semibold">
            <Bot className="w-4 h-4 animate-bounce" /> AI Agent Simulator
          </a>
        </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-white/10 hover:border-cyan-500/50 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
          </button>

          {/* ROI Calculator Trigger */}
          <button 
            onClick={openRoiModal}
            className="px-4 py-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/60 font-semibold text-sm flex items-center gap-2 transition-all shadow-sm hover:shadow-cyan-500/20"
          >
            <Calculator className="w-4 h-4" /> AI ROI Calculator
          </button>

          {/* Book Consultation */}
          <button 
            onClick={openContactModal}
            className="btn-primary text-sm font-bold"
          >
            Book Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090d16] border-b border-white/10 px-6 py-6 space-y-4">
          <a 
            href="#capabilities" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-200 hover:text-cyan-400 font-medium"
          >
            Capabilities
          </a>
          <a 
            href="#accelerators" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-200 hover:text-cyan-400 font-medium"
          >
            Accelerators (65+)
          </a>
          <a 
            href="#industries" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-200 hover:text-cyan-400 font-medium"
          >
            Industries
          </a>
          <a 
            href="#case-studies" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-200 hover:text-cyan-400 font-medium"
          >
            Case Studies
          </a>
          <a 
            href="#agent-simulator" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-cyan-400 font-semibold"
          >
            ⚡ AI Agent Simulator
          </a>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button 
              onClick={() => { setMobileMenuOpen(false); openRoiModal(); }}
              className="w-full py-3 rounded-xl bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 font-semibold text-center flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4" /> AI ROI Calculator
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); openContactModal(); }}
              className="w-full py-3 btn-primary justify-center text-center font-bold"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
