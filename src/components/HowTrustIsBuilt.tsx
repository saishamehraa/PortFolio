import { motion } from 'motion/react';

export function HowTrustIsBuilt() {
  const steps = [
    { id: 'how-trust-is-built', name: 'PromptShield', description: 'Every decision begins with trust.', color: '#5CF0FF' },
    { id: 'how-trust-is-built-2', name: 'SIFTGuardian', description: 'Signals become intelligence.', color: '#4DA6FF' },
    { id: 'how-trust-is-built-3', name: 'Consent Guardian', description: 'Boundaries become enforceable.', color: '#A68CFF' },
    { id: 'how-trust-is-built-4', name: 'CodeSage', description: 'Logic becomes explainable.', color: '#F0F4FF' },
  ];

  return (
    <div className="w-full bg-[#050505]">
      {steps.map((step, idx) => (
        <section key={step.id} id={step.id} className="relative min-h-[90vh] flex items-center justify-center py-20 border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-12"
            >
              <h3 
                className="font-orbitron text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.3em] font-bold"
                style={{ color: step.color }}
              >
                {step.name}
              </h3>
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] text-[#F0F4FF] font-light leading-tight tracking-tight">
                "{step.description}"
              </p>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}
