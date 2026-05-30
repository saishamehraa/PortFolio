import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export function SecurityIntelligence() {
  return (
    <section id="security-intelligence" className="relative min-h-screen flex items-center justify-center bg-[#050505] py-32 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            <h2 className="font-orbitron text-4xl sm:text-5xl md:text-6xl text-[#F0F4FF] tracking-wide font-light leading-tight">
              Defend the<br />Execution Pathway
            </h2>
            <p className="text-xl sm:text-2xl text-[#F0F4FF]/50 font-light max-w-xl leading-relaxed">
              Orchestrating threat reasoning and dynamic response across interconnected infrastructure.
            </p>
            <div className="flex flex-col gap-6 pt-8">
              <a href="https://secritual-ai.onrender.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#5CF0FF] hover:text-white transition-colors duration-300 font-orbitron tracking-widest uppercase text-sm">
                Explore SecRitual <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://cybermesh-ai.onrender.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#A68CFF] hover:text-white transition-colors duration-300 font-orbitron tracking-widest uppercase text-sm">
                Explore CyberMesh <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-[600px] w-full bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Interactive Node Map Simulation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-sm max-h-sm">
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-[#5CF0FF]/30 flex items-center justify-center bg-[#5CF0FF]/5 backdrop-blur-md"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="font-orbitron text-[#5CF0FF] tracking-widest text-xs uppercase">SecRitual</span>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full border border-[#A68CFF]/30 flex items-center justify-center bg-[#A68CFF]/5 backdrop-blur-md"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <span className="font-orbitron text-[#A68CFF] tracking-widest text-xs uppercase">CyberMesh</span>
                </motion.div>

                {/* Connecting Signal */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <motion.path 
                    d="M 30% 35% L 70% 65%" 
                    stroke="#F0F4FF" 
                    strokeWidth="1" 
                    strokeDasharray="4 4" 
                    strokeOpacity={0.2} 
                    fill="none" 
                  />
                  <motion.circle 
                    r="3" 
                    fill="#F0F4FF" 
                    animate={{ cx: ["30%", "70%"], cy: ["35%", "65%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
