import { motion } from 'motion/react';
import { ArrowRight, Github, FileText, Shield, Database, Cpu, Activity, BrainCircuit } from 'lucide-react';

export function Hero() {
  const nodes = [
    { id: 'promptshield', label: 'PromptShield', icon: <Shield className="w-4 h-4 text-[#5CF0FF]" />, top: '0%', left: '20%' },
    { id: 'siftguardian', label: 'SIFTGuardian', icon: <Activity className="w-4 h-4 text-[#4DA6FF]" />, top: '0%', left: '50%' },
    { id: 'consentguardian', label: 'Consent Guardian', icon: <Database className="w-4 h-4 text-[#A68CFF]" />, top: '0%', left: '80%' },
    { id: 'codesage', label: 'CodeSage', icon: <Cpu className="w-4 h-4 text-[#F0F4FF]" />, top: '30%', left: '50%' },
    { id: 'secritual', label: 'SecRitual', icon: <BrainCircuit className="w-5 h-5 text-[#5CF0FF]" />, top: '60%', left: '50%' },
    { id: 'cybermesh', label: 'CyberMesh', icon: <Activity className="w-5 h-5 text-[#A68CFF]" />, top: '90%', left: '50%' },
    { id: 'openmind', label: 'OpenMind Nexus', icon: <BrainCircuit className="w-4 h-4 text-[#F0F4FF]" />, top: '60%', left: '85%' },
    { id: 'neuroaccess', label: 'NeuroAccess', icon: <Cpu className="w-4 h-4 text-[#4DA6FF]" />, top: '90%', left: '85%' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden touch-none pt-24 pb-20"
    >
      {/* Background Ambient Glows - Slowed Down */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4DA6FF] rounded-full mix-blend-screen filter blur-[128px]"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A68CFF] rounded-full mix-blend-screen filter blur-[128px]"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="space-y-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-[#F0F4FF] via-[#5CF0FF] to-[#A68CFF] bg-clip-text text-transparent tracking-widest font-bold drop-shadow-[0_0_15px_rgba(92,240,255,0.15)]"
            >
              SAISHA MEHRA
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl text-[#F0F4FF] font-light leading-relaxed border-l-[3px] border-[#5CF0FF] pl-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 0.2, ease: "easeOut" }}
            >
              Building AI-Powered Systems for<br />
              <span className="font-semibold text-[#5CF0FF]">Security, Trust & Cognitive Transparency</span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-[#F0F4FF]/70 leading-relaxed max-w-xl font-light"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
            >
              I design and build intelligent systems that secure AI workflows, orchestrate trust, explain risk, and protect information ecosystems through multi-agent reasoning and autonomous decision intelligence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
            >
              <a
                href="#ecosystem"
                className="group px-8 py-4 bg-[#5CF0FF]/5 border border-[#5CF0FF]/20 rounded-sm font-orbitron flex items-center justify-center gap-3 text-[#5CF0FF] hover:bg-[#5CF0FF]/10 hover:border-[#5CF0FF]/50 hover:shadow-[0_0_30px_rgba(92,240,255,0.15)] backdrop-blur-md transition-all duration-500"
              >
                Explore Ecosystem
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500 ease-out" />
              </a>
              <a
                href="https://github.com/saishamehraa"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border border-white/10 rounded-sm font-orbitron flex items-center justify-center gap-3 text-[#F0F4FF]/80 hover:text-[#F0F4FF] hover:bg-white/5 hover:border-white/30 transition-all duration-500"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-transparent border border-white/10 rounded-sm font-orbitron flex items-center justify-center gap-3 text-[#F0F4FF]/80 hover:text-[#F0F4FF] hover:bg-white/5 hover:border-white/30 transition-all duration-500"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side Visual - Lightweight Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.2, delay: 0.4, ease: "easeInOut" }}
            className="relative hidden lg:block h-[500px] w-full border border-white/5 bg-[#050505]/40 rounded-xl backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.8)] p-8"
          >
            {/* Connection Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {/* Main pipeline lines */}
              <motion.path d="M 120 40 L 300 160" stroke="#4DA6FF" strokeWidth="1" strokeDasharray="4 4" strokeOpacity={0.4} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }} />
              <motion.path d="M 300 40 L 300 160" stroke="#4DA6FF" strokeWidth="1" strokeOpacity={0.4} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }} />
              <motion.path d="M 480 40 L 300 160" stroke="#4DA6FF" strokeWidth="1" strokeDasharray="4 4" strokeOpacity={0.4} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }} />
              
              <motion.path d="M 300 180 L 300 310" stroke="#5CF0FF" strokeWidth="1.5" strokeOpacity={0.6} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, delay: 1.5, ease: "easeInOut" }} />
              <motion.path d="M 300 330 L 300 460" stroke="#A68CFF" strokeWidth="1.5" strokeOpacity={0.6} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, delay: 2, ease: "easeInOut" }} />
              
              {/* Branch for OpenMind */}
              <motion.path d="M 510 330 L 510 460" stroke="#F0F4FF" strokeWidth="1" strokeDasharray="2 4" strokeOpacity={0.3} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, delay: 2, ease: "easeInOut" }} />
            </svg>

            {/* Nodes */}
            {nodes.map((node, i) => (
              <motion.div
                key={node.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
                style={{ top: node.top, left: node.left, zIndex: 10 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: ["-3%", "3%", "-3%"] }}
                transition={{ 
                  opacity: { duration: 1.5, delay: 1.5 + (i * 0.1) },
                  y: { duration: 10 + (i % 3) * 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="p-2.5 bg-[#050505] border border-white/5 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.9)] flex items-center justify-center group hover:border-white/20 transition-all duration-500">
                  {node.icon}
                </div>
                <span className="text-[10px] sm:text-xs font-orbitron text-[#F0F4FF]/50 whitespace-nowrap bg-[#050505]/80 px-2 py-0.5 rounded border border-transparent">
                  {node.label}
                </span>
              </motion.div>
            ))}

            {/* Active Node Transmission Pulse (Fast/Alive) */}
            <motion.div 
              className="absolute w-2 h-2 bg-[#5CF0FF] rounded-full shadow-[0_0_12px_#5CF0FF] z-20"
              animate={{ 
                top: ['20%', '55%'], 
                left: ['50%', '50%'],
                opacity: [0, 0.8, 0]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            />
            {/* Background Telemetry Pulse (Deep/Slow) */}
            <motion.div 
              className="absolute w-1.5 h-1.5 bg-[#A68CFF] rounded-full shadow-[0_0_8px_#A68CFF] z-20"
              animate={{ 
                top: ['65%', '85%'], 
                left: ['50%', '50%'],
                opacity: [0, 0.5, 0]
              }}
              transition={{ duration: 8, delay: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}