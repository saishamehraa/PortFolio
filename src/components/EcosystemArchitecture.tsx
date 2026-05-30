import { motion } from 'motion/react';
import { ArrowDown, Database, Shield, Activity, Cpu } from 'lucide-react';

export function EcosystemArchitecture() {
  const inputLayers = [
    { name: "PromptShield", desc: "Prompt Injection Defense", icon: <Shield className="w-5 h-5 text-[#5CF0FF]" /> },
    { name: "SIFTGuardian", desc: "Threat Intelligence", icon: <Activity className="w-5 h-5 text-[#4DA6FF]" /> },
    { name: "ConsentGuardian", desc: "AI Governance", icon: <Database className="w-5 h-5 text-[#A68CFF]" /> },
    { name: "CodeSage", desc: "Security Analysis", icon: <Cpu className="w-5 h-5 text-[#F0F4FF]" /> },
  ];

  return (
    <section id="ecosystem" className="relative py-16 sm:py-20 lg:py-32 bg-[#05060D]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-[#4DA6FF] to-[#5CF0FF] bg-clip-text text-transparent mb-6 drop-shadow-[0_0_10px_rgba(92,240,255,0.3)]">
              AI Security & Trust Ecosystem
            </h2>
            <p className="text-xl text-[#F0F4FF]/90 font-light leading-relaxed border-l-4 border-[#5CF0FF] pl-4">
              A modular architecture designed to <span className="text-[#5CF0FF] font-medium">analyze</span>, <span className="text-[#4DA6FF] font-medium">reason</span>, <span className="text-[#A68CFF] font-medium">orchestrate</span>, and <span className="text-[#F0F4FF] font-medium">respond</span> to AI security threats.
            </p>
          </motion.div>

          {/* Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex flex-col items-center justify-center relative p-8 bg-[#0B0D1A] rounded-2xl border border-[#4DA6FF]/20 shadow-[0_0_30px_rgba(77,166,255,0.05)]"
          >
            {/* Input Layer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {inputLayers.map((node, i) => (
                <div key={i} className="flex flex-col items-center p-3 bg-[#05060D] border border-[#5CF0FF]/20 rounded-xl hover:border-[#5CF0FF]/60 transition-colors z-10 relative group">
                  <div className="mb-2 p-2 bg-[#5CF0FF]/10 rounded-lg group-hover:scale-110 transition-transform">
                    {node.icon}
                  </div>
                  <span className="text-[#F0F4FF] text-xs sm:text-sm font-semibold text-center mb-1">{node.name}</span>
                </div>
              ))}
            </div>

            {/* Connecting Lines down to SecRitual */}
            <div className="flex w-full justify-center h-16 relative">
              <div className="absolute top-0 w-3/4 h-1/2 border-b border-l border-r border-[#4DA6FF]/30 rounded-b-xl" />
              <div className="absolute bottom-0 h-1/2 border-l border-[#4DA6FF]/30" />
              <ArrowDown className="absolute bottom-[-10px] w-5 h-5 text-[#4DA6FF]" />
            </div>

            {/* SecRitual */}
            <div className="mt-4 w-64 p-4 bg-gradient-to-r from-[#4DA6FF]/10 to-[#A68CFF]/10 border border-[#4DA6FF]/40 rounded-xl text-center z-10 shadow-[0_0_20px_rgba(77,166,255,0.15)] backdrop-blur-md">
              <h3 className="text-[#F0F4FF] font-orbitron text-lg">SecRitual</h3>
              <p className="text-[#F0F4FF]/60 text-xs mt-1">Trust Orchestration & Reasoning</p>
            </div>

            {/* Connecting Arrow down to CyberMesh */}
            <div className="flex w-full justify-center h-12 relative">
              <div className="h-full border-l border-[#A68CFF]/40" />
              <ArrowDown className="absolute bottom-[-10px] w-5 h-5 text-[#A68CFF]" />
            </div>

            {/* CyberMesh */}
            <div className="mt-4 w-72 p-4 bg-gradient-to-r from-[#A68CFF]/10 to-[#F0F4FF]/10 border border-[#A68CFF]/50 rounded-xl text-center z-10 shadow-[0_0_20px_rgba(166,140,255,0.2)] backdrop-blur-md">
              <h3 className="text-[#F0F4FF] font-orbitron text-lg">CyberMesh</h3>
              <p className="text-[#F0F4FF]/60 text-xs mt-1">Autonomous Response Layer</p>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#4DA6FF]/5 blur-[64px] rounded-full pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
