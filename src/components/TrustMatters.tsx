import { motion } from 'motion/react';

export function TrustMatters() {
  return (
    <section id="trust-matters" className="relative min-h-[100vh] flex items-center justify-center bg-[#050505] py-40">
      <div className="container mx-auto px-8 sm:px-12 lg:px-24 w-full max-w-[2000px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-150px" }}
          className="space-y-16"
        >
          <p className="font-mono text-sm tracking-[0.3em] text-[#00FF88] uppercase mb-16">
            The Core Premise
          </p>

          <h2 className="font-inter text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] leading-[0.95] text-[#F2F2F2] font-light tracking-tight">
            Trust Is The New<br />
            Security Layer.
          </h2>
          
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#8A939C] font-light max-w-5xl mx-auto leading-relaxed pt-12">
            Intelligent systems need more than protection. True security requires orchestrated trust.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
