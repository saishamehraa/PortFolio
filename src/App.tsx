import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
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
    <div className="relative min-h-screen bg-[#05060D] text-[#F0F4FF] overflow-x-hidden">
      <StarField />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WorkProcess />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}
