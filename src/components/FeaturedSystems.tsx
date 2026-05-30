import { motion } from 'motion/react';
import { ExternalLink, Github, BrainCircuit, Network } from 'lucide-react';

export function FeaturedSystems() {
  const systems = [
    {
      title: 'SecRitual',
      subtitle: 'AI Security Reasoning & Trust Orchestration Platform',
      description: 'An explainable security decision engine where multiple AI agents debate risk, synthesize evidence, and generate trust-backed deployment verdicts.',
      tech: ['Trust Intelligence', 'Consensus Reasoning', 'Explainable Security'],
      github: 'https://github.com/saishamehraa/SecRitual',
      demo: 'https://secritual-ai.onrender.com',
      icon: <BrainCircuit className="w-8 h-8 text-[#5CF0FF]" />,
      accentColor: '#5CF0FF',
      align: 'left'
    },
    {
      title: 'CyberMesh',
      subtitle: 'Autonomous Infrastructure Response Network',
      description: 'Coordinates security intelligence across interconnected systems, propagates threat states, synchronizes telemetry, and orchestrates autonomous response.',
      tech: ['Infrastructure Security', 'Runtime Intelligence', 'Distributed Response'],
      github: 'https://github.com/saishamehraa/CyberMesh',
      demo: 'https://cybermesh-ai.onrender.com',
      icon: <Network className="w-8 h-8 text-[#A68CFF]" />,
      accentColor: '#A68CFF',
      align: 'right'
    }
  ];

  return (
    <section id="featured" className="relative py-24 sm:py-32 lg:py-40 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <motion.div
          className="text-center mb-32"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-[#F0F4FF] via-[#5CF0FF] to-[#A68CFF] bg-clip-text text-transparent tracking-wide">
            Security & Trust Systems
          </h2>
        </motion.div>

        <div className="space-y-40">
          {systems.map((sys, idx) => (
            <motion.div
              key={sys.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              <div className={`flex flex-col ${sys.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
                
                {/* Visual Placeholder for Product Display */}
                <div className="w-full lg:w-1/2 aspect-video bg-[#050505] border border-white/5 rounded-2xl relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                  {/* Subtle Background Animation */}
                  <motion.div 
                    className="absolute inset-0 opacity-20 mix-blend-screen"
                    style={{ backgroundColor: sys.accentColor }}
                    animate={{ opacity: [0.05, 0.15, 0.05] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                      {sys.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-4xl sm:text-5xl font-orbitron font-medium text-[#F0F4FF] tracking-wide">
                      {sys.title}
                    </h3>
                    <h4 className="text-lg text-[#F0F4FF]/50 uppercase tracking-widest font-semibold" style={{ color: sys.accentColor }}>
                      {sys.subtitle}
                    </h4>
                  </div>
                  
                  <p className="text-xl text-[#F0F4FF]/70 leading-relaxed font-light">
                    {sys.description}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-4">
                    {sys.tech.map((tag) => (
                      <span key={tag} className="px-5 py-2.5 text-sm font-medium rounded-sm bg-white/5 text-[#F0F4FF]/80 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 pt-8">
                    <a
                      href={sys.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-sm font-orbitron text-[#F0F4FF] hover:bg-white/10 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" /> Launch
                    </a>
                    <a
                      href={sys.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-4 bg-transparent border border-transparent rounded-sm font-orbitron text-[#F0F4FF]/60 hover:text-[#F0F4FF] transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" /> Source
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
