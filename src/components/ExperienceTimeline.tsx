import { motion } from 'motion/react';
import { ArrowDown, Shield, BrainCircuit } from 'lucide-react';

export function ExperienceTimeline() {
  const securityTrack = [
    "PromptShield",
    "SIFTGuardian",
    "Consent Guardian",
    "CodeSage",
    "SecRitual",
    "CyberMesh"
  ];

  const transparencyTrack = [
    "NeuroAccess",
    "OpenMind Nexus"
  ];

  return (
    <section id="process" className="relative py-24 sm:py-32 lg:py-40 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-[#4DA6FF] to-[#5CF0FF] bg-clip-text text-transparent px-4 inline-block tracking-wide mb-6">
            Evolution of Infrastructure
          </h2>
          <p className="text-lg sm:text-xl text-[#F0F4FF]/50 font-light uppercase tracking-[0.2em]">
            From Security Modules to Intelligent Ecosystems
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16 md:gap-32 justify-center">
          
          {/* AI Security Track */}
          <div className="flex-1 max-w-sm mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex items-center gap-5 mb-16 justify-center"
            >
              <Shield className="w-6 h-6 text-[#5CF0FF]" />
              <h3 className="text-2xl font-orbitron text-[#F0F4FF] tracking-wide">AI Security Track</h3>
            </motion.div>
            
            <div className="relative flex flex-col items-center">
              {/* Connecting line */}
              <div className="absolute top-6 bottom-6 w-px bg-gradient-to-b from-[#5CF0FF]/30 to-transparent" />
              
              {securityTrack.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative z-10 w-full mb-12 last:mb-0"
                >
                  <div className="bg-[#050505] border border-white/5 rounded-xl p-5 text-center shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-[#5CF0FF]/40 hover:shadow-[0_0_30px_rgba(92,240,255,0.05)]">
                    <span className="text-[#F0F4FF]/80 hover:text-[#F0F4FF] transition-colors duration-300 font-orbitron tracking-widest">{item}</span>
                  </div>
                  {idx < securityTrack.length - 1 && (
                    <div className="flex justify-center mt-5 mb-[-20px] text-[#5CF0FF]/30 relative z-20 bg-transparent w-6 h-6 mx-auto rounded-full items-center">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI Transparency Track */}
          <div className="flex-1 max-w-sm mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex items-center gap-5 mb-16 justify-center"
            >
              <BrainCircuit className="w-6 h-6 text-[#A68CFF]" />
              <h3 className="text-2xl font-orbitron text-[#F0F4FF] tracking-wide">AI Transparency Track</h3>
            </motion.div>
            
            <div className="relative flex flex-col items-center">
              {/* Connecting line */}
              <div className="absolute top-6 bottom-6 w-px bg-gradient-to-b from-[#A68CFF]/30 to-transparent" />
              
              {transparencyTrack.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative z-10 w-full mb-12 last:mb-0"
                >
                  <div className="bg-[#050505] border border-white/5 rounded-xl p-5 text-center shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-[#A68CFF]/40 hover:shadow-[0_0_30px_rgba(166,140,255,0.05)]">
                    <span className="text-[#F0F4FF]/80 hover:text-[#F0F4FF] transition-colors duration-300 font-orbitron tracking-widest">{item}</span>
                  </div>
                  {idx < transparencyTrack.length - 1 && (
                    <div className="flex justify-center mt-5 mb-[-20px] text-[#A68CFF]/30 relative z-20 bg-transparent w-6 h-6 mx-auto rounded-full items-center">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
