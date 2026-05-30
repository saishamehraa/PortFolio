import { motion } from 'motion/react';
import { ArrowRight, Github, FileText, Shield, Database, Cpu, Activity, BrainCircuit } from 'lucide-react';

export function Hero() {
  const nodes = [
    { id: 'promptshield', label: 'PromptShield', icon: <Shield className="w-4 h-4 text-[#5CF0FF]" />, top: '10%', left: '20%' },
    { id: 'siftguardian', label: 'SIFTGuardian', icon: <Activity className="w-4 h-4 text-[#4DA6FF]" />, top: '15%', left: '50%' },
    { id: 'consentguardian', label: 'Consent Guardian', icon: <Database className="w-4 h-4 text-[#A68CFF]" />, top: '10%', left: '80%' },
    { id: 'codesage', label: 'CodeSage', icon: <Cpu className="w-4 h-4 text-[#F0F4FF]" />, top: '35%', left: '50%' },
    { id: 'secritual', label: 'SecRitual', icon: <BrainCircuit className="w-5 h-5 text-[#5CF0FF]" />, top: '65%', left: '50%' },
    { id: 'cybermesh', label: 'CyberMesh', icon: <Activity className="w-5 h-5 text-[#A68CFF]" />, top: '85%', left: '50%' },
    { id: 'openmind', label: 'OpenMind Nexus', icon: <BrainCircuit className="w-4 h-4 text-[#F0F4FF]" />, top: '65%', left: '80%' },
    { id: 'neuroaccess', label: 'NeuroAccess', icon: <Cpu className="w-4 h-4 text-[#4DA6FF]" />, top: '85%', left: '80%' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden touch-none pt-24 pb-20 bg-[#050505]"
    >
      {/* Exhibition Canvas Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.0, ease: "easeInOut" }}
        className="relative w-[92vw] max-w-[1600px] min-h-[85vh] rounded-[40px] md:rounded-[60px] bg-[#0A0A0A] border border-white/5 shadow-[0_0_80px_rgba(0,0,0,1)] overflow-hidden flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16"
      >
        {/* Soft Inner Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <motion.div 
            className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4DA6FF] rounded-full mix-blend-screen filter blur-[150px]"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#A68CFF] rounded-full mix-blend-screen filter blur-[150px]"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 15, delay: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center h-full">
          
          {/* Left Text Content */}
          <div className="space-y-12">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
              className="font-orbitron text-4xl sm:text-5xl md:text-6xl xl:text-[5rem] leading-[1.1] bg-gradient-to-r from-[#F0F4FF] via-[#5CF0FF] to-[#A68CFF] bg-clip-text text-transparent tracking-widest font-bold drop-shadow-[0_0_15px_rgba(92,240,255,0.15)]"
            >
              SAISHA MEHRA
            </motion.h1>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl text-[#F0F4FF] font-light leading-snug"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
            >
              Building AI-Powered Systems<br />for <span className="font-semibold text-[#5CF0FF]">Security, Trust &<br />Cognitive Transparency</span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-[#F0F4FF]/60 leading-relaxed max-w-xl font-light"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.0, delay: 0.6, ease: "easeOut" }}
            >
              I design intelligent systems that secure AI workflows, orchestrate trust, explain risk, and protect information ecosystems through multi-agent reasoning and autonomous decision intelligence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.0, delay: 0.8, ease: "easeOut" }}
            >
              <a
                href="#featured"
                className="group px-10 py-5 bg-white/5 border border-white/10 rounded-full font-orbitron flex items-center justify-center gap-4 text-[#F0F4FF] hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.03)]"
              >
                Explore Ecosystem
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500 ease-out" />
              </a>
              <a
                href="https://github.com/saishamehraa"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 bg-transparent rounded-full font-orbitron flex items-center justify-center gap-3 text-[#F0F4FF]/50 hover:text-[#F0F4FF] transition-colors duration-500"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="#contact"
                className="px-8 py-5 bg-transparent rounded-full font-orbitron flex items-center justify-center gap-3 text-[#F0F4FF]/50 hover:text-[#F0F4FF] transition-colors duration-500"
              >
                <FileText className="w-5 h-5" />
                Resume
              </a>
            </motion.div>
          </div>

          {/* Right Side Visual - Living Ecosystem Canvas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, delay: 1.0, ease: "easeInOut" }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            {/* Connection Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {/* Main pipeline lines */}
              <motion.path d="M 120 60 L 300 210" stroke="#4DA6FF" strokeWidth="1" strokeDasharray="4 4" strokeOpacity={0.3} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }} />
              <motion.path d="M 300 90 L 300 210" stroke="#4DA6FF" strokeWidth="1" strokeOpacity={0.3} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }} />
              <motion.path d="M 480 60 L 300 210" stroke="#4DA6FF" strokeWidth="1" strokeDasharray="4 4" strokeOpacity={0.3} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }} />
              
              <motion.path d="M 300 210 L 300 390" stroke="#5CF0FF" strokeWidth="1.5" strokeOpacity={0.5} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 2, ease: "easeInOut" }} />
              <motion.path d="M 300 390 L 300 510" stroke="#A68CFF" strokeWidth="1.5" strokeOpacity={0.5} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 2.5, ease: "easeInOut" }} />
              
              {/* Branch for OpenMind */}
              <motion.path d="M 480 390 L 480 510" stroke="#F0F4FF" strokeWidth="1" strokeDasharray="2 4" strokeOpacity={0.2} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 2.5, ease: "easeInOut" }} />
            </svg>

            {/* Nodes */}
            {nodes.map((node, i) => (
              <motion.div
                key={node.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
                style={{ top: node.top, left: node.left, zIndex: 10 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: ["-2%", "2%", "-2%"] }}
                transition={{ 
                  opacity: { duration: 2, delay: 1.5 + (i * 0.1) },
                  y: { duration: 12 + (i % 3) * 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center backdrop-blur-sm transition-all duration-500">
                  {node.icon}
                </div>
                <span className="text-xs font-orbitron text-[#F0F4FF]/40 whitespace-nowrap tracking-widest uppercase">
                  {node.label}
                </span>
              </motion.div>
            ))}

            {/* Active Node Transmission Pulse (Deliberate Processing) */}
            <motion.div 
              className="absolute w-2 h-2 bg-[#5CF0FF] rounded-full shadow-[0_0_15px_#5CF0FF] z-20"
              animate={{ 
                top: ['35%', '65%'], 
                left: ['50%', '50%'],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            />
            {/* Background Telemetry Pulse (Deep/Slow) */}
            <motion.div 
              className="absolute w-1.5 h-1.5 bg-[#A68CFF] rounded-full shadow-[0_0_10px_#A68CFF] z-20"
              animate={{ 
                top: ['65%', '85%'], 
                left: ['50%', '50%'],
                opacity: [0, 0.6, 0]
              }}
              transition={{ duration: 6, delay: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}