import { motion } from 'motion/react';

export function BranchSplit() {
  return (
    <section id="branch-split" className="relative min-h-[120vh] flex flex-col items-center bg-[#050505] overflow-hidden">
      
      {/* Massive Vertical Line dropping in */}
      <motion.div 
        className="w-1 h-[30vh] bg-gradient-to-b from-[#00D4FF]/20 to-[#00D4FF]"
        initial={{ height: 0 }}
        whileInView={{ height: '30vh' }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      />
      
      {/* The Central Node */}
      <motion.div
        className="w-8 h-8 rounded-full bg-[#00D4FF] shadow-[0_0_60px_#00D4FF] z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        viewport={{ once: true }}
      />

      {/* The Enormous Split Geometry */}
      <div className="relative w-[80vw] max-w-[1200px] flex justify-between h-[20vh]">
        <motion.div 
          className="absolute left-1/2 top-0 h-1 bg-[#00D4FF]"
          style={{ transformOrigin: 'left', width: '50%', left: '0%' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        <motion.div 
          className="absolute right-1/2 top-0 h-1 bg-gradient-to-r from-[#00D4FF] to-[#A78BFA]"
          style={{ transformOrigin: 'left', width: '50%', right: '0%' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <motion.div 
          className="absolute left-0 top-0 w-1 h-[20vh] bg-[#00D4FF]/40"
          initial={{ height: 0 }}
          whileInView={{ height: '20vh' }}
          transition={{ duration: 1.5, delay: 3.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        <motion.div 
          className="absolute right-0 top-0 w-1 h-[20vh] bg-[#A78BFA]/40"
          initial={{ height: 0 }}
          whileInView={{ height: '20vh' }}
          transition={{ duration: 1.5, delay: 3.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      {/* The Labels */}
      <div className="w-[80vw] max-w-[1200px] flex justify-between mt-16 text-center">
        <motion.div 
          className="w-1/2 pr-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-orbitron text-4xl lg:text-5xl text-[#00D4FF] tracking-widest uppercase font-bold mb-6">
            Operational Track
          </h3>
          <p className="font-inter text-2xl lg:text-3xl text-[#F2F2F2]/50 font-light">
            Infrastructure Security
          </p>
        </motion.div>

        <motion.div 
          className="w-1/2 pl-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-orbitron text-4xl lg:text-5xl text-[#A78BFA] tracking-widest uppercase font-bold mb-6">
            Cognitive Track
          </h3>
          <p className="font-inter text-2xl lg:text-3xl text-[#F2F2F2]/50 font-light">
            Human Perception
          </p>
        </motion.div>
      </div>

      {/* Title */}
      <motion.div
        className="absolute bottom-20 text-center w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 5 }}
        viewport={{ once: true }}
      >
        <h2 className="font-inter text-6xl md:text-[6rem] text-[#F2F2F2] font-light tracking-tight">
          The Architecture Diverges.
        </h2>
      </motion.div>
    </section>
  );
}
