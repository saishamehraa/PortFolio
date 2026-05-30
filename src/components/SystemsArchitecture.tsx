import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Database, Shield, Activity, Cpu } from 'lucide-react';

export function SystemsArchitecture() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const inputLayers = [
    { id: 'promptshield', name: "PromptShield", desc: "Prompt Injection Defense", icon: <Shield className="w-5 h-5 text-[#5CF0FF]" /> },
    { id: 'siftguardian', name: "SIFTGuardian", desc: "Threat Intelligence", icon: <Activity className="w-5 h-5 text-[#4DA6FF]" /> },
    { id: 'consentguardian', name: "Consent Guardian", desc: "AI Governance", icon: <Database className="w-5 h-5 text-[#A68CFF]" /> },
    { id: 'codesage', name: "CodeSage", desc: "Security Analysis", icon: <Cpu className="w-5 h-5 text-[#F0F4FF]" /> },
  ];

  // Helper to determine active state
  const isInputActive = hoveredNode === 'secritual';
  const isSecRitualActive = hoveredNode === 'secritual' || hoveredNode === 'cybermesh';
  const isCyberMeshActive = hoveredNode === 'cybermesh';

  return (
    <section id="architecture" className="relative py-24 sm:py-32 lg:py-40 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 lg:order-1 space-y-6"
          >
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-[#4DA6FF] to-[#5CF0FF] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(92,240,255,0.15)] tracking-wide">
              Security Intelligence Architecture
            </h2>
            <p className="text-xl text-[#F0F4FF]/70 font-light leading-relaxed border-l-[3px] border-[#5CF0FF]/50 pl-6">
              A modular AI-native security architecture designed to <span className="text-[#5CF0FF] font-medium">analyze</span> threats, <span className="text-[#4DA6FF] font-medium">reason</span> about trust, <span className="text-[#A68CFF] font-medium">orchestrate</span> intelligence, and <span className="text-[#F0F4FF] font-medium">autonomously coordinate</span> infrastructure response.
            </p>
          </motion.div>

          {/* Diagram - Living Network */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2 flex flex-col items-center justify-center relative p-10 bg-[#050505]/60 rounded-2xl border border-white/5 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.9)]"
            onMouseLeave={() => setHoveredNode(null)}
          >
            {/* Input Layer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {inputLayers.map((node) => (
                <motion.div 
                  key={node.id} 
                  className={`flex flex-col items-center p-4 bg-[#050505] border rounded-xl transition-all duration-700 z-10 relative
                    ${isInputActive ? 'border-[#5CF0FF]/40 shadow-[0_0_20px_rgba(92,240,255,0.1)]' : 'border-white/5'}`}
                  animate={{ scale: [0.98, 1.02, 0.98] }}
                  transition={{ duration: 6 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="mb-3 p-2 bg-[#5CF0FF]/5 rounded-lg opacity-80">
                    {node.icon}
                  </div>
                  <span className={`text-xs sm:text-sm font-semibold text-center transition-colors duration-500
                    ${isInputActive ? 'text-[#F0F4FF]' : 'text-[#F0F4FF]/50'}`}>
                    {node.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Connecting Lines down to SecRitual */}
            <div className="flex w-full justify-center h-20 relative">
              <div className={`absolute top-0 w-3/4 h-1/2 border-b border-l border-r rounded-b-xl transition-colors duration-700
                ${isInputActive ? 'border-[#4DA6FF]/60' : 'border-[#4DA6FF]/10'}`} />
              <div className={`absolute bottom-0 h-1/2 border-l transition-colors duration-700
                ${isInputActive ? 'border-[#4DA6FF]/60' : 'border-[#4DA6FF]/10'}`} />
              
              {/* Telemetry packet down to SecRitual */}
              <motion.div 
                className="absolute w-1 h-3 bg-[#4DA6FF] shadow-[0_0_8px_#4DA6FF] rounded-full"
                animate={{ top: ['0%', '100%'], opacity: [0, 0.8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
              />
            </div>

            {/* SecRitual */}
            <motion.div 
              className={`mt-2 w-64 p-5 bg-[#050505] border rounded-xl text-center z-10 cursor-pointer transition-all duration-500
                ${isSecRitualActive ? 'border-[#4DA6FF]/80 shadow-[0_0_30px_rgba(77,166,255,0.15)]' : 'border-[#4DA6FF]/20'}`}
              onMouseEnter={() => setHoveredNode('secritual')}
              animate={{ scale: [0.99, 1.01, 0.99] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <h3 className={`font-orbitron text-lg tracking-wider transition-colors duration-500
                ${isSecRitualActive ? 'text-[#F0F4FF]' : 'text-[#F0F4FF]/70'}`}>SecRitual</h3>
              <p className="text-[#4DA6FF]/50 text-xs mt-2 uppercase tracking-widest">Trust Orchestration</p>
            </motion.div>

            {/* Connecting Arrow down to CyberMesh */}
            <div className="flex w-full justify-center h-16 relative">
              <div className={`h-full border-l transition-colors duration-700
                ${isCyberMeshActive ? 'border-[#A68CFF]/60' : 'border-[#A68CFF]/10'}`} />
              
              {/* Telemetry packet down to CyberMesh */}
              <motion.div 
                className="absolute w-1 h-3 bg-[#A68CFF] shadow-[0_0_8px_#A68CFF] rounded-full"
                animate={{ top: ['0%', '100%'], opacity: [0, 0.8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2.5 }}
              />
            </div>

            {/* CyberMesh */}
            <motion.div 
              className={`mt-2 w-72 p-5 bg-[#050505] border rounded-xl text-center z-10 cursor-pointer transition-all duration-500
                ${isCyberMeshActive ? 'border-[#A68CFF]/80 shadow-[0_0_30px_rgba(166,140,255,0.15)]' : 'border-[#A68CFF]/20'}`}
              onMouseEnter={() => setHoveredNode('cybermesh')}
              animate={{ scale: [0.99, 1.01, 0.99] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <h3 className={`font-orbitron text-lg tracking-wider transition-colors duration-500
                ${isCyberMeshActive ? 'text-[#F0F4FF]' : 'text-[#F0F4FF]/70'}`}>CyberMesh</h3>
              <p className="text-[#A68CFF]/50 text-xs mt-2 uppercase tracking-widest">Autonomous Response</p>
            </motion.div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#4DA6FF]/5 blur-[80px] rounded-full pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
