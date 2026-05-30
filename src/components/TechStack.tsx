import { motion } from 'motion/react';
import { Cpu, Shield, LayoutTemplate, Database } from 'lucide-react';

export function TechStack() {
  const stackCategories = [
    {
      title: "AI & Reasoning",
      icon: <Cpu className="w-6 h-6 text-[#A68CFF]" />,
      tech: ["OpenRouter", "Gemini", "Foundry IQ", "Ollama"],
      color: "hover:border-[#A68CFF]/40 hover:shadow-[0_0_30px_rgba(166,140,255,0.05)]"
    },
    {
      title: "Security",
      icon: <Shield className="w-6 h-6 text-[#5CF0FF]" />,
      tech: ["Threat Intelligence", "Prompt Security", "DevSecOps", "Governance"],
      color: "hover:border-[#5CF0FF]/40 hover:shadow-[0_0_30px_rgba(92,240,255,0.05)]"
    },
    {
      title: "Frontend",
      icon: <LayoutTemplate className="w-6 h-6 text-[#F0F4FF]" />,
      tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      color: "hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
    },
    {
      title: "Infrastructure",
      icon: <Database className="w-6 h-6 text-[#4DA6FF]" />,
      tech: ["Node.js", "Express", "Supabase", "MongoDB"],
      color: "hover:border-[#4DA6FF]/40 hover:shadow-[0_0_30px_rgba(77,166,255,0.05)]"
    }
  ];

  return (
    <section id="stack" className="relative py-24 sm:py-32 lg:py-40 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-[#4DA6FF] to-[#5CF0FF] bg-clip-text text-transparent px-4 inline-block tracking-wide">
            Technology Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stackCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              className={`bg-[#050505] border border-white/5 rounded-xl p-8 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.8)] ${cat.color} group`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/5 rounded-lg border border-transparent group-hover:border-white/10 transition-colors duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-orbitron text-[#F0F4FF] tracking-wide">{cat.title}</h3>
              </div>
              
              <ul className="space-y-4">
                {cat.tech.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#F0F4FF]/60 font-light">
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors duration-300" />
                    {item}
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