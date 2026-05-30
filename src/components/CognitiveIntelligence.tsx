import { motion } from 'motion/react';
import { ExternalLink, BrainCircuit } from 'lucide-react';

export function CognitiveIntelligence() {
  return (
    <section id="cognitive-intelligence" className="relative min-h-screen flex items-center justify-center bg-[#020202] py-32 border-t border-white/5 overflow-hidden">
      {/* Organic Thought Formation Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F0F4FF] rounded-full mix-blend-overlay filter blur-[150px]"
          animate={{ opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center space-y-12"
        >
          <div className="p-6 bg-white/5 border border-white/10 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.05)]">
            <BrainCircuit className="w-12 h-12 text-[#F0F4FF]" />
          </div>

          <h2 className="font-orbitron text-5xl sm:text-6xl md:text-7xl text-[#F0F4FF] tracking-wide font-light leading-tight">
            Beyond Systems.<br />The Human Layer.
          </h2>

          <p className="text-xl sm:text-2xl text-[#F0F4FF]/70 leading-relaxed font-light max-w-4xl">
            Exploring Information Integrity, Trust Formation, Cognitive Security, and Human Perception through multi-agent reasoning.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8 pt-12">
            <a
              href="https://openmind-nexus.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 px-12 py-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500"
            >
              <h3 className="font-orbitron text-2xl text-[#F0F4FF] tracking-widest uppercase">OpenMind</h3>
              <span className="flex items-center gap-2 text-sm text-[#F0F4FF]/50 group-hover:text-[#F0F4FF] transition-colors">
                Explore Platform <ExternalLink className="w-4 h-4" />
              </span>
            </a>
            
            <a
              href="#"
              className="group flex flex-col items-center gap-4 px-12 py-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500"
            >
              <h3 className="font-orbitron text-2xl text-[#F0F4FF] tracking-widest uppercase">NeuroAccess</h3>
              <span className="flex items-center gap-2 text-sm text-[#F0F4FF]/50 group-hover:text-[#F0F4FF] transition-colors">
                View Research <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
