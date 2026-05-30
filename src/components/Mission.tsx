import { motion } from 'motion/react';

export function Mission() {
  return (
    <section id="mission" className="relative min-h-[60vh] flex items-center justify-center bg-transparent py-32 sm:py-48">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          <h2 className="font-orbitron text-5xl sm:text-6xl md:text-[5rem] lg:text-[6rem] leading-tight bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent font-bold tracking-tight">
            Security.
          </h2>
          <h2 className="font-orbitron text-5xl sm:text-6xl md:text-[5rem] lg:text-[6rem] leading-tight bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent font-bold tracking-tight">
            Trust.
          </h2>
          <h2 className="font-orbitron text-5xl sm:text-6xl md:text-[5rem] lg:text-[6rem] leading-tight bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent font-bold tracking-tight">
            Transparency.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 sm:mt-32"
        >
          <p className="text-xl sm:text-2xl text-[#F0F4FF]/50 uppercase tracking-[0.3em] font-light">
            The foundations of intelligent systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
