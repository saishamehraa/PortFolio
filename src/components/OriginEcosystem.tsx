import { motion } from 'motion/react';

export function OriginEcosystem() {
  return (
    <section id="origin" className="relative min-h-[80vh] flex items-center justify-center bg-[#050505] py-32 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <h2 className="font-orbitron text-3xl sm:text-4xl uppercase tracking-[0.3em] text-[#5CF0FF] font-bold">
            From Security to Intelligence
          </h2>

          <p className="text-2xl sm:text-3xl md:text-4xl text-[#F0F4FF]/90 font-light leading-relaxed">
            What started in 2019 as a focus on individual security modules evolved into a deep exploration of trust orchestration, multi-agent reasoning, and cognitive transparency.
          </p>

          <p className="text-xl sm:text-2xl text-[#F0F4FF]/50 font-light leading-relaxed pt-8">
            The ecosystem exists because solving modern AI security requires understanding how systems—and humans—perceive truth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
