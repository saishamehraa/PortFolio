import { motion } from 'motion/react';
import { ShieldAlert, Network, Eye, Accessibility } from 'lucide-react';

export function CoreFocus() {
  const areas = [
    {
      title: "AI Security Systems",
      icon: <ShieldAlert className="w-8 h-8 text-[#5CF0FF]" />,
      projects: ["PromptShield", "SIFTGuardian", "ConsentGuardian-AI"],
      bg: "from-[#5CF0FF]/10 to-transparent",
      border: "border-[#5CF0FF]/30"
    },
    {
      title: "Multi-Agent Orchestration",
      icon: <Network className="w-8 h-8 text-[#4DA6FF]" />,
      projects: ["SecRitual", "CyberMesh"],
      bg: "from-[#4DA6FF]/10 to-transparent",
      border: "border-[#4DA6FF]/30"
    },
    {
      title: "Cognitive Transparency",
      icon: <Eye className="w-8 h-8 text-[#A68CFF]" />,
      projects: ["OpenMind-Nexus"],
      bg: "from-[#A68CFF]/10 to-transparent",
      border: "border-[#A68CFF]/30"
    },
    {
      title: "AI Accessibility",
      icon: <Accessibility className="w-8 h-8 text-[#F0F4FF]" />,
      projects: ["NeuroAccess"],
      bg: "from-[#F0F4FF]/10 to-transparent",
      border: "border-[#F0F4FF]/30"
    }
  ];

  return (
    <section id="focus" className="relative py-16 sm:py-20 lg:py-32 bg-[#05060D]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-[#4DA6FF] to-[#5CF0FF] bg-clip-text text-transparent px-4 inline-block drop-shadow-[0_0_10px_rgba(92,240,255,0.3)]">
            Core Focus Areas
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#4DA6FF] to-[#5CF0FF] mx-auto mt-4 rounded-full opacity-50" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              className={`relative bg-gradient-to-b ${area.bg} p-6 sm:p-8 rounded-2xl border ${area.border} backdrop-blur-sm group hover:-translate-y-2 transition-transform duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-[#0B0D1A] -z-10 rounded-2xl opacity-80" />
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h3 className="text-[#F0F4FF] text-xl font-orbitron text-center mb-4">{area.title}</h3>
              <ul className="space-y-2">
                {area.projects.map((project, idx) => (
                  <li key={idx} className="text-[#F0F4FF]/70 text-sm sm:text-base text-center bg-[#05060D]/50 py-1.5 rounded-md border border-white/5">
                    {project}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
