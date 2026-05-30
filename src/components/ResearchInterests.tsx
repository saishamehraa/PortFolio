import { motion } from 'motion/react';
import { Lightbulb } from 'lucide-react';

export function ResearchInterests() {
  const domains = [
    "AI Security",
    "Multi-Agent Systems",
    "Trust Orchestration",
    "Cognitive Security",
    "Information Integrity",
    "Explainable AI",
    "Human-AI Interaction",
    "Autonomous Systems"
  ];

  return (
    <section id="research" className="relative py-24 sm:py-32 lg:py-40 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="flex flex-col items-center text-center space-y-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-6 flex flex-col items-center">
            <Lightbulb className="w-8 h-8 text-[#A68CFF]" />
            <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-[#F0F4FF] to-[#A68CFF] bg-clip-text text-transparent tracking-wide font-medium">
              Research Domains
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
            {domains.map((domain, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="px-8 py-4 bg-[#050505] border border-white/5 rounded-full text-[#F0F4FF]/70 text-sm sm:text-base font-orbitron tracking-widest uppercase hover:border-[#A68CFF]/40 hover:text-[#F0F4FF] transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-default"
              >
                {domain}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
