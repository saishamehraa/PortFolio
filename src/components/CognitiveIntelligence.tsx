import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export function CognitiveIntelligence() {
  return (
    <section id="cognitive-intelligence" className="relative min-h-[120vh] flex flex-col justify-center bg-[#030305] py-40 overflow-hidden">
      
      {/* Massive Glowing Orbs (Background/Dominant Visual) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
        <motion.div 
          className="absolute w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] bg-[#A78BFA] rounded-full mix-blend-screen filter blur-[200px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-[#7C3AED] rounded-full mix-blend-screen filter blur-[150px] translate-x-1/4"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-8 sm:px-12 lg:px-24 max-w-[2000px] relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-150px" }}
          className="flex flex-col items-center space-y-16"
        >
          <p className="font-mono text-sm tracking-[0.3em] text-[#A78BFA] uppercase">
            Parallel Research Track
          </p>

          <h2 className="font-inter text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] leading-[0.95] text-[#F2F2F2] font-light tracking-tight">
            Beyond Systems.<br />
            The Human Layer.
          </h2>

          <p className="text-2xl sm:text-3xl md:text-4xl text-[#F2F2F2]/70 font-light max-w-4xl mx-auto leading-relaxed pt-8">
            Exploring Information Integrity, Trust Formation, Cognitive Security, and Human Perception.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-12 pt-24 w-full">
            <a
              href="https://openmind-nexus.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-16 w-full max-w-md bg-white/[0.02] border border-[#A78BFA]/20 rounded-[40px] hover:bg-[#A78BFA]/5 transition-all duration-700"
            >
              <h3 className="font-inter text-4xl text-[#F2F2F2] font-light tracking-widest mb-6">OpenMind</h3>
              <span className="flex items-center gap-3 text-lg font-mono tracking-widest uppercase text-[#A78BFA]/60 group-hover:text-[#A78BFA] transition-colors">
                Explore Platform <ExternalLink className="w-5 h-5" />
              </span>
            </a>
            
            <a
              href="#"
              className="group flex flex-col items-center justify-center p-16 w-full max-w-md bg-white/[0.02] border border-[#7C3AED]/20 rounded-[40px] hover:bg-[#7C3AED]/5 transition-all duration-700"
            >
              <h3 className="font-inter text-4xl text-[#F2F2F2] font-light tracking-widest mb-6">NeuroAccess</h3>
              <span className="flex items-center gap-3 text-lg font-mono tracking-widest uppercase text-[#7C3AED]/60 group-hover:text-[#7C3AED] transition-colors">
                View Research <ExternalLink className="w-5 h-5" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
