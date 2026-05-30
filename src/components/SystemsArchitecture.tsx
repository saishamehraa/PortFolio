import { motion } from 'motion/react';
import { Database, Shield, Activity, Cpu } from 'lucide-react';

export function SystemsArchitecture() {
  const inputLayers = [
    { id: 'promptshield', name: "PromptShield", icon: <Shield className="w-5 h-5 text-[#5CF0FF]" /> },
    { id: 'siftguardian', name: "SIFTGuardian", icon: <Activity className="w-5 h-5 text-[#4DA6FF]" /> },
    { id: 'consentguardian', name: "Consent Guardian", icon: <Database className="w-5 h-5 text-[#A68CFF]" /> },
    { id: 'codesage', name: "CodeSage", icon: <Cpu className="w-5 h-5 text-[#F0F4FF]" /> },
  ];

  return (
    <section id="architecture" className="relative py-24 sm:py-32 lg:py-40 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Cinematic Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <h2 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-[#F0F4FF] via-[#5CF0FF] to-[#A68CFF] bg-clip-text text-transparent font-medium tracking-wide">
            From Modules To Ecosystems
          </h2>
          <p className="text-xl sm:text-2xl text-[#F0F4FF]/50 font-light mt-8 max-w-3xl mx-auto leading-relaxed">
            A modular AI-native security architecture designed to analyze threats, reason about trust, orchestrate intelligence, and coordinate autonomous response.
          </p>
        </motion.div>

        {/* Self-Assembling Architecture Container */}
        <div className="flex flex-col items-center justify-center relative w-full max-w-4xl mx-auto">
          
          {/* Input Layer (4 nodes) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            {inputLayers.map((node, i) => (
              <motion.div 
                key={node.id} 
                className="flex flex-col items-center p-5 bg-[#050505] border border-white/5 rounded-xl z-10 relative shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="mb-3 p-3 bg-white/5 rounded-lg border border-white/5">
                  {node.icon}
                </div>
                <span className="text-sm font-semibold text-[#F0F4FF] tracking-wide">
                  {node.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Connections to SecRitual */}
          <div className="flex w-full justify-center h-24 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 w-3/4 h-1/2 border-b border-l border-r rounded-b-xl border-[#4DA6FF]/30"
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: '50%', opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-100px" }}
            />
            <motion.div 
              className="absolute bottom-0 h-1/2 border-l border-[#4DA6FF]/30"
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: '50%', opacity: 1 }}
              transition={{ duration: 1.0, delay: 1.4, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-100px" }}
            />
            
            {/* Telemetry packet (Infinite) */}
            <motion.div 
              className="absolute w-1 h-4 bg-[#4DA6FF] shadow-[0_0_10px_#4DA6FF] rounded-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ top: ['0%', '100%'] }}
              transition={{ 
                opacity: { duration: 1, delay: 2.5 },
                top: { duration: 4, repeat: Infinity, ease: "linear" }
              }}
              viewport={{ once: true, margin: "-100px" }}
            />
          </div>

          {/* SecRitual */}
          <motion.div 
            className="w-full max-w-sm p-6 bg-[#050505] border border-[#5CF0FF]/20 rounded-xl text-center z-10 shadow-[0_0_40px_rgba(92,240,255,0.05)]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 2.0, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="font-orbitron text-2xl tracking-widest text-[#F0F4FF] mb-2">SecRitual</h3>
            <p className="text-[#5CF0FF]/60 text-sm uppercase tracking-[0.2em] font-semibold">Trust Orchestration</p>
          </motion.div>

          {/* Connection to CyberMesh */}
          <div className="flex w-full justify-center h-20 relative overflow-hidden">
            <motion.div 
              className="h-full border-l border-[#A68CFF]/30"
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: '100%', opacity: 1 }}
              transition={{ duration: 1.0, delay: 2.8, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-100px" }}
            />
            
            {/* Telemetry packet (Infinite) */}
            <motion.div 
              className="absolute w-1 h-4 bg-[#A68CFF] shadow-[0_0_10px_#A68CFF] rounded-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ top: ['0%', '100%'] }}
              transition={{ 
                opacity: { duration: 1, delay: 3.5 },
                top: { duration: 4, repeat: Infinity, ease: "linear" }
              }}
              viewport={{ once: true, margin: "-100px" }}
            />
          </div>

          {/* CyberMesh */}
          <motion.div 
            className="w-full max-w-md p-6 bg-[#050505] border border-[#A68CFF]/20 rounded-xl text-center z-10 shadow-[0_0_40px_rgba(166,140,255,0.05)]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 3.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="font-orbitron text-2xl tracking-widest text-[#F0F4FF] mb-2">CyberMesh</h3>
            <p className="text-[#A68CFF]/60 text-sm uppercase tracking-[0.2em] font-semibold">Autonomous Response</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
