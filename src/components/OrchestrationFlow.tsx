import { motion } from 'motion/react';

export function OrchestrationFlow() {
  return (
    <section id="orchestration" className="relative min-h-[100vh] py-32 bg-[#0A0A0A] flex flex-col justify-center border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-8 sm:px-12 lg:px-24 w-full max-w-[2400px]">
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-32"
        >
          <p className="font-mono text-sm tracking-[0.2em] text-[#00D4FF]/70 uppercase mb-8">
            Orchestration
          </p>
          <h2 className="font-inter text-5xl sm:text-6xl md:text-[6rem] text-[#F2F2F2] tracking-tight font-light">
            How Systems<br />Work Together
          </h2>
        </motion.div>

        {/* Absurdly Large Flowchart */}
        <div className="flex flex-col xl:flex-row items-center justify-center w-full gap-8 xl:gap-0 mt-20 relative">
          
          {/* Block 1: Modules */}
          <motion.div 
            className="flex-1 w-full xl:w-auto p-12 md:p-24 border border-white/10 rounded-xl text-center bg-[#050505] relative z-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="font-mono text-[#8A939C] text-xs md:text-sm tracking-[0.2em] uppercase mb-8">Layer 01</p>
            <h3 className="font-inter text-4xl md:text-5xl lg:text-6xl text-[#F2F2F2] font-light mb-12">Modules</h3>
            <div className="font-mono text-[#8A939C] text-sm md:text-lg tracking-widest leading-[2.5]">
              PromptShield<br />SIFTGuardian<br />Consent Guardian<br />CodeSage
            </div>
          </motion.div>

          {/* Arrow 1 */}
          <div className="hidden xl:flex w-48 h-px bg-gradient-to-r from-white/10 via-[#00D4FF]/50 to-white/10 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-[#00D4FF]/60" />
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00D4FF]"
              animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="xl:hidden h-24 w-px bg-gradient-to-b from-white/10 via-[#00D4FF]/50 to-white/10 relative" />

          {/* Block 2: SecRitual */}
          <motion.div 
            className="flex-1 w-full xl:w-auto p-12 md:p-24 border border-[#00D4FF]/20 rounded-xl text-center bg-[#050505] relative z-10 shadow-[0_0_80px_rgba(0,212,255,0.03)]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="font-mono text-[#00D4FF]/70 text-xs md:text-sm tracking-[0.2em] uppercase mb-8">Layer 02</p>
            <h3 className="font-inter text-4xl md:text-5xl lg:text-6xl text-[#F2F2F2] font-light mb-12">Reasoning</h3>
            <div className="font-mono text-[#00D4FF] text-xl md:text-2xl tracking-widest uppercase">
              SecRitual
            </div>
          </motion.div>

          {/* Arrow 2 */}
          <div className="hidden xl:flex w-48 h-px bg-gradient-to-r from-[#00D4FF]/30 via-[#00D4FF]/80 to-[#00D4FF]/30 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-[#00D4FF]/80" />
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00D4FF]"
              animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1 }}
            />
          </div>

          <div className="xl:hidden h-24 w-px bg-gradient-to-b from-[#00D4FF]/30 via-[#00D4FF]/80 to-[#00D4FF]/30 relative" />

          {/* Block 3: CyberMesh */}
          <motion.div 
            className="flex-1 w-full xl:w-auto p-12 md:p-24 border border-[#00D4FF]/40 rounded-xl text-center bg-[#050505] relative z-10 shadow-[0_0_120px_rgba(0,212,255,0.08)]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="font-mono text-[#00D4FF] text-xs md:text-sm tracking-[0.2em] uppercase mb-8">Layer 03</p>
            <h3 className="font-inter text-4xl md:text-5xl lg:text-6xl text-[#F2F2F2] font-light mb-12">Orchestration</h3>
            <div className="font-mono text-[#00D4FF] text-2xl md:text-3xl tracking-widest uppercase font-bold">
              CyberMesh
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
