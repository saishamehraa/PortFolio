import { motion } from 'motion/react';
import { ArrowRight, Github, Shield, Database, Cpu, Activity, BrainCircuit } from 'lucide-react';

export function Vision() {
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
    <section id="vision" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-20 pb-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.0, ease: "easeInOut" }}
        className="relative w-[95vw] lg:w-[90vw] max-w-[1600px] min-h-[90vh] rounded-[40px] md:rounded-[60px] bg-[#0A0A0A] border border-white/5 shadow-[0_0_80px_rgba(0,0,0,1)] overflow-hidden flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-16"
      >
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <motion.div 
            className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4DA6FF] rounded-full mix-blend-screen filter blur-[150px]"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center h-full">
          <div className="space-y-12">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
              className="font-orbitron text-4xl sm:text-5xl md:text-6xl xl:text-[4.5rem] leading-[1.1] bg-gradient-to-r from-[#F0F4FF] via-[#5CF0FF] to-[#A68CFF] bg-clip-text text-transparent tracking-widest font-bold"
            >
              SAISHA MEHRA
            </motion.h1>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#F0F4FF] font-light leading-snug"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
            >
              Building AI-Powered Systems<br />for <span className="font-semibold text-[#5CF0FF]">Security, Trust &<br />Cognitive Transparency</span>
            </motion.h2>

            <motion.div
              className="flex gap-6 pt-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.0, delay: 0.8, ease: "easeOut" }}
            >
              <a href="#orchestration" className="group px-8 py-4 bg-white/5 border border-white/10 rounded-full font-orbitron flex items-center gap-3 text-[#F0F4FF] hover:bg-white/10 transition-colors duration-500">
                Explore Ecosystem <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="https://github.com/saishamehraa" target="_blank" rel="noopener noreferrer" className="px-8 py-4 flex items-center gap-3 text-[#F0F4FF]/50 hover:text-[#F0F4FF] transition-colors duration-500">
                <Github className="w-5 h-5" /> View GitHub
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, delay: 1.0 }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.path d="M 120 60 L 300 210" stroke="#4DA6FF" strokeWidth="1" strokeDasharray="4 4" strokeOpacity={0.3} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1.5 }} />
              <motion.path d="M 300 90 L 300 210" stroke="#4DA6FF" strokeWidth="1" strokeOpacity={0.3} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1.5 }} />
              <motion.path d="M 480 60 L 300 210" stroke="#4DA6FF" strokeWidth="1" strokeDasharray="4 4" strokeOpacity={0.3} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1.5 }} />
              <motion.path d="M 300 210 L 300 390" stroke="#5CF0FF" strokeWidth="1.5" strokeOpacity={0.5} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 2 }} />
              <motion.path d="M 300 390 L 300 510" stroke="#A68CFF" strokeWidth="1.5" strokeOpacity={0.5} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 2.5 }} />
              <motion.path d="M 480 390 L 480 510" stroke="#F0F4FF" strokeWidth="1" strokeDasharray="2 4" strokeOpacity={0.2} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 2.5 }} />
            </svg>
            {nodes.map((node, i) => (
              <motion.div
                key={node.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
                style={{ top: node.top, left: node.left, zIndex: 10 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: ["-2%", "2%", "-2%"] }}
                transition={{ opacity: { duration: 2, delay: 1.5 + (i * 0.1) }, y: { duration: 12 + (i % 3) * 2, repeat: Infinity, ease: "easeInOut" } }}
              >
                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                  {node.icon}
                </div>
                <span className="text-xs font-orbitron text-[#F0F4FF]/40 uppercase tracking-widest">{node.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
