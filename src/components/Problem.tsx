import { motion } from 'motion/react';

export function Problem() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[#F0F4FF] via-[#5CF0FF] to-[#A68CFF] bg-clip-text text-transparent font-medium tracking-wide leading-tight mb-10">
            Security Alone Is<br />No Longer Enough
          </h2>
          
          <div className="w-24 h-1 bg-[#5CF0FF]/30 rounded-full mb-10" />

          <p className="text-xl sm:text-2xl md:text-3xl text-[#F0F4FF]/70 font-light leading-relaxed max-w-4xl">
            Modern AI systems require <span className="text-[#A68CFF] font-medium">explainability</span>, <span className="text-[#5CF0FF] font-medium">governance</span>, <span className="text-[#4DA6FF] font-medium">trust reasoning</span>, and autonomous intelligence to remain safe and reliable in production.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
