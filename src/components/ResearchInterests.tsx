import { motion } from 'motion/react';
import { Lightbulb } from 'lucide-react';

export function ResearchInterests() {
  const interests = [
    "AI Security",
    "Multi-Agent Systems",
    "Trust Orchestration",
    "Cognitive Security",
    "Explainable AI",
    "Information Integrity",
    "Human-AI Interaction"
  ];

  return (
    <section id="research" className="relative py-24 sm:py-32 lg:py-40 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex-shrink-0 text-center md:text-left">
            <h2 className="font-orbitron text-2xl sm:text-3xl bg-gradient-to-r from-[#F0F4FF] to-[#A68CFF] bg-clip-text text-transparent flex items-center justify-center md:justify-start gap-4 tracking-wide">
              <Lightbulb className="w-7 h-7 text-[#A68CFF]" />
              Current Research Interests
            </h2>
          </div>
          
          <div className="flex-1 flex flex-wrap justify-center md:justify-start gap-4">
            {interests.map((interest, idx) => (
              <motion.span
                key={idx}
                className="px-5 py-2.5 bg-[#050505] border border-white/5 rounded-md text-[#F0F4FF]/70 text-sm md:text-base hover:border-[#A68CFF]/40 hover:text-[#F0F4FF] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-default"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
