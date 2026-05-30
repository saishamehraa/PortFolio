import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function EcosystemMinimap() {
  const [activeSection, setActiveSection] = useState('vision');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  const nodes = [
    { id: 'how-trust-is-built', label: 'PromptShield' },
    { id: 'how-trust-is-built-2', label: 'SIFTGuardian' },
    { id: 'how-trust-is-built-3', label: 'Consent' },
    { id: 'how-trust-is-built-4', label: 'CodeSage' },
    { id: 'orchestration', label: 'SecRitual', isBranch: false },
    { id: 'security-intelligence', label: 'CyberMesh', isBranch: false },
    { id: 'cognitive-intelligence', label: 'OpenMind', isBranch: true },
    { id: 'cognitive-intelligence-2', label: 'NeuroAccess', isBranch: true }
  ];

  return (
    <div className="fixed left-6 sm:left-12 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-start gap-4">
      {nodes.map((node, i) => {
        // Simple logic to light up based on section flow
        let isActive = false;
        
        if (activeSection === 'how-trust-is-built' && i <= 3) isActive = true;
        if (activeSection === 'orchestration' && node.label === 'SecRitual') isActive = true;
        if (activeSection === 'security-intelligence' && node.label === 'CyberMesh') isActive = true;
        if (activeSection === 'cognitive-intelligence' && node.isBranch) isActive = true;
        
        return (
          <div key={node.label} className={`flex items-center gap-3 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-20'}`}>
            <div className="relative flex items-center justify-center w-4 h-4">
              {node.isBranch && <div className="absolute -left-4 w-4 h-px bg-white/20 transform rotate-45" />}
              <motion.div 
                className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#5CF0FF] shadow-[0_0_10px_#5CF0FF]' : 'bg-white'}`}
                animate={isActive ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className={`text-[10px] font-orbitron tracking-widest uppercase ${isActive ? 'text-[#5CF0FF]' : 'text-white'}`}>
              {node.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
