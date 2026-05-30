import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { About } from './components/About';
import { ResearchInterests } from './components/ResearchInterests';
import { SystemsArchitecture } from './components/SystemsArchitecture';
import { Projects } from './components/Projects';
import { Metrics } from './components/Metrics';
import { TechStack } from './components/TechStack';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles/globals.css';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F0F4FF] overflow-x-hidden selection:bg-[#5CF0FF]/30 selection:text-white">
      {/* Global Intelligence Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-30" />
      
      <div className="relative z-10">
        <Navigation />
      <Hero />
      <Mission />
      <About />
      <ResearchInterests />
      <SystemsArchitecture />
      <Projects />
      <Metrics />
      <TechStack />
      <ExperienceTimeline />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
