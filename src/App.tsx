import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CoreFocus } from './components/CoreFocus';
import { EcosystemArchitecture } from './components/EcosystemArchitecture';
import { Metrics } from './components/Metrics';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { WorkProcess } from './components/WorkProcess';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StarField } from './components/StarField';
import './styles/globals.css';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#05060D] text-[#F0F4FF] overflow-x-hidden selection:bg-[#5CF0FF]/30 selection:text-white">
      <StarField />
      <Navigation />
      <Hero />
      <About />
      <CoreFocus />
      <EcosystemArchitecture />
      <Projects />
      <Metrics />
      <TechStack />
      <WorkProcess />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
