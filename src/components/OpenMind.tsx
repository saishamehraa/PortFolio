import { motion } from 'motion/react';
import { BrainCircuit, ExternalLink, Github } from 'lucide-react';

export function OpenMind() {
  return (
    <section id="openmind" className="relative py-32 lg:py-48 bg-[#020202] border-y border-white/5 overflow-hidden">
      {/* Softer, distinct ambient glow for cognitive realm */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full mix-blend-screen filter blur-[150px]"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center space-y-12"
        >
          <div className="p-5 bg-white/5 border border-white/10 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <BrainCircuit className="w-10 h-10 text-[#F0F4FF]" />
          </div>

          <div className="space-y-6">
            <h2 className="font-orbitron text-5xl sm:text-6xl md:text-7xl text-[#F0F4FF] tracking-wide font-medium">
              OpenMind Nexus
            </h2>
            <h3 className="text-xl sm:text-2xl text-[#F0F4FF]/60 uppercase tracking-[0.2em] font-light">
              Multi-Agent Cognitive Risk Intelligence
            </h3>
          </div>

          <p className="text-xl sm:text-2xl text-[#F0F4FF]/80 leading-relaxed font-light max-w-4xl">
            A collaborative AI system that detects manipulation patterns, analyzes cognitive bias, evaluates source credibility, and generates transparent information trust assessments.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4 max-w-3xl">
            {['Information Integrity', 'Cognitive Security', 'Bias Detection', 'Transparency', 'Explainability'].map((tag) => (
              <span key={tag} className="px-6 py-3 text-sm font-medium rounded-full bg-transparent border border-white/20 text-[#F0F4FF]/70">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-6 pt-12">
            <a
              href="https://openmind-nexus.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-orbitron hover:bg-[#F0F4FF] transition-colors duration-300 font-semibold shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <ExternalLink className="w-5 h-5" /> Launch Platform
            </a>
            <a
              href="https://github.com/saishamehraa/OpenMind-Nexus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-10 py-5 bg-transparent border border-white/20 rounded-full font-orbitron text-[#F0F4FF] hover:bg-white/5 transition-colors duration-300"
            >
              <Github className="w-5 h-5" /> View Source
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
