import { motion } from 'motion/react';

export function HowTrustIsBuilt() {
  const steps = [
    { 
      id: 'how-trust-is-built', 
      num: '01',
      name: 'PromptShield', 
      statement: 'Every decision begins with trust.',
      desc: 'Prompt interactions are validated before reasoning begins. Intent is verified before execution is permitted.',
      color: '#00FF88'
    },
    { 
      id: 'how-trust-is-built-2', 
      num: '02',
      name: 'SIFTGuardian', 
      statement: 'Signals become intelligence.',
      desc: 'Threat context is correlated across sources. Raw data becomes structured, actionable threat intelligence.',
      color: '#00FF88'
    },
    { 
      id: 'how-trust-is-built-3', 
      num: '03',
      name: 'Consent Guardian', 
      statement: 'Boundaries become enforceable.',
      desc: 'Trust constraints are applied before execution. What a system can do is bounded by what it has been permitted to do.',
      color: '#A78BFA'
    },
    { 
      id: 'how-trust-is-built-4', 
      num: '04',
      name: 'CodeSage', 
      statement: 'Logic becomes explainable.',
      desc: 'Code paths are analyzed and reasoned about transparently. Every action has a traceable justification.',
      color: '#00D4FF'
    },
  ];

  return (
    <div className="w-full bg-[#050505]">
      {steps.map((step, idx) => (
        <section key={step.id} id={step.id} className="relative min-h-screen flex items-center justify-center border-t border-white/5 py-32 overflow-hidden">
          <div className="container mx-auto px-8 sm:px-12 lg:px-24 max-w-[1800px]">
            <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
              
              {/* Giant Diagram (Left) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-200px" }}
                className="w-full lg:w-1/2 h-[50vh] lg:h-[80vh] flex items-center justify-center border border-white/5 rounded-3xl relative"
                style={{ backgroundColor: `${step.color}05` }}
              >
                {/* Abstract Node Representation */}
                <div 
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 flex items-center justify-center shadow-[0_0_80px_rgba(255,255,255,0.05)] relative"
                  style={{ borderColor: `${step.color}30`, backgroundColor: `${step.color}10` }}
                >
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: step.color, boxShadow: `0 0 30px ${step.color}` }} />
                  
                  {/* Orbiting element */}
                  <motion.div 
                    className="absolute w-full h-full rounded-full border"
                    style={{ borderColor: `${step.color}15` }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10 + idx * 2, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: step.color }} />
                  </motion.div>
                </div>
              </motion.div>

              {/* Giant Statement (Right) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, margin: "-200px" }}
                className="w-full lg:w-1/2 space-y-12"
              >
                <div>
                  <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-4 text-[#8A939C]">
                    Layer {step.num} / Input Module
                  </p>
                  <h3 
                    className="font-mono text-xl sm:text-2xl tracking-widest uppercase font-bold"
                    style={{ color: step.color }}
                  >
                    {step.name}
                  </h3>
                </div>

                <h2 className="font-inter text-5xl sm:text-6xl md:text-[5.5rem] text-[#F2F2F2] font-light leading-[1.05] tracking-tight">
                  {step.statement}
                </h2>

                <p className="font-inter text-xl md:text-2xl text-[#8A939C] font-light leading-relaxed max-w-xl">
                  {step.desc}
                </p>
              </motion.div>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
