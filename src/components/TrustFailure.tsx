import { motion } from 'motion/react';

export function TrustFailure() {
  return (
    <section id="trust-failure" className="relative min-h-[100vh] flex flex-col items-center justify-center bg-[#050505] overflow-hidden py-40">
      {/* Massive Fractured Grid Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
        <svg viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice" fill="none" className="w-full h-full">
          <g opacity="0.1" stroke="#00D4FF" strokeWidth="0.5">
            <line x1="0" y1="200" x2="400" y2="200"/>
            <line x1="400" y1="200" x2="420" y2="180"/>
            <line x1="420" y1="180" x2="800" y2="180"/>
            <line x1="800" y1="180" x2="820" y2="220"/>
            <line x1="820" y1="220" x2="1400" y2="220"/>
            <line x1="0" y1="400" x2="350" y2="400"/>
            <line x1="350" y1="400" x2="380" y2="360"/>
            <line x1="380" y1="360" x2="700" y2="360"/>
            <line x1="700" y1="360" x2="730" y2="420"/>
            <line x1="730" y1="420" x2="1400" y2="420"/>
          </g>
          {/* Decaying nodes */}
          <circle cx="700" cy="400" r="3" fill="#FF4444" opacity="0.4" />
          <circle cx="400" cy="250" r="2" fill="#FF4444" opacity="0.2" />
          <circle cx="900" cy="300" r="2" fill="#FF4444" opacity="0.3" />
        </svg>
      </div>

      <div className="container mx-auto px-8 sm:px-12 lg:px-24 max-w-[1400px] text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-150px" }}
        >
          <p className="font-mono text-sm tracking-[0.2em] text-[#FF4444]/70 uppercase mb-16">
            The Central Problem
          </p>

          <h2 className="font-inter text-5xl sm:text-6xl md:text-[5rem] lg:text-[7rem] text-[#F2F2F2] tracking-tight leading-[1.05] mb-24 font-light">
            Every intelligent system<br />
            eventually reaches the<br />
            same question.
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="font-inter text-4xl sm:text-5xl md:text-6xl text-[#FF4444] font-light tracking-tight italic">
              Can it be trusted?
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
