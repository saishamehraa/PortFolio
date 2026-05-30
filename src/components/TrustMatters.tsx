import { motion } from 'motion/react';

export function TrustMatters() {
  return (
    <section id="trust-matters" className="relative min-h-[80vh] flex items-center justify-center bg-transparent py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <h2 className="font-orbitron text-5xl sm:text-6xl md:text-[5rem] lg:text-[7rem] leading-tight bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent font-bold tracking-tight">
            Trust Is The New Security Layer.
          </h2>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-[#F0F4FF]/50 font-light max-w-3xl mx-auto leading-relaxed">
            Intelligent systems need more than protection. True security requires orchestrated trust.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
