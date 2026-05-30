import { motion } from 'motion/react';

export function SecurityIntelligence() {
  return (
    <section id="security-intelligence" className="relative min-h-[120vh] flex flex-col justify-center bg-[#050505] py-40 overflow-hidden">
      <div className="container mx-auto px-8 sm:px-12 lg:px-24 w-full max-w-[2000px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-24">
          
          {/* 1 Giant Statement (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-200px" }}
            className="w-full lg:w-[40%] space-y-12"
          >
            <p className="font-mono text-sm tracking-[0.3em] text-[#00D4FF] uppercase mb-8">
              Security Intelligence
            </p>
            <h2 className="font-inter text-6xl sm:text-7xl md:text-[6.5rem] lg:text-[7.5rem] text-[#F2F2F2] leading-[1.05] font-light tracking-tight">
              Defend the<br />Execution<br />Pathway
            </h2>
          </motion.div>

          {/* 1 Massive Diagram (Right) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, margin: "-200px" }}
            className="relative w-full lg:w-[60%] h-[70vh] flex items-center justify-center"
          >
            <svg viewBox="0 0 800 800" fill="none" className="w-full h-full max-h-[1000px] pointer-events-none">
              <defs>
                <radialGradient id="cybermesh-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.15"/>
                  <stop offset="100%" stopColor="#00D4FF" stopOpacity="0"/>
                </radialGradient>
              </defs>

              {/* Orbital Rings */}
              <circle cx="400" cy="400" r="350" fill="url(#cybermesh-glow)"/>
              <circle cx="400" cy="400" r="300" stroke="rgba(0,212,255,0.05)" strokeWidth="2"/>
              <circle cx="400" cy="400" r="220" stroke="rgba(0,212,255,0.1)" strokeWidth="2" strokeDasharray="8 16"/>
              <circle cx="400" cy="400" r="140" stroke="rgba(0,212,255,0.2)" strokeWidth="2"/>
              
              {/* CyberMesh Core */}
              <circle cx="400" cy="400" r="80" stroke="rgba(0,212,255,0.4)" strokeWidth="2" fill="rgba(0,212,255,0.05)"/>
              <motion.circle cx="400" cy="400" r="30" fill="rgba(0,212,255,0.2)" stroke="rgba(0,212,255,0.8)" strokeWidth="2"
                animate={{ r: [25, 35, 25] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <text x="400" y="390" textAnchor="middle" fill="#00D4FF" fontFamily="'JetBrains Mono',monospace" fontSize="16" letterSpacing="0.1em">CyberMesh</text>

              {/* SecRitual Satellite */}
              <circle cx="400" cy="180" r="50" fill="rgba(0,212,255,0.05)" stroke="rgba(0,212,255,0.4)" strokeWidth="2"/>
              <motion.circle cx="400" cy="180" r="12" fill="rgba(0,212,255,0.8)"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <text x="400" y="140" textAnchor="middle" fill="rgba(0,212,255,0.8)" fontFamily="'JetBrains Mono',monospace" fontSize="14" letterSpacing="0.1em">SecRitual</text>

              {/* Connection */}
              <line x1="400" y1="230" x2="400" y2="320" stroke="rgba(0,212,255,0.3)" strokeWidth="1" strokeDasharray="6 8"/>
              <motion.circle r="4" fill="#00D4FF"
                animate={{ cy: [230, 320], opacity: [0, 1, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              >
                <animate attributeName="cx" values="400;400" dur="2.5s" repeatCount="indefinite" />
              </motion.circle>

            </svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
