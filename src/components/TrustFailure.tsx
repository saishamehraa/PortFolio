import { motion } from 'motion/react';

export function TrustFailure() {
  return (
    <section id="trust-failure" className="relative min-h-screen flex items-center justify-center bg-transparent py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
        <motion.div 
          className="w-[800px] h-[800px] border border-[#ff3333] rounded-full mix-blend-screen"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] text-[#F0F4FF] tracking-tight leading-tight mb-16">
            Every Intelligent System<br />Fails The Same Way.
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-[#ff5555] font-light max-w-4xl mx-auto uppercase tracking-[0.2em]">
              Not because it lacked intelligence.<br /><br />Because it lacked trust.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
