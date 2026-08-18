import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBanner from './components/StatsBanner';
import CapabilitiesSection from './components/CapabilitiesSection';
import SecurityAiSection from './components/SecurityAiSection';
import AcceleratorsSection from './components/AcceleratorsSection';
import IndustriesSection from './components/IndustriesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import AgentSimulator from './components/AgentSimulator';
import GlobalEcosystem from './components/GlobalEcosystem';
import RoiCalculatorModal from './components/RoiCalculatorModal';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [isRoiModalOpen, setIsRoiModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative">
      <Navbar 
        theme={theme}
        toggleTheme={toggleTheme}
        openRoiModal={() => setIsRoiModalOpen(true)}
        openContactModal={() => setIsContactModalOpen(true)}
      />

      <main>
        <HeroSection 
          openRoiModal={() => setIsRoiModalOpen(true)}
          openContactModal={() => setIsContactModalOpen(true)}
        />
        
        <StatsBanner />
        
        <CapabilitiesSection 
          openContactModal={() => setIsContactModalOpen(true)}
        />

        <SecurityAiSection 
          openContactModal={() => setIsContactModalOpen(true)}
        />
        
        <AcceleratorsSection 
          openContactModal={() => setIsContactModalOpen(true)}
        />
        
        <IndustriesSection 
          openContactModal={() => setIsContactModalOpen(true)}
        />
        
        <CaseStudiesSection 
          openContactModal={() => setIsContactModalOpen(true)}
        />
        
        <AgentSimulator />
        
        <GlobalEcosystem />
      </main>

      <Footer 
        openRoiModal={() => setIsRoiModalOpen(true)}
        openContactModal={() => setIsContactModalOpen(true)}
      />

      <RoiCalculatorModal 
        isOpen={isRoiModalOpen}
        onClose={() => setIsRoiModalOpen(false)}
        openContactModal={() => setIsContactModalOpen(true)}
      />

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
