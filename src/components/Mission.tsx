import { motion } from 'motion/react';
import { Shield, Network, Eye } from 'lucide-react';

export function Mission() {
  const pillars = [
    { title: "Security", icon: <Shield className="w-5 h-5 text-[#5CF0FF]" /> },
    { title: "Trust", icon: <Network className="w-5 h-5 text-[#4DA6FF]" /> },
    { title: "Transparency", icon: <Eye className="w-5 h-5 text-[#A68CFF]" /> }
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-[#050505] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-[#F0F4FF]/90 font-light leading-relaxed mb-12 max-w-4xl mx-auto tracking-wide">
            "Building AI-powered systems that <span className="text-[#5CF0FF] font-medium">secure</span> intelligent workflows, <span className="text-[#4DA6FF] font-medium">orchestrate</span> trust, and improve <span className="text-[#A68CFF] font-medium">transparency</span> across both digital infrastructure and information ecosystems."
          </p>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 + (idx * 0.1) }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex items-center gap-4 px-8 py-3 rounded-full border border-white/5 bg-[#050505] shadow-[0_0_20px_rgba(0,0,0,0.8)]"
              >
                {pillar.icon}
                <span className="font-orbitron tracking-widest text-sm uppercase text-[#F0F4FF]/70">{pillar.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
