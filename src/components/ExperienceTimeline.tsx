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

  const cognitiveTrack = [
    "NeuroAccess",
    "OpenMind Nexus"
  ];

  return (
    <section id="process" className="relative py-24 sm:py-32 lg:py-40 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="text-center mb-32"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-[#F0F4FF] via-[#5CF0FF] to-[#A68CFF] bg-clip-text text-transparent font-medium tracking-wide mb-6">
            Evolution of Infrastructure
          </h2>
          <p className="text-sm sm:text-base text-[#F0F4FF]/50 font-semibold uppercase tracking-[0.3em]">
            From Security Modules to Intelligent Ecosystems
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-24 md:gap-32 justify-center">
          
          {/* AI Security Track */}
          <div className="flex-1 max-w-sm mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center gap-6 mb-20 text-center"
            >
              <Shield className="w-8 h-8 text-[#5CF0FF]" />
              <h3 className="text-xl font-orbitron text-[#F0F4FF] tracking-widest uppercase">Security & Trust</h3>
            </motion.div>
            
            <div className="relative flex flex-col items-center">
              {/* Connecting line */}
              <div className="absolute top-6 bottom-6 w-px bg-gradient-to-b from-[#5CF0FF]/20 via-[#5CF0FF]/10 to-transparent" />
              
              {securityTrack.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, ease: "easeOut", delay: idx * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative z-10 w-full mb-16 last:mb-0"
                >
                  <div className="bg-[#050505] border border-white/5 rounded-2xl p-6 text-center shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-[#5CF0FF]/30">
                    <span className="text-[#F0F4FF]/80 font-orbitron tracking-widest text-lg">{item}</span>
                  </div>
                  {idx < securityTrack.length - 1 && (
                    <div className="flex justify-center mt-6 mb-[-24px] text-[#5CF0FF]/30 relative z-20 bg-transparent w-6 h-6 mx-auto rounded-full items-center">
                      <ArrowDown className="w-5 h-5" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cognitive Track */}
          <div className="flex-1 max-w-sm mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center gap-6 mb-20 text-center"
            >
              <BrainCircuit className="w-8 h-8 text-[#A68CFF]" />
              <h3 className="text-xl font-orbitron text-[#F0F4FF] tracking-widest uppercase">Cognitive Intelligence</h3>
            </motion.div>
            
            <div className="relative flex flex-col items-center">
              {/* Connecting line */}
              <div className="absolute top-6 bottom-6 w-px bg-gradient-to-b from-[#A68CFF]/20 via-[#A68CFF]/10 to-transparent" />
              
              {cognitiveTrack.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, ease: "easeOut", delay: idx * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative z-10 w-full mb-16 last:mb-0"
                >
                  <div className="bg-[#050505] border border-white/5 rounded-2xl p-6 text-center shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-[#A68CFF]/30">
                    <span className="text-[#F0F4FF]/80 font-orbitron tracking-widest text-lg">{item}</span>
                  </div>
                  {idx < cognitiveTrack.length - 1 && (
                    <div className="flex justify-center mt-6 mb-[-24px] text-[#A68CFF]/30 relative z-20 bg-transparent w-6 h-6 mx-auto rounded-full items-center">
                      <ArrowDown className="w-5 h-5" />
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
