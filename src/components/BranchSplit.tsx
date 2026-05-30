import { motion } from 'motion/react';
import { GitBranch } from 'lucide-react';

export function BranchSplit() {
  return (
    <section id="branch-split" className="relative min-h-[80vh] flex items-center justify-center bg-[#050505] py-32 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center gap-16"
        >
          <div className="p-6 rounded-full border border-white/10 bg-white/5">
            <GitBranch className="w-12 h-12 text-[#F0F4FF]/50" />
          </div>

          <h2 className="font-orbitron text-4xl sm:text-5xl md:text-6xl text-[#F0F4FF] tracking-wide font-light leading-tight">
            The Architecture Diverges.
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12 md:gap-32 w-full justify-center mt-12">
            <div className="text-center space-y-4">
              <h3 className="font-orbitron text-xl text-[#A68CFF] uppercase tracking-widest">Operational Track</h3>
              <p className="text-[#F0F4FF]/50 font-light">Infrastructure Security & Response</p>
            </div>
            
            <div className="hidden md:block w-px h-24 bg-gradient-to-b from-white/20 to-transparent" />
            
            <div className="text-center space-y-4">
              <h3 className="font-orbitron text-xl text-[#F0F4FF] uppercase tracking-widest">Cognitive Track</h3>
              <p className="text-[#F0F4FF]/50 font-light">Human Perception & Trust Formation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
