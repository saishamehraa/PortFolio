import { motion } from 'motion/react';

export function Vision() {
  return (
    <section id="vision" className="relative min-h-screen flex flex-col justify-center bg-[#050505] overflow-hidden">
      
      {/* 70% Architecture Space (Background/Right dominant) */}
      <div className="absolute inset-0 z-0 flex items-center justify-end pointer-events-none pr-0 lg:pr-20">
        <div className="relative w-full h-full lg:w-[70vw] lg:h-[120vh]">
          {/* Central CyberMesh Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full border border-[#00D4FF]/20 flex items-center justify-center">
            <div className="w-48 h-48 md:w-72 md:h-72 rounded-full border border-[#00D4FF]/10 flex items-center justify-center">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#00D4FF]/5 border border-[#00D4FF]/30 flex flex-col items-center justify-center shadow-[0_0_100px_rgba(0,212,255,0.1)]">
                <span className="font-orbitron text-[#00D4FF] text-xl md:text-3xl tracking-widest font-bold">CyberMesh</span>
                <span className="font-mono text-[#00D4FF]/50 text-[10px] md:text-xs tracking-[0.3em] mt-2">ORCHESTRATION</span>
              </div>
            </div>
          </div>

          {/* Surrounding Nodes */}
          <div className="absolute top-[20%] left-[20%] flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border border-[#00FF88]/30 flex items-center justify-center bg-[#00FF88]/5 shadow-[0_0_50px_rgba(0,255,136,0.1)]" />
            <span className="font-mono text-[#00FF88] text-[10px] tracking-widest mt-4">PromptShield</span>
          </div>

          <div className="absolute top-[80%] left-[30%] flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border border-[#00D4FF]/40 flex items-center justify-center bg-[#00D4FF]/5" />
            <span className="font-mono text-[#00D4FF] text-[10px] tracking-widest mt-4">SecRitual</span>
          </div>

          <div className="absolute top-[25%] left-[75%] flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border border-[#00D4FF]/20 flex items-center justify-center bg-[#00D4FF]/5" />
            <span className="font-mono text-[#00D4FF]/60 text-[10px] tracking-widest mt-4">CodeSage</span>
          </div>

          <div className="absolute top-[75%] left-[80%] flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border border-[#A78BFA]/30 flex items-center justify-center bg-[#A78BFA]/5" />
            <span className="font-mono text-[#A78BFA] text-[10px] tracking-widest mt-4">OpenMind</span>
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
            <path d="M 20% 20% L 50% 50%" stroke="#00FF88" strokeWidth="1" fill="none" strokeDasharray="4 8" />
            <path d="M 30% 80% L 50% 50%" stroke="#00D4FF" strokeWidth="1" fill="none" strokeDasharray="4 8" />
            <path d="M 75% 25% L 50% 50%" stroke="#00D4FF" strokeWidth="1" fill="none" strokeDasharray="4 8" />
            <path d="M 80% 75% L 50% 50%" stroke="#A78BFA" strokeWidth="1" fill="none" strokeDasharray="4 8" />
          </svg>
        </div>
      </div>

      {/* 30% Text Space (Left aligned) */}
      <div className="container mx-auto px-8 sm:px-12 lg:px-24 max-w-[1800px] relative z-10">
        <div className="w-full lg:w-[35%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-12"
          >
            <p className="font-mono text-xs md:text-sm text-[#00D4FF] tracking-[0.3em] uppercase">
              AI Security Research Lab
            </p>
            
            <h1 className="font-inter text-6xl sm:text-7xl md:text-[6rem] lg:text-[7rem] leading-[0.9] text-[#F2F2F2] font-light tracking-tight">
              Trust<br />
              Architecture
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-[#8A939C] font-light leading-relaxed max-w-sm">
              An operational ecosystem securing the execution pathway from prompt to action.
            </p>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}
