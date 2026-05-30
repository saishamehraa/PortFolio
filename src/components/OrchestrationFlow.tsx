import { motion } from 'motion/react';
import { Database, Shield, Activity, Cpu } from 'lucide-react';

export function OrchestrationFlow() {
  const inputLayers = [
    { id: 'promptshield', name: "PromptShield", icon: <Shield className="w-5 h-5 text-[#5CF0FF]" /> },
    { id: 'siftguardian', name: "SIFTGuardian", icon: <Activity className="w-5 h-5 text-[#4DA6FF]" /> },
    { id: 'consentguardian', name: "Consent", icon: <Database className="w-5 h-5 text-[#A68CFF]" /> },
    { id: 'codesage', name: "CodeSage", icon: <Cpu className="w-5 h-5 text-[#F0F4FF]" /> },
  ];

  return (
    <section id="orchestration" className="relative min-h-screen py-32 bg-[#050505] flex items-center justify-center border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-32"
        >
          <h2 className="font-orbitron text-4xl sm:text-5xl md:text-6xl text-[#F0F4FF] tracking-wide font-light">
            Trust Becomes Architecture.
          </h2>
        </motion.div>

        <div className="flex flex-col items-center justify-center relative w-full max-w-4xl mx-auto mt-20">
          
          <div className="grid grid-cols-4 gap-4 w-full">
            {inputLayers.map((node, i) => (
              <motion.div 
                key={node.id} 
                className="flex flex-col items-center z-10 relative"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="mb-3 p-4 bg-[#0A0A0A] rounded-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                  {node.icon}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex w-full justify-center h-32 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 w-3/4 h-1/2 border-b border-l border-r rounded-b-xl border-[#5CF0FF]/20"
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: '50%', opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-100px" }}
            />
            <motion.div 
              className="absolute bottom-0 h-1/2 border-l border-[#5CF0FF]/30"
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: '50%', opacity: 1 }}
              transition={{ duration: 1.0, delay: 1.4, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-100px" }}
            />
            <motion.div 
              className="absolute w-1.5 h-6 bg-[#5CF0FF] shadow-[0_0_15px_#5CF0FF] rounded-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ top: ['0%', '100%'] }}
              transition={{ opacity: { duration: 1, delay: 2.5 }, top: { duration: 3, repeat: Infinity, ease: "linear" } }}
              viewport={{ once: true, margin: "-100px" }}
            />
          </div>

          <motion.div 
            className="w-full max-w-lg p-8 bg-[#0A0A0A] border border-[#5CF0FF]/20 rounded-2xl text-center z-10 shadow-[0_0_50px_rgba(92,240,255,0.05)]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 2.0, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="font-orbitron text-4xl tracking-widest text-[#F0F4FF] mb-4">SecRitual</h3>
            <p className="text-[#5CF0FF]/70 text-sm uppercase tracking-[0.3em] font-semibold">Reasoning</p>
          </motion.div>

          <div className="flex w-full justify-center h-24 relative overflow-hidden">
            <motion.div 
              className="h-full border-l border-[#A68CFF]/30"
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: '100%', opacity: 1 }}
              transition={{ duration: 1.0, delay: 2.8, ease: "easeInOut" }}
              viewport={{ once: true, margin: "-100px" }}
            />
            <motion.div 
              className="absolute w-1.5 h-6 bg-[#A68CFF] shadow-[0_0_15px_#A68CFF] rounded-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ top: ['0%', '100%'] }}
              transition={{ opacity: { duration: 1, delay: 3.5 }, top: { duration: 3, repeat: Infinity, ease: "linear" } }}
              viewport={{ once: true, margin: "-100px" }}
            />
          </div>

          <motion.div 
            className="w-full max-w-2xl p-10 bg-[#0A0A0A] border border-[#A68CFF]/20 rounded-2xl text-center z-10 shadow-[0_0_50px_rgba(166,140,255,0.05)]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 3.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="font-orbitron text-5xl tracking-widest text-[#F0F4FF] mb-4">CyberMesh</h3>
            <p className="text-[#A68CFF]/70 text-sm uppercase tracking-[0.3em] font-semibold">Orchestration</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
